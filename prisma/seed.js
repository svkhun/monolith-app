const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("INITIALIZING MONOLITH SEED PROCESS...");

  // 1. Create or upsert demo user
  const passwordHash = await bcrypt.hash("demo1234", 10);
  const user = await prisma.user.upsert({
    where: { email: "demo@monolith.local" },
    update: {},
    create: {
      name: "Demo Principal Engineer",
      email: "demo@monolith.local",
      passwordHash,
      themePreference: "dark",
    },
  });

  console.log(`Demo user ready: ${user.email} (${user.id})`);

  // 2. Clear existing sample data for idempotency
  await prisma.pomodoroSession.deleteMany({ where: { userId: user.id } });
  await prisma.quickNote.deleteMany({});
  await prisma.studyChapter.deleteMany({});
  await prisma.examSubject.deleteMany({ where: { userId: user.id } });
  await prisma.task.deleteMany({ where: { userId: user.id } });

  // 3. Create Tasks
  const tasksData = [
    {
      userId: user.id,
      title: "Implement Distributed Consensus Protocol (Raft)",
      description: "Write state machine replication, leader election, and log compaction routines.",
      priority: "URGENT",
      status: "IN_PROGRESS",
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
      tags: ["distributed-systems", "core", "golang"],
      orderIndex: 0,
    },
    {
      userId: user.id,
      title: "Database Index Tuning & Query Optimization",
      description: "Add composite B-Tree indexes for user query predicates and evaluate EXPLAIN ANALYZE.",
      priority: "HIGH",
      status: "TODO",
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 48),
      tags: ["database", "postgres", "perf"],
      orderIndex: 1,
    },
    {
      userId: user.id,
      title: "Setup CI/CD Pipeline & Automated Smoke Tests",
      description: "Create GitHub Actions workflow with matrix testing and container image tagging.",
      priority: "MEDIUM",
      status: "DONE",
      dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
      tags: ["devops", "ci-cd"],
      orderIndex: 2,
    },
    {
      userId: user.id,
      title: "Audit Security Tokens & CSRF Protection",
      description: "Validate SameSite cookies, JWT signature verification and rate limiter middlewares.",
      priority: "URGENT",
      status: "TODO",
      dueDate: new Date(),
      tags: ["security", "auth"],
      orderIndex: 3,
    },
  ];

  for (const t of tasksData) {
    await prisma.task.create({ data: t });
  }
  console.log(`Created ${tasksData.length} tasks`);

  // 4. Create Exam Subjects & Chapters
  const osSubject = await prisma.examSubject.create({
    data: {
      userId: user.id,
      code: "CS301",
      name: "Advanced Operating Systems & Kernel Internals",
      examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 60 * 4),
      roomLocation: "ENG-B304",
      targetGrade: "A",
      chapters: {
        create: [
          {
            title: "Virtual Memory Management & Page Replacement Algorithms",
            isCompleted: true,
            estimatedHours: 2.5,
            orderIndex: 0,
          },
          {
            title: "Process Scheduling, Context Switches & IPC Mechanisms",
            isCompleted: true,
            estimatedHours: 2.0,
            orderIndex: 1,
          },
          {
            title: "File Systems, Inodes, Journaling & Crash Recovery",
            isCompleted: false,
            estimatedHours: 3.5,
            orderIndex: 2,
          },
          {
            title: "Device Drivers, Interrupt Handling & DMA Channels",
            isCompleted: false,
            estimatedHours: 3.0,
            orderIndex: 3,
          },
        ],
      },
      notes: {
        create: [
          {
            title: "Virtual Memory TLB Hit / Miss Formula",
            content: "EAT = Hit_Ratio * (TLB_access + Memory_access) + (1 - Hit_Ratio) * (TLB_access + 2 * Memory_access)",
            isPinned: true,
          },
        ],
      },
    },
  });

  const mathSubject = await prisma.examSubject.create({
    data: {
      userId: user.id,
      code: "MATH204",
      name: "Linear Algebra & Numerical Matrix Computation",
      examDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7 + 1000 * 60 * 60 * 2),
      roomLocation: "MATH-H101",
      targetGrade: "A",
      chapters: {
        create: [
          {
            title: "Eigenvalues, Eigenvectors & Diagonalization",
            isCompleted: true,
            estimatedHours: 2.0,
            orderIndex: 0,
          },
          {
            title: "Singular Value Decomposition (SVD) & Principal Component Analysis",
            isCompleted: false,
            estimatedHours: 4.0,
            orderIndex: 1,
          },
          {
            title: "Gram-Schmidt Orthogonalization & QR Decomposition",
            isCompleted: false,
            estimatedHours: 2.5,
            orderIndex: 2,
          },
        ],
      },
      notes: {
        create: [
          {
            title: "Singular Value Decomposition (SVD)",
            content: "A = U * Sigma * V^T\n- U contains eigenvectors of A * A^T\n- V contains eigenvectors of A^T * A\n- Sigma contains singular values (sqrt of eigenvalues)",
            isPinned: true,
          },
        ],
      },
    },
  });

  // 5. Create Pomodoro Sessions
  await prisma.pomodoroSession.create({
    data: {
      userId: user.id,
      examSubjectId: osSubject.id,
      durationMinutes: 25,
      completedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
  });

  await prisma.pomodoroSession.create({
    data: {
      userId: user.id,
      examSubjectId: mathSubject.id,
      durationMinutes: 25,
      completedAt: new Date(Date.now() - 1000 * 60 * 30),
    },
  });

  console.log("MONOLITH DATABASE SEEDED SUCCESSFULLY.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

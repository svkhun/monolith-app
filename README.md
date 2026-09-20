# MONOLITH APP // WORK & UNIVERSITY EXAM HUB

A high-density, brutalist full stack web application engineered for simultaneous professional work management and university examination preparation. Built with Next.js App Router, React 19, TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL.

---

## 1. ARCHITECTURAL OVERVIEW

Monolith App integrates two operational domains within a unified, high-performance interface:
- **Work Domain**: Engineering project management featuring dual Kanban/List view modes, priority scheduling, deadline monitoring, and real-time query filtering.
- **Study & Exam Domain**: Academic preparation console featuring real-time countdown clocks, dynamic syllabus checklist and readiness meter, integrated focus Pomodoro timer, and an exam cheat-sheet/formula board.

```
+-------------------------------------------------------------------------------+
|                       MONOLITH CORE SYSTEM ARCHITECTURE                       |
+-------------------------------------------------------------------------------+
| PRESENTATION LAYER (Next.js 15 / React 19 / Tailwind CSS)                     |
| - 0px Zero-Radius Constraint (rounded-none on all components)                 |
| - High-density Brutalist Palette (#0A0A0A dark / #FFFFFF light)               |
| - JetBrains Mono for chronometric & numeric data                              |
| - Strict SVG Iconography (Lucide React)                                       |
+-------------------------------------------------------------------------------+
| STATE & CLIENT CONTROLLERS                                                    |
| - ThemeProvider (Syncs DB preference & localStorage)                          |
| - Dynamic Domain Switcher (Work Mode <-> Exam Hub Mode)                       |
| - Optimistic State Transitions for Tasks & Chapters                           |
+-------------------------------------------------------------------------------+
| SERVER LAYER (Next.js App Router / Server Actions & Route Handlers)           |
| - Task Server Actions (CRUD, Status Stepper, Tag Filtering)                   |
| - Study Server Actions (Subjects, Chapters, Completion Percentages)           |
| - Formula / Note Actions (Pinned Cheatsheets)                                 |
| - Pomodoro REST API (/api/pomodoro)                                           |
| - NextAuth Session Security & Password Hashing (bcrypt)                       |
| - Strict Schema Validation with Zod                                           |
+-------------------------------------------------------------------------------+
| PERSISTENCE LAYER (Prisma ORM & PostgreSQL)                                   |
| - Relational Entities: User, Task, ExamSubject, StudyChapter,                 |
|   PomodoroSession, QuickNote                                                  |
| - Cascade Deletions, Multi-column Indexes & Relational Enums                  |
+-------------------------------------------------------------------------------+
```

---

## 2. DESIGN SYSTEM SPECIFICATIONS

The application strictly adheres to brutalist design principles:
- **Rectangular Form Factor Only**: Every component (Cards, Buttons, Badges, Modals, Inputs, Progress Bars, Dropdowns) enforces `border-radius: 0px` (`rounded-none`). No curved geometry is permitted.
- **Crisp Structural Borders**: 1px solid borders demarcate all interactive elements (`#262626` in Dark Mode, `#E5E5E5` in Light Mode).
- **Theming Architecture**:
  - Dark Mode: OLED Black (`#0A0A0A`), Elevated Surface (`#141414`), Border (`#262626`).
  - Light Mode: Pure White (`#FFFFFF`), Off-White (`#F5F5F5`), Border (`#E5E5E5`).
  - Synced to `localStorage` and persisted to the `User.themePreference` column in the database.
- **Zero Emojis**: The user interface and documentation avoid emojis. All visual cues utilize geometric SVG icons from Lucide React.
- **Typography**: Inter for editorial layout and JetBrains Mono for numerical data and real-time countdown meters.

---

## 3. DATA SCHEMA (PRISMA ORM)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}

model User {
  id               String            @id @default(cuid())
  name             String?
  email            String            @unique
  passwordHash     String
  themePreference  String            @default("dark")
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt

  tasks            Task[]
  examSubjects     ExamSubject[]
  pomodoroSessions PomodoroSession[]

  @@map("users")
}

model Task {
  id          String     @id @default(cuid())
  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  title       String
  description String?    @db.Text
  priority    Priority   @default(MEDIUM)
  status      TaskStatus @default(TODO)
  dueDate     DateTime?
  tags        String[]
  orderIndex  Int        @default(0)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  @@index([userId])
  @@index([status])
  @@index([dueDate])
  @@map("tasks")
}

model ExamSubject {
  id               String            @id @default(cuid())
  userId           String
  user             User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  code             String
  name             String
  examDate         DateTime
  roomLocation     String?
  targetGrade      String?
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt

  chapters         StudyChapter[]
  pomodoroSessions PomodoroSession[]
  notes            QuickNote[]

  @@index([userId])
  @@index([examDate])
  @@map("exam_subjects")
}

model StudyChapter {
  id             String      @id @default(cuid())
  examSubjectId  String
  examSubject    ExamSubject @relation(fields: [examSubjectId], references: [id], onDelete: Cascade)
  title          String
  isCompleted    Boolean     @default(false)
  estimatedHours Float       @default(1.0)
  orderIndex     Int         @default(0)
  createdAt      DateTime    @default(now())
  updatedAt      DateTime    @updatedAt

  @@index([examSubjectId])
  @@map("study_chapters")
}

model PomodoroSession {
  id              String       @id @default(cuid())
  userId          String
  user            User         @relation(fields: [userId], references: [id], onDelete: Cascade)
  examSubjectId   String?
  examSubject     ExamSubject? @relation(fields: [examSubjectId], references: [id], onDelete: SetNull)
  durationMinutes Int          @default(25)
  completedAt     DateTime     @default(now())

  @@index([userId])
  @@index([examSubjectId])
  @@map("pomodoro_sessions")
}

model QuickNote {
  id            String       @id @default(cuid())
  examSubjectId String?
  examSubject   ExamSubject? @relation(fields: [examSubjectId], references: [id], onDelete: Cascade)
  title         String
  content       String       @db.Text
  isPinned      Boolean      @default(false)
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt

  @@index([examSubjectId])
  @@index([isPinned])
  @@map("quick_notes")
}
```

---

## 4. DIRECTORY LAYOUT

```
monolith-app/
├── prisma/
│   ├── schema.prisma              # Database schema definition
│   └── seed.js                    # Database seeder script
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/route.ts  # NextAuth session handler
│   │   │   ├── auth/register/route.ts       # User registration endpoint
│   │   │   ├── pomodoro/route.ts            # Pomodoro session logger API
│   │   │   └── user/theme/route.ts          # Theme preference synchronization
│   │   ├── (auth)/
│   │   │   ├── login/page.tsx     # Brutalist login screen
│   │   │   └── register/page.tsx  # Brutalist registration screen
│   │   ├── work/page.tsx          # Work Management (Kanban, List, Filters)
│   │   ├── study/page.tsx         # Exam Hub (Countdowns, Syllabus, Pomodoro, Notes)
│   │   ├── globals.css            # 0px radius reset & brutalist theme variables
│   │   ├── layout.tsx             # Root layout with font definitions
│   │   └── page.tsx               # Mission control home page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Mode switcher, brand mark, auth indicator
│   │   │   ├── Providers.tsx      # NextAuth & ThemeProvider wrapper
│   │   │   ├── ThemeProvider.tsx  # Context provider for Dark/Light state
│   │   │   └── ThemeToggle.tsx    # Monolith light/dark switcher button
│   │   ├── study/
│   │   │   ├── ExamCountdownCard.tsx # Chronometric real-time counter
│   │   │   ├── PomodoroTimer.tsx     # 25/5/15 focus timer with DB log
│   │   │   ├── QuickNotesBoard.tsx   # Formula cheat-sheet with pin feature
│   │   │   ├── SubjectModal.tsx      # Register exam subject dialog
│   │   │   └── SyllabusTracker.tsx   # Chapter checklist & readiness progress
│   │   ├── ui/
│   │   │   ├── Badge.tsx          # Status & priority badges
│   │   │   ├── Button.tsx         # 0px radius brutalist button
│   │   │   ├── Card.tsx           # Rectangular container
│   │   │   ├── Input.tsx          # Sharp input component
│   │   │   ├── Modal.tsx          # Accessible modal dialog
│   │   │   ├── ProgressBar.tsx    # Linear 1px bordered progress indicator
│   │   │   ├── Select.tsx         # Styled HTML select
│   │   │   ├── Tabs.tsx           # Tab strip switcher
│   │   │   └── Textarea.tsx       # Sharp textarea component
│   │   └── work/
│   │       ├── TaskCard.tsx       # Work item card with priority & due warning
│   │       ├── TaskFilters.tsx    # Search, priority filter & view switcher
│   │       ├── TaskKanban.tsx     # Multi-column status board
│   │       ├── TaskListView.tsx   # High-density compact tabular view
│   │       └── TaskModal.tsx      # Create/Edit task modal
│   ├── lib/
│   │   ├── actions/
│   │   │   ├── note-actions.ts    # Server Actions for Quick Notes
│   │   │   ├── study-actions.ts   # Server Actions for Exam Subjects & Chapters
│   │   │   └── task-actions.ts    # Server Actions for Work Tasks
│   │   ├── auth.ts                # NextAuth configuration
│   │   ├── db.ts                  # Singleton Prisma Client
│   │   ├── utils.ts               # Utility functions (cn, formatters)
│   │   └── validations.ts         # Zod schemas for runtime validation
│   └── types/
│       └── index.ts               # Shared TypeScript types
├── .env.example
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. GETTING STARTED & SETUP

### Prerequisites
- Node.js >= 18.18.0 (Node 20+ recommended)
- PostgreSQL database instance (or local Docker container)
- Git

### Installation Steps

1. **Clone or Initialize Repository**:
```bash
git clone https://github.com/svkhun/monolith-app.git
cd monolith-app
```
*(Or if initializing locally)*:
```bash
git init
git remote add origin https://github.com/svkhun/monolith-app.git
git branch -M main
```

2. **Install Dependencies**:
```bash
npm install
```

3. **Configure Environment Variables**:
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Update `DATABASE_URL` with your PostgreSQL connection string:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/monolith_db?schema=public"
NEXTAUTH_SECRET="monolith-ultra-secure-secret-key-replace-in-production"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Synchronize Database Schema**:
```bash
npx prisma db push
# or run migrations:
# npx prisma migrate dev --name init
```

5. **Generate Prisma Client**:
```bash
npx prisma generate
```

6. **Seed Initial Dataset (Optional)**:
Populates initial sample engineering tasks, exam subjects (CS301, MATH204, CS421), chapters, and cheat-sheet formulas:
```bash
npm run db:seed
```

7. **Run Development Server**:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. DEFAULT CREDENTIALS (DEMO ACCESS)

When testing locally without manual registration:
- **Email**: `demo@monolith.local`
- **Password**: `demo1234`
- *(Alternatively, click "Instant Demo Access (One-Click)" on the login screen).*

---

## 7. PRODUCTION BUILD & VERIFICATION

Compile and verify production builds:
```bash
npm run build
npm run start
```

---

## 8. GIT REMOTE SYNCHRONIZATION

To stage, commit, and push all codebase assets to the remote repository:
```bash
git add .
git commit -m "feat: complete monolith full stack work management and exam hub architecture"
git push -u origin main
```

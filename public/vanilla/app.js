/**
 * MONOLITH VANILLA ENGINE (ES6)
 * Full Stack Local-First Architecture
 * Zero Build // 0ms Page Navigation // LocalStorage Persistence
 */

// ==========================================================================
// 1. BILINGUAL DICTIONARY (English Primary & Thai)
// ==========================================================================
const I18N = {
  en: {
    brand_sub: "ARCHITECTURAL WORKSPACE",
    nav_work: "WORK",
    nav_study: "EXAM HUB",
    nav_tutorial: "DEMO",
    nav_signin: "OPERATOR",
    home_brand_sub: "ARCHITECTURAL WORKSPACE // WORK & EXAM HUB",
    home_quote_1: "STOP ORGANIZING.",
    home_quote_2: "START EXECUTING.",
    home_cta_open: "OPEN WORKSPACE",
    home_cta_demo: "EXPLORE DEMO",
    home_sec1_tag: "MODULE I: WORKFLOW",
    home_sec1_title: "WORK MANAGEMENT",
    home_sec1_btn: "LAUNCH KANBAN",
    home_sec1_c1_title: "4-STAGE KANBAN",
    home_sec1_c1_desc: "Visual workflow pipeline with strictly 0px sharp rectilinear cards.",
    home_sec1_c2_title: "DEADLINE SPRINT",
    home_sec1_c2_desc: "High-density overdue indicators and priority urgency tags.",
    home_sec1_c3_title: "ZERO LATENCY",
    home_sec1_c3_desc: "Local-first caching architecture with 0ms instantaneous state synchronization.",
    home_sec2_tag: "MODULE II: ACADEMIA",
    home_sec2_title: "UNIVERSITY EXAM HUB",
    home_sec2_btn: "ENTER EXAM HUB",
    home_sec2_c1_title: "EXAM COUNTDOWN",
    home_sec2_c1_desc: "Precision day and hour countdown timers for semester exams.",
    home_sec2_c2_title: "SYLLABUS CHECKLIST",
    home_sec2_c2_desc: "Track subject topics with real-time percentage progress indicators.",
    home_sec2_c3_title: "POMODORO FOCUS",
    home_sec2_c3_desc: "25-minute deliberate work sprints with synthetic acoustic alerts.",
    home_sec2_c4_title: "QUICK NOTES",
    home_sec2_c4_desc: "Pinned reference scratchpad with sharp earth-tone contrast.",
    home_sec3_tag: "EXECUTION PIPELINE",
    home_sec3_title: "THREE-PHASE ARCHITECTURAL FLOW",
    home_sec3_s1_title: "STRUCTURE OBJECTIVES",
    home_sec3_s1_desc: "Capture coursework assignments and project deliverables into sharp cards.",
    home_sec3_s2_title: "SYSTEMATIC STUDY",
    home_sec3_s2_desc: "Run timed Pomodoro sprints and check off syllabus topics steadily.",
    home_sec3_s3_title: "COMMAND THE SEMESTER",
    home_sec3_s3_desc: "Attain high-precision clarity and complete every exam with zero panic.",
    work_title: "WORK MANAGEMENT",
    work_subtitle: "RECTILINEAR KANBAN & SPRINT TASK ENGINE",
    work_btn_new: "+ CREATE TASK",
    study_title: "UNIVERSITY EXAM HUB",
    study_subtitle: "COUNTDOWNS, SYLLABUS CHECKLISTS & POMODORO TIMER",
    study_btn_new: "+ ADD SUBJECT",
    demo_title: "INTERACTIVE DEMO SANDBOX",
    demo_subtitle: "EXPERIENCE THE FULL MONOLITH WORKSPACE WITH SIMULATION DATA",
    status_todo: "TODO",
    status_in_progress: "IN PROGRESS",
    status_review: "REVIEW",
    status_done: "DONE",
  },
  th: {
    brand_sub: "ระบบจัดการงานและเตรียมสอบ",
    nav_work: "การทำงาน",
    nav_study: "เตรียมสอบ",
    nav_tutorial: "หน้าตัวอย่าง",
    nav_signin: "เข้าใช้งาน",
    home_brand_sub: "พื้นที่บริหารจัดการงาน & เตรียมตัวสอบระดับมหาวิทยาลัย",
    home_quote_1: "หยุดจัดระเบียบไม่รู้จบ.",
    home_quote_2: "เริ่มต้นลงมือทำจริง.",
    home_cta_open: "เข้าสู่พื้นที่ทำงาน",
    home_cta_demo: "ดูหน้าตัวอย่างระบบ",
    home_sec1_tag: "ส่วนที่ 1: ระบบงาน",
    home_sec1_title: "การจัดการงานและโครงงาน",
    home_sec1_btn: "เปิดกระดานคานบัน",
    home_sec1_c1_title: "คานบัน 4 สถานะ",
    home_sec1_c1_desc: "โฟลว์การทำงานสไตล์คมชัด 90 องศา พร้อมลากวางเพื่อย้ายสถานะ",
    home_sec1_c2_title: "ระบบเตือนกำหนดส่ง",
    home_sec1_c2_desc: "คัดกรองงานที่เลยกำหนดและงานที่ต้องส่งวันนี้ด้วยเฉดสีคมชัด",
    home_sec1_c3_title: "เร็วสูงสุด 0MS",
    home_sec1_c3_desc: "ทำงานบนเบราว์เซอร์โดยตรง สลับหน้าได้ทันทีไม่มีจังหวะค้าง",
    home_sec2_tag: "ส่วนที่ 2: การเรียน",
    home_sec2_title: "ศูนย์เตรียมสอบระดับมหาวิทยาลัย",
    home_sec2_btn: "เข้าสู่ศูนย์เตรียมสอบ",
    home_sec2_c1_title: "นับถอยหลังวันสอบ",
    home_sec2_c1_desc: "บอกจำนวนวันและชั่วโมงที่เหลือก่อนเข้าห้องสอบแต่ละวิชา",
    home_sec2_c2_title: "เช็คลิสต์เนื้อหา",
    home_sec2_c2_desc: "ติ๊กหัวข้อที่อ่านจบ พร้อมคำนวณเปอร์เซ็นต์ความพร้อมแบบเรียลไทม์",
    home_sec2_c3_title: "นาฬิกาโพโมโดโร",
    home_sec2_c3_desc: "จับเวลาโฟกัส 25 นาที พร้อมเสียงแจ้งเตือนสังเคราะห์เมื่อครบเวลา",
    home_sec2_c4_title: "สมุดโน้ตด่วน",
    home_sec2_c4_desc: "จดสูตรและสาระสำคัญ ปักหมุดไว้ทบทวนได้ตลอดเวลา",
    home_sec3_tag: "ขั้นตอนการใช้งาน",
    home_sec3_title: "วงจรการทำงาน 3 ขั้นตอน",
    home_sec3_s1_title: "วางแผนงาน",
    home_sec3_s1_desc: "สร้างการ์ดงานและวิชาสอบ กำหนดวันส่งและความสำคัญ",
    home_sec3_s2_title: "อ่านและลุยอย่างเป็นระบบ",
    home_sec3_s2_desc: "เปิด Pomodoro จับเวลาอ่านทีละบท ติ๊กหัวข้อที่เข้าใจแล้ว",
    home_sec3_s3_title: "พิชิตทุกเป้าหมาย",
    home_sec3_s3_desc: "เตรียมตัวอย่างมั่นใจ ส่งงานครบ อ่านสอบทัน ไร้ความกังวล",
    work_title: "การจัดการงาน",
    work_subtitle: "กระดานคานบันและการบริหารงานส่งตามลำดับความสำคัญ",
    work_btn_new: "+ สร้างงานใหม่",
    study_title: "ศูนย์เตรียมสอบมหาวิทยาลัย",
    study_subtitle: "นับถอยหลังวันสอบ เช็คลิสต์เนื้อหา และนาฬิกาโฟกัส",
    study_btn_new: "+ เพิ่มวิชาสอบ",
    demo_title: "หน้าตัวอย่างและทดลองใช้งาน",
    demo_subtitle: "ทดสอบฟังก์ชันทั้งหมดด้วยข้อมูลจำลองโดยไม่กระทบข้อมูลจริง",
    status_todo: "รอทำ",
    status_in_progress: "กำลังทำ",
    status_review: "ตรวจทาน",
    status_done: "เสร็จสิ้น",
  }
};

let currentLang = localStorage.getItem("monolith_lang") || "en";

function t(key) {
  return I18N[currentLang]?.[key] || I18N["en"]?.[key] || key;
}

function updateDOMTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = t(key);
    }
  });
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.textContent = currentLang === "en" ? "[ EN | TH ]" : "[ TH | EN ]";
  }
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "th" : "en";
  localStorage.setItem("monolith_lang", currentLang);
  updateDOMTranslations();
  renderWorkView();
  renderStudyView();
}

// ==========================================================================
// 2. THEME ENGINE (Light & Dark Earth-Tone)
// ==========================================================================
let currentTheme = localStorage.getItem("monolith_theme") || "dark";

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("monolith_theme", theme);
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.textContent = theme === "dark" ? "LIGHT" : "DARK";
  }
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

// ==========================================================================
// 3. SYNTHETIC ACOUSTIC ENGINE (Web Audio API Chime)
// ==========================================================================
class SoundEngine {
  static playChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio fallback
    }
  }
}

// ==========================================================================
// 4. ROUTER ENGINE (0ms Instant View Switching & Progress Bar)
// ==========================================================================
class Router {
  static init() {
    window.addEventListener("hashchange", () => Router.handleRoute());
    Router.handleRoute();
  }

  static navigate(viewId) {
    window.location.hash = `#${viewId}`;
  }

  static handleRoute() {
    const hash = window.location.hash.replace("#", "") || "home";
    const validViews = ["home", "work", "study", "demo"];
    const targetView = validViews.includes(hash) ? hash : "home";

    // Trigger top progress line
    const pBar = document.getElementById("nav-progress-bar");
    if (pBar) {
      pBar.style.width = "40%";
      pBar.style.opacity = "1";
      setTimeout(() => (pBar.style.width = "100%"), 80);
      setTimeout(() => {
        pBar.style.opacity = "0";
        setTimeout(() => (pBar.style.width = "0%"), 200);
      }, 250);
    }

    // Switch panels
    document.querySelectorAll(".view-panel").forEach((panel) => {
      panel.classList.remove("active");
      panel.classList.remove("animate-arch-in");
    });

    const activePanel = document.getElementById(`view-${targetView}`);
    if (activePanel) {
      activePanel.classList.add("active");
      // Force CSS reflow to replay entrance animation consistently
      void activePanel.offsetWidth;
      activePanel.classList.add("animate-arch-in");
    }

    // Update active nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      const linkView = link.getAttribute("data-view");
      if (linkView === targetView) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: "instant" });
  }
}

// ==========================================================================
// 5. STARTUP LOADER SEQUENCE
// ==========================================================================
class BootLoader {
  static init() {
    const loader = document.getElementById("startup-loader");
    const fill = document.getElementById("loader-fill");
    const statusText = document.getElementById("loader-status");
    const percentText = document.getElementById("loader-percent");

    if (!loader || !fill) return;

    let isDone = false;

    const setProgress = (pct, msg) => {
      if (isDone) return;
      fill.style.width = `${pct}%`;
      if (percentText) percentText.textContent = `${pct}%`;
      if (statusText) statusText.textContent = msg;
    };

    // Stage 1 (0ms): 15%
    setProgress(15, "CALIBRATING ARCHITECTURE...");

    // Stage 2 (450ms): 45%
    const t1 = setTimeout(() => {
      setProgress(45, "LOADING RECTILINEAR ARCHITECTURE...");
    }, 450);

    // Stage 3 (1050ms): 75%
    const t2 = setTimeout(() => {
      setProgress(75, "SYNCHRONIZING WORK & STUDY ENGINES...");
    }, 1050);

    // Stage 4 (1650ms): 95%
    const t3 = setTimeout(() => {
      setProgress(95, "FINALIZING WORKSPACE ENVIRONMENT...");
    }, 1650);

    // Stage 5 (2100ms): 100%
    const t4 = setTimeout(() => {
      setProgress(100, "SYSTEM READY // WELCOME OPERATOR");
    }, 2100);

    // Stage 6 (2500ms): Fade out
    const t5 = setTimeout(() => {
      dismiss();
    }, 2500);

    const dismiss = () => {
      if (isDone) return;
      isDone = true;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      loader.classList.add("hidden");
      setTimeout(() => {
        loader.style.display = "none";
      }, 400);
    };

    // Interactive skip via click or keypress
    loader.addEventListener("click", dismiss);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    });
  }
}

// ==========================================================================
// 6. WORK MANAGEMENT STORE & LOGIC
// ==========================================================================
const DEFAULT_TASKS = [
  {
    id: "task-1",
    title: "Implement Distributed Cache Architecture",
    description: "Benchmark Redis vs Memory cache for high-concurrency microservices.",
    priority: "HIGH",
    status: "IN_PROGRESS",
    dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    tags: ["BACKEND", "PERFORMANCE"],
  },
  {
    id: "task-2",
    title: "Submit Software Engineering Term Project",
    description: "Deliver complete system architecture document and demo release.",
    priority: "URGENT",
    status: "TODO",
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    tags: ["UNIVERSITY", "SUBMISSION"],
  },
  {
    id: "task-3",
    title: "Brutalist Design System Specification",
    description: "Define 0px border radius tokens and earth-tone parchment palettes.",
    priority: "MEDIUM",
    status: "REVIEW",
    dueDate: new Date(Date.now() - 86400000).toISOString().split("T")[0],
    tags: ["DESIGN", "UI/UX"],
  },
  {
    id: "task-4",
    title: "Database Schema Normalization",
    description: "Review third normal form compliance on examination models.",
    priority: "LOW",
    status: "DONE",
    dueDate: new Date(Date.now() - 86400000 * 3).toISOString().split("T")[0],
    tags: ["DATABASE"],
  }
];

class WorkStore {
  static getTasks() {
    try {
      const stored = localStorage.getItem("monolith_vanilla_tasks");
      if (stored) return JSON.parse(stored);
    } catch {
      // Fallback
    }
    WorkStore.saveTasks(DEFAULT_TASKS);
    return DEFAULT_TASKS;
  }

  static saveTasks(tasks) {
    try {
      localStorage.setItem("monolith_vanilla_tasks", JSON.stringify(tasks));
    } catch {
      // Ignore
    }
  }

  static addTask(task) {
    const tasks = WorkStore.getTasks();
    const newTask = {
      ...task,
      id: "task-" + Date.now(),
      createdAt: new Date().toISOString(),
    };
    tasks.unshift(newTask);
    WorkStore.saveTasks(tasks);
    return newTask;
  }

  static updateTask(id, updates) {
    const tasks = WorkStore.getTasks().map((t) => (t.id === id ? { ...t, ...updates } : t));
    WorkStore.saveTasks(tasks);
  }

  static deleteTask(id) {
    const tasks = WorkStore.getTasks().filter((t) => t.id !== id);
    WorkStore.saveTasks(tasks);
  }
}

// Work View Filter States
let currentTaskFilter = {
  search: "",
  priority: "ALL",
  viewMode: "KANBAN", // 'KANBAN' or 'LIST'
};

function renderWorkView() {
  const tasks = WorkStore.getTasks();

  // 1. Calculate Metrics
  const total = tasks.length;
  const active = tasks.filter((t) => t.status === "IN_PROGRESS").length;
  const todayStr = new Date().toISOString().split("T")[0];
  const dueToday = tasks.filter((t) => t.dueDate === todayStr && t.status !== "DONE").length;
  const overdue = tasks.filter((t) => t.dueDate && t.dueDate < todayStr && t.status !== "DONE").length;

  document.getElementById("work-metric-total").textContent = total;
  document.getElementById("work-metric-active").textContent = active;
  document.getElementById("work-metric-today").textContent = dueToday;
  document.getElementById("work-metric-overdue").textContent = overdue;

  // 2. Filter Tasks
  const filtered = tasks.filter((t) => {
    const matchSearch =
      !currentTaskFilter.search ||
      t.title.toLowerCase().includes(currentTaskFilter.search.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(currentTaskFilter.search.toLowerCase()));
    const matchPriority =
      currentTaskFilter.priority === "ALL" || t.priority === currentTaskFilter.priority;
    return matchSearch && matchPriority;
  });

  const kanbanContainer = document.getElementById("work-kanban-board");
  const listContainer = document.getElementById("work-list-container");

  if (currentTaskFilter.viewMode === "KANBAN") {
    kanbanContainer.style.display = "grid";
    listContainer.style.display = "none";

    const columns = ["TODO", "IN_PROGRESS", "REVIEW", "DONE"];
    columns.forEach((col) => {
      const colCardsContainer = document.getElementById(`kanban-cards-${col}`);
      const colCount = document.getElementById(`kanban-count-${col}`);
      const colTasks = filtered.filter((t) => t.status === col);

      if (colCount) colCount.textContent = colTasks.length;
      if (colCardsContainer) {
        colCardsContainer.innerHTML = "";
        colTasks.forEach((task) => {
          colCardsContainer.appendChild(createTaskCardElement(task));
        });
      }
    });
  } else {
    kanbanContainer.style.display = "none";
    listContainer.style.display = "block";
    renderTaskListView(filtered);
  }
}

function createTaskCardElement(task) {
  const card = document.createElement("div");
  card.className = "task-card";
  card.setAttribute("draggable", "true");
  card.setAttribute("data-id", task.id);

  const isOverdue = task.dueDate && task.dueDate < new Date().toISOString().split("T")[0] && task.status !== "DONE";

  card.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
      <span class="badge badge-${task.priority.toLowerCase()}">${task.priority}</span>
      <div style="display: flex; gap: 0.25rem;">
        <button class="btn btn-ghost btn-sm" onclick="openEditTaskModal('${task.id}')" title="Edit" style="padding: 2px 6px;">[E]</button>
        <button class="btn btn-ghost btn-sm" onclick="handleDeleteTask('${task.id}')" title="Delete" style="padding: 2px 6px; color: var(--accent-rust);">[X]</button>
      </div>
    </div>
    <h4 style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--text);">${escapeHtml(task.title)}</h4>
    ${task.description ? `<p style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(task.description)}</p>` : ""}
    <div style="display: flex; align-items: center; justify-content: space-between; font-family: var(--font-mono); font-size: 0.7rem; border-top: 1px solid var(--border); padding-top: 0.4rem; margin-top: 0.2rem;">
      <span style="color: ${isOverdue ? "var(--accent-rust)" : "var(--text-muted);"}; font-weight: ${isOverdue ? "700" : "400"};">
        ${task.dueDate ? `DUE: ${task.dueDate}` : "NO DEADLINE"}
      </span>
      <select onchange="handleTaskStatusChange('${task.id}', this.value)" class="form-select" style="width: auto; padding: 2px 4px; font-size: 0.65rem;">
        <option value="TODO" ${task.status === "TODO" ? "selected" : ""}>TODO</option>
        <option value="IN_PROGRESS" ${task.status === "IN_PROGRESS" ? "selected" : ""}>ACTIVE</option>
        <option value="REVIEW" ${task.status === "REVIEW" ? "selected" : ""}>REVIEW</option>
        <option value="DONE" ${task.status === "DONE" ? "selected" : ""}>DONE</option>
      </select>
    </div>
  `;

  // HTML5 Drag and Drop Handlers
  card.addEventListener("dragstart", (e) => {
    card.classList.add("dragging");
    e.dataTransfer.setData("text/plain", task.id);
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });

  return card;
}

function renderTaskListView(tasks) {
  const container = document.getElementById("work-list-container");
  if (!container) return;

  if (tasks.length === 0) {
    container.innerHTML = `
      <div class="box box-surface" style="text-align: center; padding: 3rem 1rem;">
        <p class="font-mono text-muted" style="font-size: 0.85rem;">NO TASKS MATCH CURRENT FILTER CRITERIA</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="box box-surface" style="padding: 0; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 0.75rem;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border); background: var(--bg-elevated); text-align: left;">
            <th style="padding: 0.75rem 1rem;">STATUS</th>
            <th style="padding: 0.75rem 1rem;">TITLE</th>
            <th style="padding: 0.75rem 1rem;">PRIORITY</th>
            <th style="padding: 0.75rem 1rem;">DUE DATE</th>
            <th style="padding: 0.75rem 1rem; text-align: right;">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
  `;

  tasks.forEach((t) => {
    html += `
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 0.75rem 1rem;">
          <select onchange="handleTaskStatusChange('${t.id}', this.value)" class="form-select" style="width: auto; padding: 2px 4px; font-size: 0.7rem;">
            <option value="TODO" ${t.status === "TODO" ? "selected" : ""}>TODO</option>
            <option value="IN_PROGRESS" ${t.status === "IN_PROGRESS" ? "selected" : ""}>ACTIVE</option>
            <option value="REVIEW" ${t.status === "REVIEW" ? "selected" : ""}>REVIEW</option>
            <option value="DONE" ${t.status === "DONE" ? "selected" : ""}>DONE</option>
          </select>
        </td>
        <td style="padding: 0.75rem 1rem; font-weight: 600; color: var(--text);">
          ${escapeHtml(t.title)}
        </td>
        <td style="padding: 0.75rem 1rem;">
          <span class="badge badge-${t.priority.toLowerCase()}">${t.priority}</span>
        </td>
        <td style="padding: 0.75rem 1rem; color: var(--text-muted);">
          ${t.dueDate || "None"}
        </td>
        <td style="padding: 0.75rem 1rem; text-align: right;">
          <button class="btn btn-outline btn-sm" onclick="openEditTaskModal('${t.id}')">EDIT</button>
          <button class="btn btn-danger btn-sm" onclick="handleDeleteTask('${t.id}')">DEL</button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

function handleTaskStatusChange(id, newStatus) {
  WorkStore.updateTask(id, { status: newStatus });
  renderWorkView();
}

function handleDeleteTask(id) {
  if (confirm("Confirm permanent removal of this task?")) {
    WorkStore.deleteTask(id);
    renderWorkView();
  }
}

// ==========================================================================
// 7. UNIVERSITY EXAM HUB STORE & LOGIC
// ==========================================================================
const DEFAULT_SUBJECTS = [
  {
    id: "sub-1",
    code: "CS301",
    title: "Algorithms & Distributed Systems",
    examDate: new Date(Date.now() + 86400000 * 8).toISOString().split("T")[0] + "T09:00",
    room: "ENG-B204",
    targetGrade: "A",
    priority: "HIGH",
    chapters: [
      { id: "c1", title: "Asymptotic Analysis & Master Theorem", isCompleted: true },
      { id: "c2", title: "Divide & Conquer, Fast Fourier Transform", isCompleted: true },
      { id: "c3", title: "Greedy Strategies & Dynamic Programming", isCompleted: false },
      { id: "c4", title: "Graph Algorithms: Network Flow & Max Cut", isCompleted: false },
      { id: "c5", title: "NP-Completeness & Approximation Algorithms", isCompleted: false },
    ],
    notes: [
      { id: "n1", text: "Master Theorem: T(n) = aT(n/b) + f(n)", isPinned: true },
      { id: "n2", text: "Dijkstra requires non-negative edge weights.", isPinned: false },
    ]
  },
  {
    id: "sub-2",
    code: "MATH215",
    title: "Linear Algebra & Vector Spaces",
    examDate: new Date(Date.now() + 86400000 * 14).toISOString().split("T")[0] + "T13:30",
    room: "SCI-101",
    targetGrade: "A",
    priority: "MEDIUM",
    chapters: [
      { id: "m1", title: "Matrix Inversion & Gaussian Elimination", isCompleted: true },
      { id: "m2", title: "Eigenvalues, Eigenvectors & Diagonalization", isCompleted: true },
      { id: "m3", title: "Gram-Schmidt Orthonormalization", isCompleted: false },
      { id: "m4", title: "Singular Value Decomposition (SVD)", isCompleted: false },
    ],
    notes: [
      { id: "n3", text: "det(AB) = det(A) * det(B)", isPinned: true },
    ]
  }
];

class StudyStore {
  static getSubjects() {
    try {
      const stored = localStorage.getItem("monolith_vanilla_subjects");
      if (stored) return JSON.parse(stored);
    } catch {
      // Fallback
    }
    StudyStore.saveSubjects(DEFAULT_SUBJECTS);
    return DEFAULT_SUBJECTS;
  }

  static saveSubjects(subjects) {
    try {
      localStorage.setItem("monolith_vanilla_subjects", JSON.stringify(subjects));
    } catch {
      // Ignore
    }
  }

  static addSubject(sub) {
    const subjects = StudyStore.getSubjects();
    const newSub = {
      ...sub,
      id: "sub-" + Date.now(),
      chapters: [],
      notes: [],
    };
    subjects.push(newSub);
    StudyStore.saveSubjects(subjects);
    return newSub;
  }

  static toggleChapter(subjectId, chapterId) {
    const subjects = StudyStore.getSubjects().map((sub) => {
      if (sub.id !== subjectId) return sub;
      const chapters = sub.chapters.map((c) =>
        c.id === chapterId ? { ...c, isCompleted: !c.isCompleted } : c
      );
      return { ...sub, chapters };
    });
    StudyStore.saveSubjects(subjects);
  }

  static addChapter(subjectId, chapterTitle) {
    const subjects = StudyStore.getSubjects().map((sub) => {
      if (sub.id !== subjectId) return sub;
      const chapters = [
        ...sub.chapters,
        { id: "ch-" + Date.now(), title: chapterTitle, isCompleted: false }
      ];
      return { ...sub, chapters };
    });
    StudyStore.saveSubjects(subjects);
  }

  static addNote(subjectId, noteText) {
    const subjects = StudyStore.getSubjects().map((sub) => {
      if (sub.id !== subjectId) return sub;
      const notes = [
        { id: "note-" + Date.now(), text: noteText, isPinned: false },
        ...(sub.notes || [])
      ];
      return { ...sub, notes };
    });
    StudyStore.saveSubjects(subjects);
  }

  static toggleNotePin(subjectId, noteId) {
    const subjects = StudyStore.getSubjects().map((sub) => {
      if (sub.id !== subjectId) return sub;
      const notes = (sub.notes || []).map((n) =>
        n.id === noteId ? { ...n, isPinned: !n.isPinned } : n
      );
      return { ...sub, notes };
    });
    StudyStore.saveSubjects(subjects);
  }

  static deleteNote(subjectId, noteId) {
    const subjects = StudyStore.getSubjects().map((sub) => {
      if (sub.id !== subjectId) return sub;
      const notes = (sub.notes || []).filter((n) => n.id !== noteId);
      return { ...sub, notes };
    });
    StudyStore.saveSubjects(subjects);
  }
}

let activeSubjectId = null;

function renderStudyView() {
  const subjects = StudyStore.getSubjects();
  if (!activeSubjectId && subjects.length > 0) {
    activeSubjectId = subjects[0].id;
  }

  // 1. Render Subject Countdown Cards
  const cardsContainer = document.getElementById("study-cards-grid");
  if (cardsContainer) {
    cardsContainer.innerHTML = "";
    subjects.forEach((sub) => {
      const now = new Date().getTime();
      const examTime = new Date(sub.examDate).getTime();
      const diffMs = examTime - now;
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

      const totalChapters = sub.chapters?.length || 0;
      const completedChapters = sub.chapters?.filter((c) => c.isCompleted).length || 0;
      const pct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

      const card = document.createElement("div");
      card.className = `box box-surface ${sub.id === activeSubjectId ? "border-accent" : ""}`;
      card.style.cursor = "pointer";
      card.style.border = sub.id === activeSubjectId ? "2px solid var(--accent)" : "1px solid var(--border)";
      card.onclick = () => {
        activeSubjectId = sub.id;
        renderStudyView();
      };

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div>
            <span class="font-mono text-accent" style="font-weight: 800; font-size: 0.85rem;">${sub.code}</span>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text);">${escapeHtml(sub.title)}</h4>
          </div>
          <span class="badge badge-${sub.priority.toLowerCase()}">${sub.priority}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: baseline; font-family: var(--font-mono); margin: 0.75rem 0;">
          <span style="font-size: 1.5rem; font-weight: 900; color: ${diffDays <= 3 ? "var(--accent-rust)" : "var(--accent)"};">
            ${diffDays > 0 ? `${diffDays} DAYS LEFT` : "EXAM PASSED"}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">TARGET: <strong>${sub.targetGrade}</strong></span>
        </div>
        <div style="width: 100%; height: 4px; background: var(--bg-elevated); overflow: hidden; margin-top: 0.5rem;">
          <div style="height: 100%; width: ${pct}%; background: var(--accent); transition: width 0.3s ease;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); margin-top: 0.3rem;">
          <span>READINESS: ${pct}%</span>
          <span>${completedChapters}/${totalChapters} TOPICS</span>
        </div>
      `;

      cardsContainer.appendChild(card);
    });
  }

  // 2. Render Active Subject Syllabus Tracker
  const activeSub = subjects.find((s) => s.id === activeSubjectId) || subjects[0];
  const syllabusContainer = document.getElementById("study-syllabus-container");
  if (syllabusContainer && activeSub) {
    const totalChapters = activeSub.chapters?.length || 0;
    const completedChapters = activeSub.chapters?.filter((c) => c.isCompleted).length || 0;
    const pct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

    let html = `
      <div class="box box-surface">
        <div class="box-header">
          <div>
            <span class="font-mono text-accent" style="font-size: 0.75rem; font-weight: 800;">${activeSub.code} // SYLLABUS TRACKER</span>
            <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text);">${escapeHtml(activeSub.title)}</h3>
          </div>
          <span class="font-mono text-accent" style="font-size: 1.25rem; font-weight: 900;">${pct}%</span>
        </div>

        <div style="width: 100%; height: 6px; background: var(--bg-elevated); margin-bottom: 1rem;">
          <div style="height: 100%; width: ${pct}%; background: var(--accent); transition: width 0.3s ease;"></div>
        </div>

        <div style="margin-bottom: 1rem;">
    `;

    if (activeSub.chapters && activeSub.chapters.length > 0) {
      activeSub.chapters.forEach((ch) => {
        html += `
          <div class="checklist-item ${ch.isCompleted ? "done" : ""}" onclick="handleToggleChapter('${activeSub.id}', '${ch.id}')" style="cursor: pointer;">
            <input type="checkbox" ${ch.isCompleted ? "checked" : ""} style="cursor: pointer;" pointer-events="none" />
            <span style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 600; flex: 1;">${escapeHtml(ch.title)}</span>
            <span class="font-mono text-muted" style="font-size: 0.7rem;">${ch.isCompleted ? "DONE" : "PENDING"}</span>
          </div>
        `;
      });
    } else {
      html += `<p class="font-mono text-muted" style="font-size: 0.75rem; padding: 1rem 0;">No topics added yet.</p>`;
    }

    html += `
        </div>

        <form onsubmit="handleAddChapter(event, '${activeSub.id}')" style="display: flex; gap: 0.5rem;">
          <input type="text" id="new-chapter-input" class="form-input" placeholder="Enter new topic or syllabus unit..." required style="flex: 1;" />
          <button type="submit" class="btn btn-primary">+ ADD TOPIC</button>
        </form>
      </div>
    `;

    syllabusContainer.innerHTML = html;
  }

  // 3. Render Quick Notes Board
  renderNotesBoard(activeSub);
}

function handleToggleChapter(subjectId, chapterId) {
  StudyStore.toggleChapter(subjectId, chapterId);
  renderStudyView();
}

function handleAddChapter(e, subjectId) {
  e.preventDefault();
  const input = document.getElementById("new-chapter-input");
  if (!input || !input.value.trim()) return;
  StudyStore.addChapter(subjectId, input.value.trim());
  renderStudyView();
}

function renderNotesBoard(activeSub) {
  const container = document.getElementById("study-notes-container");
  if (!container || !activeSub) return;

  const notes = activeSub.notes || [];

  let html = `
    <div class="box box-surface" style="margin-top: 1.5rem;">
      <div class="box-header">
        <span class="font-mono text-accent" style="font-weight: 800; font-size: 0.8rem;">QUICK REFERENCE NOTES // ${activeSub.code}</span>
      </div>

      <form onsubmit="handleAddNote(event, '${activeSub.id}')" style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <input type="text" id="new-note-input" class="form-input" placeholder="Type quick formula or key insight..." required style="flex: 1;" />
        <button type="submit" class="btn btn-outline">+ NOTE</button>
      </form>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
  `;

  if (notes.length === 0) {
    html += `<p class="font-mono text-muted" style="font-size: 0.75rem;">No scratch notes yet for this subject.</p>`;
  } else {
    notes.forEach((n) => {
      html += `
        <div style="border: 1px solid var(--border); background: var(--bg); padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text);">${escapeHtml(n.text)}</span>
          <div style="display: flex; gap: 0.25rem;">
            <button class="btn btn-ghost btn-sm" onclick="StudyStore.toggleNotePin('${activeSub.id}', '${n.id}'); renderStudyView();" style="padding: 2px 6px;">
              ${n.isPinned ? "★" : "☆"}
            </button>
            <button class="btn btn-ghost btn-sm" onclick="StudyStore.deleteNote('${activeSub.id}', '${n.id}'); renderStudyView();" style="padding: 2px 6px; color: var(--accent-rust);">
              [X]
            </button>
          </div>
        </div>
      `;
    });
  }

  html += `</div></div>`;
  container.innerHTML = html;
}

function handleAddNote(e, subjectId) {
  e.preventDefault();
  const input = document.getElementById("new-note-input");
  if (!input || !input.value.trim()) return;
  StudyStore.addNote(subjectId, input.value.trim());
  renderStudyView();
}

// ==========================================================================
// 8. POMODORO FOCUS TIMER
// ==========================================================================
class Pomodoro {
  static init() {
    Pomodoro.mode = "WORK"; // 'WORK' (25m), 'SHORT' (5m), 'LONG' (15m)
    Pomodoro.timeLeft = 25 * 60;
    Pomodoro.isRunning = false;
    Pomodoro.interval = null;
    Pomodoro.sessionsCompleted = 0;

    Pomodoro.updateDisplay();

    document.getElementById("pomo-start-btn")?.addEventListener("click", Pomodoro.toggle);
    document.getElementById("pomo-reset-btn")?.addEventListener("click", Pomodoro.reset);
  }

  static setMode(mode) {
    Pomodoro.pause();
    Pomodoro.mode = mode;
    if (mode === "WORK") Pomodoro.timeLeft = 25 * 60;
    else if (mode === "SHORT") Pomodoro.timeLeft = 5 * 60;
    else if (mode === "LONG") Pomodoro.timeLeft = 15 * 60;

    document.querySelectorAll(".pomo-tab").forEach((tab) => {
      tab.classList.toggle("btn-primary", tab.getAttribute("data-mode") === mode);
      tab.classList.toggle("btn-outline", tab.getAttribute("data-mode") !== mode);
    });

    Pomodoro.updateDisplay();
  }

  static toggle() {
    if (Pomodoro.isRunning) {
      Pomodoro.pause();
    } else {
      Pomodoro.start();
    }
  }

  static start() {
    Pomodoro.isRunning = true;
    const btn = document.getElementById("pomo-start-btn");
    if (btn) btn.textContent = "PAUSE";

    Pomodoro.interval = setInterval(() => {
      if (Pomodoro.timeLeft > 0) {
        Pomodoro.timeLeft--;
        Pomodoro.updateDisplay();
      } else {
        Pomodoro.complete();
      }
    }, 1000);
  }

  static pause() {
    Pomodoro.isRunning = false;
    clearInterval(Pomodoro.interval);
    const btn = document.getElementById("pomo-start-btn");
    if (btn) btn.textContent = "START";
  }

  static reset() {
    Pomodoro.pause();
    Pomodoro.setMode(Pomodoro.mode);
  }

  static complete() {
    Pomodoro.pause();
    SoundEngine.playChime();
    if (Pomodoro.mode === "WORK") {
      Pomodoro.sessionsCompleted++;
      const counter = document.getElementById("pomo-session-count");
      if (counter) counter.textContent = Pomodoro.sessionsCompleted;
      alert("POMODORO INTERVAL COMPLETED. 5-minute break recommended.");
      Pomodoro.setMode("SHORT");
    } else {
      alert("BREAK CONCLUDED. Ready for next focus sprint?");
      Pomodoro.setMode("WORK");
    }
  }

  static updateDisplay() {
    const mins = Math.floor(Pomodoro.timeLeft / 60).toString().padStart(2, "0");
    const secs = (Pomodoro.timeLeft % 60).toString().padStart(2, "0");
    const display = document.getElementById("pomo-display");
    if (display) {
      display.textContent = `${mins}:${secs}`;
    }
  }
}

// ==========================================================================
// 9. MODALS & FORMS
// ==========================================================================
function openNewTaskModal(defaultStatus = "TODO") {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-form").reset();
  document.getElementById("task-id-input").value = "";
  document.getElementById("task-status-select").value = defaultStatus;
  document.getElementById("task-modal-title").textContent = "CREATE TASK";
  modal.classList.add("open");
}

function openEditTaskModal(id) {
  const task = WorkStore.getTasks().find((t) => t.id === id);
  if (!task) return;
  const modal = document.getElementById("task-modal");
  document.getElementById("task-id-input").value = task.id;
  document.getElementById("task-title-input").value = task.title;
  document.getElementById("task-desc-input").value = task.description || "";
  document.getElementById("task-priority-select").value = task.priority;
  document.getElementById("task-status-select").value = task.status;
  document.getElementById("task-date-input").value = task.dueDate || "";
  document.getElementById("task-modal-title").textContent = "EDIT TASK";
  modal.classList.add("open");
}

function closeTaskModal() {
  document.getElementById("task-modal").classList.remove("open");
}

function handleTaskFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("task-id-input").value;
  const taskData = {
    title: document.getElementById("task-title-input").value.trim(),
    description: document.getElementById("task-desc-input").value.trim(),
    priority: document.getElementById("task-priority-select").value,
    status: document.getElementById("task-status-select").value,
    dueDate: document.getElementById("task-date-input").value || null,
  };

  if (id) {
    WorkStore.updateTask(id, taskData);
  } else {
    WorkStore.addTask(taskData);
  }

  closeTaskModal();
  renderWorkView();
}

function openNewSubjectModal() {
  const modal = document.getElementById("subject-modal");
  document.getElementById("subject-form").reset();
  modal.classList.add("open");
}

function closeSubjectModal() {
  document.getElementById("subject-modal").classList.remove("open");
}

function handleSubjectFormSubmit(e) {
  e.preventDefault();
  const subData = {
    code: document.getElementById("sub-code-input").value.trim().toUpperCase(),
    title: document.getElementById("sub-title-input").value.trim(),
    examDate: document.getElementById("sub-date-input").value,
    room: document.getElementById("sub-room-input").value.trim() || "TBA",
    targetGrade: document.getElementById("sub-grade-select").value,
    priority: document.getElementById("sub-priority-select").value,
  };

  const newSub = StudyStore.addSubject(subData);
  activeSubjectId = newSub.id;
  closeSubjectModal();
  renderStudyView();
}

// ==========================================================================
// 10. DEMO SANDBOX ENGINE
// ==========================================================================
function resetDemoData() {
  if (confirm("Reset simulation sandbox to original default state?")) {
    WorkStore.saveTasks(DEFAULT_TASKS);
    StudyStore.saveSubjects(DEFAULT_SUBJECTS);
    renderWorkView();
    renderStudyView();
    alert("DEMO SANDBOX RESTORED TO CLEAN SEED STATE.");
  }
}

// ==========================================================================
// 11. NOTIFICATION DROPDOWN
// ==========================================================================
function toggleNotificationCenter() {
  const panel = document.getElementById("notification-dropdown");
  if (panel) {
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  }
}

// Close notifications when clicking outside
window.addEventListener("click", (e) => {
  const notifBtn = document.getElementById("notif-bell-btn");
  const dropdown = document.getElementById("notification-dropdown");
  if (dropdown && notifBtn && !notifBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

// Helper for escaping HTML strings
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================================================
// 12. BOOTSTRAP APPLICATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme & language
  applyTheme(currentTheme);
  updateDOMTranslations();

  // Initialize modules
  BootLoader.init();
  Router.init();
  Pomodoro.init();

  // Render initial views
  renderWorkView();
  renderStudyView();

  // Kanban drag-and-drop dropzones
  document.querySelectorAll(".kanban-cards-container").forEach((col) => {
    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      col.classList.add("drag-over");
    });
    col.addEventListener("dragleave", () => {
      col.classList.remove("drag-over");
    });
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");
      const taskId = e.dataTransfer.getData("text/plain");
      const newStatus = col.getAttribute("data-status");
      if (taskId && newStatus) {
        handleTaskStatusChange(taskId, newStatus);
      }
    });
  });

  // Search input binding
  const searchInput = document.getElementById("task-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentTaskFilter.search = e.target.value;
      renderWorkView();
    });
  }

  // Priority filter binding
  const prioritySelect = document.getElementById("task-priority-filter");
  if (prioritySelect) {
    prioritySelect.addEventListener("change", (e) => {
      currentTaskFilter.priority = e.target.value;
      renderWorkView();
    });
  }

  // View mode switcher binding
  document.getElementById("view-mode-kanban-btn")?.addEventListener("click", () => {
    currentTaskFilter.viewMode = "KANBAN";
    document.getElementById("view-mode-kanban-btn").classList.add("btn-primary");
    document.getElementById("view-mode-kanban-btn").classList.remove("btn-outline");
    document.getElementById("view-mode-list-btn").classList.add("btn-outline");
    document.getElementById("view-mode-list-btn").classList.remove("btn-primary");
    renderWorkView();
  });

  document.getElementById("view-mode-list-btn")?.addEventListener("click", () => {
    currentTaskFilter.viewMode = "LIST";
    document.getElementById("view-mode-list-btn").classList.add("btn-primary");
    document.getElementById("view-mode-list-btn").classList.remove("btn-outline");
    document.getElementById("view-mode-kanban-btn").classList.add("btn-outline");
    document.getElementById("view-mode-kanban-btn").classList.remove("btn-primary");
    renderWorkView();
  });
});

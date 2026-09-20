/**
 * MONOLITH VANILLA ENGINE (ES6)
 * Full Stack Local-First Architecture
 * Zero Build // 0ms Page Navigation // LocalStorage Persistence
 * Separation of Clean User Workspace & Interactive Demo Sandbox
 */

// ==========================================================================
// 1. COMPREHENSIVE BILINGUAL DICTIONARY (100% Coverage)
// ==========================================================================
const I18N = {
  en: {
    brand_sub: "ARCHITECTURAL WORKSPACE",
    nav_work: "WORK",
    nav_study: "EXAM HUB",
    nav_tutorial: "DEMO",
    nav_signin: "SIGN IN",
    nav_operator: "OPERATOR",
    nav_logout: "LOGOUT",
    nav_theme_dark: "DARK",
    nav_theme_light: "LIGHT",
    notif_title: "NOTIFICATIONS",
    notif_ready: "SYSTEM READY",
    notif_storage_msg: "Local storage synchronized in offline-first mode.",
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
    work_metric_total: "TOTAL",
    work_metric_active: "ACTIVE",
    work_metric_today: "DUE TODAY",
    work_metric_overdue: "OVERDUE",
    work_search_placeholder: "Search tasks by title or description...",
    work_filter_all: "ALL PRIORITIES",
    work_filter_urgent: "URGENT",
    work_filter_high: "HIGH",
    work_filter_medium: "MEDIUM",
    work_filter_low: "LOW",
    work_view_kanban: "KANBAN",
    work_view_list: "LIST VIEW",
    work_empty_title: "WORKSPACE READY // 0 ACTIVE DELIVERABLES",
    work_empty_desc: "Your personal task pipeline is clean. Create your first task or explore the simulation demo.",
    work_empty_create: "+ CREATE FIRST TASK",
    work_empty_demo: "EXPLORE DEMO WITH SIMULATION DATA",
    status_todo: "TODO",
    status_in_progress: "IN PROGRESS",
    status_review: "REVIEW",
    status_done: "DONE",
    card_due: "DUE:",
    card_no_due: "NO DEADLINE",
    card_edit: "EDIT",
    card_del: "DEL",
    study_title: "UNIVERSITY EXAM HUB",
    study_subtitle: "COUNTDOWNS, SYLLABUS CHECKLISTS & POMODORO TIMER",
    study_btn_new: "+ ADD SUBJECT",
    study_empty_title: "EXAM HUB READY // 0 REGISTERED SUBJECTS",
    study_empty_desc: "No examinations recorded yet. Add your semester subjects to start tracking syllabus progress.",
    study_days_left: "DAYS LEFT",
    study_exam_passed: "EXAM PASSED",
    study_target: "TARGET:",
    study_readiness: "READINESS:",
    study_topics: "TOPICS",
    study_syllabus_title: "SYLLABUS TRACKER",
    study_del_subject: "DELETE SUBJECT",
    study_add_topic_placeholder: "Enter new topic or syllabus unit...",
    study_add_topic_btn: "+ ADD TOPIC",
    study_no_topics: "No topics added to syllabus yet.",
    study_pomo_title: "POMODORO FOCUS TIMER",
    study_pomo_sessions: "SESSIONS:",
    study_pomo_work: "FOCUS (25M)",
    study_pomo_short: "SHORT (5M)",
    study_pomo_long: "LONG (15M)",
    study_pomo_start: "START",
    study_pomo_pause: "PAUSE",
    study_pomo_reset: "RESET",
    study_notes_title: "QUICK REFERENCE NOTES",
    study_notes_placeholder: "Type quick formula or key insight...",
    study_notes_btn: "+ NOTE",
    study_no_notes: "No scratch notes recorded yet.",
    demo_title: "INTERACTIVE DEMO SANDBOX",
    demo_subtitle: "EXPERIENCE THE FULL MONOLITH WORKSPACE WITH SIMULATION DATA",
    demo_reset_btn: "RESET DEMO DATA",
    demo_workspace_btn: "GO TO MY CLEAN WORKSPACE",
    demo_step1_title: "STEP 01 // KANBAN TRIAGE",
    demo_step1_desc: "Drag tasks across columns or use the dropdown to shift between TODO, ACTIVE, REVIEW, and DONE.",
    demo_step2_title: "STEP 02 // EXAM READINESS",
    demo_step2_desc: "Check off syllabus topics below to see the subject readiness percentage calculate automatically in real time.",
    demo_step3_title: "STEP 03 // FOCUS INTERVAL",
    demo_step3_desc: "Hit START on the Pomodoro timer to test the acoustic notification chime and focus workflow.",
    modal_task_create: "CREATE TASK",
    modal_task_edit: "EDIT TASK",
    modal_task_title: "TASK TITLE *",
    modal_task_desc: "DESCRIPTION",
    modal_task_priority: "PRIORITY",
    modal_task_status: "STATUS",
    modal_task_due: "DUE DATE",
    modal_task_save: "SAVE TASK",
    modal_task_cancel: "CANCEL",
    modal_task_delete: "DELETE TASK",
    modal_sub_create: "ADD EXAM SUBJECT",
    modal_sub_code: "COURSE CODE *",
    modal_sub_title: "COURSE TITLE *",
    modal_sub_date: "EXAM DATE & TIME *",
    modal_sub_room: "ROOM / HALL",
    modal_sub_target: "TARGET GRADE",
    modal_sub_priority: "PRIORITY",
    modal_sub_save: "CREATE SUBJECT",
    modal_sub_cancel: "CANCEL",
    modal_login_title: "OPERATOR ACCESS // SIGN IN",
    modal_login_desc: "Sign in with your workspace credentials or authenticate as a Demo Operator.",
    modal_login_email: "EMAIL ADDRESS",
    modal_login_pass: "PASSWORD",
    modal_login_btn: "SIGN IN",
    modal_login_demo: "QUICK DEMO OPERATOR ACCESS",
    modal_login_close: "CANCEL",
  },
  th: {
    brand_sub: "ระบบจัดการงานและเตรียมสอบ",
    nav_work: "การทำงาน",
    nav_study: "ศูนย์สอบ",
    nav_tutorial: "หน้าตัวอย่าง",
    nav_signin: "เข้าสู่ระบบ",
    nav_operator: "ผู้ปฏิบัติการ",
    nav_logout: "ออกจากระบบ",
    nav_theme_dark: "โหมดมืด",
    nav_theme_light: "โหมดสว่าง",
    notif_title: "การแจ้งเตือน",
    notif_ready: "ระบบพร้อมใช้งาน",
    notif_storage_msg: "บันทึกข้อมูลลง Local Storage ในเครื่องเรียบร้อยแล้ว",
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
    work_title: "ระบบจัดการงาน",
    work_subtitle: "กระดานคานบันและการบริหารงานส่งตามลำดับความสำคัญ",
    work_btn_new: "+ สร้างงานใหม่",
    work_metric_total: "ทั้งหมด",
    work_metric_active: "กำลังทำ",
    work_metric_today: "ส่งวันนี้",
    work_metric_overdue: "เลยกำหนด",
    work_search_placeholder: "ค้นหางานตามชื่อหรือรายละเอียด...",
    work_filter_all: "ทุกระดับความสำคัญ",
    work_filter_urgent: "ด่วนที่สุด",
    work_filter_high: "สูง",
    work_filter_medium: "ปานกลาง",
    work_filter_low: "ต่ำ",
    work_view_kanban: "คานบัน",
    work_view_list: "มุมมองรายการ",
    work_empty_title: "พื้นที่ทำงานพร้อมใช้งาน // ยังไม่มีรายการงาน",
    work_empty_desc: "พื้นที่งานส่วนตัวของคุณว่างอยู่ คุณสามารถเริ่มสร้างงานแรก หรือไปดูตัวอย่างข้อมูลจำลองได้",
    work_empty_create: "+ สร้างงานชิ้นแรก",
    work_empty_demo: "ดูหน้าตัวอย่างพร้อมข้อมูลจำลอง",
    status_todo: "รอทำ",
    status_in_progress: "กำลังทำ",
    status_review: "ตรวจทาน",
    status_done: "เสร็จสิ้น",
    card_due: "กำหนดส่ง:",
    card_no_due: "ไม่มีกำหนดส่ง",
    card_edit: "แก้ไข",
    card_del: "ลบ",
    study_title: "ศูนย์เตรียมสอบมหาวิทยาลัย",
    study_subtitle: "นับถอยหลังวันสอบ เช็คลิสต์เนื้อหา และนาฬิกาโฟกัส",
    study_btn_new: "+ เพิ่มวิชาสอบ",
    study_empty_title: "ศูนย์เตรียมสอบพร้อมใช้งาน // ยังไม่มีวิชาสอบ",
    study_empty_desc: "ยังไม่มีวิชาสอบที่บันทึกไว้ เพิ่มวิชาสอบประจำภาคการศึกษาเพื่อเริ่มติดตามเนื้อหา",
    study_days_left: "วันก่อนสอบ",
    study_exam_passed: "สอบเสร็จแล้ว",
    study_target: "เป้าหมาย:",
    study_readiness: "ความพร้อม:",
    study_topics: "หัวข้อ",
    study_syllabus_title: "เช็คลิสต์เนื้อหาสอบ",
    study_del_subject: "ลบวิชาสอบ",
    study_add_topic_placeholder: "พิมพ์ชื่อหัวข้อหรือบทเรียนใหม่...",
    study_add_topic_btn: "+ เพิ่มหัวข้อ",
    study_no_topics: "ยังไม่มีหัวข้อย่อยในวิชานี้",
    study_pomo_title: "นาฬิกาโฟกัสโพโมโดโร",
    study_pomo_sessions: "รอบที่ทำสำเร็จ:",
    study_pomo_work: "อ่านหนังสือ (25น.)",
    study_pomo_short: "พักสั้น (5น.)",
    study_pomo_long: "พักยาว (15น.)",
    study_pomo_start: "เริ่มจับเวลา",
    study_pomo_pause: "หยุดชั่วคราว",
    study_pomo_reset: "รีเซ็ต",
    study_notes_title: "สมุดจดสูตรและโน้ตด่วน",
    study_notes_placeholder: "จดสูตรหรือข้อควรจำสำคัญ...",
    study_notes_btn: "+ จดโน้ต",
    study_no_notes: "ยังไม่มีโน้ตย่อในวิชานี้",
    demo_title: "พื้นที่ทดลองระบบและข้อมูลจำลอง",
    demo_subtitle: "ทดลองใช้งานฟังก์ชันทั้งหมดด้วยข้อมูลจำลองโดยไม่กระทบข้อมูลจริงของคุณ",
    demo_reset_btn: "รีเซ็ตข้อมูลจำลอง",
    demo_workspace_btn: "กลับไปที่พื้นที่ทำงานจริงของฉัน",
    demo_step1_title: "ขั้นตอนที่ 1 // ลากวางการ์ดคานบัน",
    demo_step1_desc: "ลากการ์ดงานเปลี่ยนคอลัมน์ หรือใช้เมนูเลือกสถานะระหว่าง รอทำ, กำลังทำ, ตรวจทาน, และ เสร็จสิ้น",
    demo_step2_title: "ขั้นตอนที่ 2 // เช็คความพร้อมสอบ",
    demo_step2_desc: "ติ๊กถูกหัวข้อเนื้อหาด้านล่าง เพื่อดูเปอร์เซ็นต์ความพร้อมคำนวณใหม่อัตโนมัติแบบเรียลไทม์",
    demo_step3_title: "ขั้นตอนที่ 3 // ซ้อมจับเวลาโฟกัส",
    demo_step3_desc: "กดปุ่ม เริ่มจับเวลา บน Pomodoro เพื่อทดลองระบบเสียงแจ้งเตือนสังเคราะห์และโฟลว์การอ่าน",
    modal_task_create: "สร้างงานใหม่",
    modal_task_edit: "แก้ไขงาน",
    modal_task_title: "ชื่องาน *",
    modal_task_desc: "รายละเอียดงาน",
    modal_task_priority: "ระดับความสำคัญ",
    modal_task_status: "สถานะ",
    modal_task_due: "กำหนดส่ง",
    modal_task_save: "บันทึกงาน",
    modal_task_cancel: "ยกเลิก",
    modal_task_delete: "ลบงานนี้",
    modal_sub_create: "เพิ่มวิชาสอบใหม่",
    modal_sub_code: "รหัสวิชา *",
    modal_sub_title: "ชื่อวิชา *",
    modal_sub_date: "วันและเวลาสอบ *",
    modal_sub_room: "ห้องสอบ / อาคาร",
    modal_sub_target: "เกรดเป้าหมาย",
    modal_sub_priority: "ระดับความสำคัญ",
    modal_sub_save: "บันทึกวิชาสอบ",
    modal_sub_cancel: "ยกเลิก",
    modal_login_title: "เข้าสู่ระบบผู้ปฏิบัติการ",
    modal_login_desc: "กรอกข้อมูลบัญชีเพื่อเข้าใช้งาน หรือเข้าใช้งานด้วยบัญชีทดลองทันที",
    modal_login_email: "ที่อยู่อีเมล",
    modal_login_pass: "รหัสผ่าน",
    modal_login_btn: "เข้าสู่ระบบ",
    modal_login_demo: "เข้าใช้งานด้วยบัญชีทดลองทันที",
    modal_login_close: "ยกเลิก",
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) {
      el.setAttribute("placeholder", t(key));
    }
  });

  const langToggleBtn = document.getElementById("lang-toggle-btn");
  if (langToggleBtn) {
    langToggleBtn.textContent = currentLang === "en" ? "[ EN | TH ]" : "[ TH | EN ]";
  }

  // Update theme button text
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (themeToggleBtn) {
    themeToggleBtn.textContent = currentTheme === "dark" ? t("nav_theme_light") : t("nav_theme_dark");
  }

  renderAuthNav();
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "th" : "en";
  localStorage.setItem("monolith_lang", currentLang);
  updateDOMTranslations();
  renderWorkView();
  renderStudyView();
  renderDemoSandbox();
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
    themeToggleBtn.textContent = theme === "dark" ? t("nav_theme_light") : t("nav_theme_dark");
  }
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

// ==========================================================================
// 3. OPERATOR AUTHENTICATION ENGINE
// ==========================================================================
let currentOperator = null;
try {
  const savedOp = localStorage.getItem("monolith_operator");
  if (savedOp) currentOperator = JSON.parse(savedOp);
} catch {
  // Ignore
}

function renderAuthNav() {
  const container = document.getElementById("auth-nav-container");
  if (!container) return;

  if (currentOperator) {
    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.35rem; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700;">
          <span style="width: 7px; height: 7px; background: var(--accent-olive); display: inline-block;"></span>
          <span style="color: var(--text);">${escapeHtml(currentOperator.name || "OPERATOR")}</span>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="handleLogout()" title="Sign out" style="padding: 2px 6px; font-size: 0.65rem;">
          [${t("nav_logout")}]
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="btn btn-outline btn-sm" onclick="openLoginModal()">
        <span>${t("nav_signin")}</span>
      </button>
    `;
  }
}

function openLoginModal() {
  document.getElementById("login-modal").classList.add("open");
}

function closeLoginModal() {
  document.getElementById("login-modal").classList.remove("open");
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("login-email-input").value.trim() || "operator@monolith.arch";
  const name = email.split("@")[0].toUpperCase();
  currentOperator = { email, name };
  localStorage.setItem("monolith_operator", JSON.stringify(currentOperator));
  closeLoginModal();
  renderAuthNav();
}

function handleQuickDemoLogin() {
  currentOperator = { email: "operator@monolith.arch", name: "DEMO OPERATOR" };
  localStorage.setItem("monolith_operator", JSON.stringify(currentOperator));
  closeLoginModal();
  renderAuthNav();
}

function handleLogout() {
  currentOperator = null;
  localStorage.removeItem("monolith_operator");
  renderAuthNav();
}

// ==========================================================================
// 4. SYNTHETIC ACOUSTIC ENGINE (Web Audio API Chime)
// ==========================================================================
class SoundEngine {
  static playChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18); // A5
      
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.7);
    } catch {
      // Audio fallback
    }
  }
}

// ==========================================================================
// 5. ROUTER ENGINE (0ms Instant View Switching & Top Progress Bar)
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

    // Trigger instant top progress line
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

    // Switch panels with staggered entrance animations
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

    // Render active views
    if (targetView === "work") renderWorkView();
    if (targetView === "study") renderStudyView();
    if (targetView === "demo") renderDemoSandbox();
  }
}

// ==========================================================================
// 6. STARTUP LOADER SEQUENCE
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

    loader.addEventListener("click", dismiss);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    });
  }
}

// ==========================================================================
// 7. USER WORKSPACE STORE (Starts Completely CLEAN)
// ==========================================================================
class WorkStore {
  static getTasks() {
    try {
      const stored = localStorage.getItem("monolith_vanilla_tasks");
      if (stored) {
        const parsed = JSON.parse(stored);
        const cleaned = parsed.filter(
          (t) => !t.id.startsWith("task-1") && !t.id.startsWith("task-2") && !t.id.startsWith("task-3") && !t.id.startsWith("task-4")
        );
        if (cleaned.length !== parsed.length) {
          WorkStore.saveTasks(cleaned);
        }
        return cleaned;
      }
    } catch {
      // Ignore
    }
    return []; // CLEAN BY DEFAULT!
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

// Work Filter States
let currentTaskFilter = {
  search: "",
  priority: "ALL",
  viewMode: "KANBAN",
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

  const emptyContainer = document.getElementById("work-empty-state");
  const kanbanBoard = document.getElementById("work-kanban-board");
  const listContainer = document.getElementById("work-list-container");

  // Handle Clean Empty State
  if (tasks.length === 0) {
    if (emptyContainer) {
      emptyContainer.style.display = "block";
      emptyContainer.innerHTML = `
        <div class="empty-state-box anim-stagger-1">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent"><rect x="2" y="7" width="20" height="14" rx="0"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          <div style="max-width: 28rem;">
            <h3 class="font-mono" style="font-size: 1rem; font-weight: 800; color: var(--text);">${t("work_empty_title")}</h3>
            <p class="font-sans text-muted" style="font-size: 0.8rem; margin-top: 0.4rem;">${t("work_empty_desc")}</p>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem;">
            <button class="btn btn-primary" onclick="openNewTaskModal('TODO')">${t("work_empty_create")}</button>
            <a href="#demo" class="btn btn-outline">${t("work_empty_demo")}</a>
          </div>
        </div>
      `;
    }
    if (kanbanBoard) kanbanBoard.style.display = "none";
    if (listContainer) listContainer.style.display = "none";
    return;
  }

  if (emptyContainer) emptyContainer.style.display = "none";

  // Filter Tasks
  const filtered = tasks.filter((t) => {
    const matchSearch =
      !currentTaskFilter.search ||
      t.title.toLowerCase().includes(currentTaskFilter.search.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(currentTaskFilter.search.toLowerCase()));
    const matchPriority =
      currentTaskFilter.priority === "ALL" || t.priority === currentTaskFilter.priority;
    return matchSearch && matchPriority;
  });

  if (currentTaskFilter.viewMode === "KANBAN") {
    kanbanBoard.style.display = "grid";
    listContainer.style.display = "none";

    const columns = ["TODO", "IN_PROGRESS", "REVIEW", "DONE"];
    columns.forEach((col, idx) => {
      const colCardsContainer = document.getElementById(`kanban-cards-${col}`);
      const colCount = document.getElementById(`kanban-count-${col}`);
      const colTasks = filtered.filter((t) => t.status === col);

      if (colCount) colCount.textContent = colTasks.length;
      if (colCardsContainer) {
        colCardsContainer.innerHTML = "";
        colTasks.forEach((task) => {
          colCardsContainer.appendChild(createTaskCardElement(task, false));
        });
      }
    });
  } else {
    kanbanBoard.style.display = "none";
    listContainer.style.display = "block";
    renderTaskListView(filtered, false);
  }
}

function createTaskCardElement(task, isDemo = false) {
  const card = document.createElement("div");
  card.className = "task-card anim-stagger-1";
  card.setAttribute("draggable", "true");
  card.setAttribute("data-id", task.id);

  const isOverdue = task.dueDate && task.dueDate < new Date().toISOString().split("T")[0] && task.status !== "DONE";
  const deleteHandler = isDemo ? `handleDemoDeleteTask('${task.id}')` : `handleDeleteTask('${task.id}')`;
  const editHandler = isDemo ? `openEditDemoTaskModal('${task.id}')` : `openEditTaskModal('${task.id}')`;
  const statusChangeHandler = isDemo ? `handleDemoTaskStatusChange('${task.id}', this.value)` : `handleTaskStatusChange('${task.id}', this.value)`;

  card.innerHTML = `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
      <span class="badge badge-${task.priority.toLowerCase()}">${t("work_filter_" + task.priority.toLowerCase())}</span>
      <div style="display: flex; gap: 0.25rem;">
        <button class="card-del-btn" onclick="${editHandler}" title="${t("card_edit")}">[${t("card_edit")}]</button>
        <button class="card-del-btn" onclick="${deleteHandler}" title="${t("card_del")}" style="color: var(--accent-rust);">[${t("card_del")}]</button>
      </div>
    </div>
    <h4 style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; color: var(--text); line-height: 1.35;">${escapeHtml(task.title)}</h4>
    ${task.description ? `<p style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); line-height: 1.4;">${escapeHtml(task.description)}</p>` : ""}
    <div style="display: flex; align-items: center; justify-content: space-between; font-family: var(--font-mono); font-size: 0.68rem; border-top: 1px solid var(--border); padding-top: 0.4rem; margin-top: 0.2rem;">
      <span style="color: ${isOverdue ? "var(--accent-rust)" : "var(--text-muted);"}; font-weight: ${isOverdue ? "700" : "400"};">
        ${task.dueDate ? `${t("card_due")} ${task.dueDate}` : t("card_no_due")}
      </span>
      <select onchange="${statusChangeHandler}" class="form-select" style="width: auto; padding: 2px 4px; font-size: 0.65rem;">
        <option value="TODO" ${task.status === "TODO" ? "selected" : ""}>${t("status_todo")}</option>
        <option value="IN_PROGRESS" ${task.status === "IN_PROGRESS" ? "selected" : ""}>${t("status_in_progress")}</option>
        <option value="REVIEW" ${task.status === "REVIEW" ? "selected" : ""}>${t("status_review")}</option>
        <option value="DONE" ${task.status === "DONE" ? "selected" : ""}>${t("status_done")}</option>
      </select>
    </div>
  `;

  card.addEventListener("dragstart", (e) => {
    card.classList.add("dragging");
    e.dataTransfer.setData("text/plain", task.id);
  });
  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });

  return card;
}

function renderTaskListView(tasks, isDemo = false) {
  const container = isDemo ? document.getElementById("demo-list-container") : document.getElementById("work-list-container");
  if (!container) return;

  if (tasks.length === 0) {
    container.innerHTML = `
      <div class="box box-surface" style="text-align: center; padding: 3rem 1rem;">
        <p class="font-mono text-muted" style="font-size: 0.85rem;">NO TASKS MATCH CURRENT CRITERIA</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="box box-surface anim-stagger-2" style="padding: 0; overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 0.75rem;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border); background: var(--bg-elevated); text-align: left;">
            <th style="padding: 0.75rem 1rem;">${t("modal_task_status")}</th>
            <th style="padding: 0.75rem 1rem;">${t("modal_task_title")}</th>
            <th style="padding: 0.75rem 1rem;">${t("modal_task_priority")}</th>
            <th style="padding: 0.75rem 1rem;">${t("card_due")}</th>
            <th style="padding: 0.75rem 1rem; text-align: right;">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
  `;

  tasks.forEach((tTask) => {
    const editHandler = isDemo ? `openEditDemoTaskModal('${tTask.id}')` : `openEditTaskModal('${tTask.id}')`;
    const deleteHandler = isDemo ? `handleDemoDeleteTask('${tTask.id}')` : `handleDeleteTask('${tTask.id}')`;
    const statusHandler = isDemo ? `handleDemoTaskStatusChange('${tTask.id}', this.value)` : `handleTaskStatusChange('${tTask.id}', this.value)`;

    html += `
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 0.75rem 1rem;">
          <select onchange="${statusHandler}" class="form-select" style="width: auto; padding: 2px 4px; font-size: 0.7rem;">
            <option value="TODO" ${tTask.status === "TODO" ? "selected" : ""}>${t("status_todo")}</option>
            <option value="IN_PROGRESS" ${tTask.status === "IN_PROGRESS" ? "selected" : ""}>${t("status_in_progress")}</option>
            <option value="REVIEW" ${tTask.status === "REVIEW" ? "selected" : ""}>${t("status_review")}</option>
            <option value="DONE" ${tTask.status === "DONE" ? "selected" : ""}>${t("status_done")}</option>
          </select>
        </td>
        <td style="padding: 0.75rem 1rem; font-family: var(--font-sans); font-weight: 600; color: var(--text);">
          ${escapeHtml(tTask.title)}
        </td>
        <td style="padding: 0.75rem 1rem;">
          <span class="badge badge-${tTask.priority.toLowerCase()}">${t("work_filter_" + tTask.priority.toLowerCase())}</span>
        </td>
        <td style="padding: 0.75rem 1rem; color: var(--text-muted);">
          ${tTask.dueDate || t("card_no_due")}
        </td>
        <td style="padding: 0.75rem 1rem; text-align: right;">
          <button class="btn btn-outline btn-sm" onclick="${editHandler}">${t("card_edit")}</button>
          <button class="btn btn-danger btn-sm" onclick="${deleteHandler}">${t("card_del")}</button>
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
  if (confirm(currentLang === "th" ? "ยืนยันการลบงานนี้อย่างถาวร?" : "Confirm permanent deletion of this task?")) {
    WorkStore.deleteTask(id);
    closeTaskModal();
    renderWorkView();
  }
}

// ==========================================================================
// 8. USER STUDY HUB STORE (Starts Completely CLEAN)
// ==========================================================================
class StudyStore {
  static getSubjects() {
    try {
      const stored = localStorage.getItem("monolith_vanilla_subjects");
      if (stored) {
        const parsed = JSON.parse(stored);
        const cleaned = parsed.filter(
          (s) => !s.id.startsWith("sub-1") && !s.id.startsWith("sub-2")
        );
        if (cleaned.length !== parsed.length) {
          StudyStore.saveSubjects(cleaned);
        }
        return cleaned;
      }
    } catch {
      // Ignore
    }
    return []; // CLEAN BY DEFAULT!
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

  static deleteSubject(subjectId) {
    const subjects = StudyStore.getSubjects().filter((s) => s.id !== subjectId);
    StudyStore.saveSubjects(subjects);
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

  static deleteChapter(subjectId, chapterId) {
    const subjects = StudyStore.getSubjects().map((sub) => {
      if (sub.id !== subjectId) return sub;
      const chapters = sub.chapters.filter((c) => c.id !== chapterId);
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

  const emptyContainer = document.getElementById("study-empty-state");
  const mainGrid = document.getElementById("study-main-content");
  const cardsContainer = document.getElementById("study-cards-grid");

  if (subjects.length === 0) {
    if (emptyContainer) {
      emptyContainer.style.display = "block";
      emptyContainer.innerHTML = `
        <div class="empty-state-box anim-stagger-1">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-accent"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          <div style="max-width: 28rem;">
            <h3 class="font-mono" style="font-size: 1rem; font-weight: 800; color: var(--text);">${t("study_empty_title")}</h3>
            <p class="font-sans text-muted" style="font-size: 0.8rem; margin-top: 0.4rem;">${t("study_empty_desc")}</p>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; margin-top: 0.5rem;">
            <button class="btn btn-primary" onclick="openNewSubjectModal()">${t("study_btn_new")}</button>
            <a href="#demo" class="btn btn-outline">${t("work_empty_demo")}</a>
          </div>
        </div>
      `;
    }
    if (cardsContainer) cardsContainer.innerHTML = "";
    if (mainGrid) mainGrid.style.display = "none";
    return;
  }

  if (emptyContainer) emptyContainer.style.display = "none";
  if (mainGrid) mainGrid.style.display = "grid";

  if (!activeSubjectId || !subjects.some((s) => s.id === activeSubjectId)) {
    activeSubjectId = subjects[0].id;
  }

  // 1. Render Subject Countdown Cards
  if (cardsContainer) {
    cardsContainer.innerHTML = "";
    subjects.forEach((sub, idx) => {
      const now = new Date().getTime();
      const examTime = new Date(sub.examDate).getTime();
      const diffMs = examTime - now;
      const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

      const totalChapters = sub.chapters?.length || 0;
      const completedChapters = sub.chapters?.filter((c) => c.isCompleted).length || 0;
      const pct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

      const card = document.createElement("div");
      card.className = `box box-surface anim-stagger-${(idx % 4) + 1}`;
      card.style.cursor = "pointer";
      card.style.border = sub.id === activeSubjectId ? "2px solid var(--accent)" : "1px solid var(--border)";

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <div onclick="activeSubjectId = '${sub.id}'; renderStudyView();" style="flex: 1;">
            <span class="font-mono text-accent" style="font-weight: 800; font-size: 0.85rem;">${escapeHtml(sub.code)}</span>
            <h4 style="font-family: var(--font-sans); font-size: 0.95rem; font-weight: 700; color: var(--text);">${escapeHtml(sub.title)}</h4>
          </div>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="badge badge-${sub.priority.toLowerCase()}">${t("work_filter_" + sub.priority.toLowerCase())}</span>
            <button class="card-del-btn" onclick="handleDeleteSubject('${sub.id}')" title="${t("study_del_subject")}">[DEL]</button>
          </div>
        </div>
        <div onclick="activeSubjectId = '${sub.id}'; renderStudyView();">
          <div style="display: flex; justify-content: space-between; align-items: baseline; font-family: var(--font-mono); margin: 0.75rem 0;">
            <span style="font-size: 1.4rem; font-weight: 900; color: ${diffDays <= 3 ? "var(--accent-rust)" : "var(--accent)"};">
              ${diffDays > 0 ? `${diffDays} ${t("study_days_left")}` : t("study_exam_passed")}
            </span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${t("study_target")} <strong>${sub.targetGrade}</strong></span>
          </div>
          <div style="width: 100%; height: 4px; background: var(--bg-elevated); overflow: hidden; margin-top: 0.5rem;">
            <div style="height: 100%; width: ${pct}%; background: var(--accent); transition: width 0.3s ease;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); margin-top: 0.3rem;">
            <span>${t("study_readiness")} ${pct}%</span>
            <span>${completedChapters}/${totalChapters} ${t("study_topics")}</span>
          </div>
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
      <div class="box box-surface anim-stagger-2">
        <div class="box-header">
          <div>
            <span class="font-mono text-accent" style="font-size: 0.75rem; font-weight: 800;">${escapeHtml(activeSub.code)} // ${t("study_syllabus_title")}</span>
            <h3 style="font-family: var(--font-sans); font-size: 1.15rem; font-weight: 800; color: var(--text);">${escapeHtml(activeSub.title)}</h3>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="font-mono text-accent" style="font-size: 1.25rem; font-weight: 900;">${pct}%</span>
            <button class="btn btn-danger btn-sm" onclick="handleDeleteSubject('${activeSub.id}')">${t("study_del_subject")}</button>
          </div>
        </div>

        <div style="width: 100%; height: 6px; background: var(--bg-elevated); margin-bottom: 1rem;">
          <div style="height: 100%; width: ${pct}%; background: var(--accent); transition: width 0.3s ease;"></div>
        </div>

        <div style="margin-bottom: 1rem;">
    `;

    if (activeSub.chapters && activeSub.chapters.length > 0) {
      activeSub.chapters.forEach((ch) => {
        html += `
          <div class="checklist-item ${ch.isCompleted ? "done" : ""}">
            <input type="checkbox" ${ch.isCompleted ? "checked" : ""} onchange="handleToggleChapter('${activeSub.id}', '${ch.id}')" style="cursor: pointer;" />
            <span style="flex: 1; font-weight: 500; font-size: 0.85rem;" onclick="handleToggleChapter('${activeSub.id}', '${ch.id}')">${escapeHtml(ch.title)}</span>
            <span class="font-mono text-muted" style="font-size: 0.7rem; margin-right: 0.5rem;">${ch.isCompleted ? t("status_done") : "PENDING"}</span>
            <button class="card-del-btn" onclick="handleDeleteChapter('${activeSub.id}', '${ch.id}')" title="Delete chapter">[DEL]</button>
          </div>
        `;
      });
    } else {
      html += `<p class="font-mono text-muted" style="font-size: 0.75rem; padding: 1rem 0;">${t("study_no_topics")}</p>`;
    }

    html += `
        </div>

        <form onsubmit="handleAddChapter(event, '${activeSub.id}')" style="display: flex; gap: 0.5rem;">
          <input type="text" id="new-chapter-input" class="form-input" placeholder="${t("study_add_topic_placeholder")}" required style="flex: 1;" />
          <button type="submit" class="btn btn-primary">${t("study_add_topic_btn")}</button>
        </form>
      </div>
    `;

    syllabusContainer.innerHTML = html;
  }

  // 3. Render Quick Notes Board
  renderNotesBoard(activeSub);
}

function handleDeleteSubject(subjectId) {
  if (confirm(currentLang === "th" ? "ยืนยันการลบวิชาสอบนี้และข้อมูลเนื้อหาทั้งหมด?" : "Confirm deletion of this exam subject and all its topics?")) {
    StudyStore.deleteSubject(subjectId);
    activeSubjectId = null;
    renderStudyView();
  }
}

function handleToggleChapter(subjectId, chapterId) {
  StudyStore.toggleChapter(subjectId, chapterId);
  renderStudyView();
}

function handleDeleteChapter(subjectId, chapterId) {
  StudyStore.deleteChapter(subjectId, chapterId);
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
    <div class="box box-surface anim-stagger-3" style="margin-top: 1.5rem;">
      <div class="box-header">
        <span class="font-mono text-accent" style="font-weight: 800; font-size: 0.8rem;">${t("study_notes_title")} // ${escapeHtml(activeSub.code)}</span>
      </div>

      <form onsubmit="handleAddNote(event, '${activeSub.id}')" style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <input type="text" id="new-note-input" class="form-input" placeholder="${t("study_notes_placeholder")}" required style="flex: 1;" />
        <button type="submit" class="btn btn-outline">${t("study_notes_btn")}</button>
      </form>

      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
  `;

  if (notes.length === 0) {
    html += `<p class="font-mono text-muted" style="font-size: 0.75rem;">${t("study_no_notes")}</p>`;
  } else {
    notes.forEach((n) => {
      html += `
        <div style="border: 1px solid var(--border); background: var(--bg); padding: 0.6rem 0.8rem; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text);">${escapeHtml(n.text)}</span>
          <div style="display: flex; gap: 0.25rem;">
            <button class="btn btn-ghost btn-sm" onclick="StudyStore.toggleNotePin('${activeSub.id}', '${n.id}'); renderStudyView();" style="padding: 2px 6px;">
              ${n.isPinned ? "★" : "☆"}
            </button>
            <button class="card-del-btn" onclick="StudyStore.deleteNote('${activeSub.id}', '${n.id}'); renderStudyView();" style="color: var(--accent-rust);">
              [DEL]
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
// 9. POMODORO FOCUS TIMER
// ==========================================================================
class Pomodoro {
  static init() {
    Pomodoro.mode = "WORK";
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
    if (btn) btn.textContent = t("study_pomo_pause");

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
    if (btn) btn.textContent = t("study_pomo_start");
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
      alert(currentLang === "th" ? "รอบโฟกัสสำเร็จแล้ว! แนะนำให้พัก 5 นาที" : "POMODORO INTERVAL COMPLETED. 5-minute break recommended.");
      Pomodoro.setMode("SHORT");
    } else {
      alert(currentLang === "th" ? "ช่วงพักเสร็จสิ้น พร้อมลุยรอบถัดไปแล้วหรือยัง?" : "BREAK CONCLUDED. Ready for next focus sprint?");
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
// 10. INTERACTIVE DEMO SANDBOX (Isolated from Clean User Workspace)
// ==========================================================================
const DEFAULT_DEMO_TASKS = [
  {
    id: "demo-task-1",
    title: "Implement Distributed Cache Architecture",
    description: "Benchmark Redis vs Memory cache for high-concurrency microservices.",
    priority: "HIGH",
    status: "IN_PROGRESS",
    dueDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
    tags: ["BACKEND", "PERFORMANCE"],
  },
  {
    id: "demo-task-2",
    title: "Submit Software Engineering Term Project",
    description: "Deliver complete system architecture document and demo release.",
    priority: "URGENT",
    status: "TODO",
    dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    tags: ["UNIVERSITY", "SUBMISSION"],
  },
  {
    id: "demo-task-3",
    title: "Brutalist Design System Specification",
    description: "Define 0px border radius tokens and earth-tone parchment palettes.",
    priority: "MEDIUM",
    status: "REVIEW",
    dueDate: new Date(Date.now() - 86400000).toISOString().split("T")[0],
    tags: ["DESIGN", "UI/UX"],
  },
  {
    id: "demo-task-4",
    title: "Database Schema Normalization",
    description: "Review third normal form compliance on examination models.",
    priority: "LOW",
    status: "DONE",
    dueDate: new Date(Date.now() - 86400000 * 3).toISOString().split("T")[0],
    tags: ["DATABASE"],
  }
];

const DEFAULT_DEMO_SUBJECTS = [
  {
    id: "demo-sub-1",
    code: "CS301",
    title: "Algorithms & Distributed Systems",
    examDate: new Date(Date.now() + 86400000 * 8).toISOString().split("T")[0] + "T09:00",
    room: "ENG-B204",
    targetGrade: "A",
    priority: "HIGH",
    chapters: [
      { id: "dc1", title: "Asymptotic Analysis & Master Theorem", isCompleted: true },
      { id: "dc2", title: "Divide & Conquer, Fast Fourier Transform", isCompleted: true },
      { id: "dc3", title: "Greedy Strategies & Dynamic Programming", isCompleted: false },
      { id: "dc4", title: "Graph Algorithms: Network Flow & Max Cut", isCompleted: false },
      { id: "dc5", title: "NP-Completeness & Approximation Algorithms", isCompleted: false },
    ],
    notes: [
      { id: "dn1", text: "Master Theorem: T(n) = aT(n/b) + f(n)", isPinned: true },
      { id: "dn2", text: "Dijkstra requires non-negative edge weights.", isPinned: false },
    ]
  },
  {
    id: "demo-sub-2",
    code: "MATH215",
    title: "Linear Algebra & Vector Spaces",
    examDate: new Date(Date.now() + 86400000 * 14).toISOString().split("T")[0] + "T13:30",
    room: "SCI-101",
    targetGrade: "A",
    priority: "MEDIUM",
    chapters: [
      { id: "dm1", title: "Matrix Inversion & Gaussian Elimination", isCompleted: true },
      { id: "dm2", title: "Eigenvalues, Eigenvectors & Diagonalization", isCompleted: true },
      { id: "dm3", title: "Gram-Schmidt Orthonormalization", isCompleted: false },
      { id: "dm4", title: "Singular Value Decomposition (SVD)", isCompleted: false },
    ],
    notes: [
      { id: "dn3", text: "det(AB) = det(A) * det(B)", isPinned: true },
    ]
  }
];

let demoTasks = JSON.parse(JSON.stringify(DEFAULT_DEMO_TASKS));
let demoSubjects = JSON.parse(JSON.stringify(DEFAULT_DEMO_SUBJECTS));
let activeDemoSubjectId = "demo-sub-1";

function renderDemoSandbox() {
  const container = document.getElementById("demo-interactive-content");
  if (!container) return;

  const activeSub = demoSubjects.find((s) => s.id === activeDemoSubjectId) || demoSubjects[0];
  const totalChapters = activeSub?.chapters?.length || 0;
  const completedChapters = activeSub?.chapters?.filter((c) => c.isCompleted).length || 0;
  const pct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

  let html = `
    <!-- 1. Interactive Demo Kanban -->
    <div class="box box-surface anim-stagger-2" style="margin-bottom: 2rem;">
      <div class="box-header">
        <div>
          <span class="font-mono text-accent" style="font-weight: 800; font-size: 0.75rem;">SIMULATION KANBAN</span>
          <h3 class="font-mono" style="font-size: 1.15rem; font-weight: 800;">${t("work_title")} (DEMO SANDBOX)</h3>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openNewDemoTaskModal()">+ ADD DEMO TASK</button>
      </div>

      <div class="kanban-grid" id="demo-kanban-grid">
  `;

  const columns = ["TODO", "IN_PROGRESS", "REVIEW", "DONE"];
  columns.forEach((col) => {
    const colTasks = demoTasks.filter((t) => t.status === col);
    html += `
      <div class="kanban-column">
        <div class="kanban-col-header">
          <span class="font-mono" style="font-size: 0.75rem; font-weight: 800;">${t("status_" + col.toLowerCase())}</span>
          <span class="badge">${colTasks.length}</span>
        </div>
        <div class="kanban-cards-container" data-status="${col}" ondragover="event.preventDefault(); this.classList.add('drag-over');" ondragleave="this.classList.remove('drag-over');" ondrop="handleDemoDrop(event, '${col}')">
    `;

    colTasks.forEach((task) => {
      const isOverdue = task.dueDate && task.dueDate < new Date().toISOString().split("T")[0] && task.status !== "DONE";
      html += `
        <div class="task-card" draggable="true" ondragstart="event.dataTransfer.setData('text/plain', '${task.id}')">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <span class="badge badge-${task.priority.toLowerCase()}">${t("work_filter_" + task.priority.toLowerCase())}</span>
            <button class="card-del-btn" onclick="handleDemoDeleteTask('${task.id}')" title="Delete">[DEL]</button>
          </div>
          <h4 style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; color: var(--text);">${escapeHtml(task.title)}</h4>
          <p style="font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(task.description || "")}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 0.35rem; font-family: var(--font-mono); font-size: 0.65rem;">
            <span>${task.dueDate ? `DUE: ${task.dueDate}` : "NO DUE"}</span>
            <select onchange="handleDemoTaskStatusChange('${task.id}', this.value)" class="form-select" style="width: auto; padding: 2px 4px; font-size: 0.65rem;">
              <option value="TODO" ${task.status === "TODO" ? "selected" : ""}>TODO</option>
              <option value="IN_PROGRESS" ${task.status === "IN_PROGRESS" ? "selected" : ""}>ACTIVE</option>
              <option value="REVIEW" ${task.status === "REVIEW" ? "selected" : ""}>REVIEW</option>
              <option value="DONE" ${task.status === "DONE" ? "selected" : ""}>DONE</option>
            </select>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
      </div>
    </div>

    <!-- 2. Interactive Demo Exam Hub -->
    <div class="box box-surface anim-stagger-3">
      <div class="box-header">
        <div>
          <span class="font-mono text-accent" style="font-weight: 800; font-size: 0.75rem;">SIMULATION EXAM READINESS</span>
          <h3 class="font-mono" style="font-size: 1.15rem; font-weight: 800;">${t("study_title")} (DEMO SANDBOX)</h3>
        </div>
        <span class="font-mono text-accent" style="font-size: 1.25rem; font-weight: 900;">READINESS: ${pct}%</span>
      </div>

      <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
  `;

  demoSubjects.forEach((sub) => {
    html += `
      <button class="btn ${sub.id === activeDemoSubjectId ? "btn-primary" : "btn-outline"} btn-sm" onclick="activeDemoSubjectId = '${sub.id}'; renderDemoSandbox();">
        ${sub.code} // ${sub.title.split(" ")[0]}
      </button>
    `;
  });

  html += `
      </div>

      <div style="width: 100%; height: 6px; background: var(--bg-elevated); margin-bottom: 1rem;">
        <div style="height: 100%; width: ${pct}%; background: var(--accent); transition: width 0.3s ease;"></div>
      </div>

      <div>
        <h4 class="font-mono text-muted" style="font-size: 0.75rem; margin-bottom: 0.5rem;">${escapeHtml(activeSub?.title || "")} // SYLLABUS CHECKLIST</h4>
  `;

  activeSub?.chapters?.forEach((ch) => {
    html += `
      <div class="checklist-item ${ch.isCompleted ? "done" : ""}" onclick="handleDemoToggleChapter('${activeSub.id}', '${ch.id}')" style="cursor: pointer;">
        <input type="checkbox" ${ch.isCompleted ? "checked" : ""} pointer-events="none" />
        <span style="flex: 1; font-weight: 500; font-size: 0.85rem;">${escapeHtml(ch.title)}</span>
        <span class="font-mono text-muted" style="font-size: 0.7rem;">${ch.isCompleted ? "COMPLETED" : "PENDING"}</span>
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function handleDemoDrop(e, status) {
  e.preventDefault();
  e.currentTarget.classList.remove("drag-over");
  const taskId = e.dataTransfer.getData("text/plain");
  demoTasks = demoTasks.map((t) => (t.id === taskId ? { ...t, status } : t));
  renderDemoSandbox();
}

function handleDemoTaskStatusChange(taskId, status) {
  demoTasks = demoTasks.map((t) => (t.id === taskId ? { ...t, status } : t));
  renderDemoSandbox();
}

function handleDemoDeleteTask(taskId) {
  demoTasks = demoTasks.filter((t) => t.id !== taskId);
  renderDemoSandbox();
}

function handleDemoToggleChapter(subId, chId) {
  demoSubjects = demoSubjects.map((sub) => {
    if (sub.id !== subId) return sub;
    const chapters = sub.chapters.map((c) => (c.id === chId ? { ...c, isCompleted: !c.isCompleted } : c));
    return { ...sub, chapters };
  });
  renderDemoSandbox();
}

function openNewDemoTaskModal() {
  const title = prompt(currentLang === "th" ? "กรอกชื่องานจำลอง:" : "Enter demo task title:", "Benchmark Distributed Consensus");
  if (title) {
    demoTasks.unshift({
      id: "demo-task-" + Date.now(),
      title,
      description: "Added within interactive demo sandbox.",
      priority: "HIGH",
      status: "TODO",
      dueDate: new Date().toISOString().split("T")[0],
    });
    renderDemoSandbox();
  }
}

function resetDemoData() {
  demoTasks = JSON.parse(JSON.stringify(DEFAULT_DEMO_TASKS));
  demoSubjects = JSON.parse(JSON.stringify(DEFAULT_DEMO_SUBJECTS));
  renderDemoSandbox();
  alert(currentLang === "th" ? "รีเซ็ตข้อมูลจำลองในหน้าตัวอย่างเรียบร้อยแล้ว" : "DEMO SANDBOX RESTORED TO CLEAN SIMULATION STATE.");
}

// ==========================================================================
// 11. MODALS & FORMS
// ==========================================================================
function openNewTaskModal(defaultStatus = "TODO") {
  const modal = document.getElementById("task-modal");
  document.getElementById("task-form").reset();
  document.getElementById("task-id-input").value = "";
  document.getElementById("task-status-select").value = defaultStatus;
  document.getElementById("task-modal-title").textContent = t("modal_task_create");
  document.getElementById("task-modal-delete-btn").style.display = "none";
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
  document.getElementById("task-modal-title").textContent = t("modal_task_edit");
  document.getElementById("task-modal-delete-btn").style.display = "inline-flex";
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

function handleModalDeleteCurrentTask() {
  const id = document.getElementById("task-id-input").value;
  if (id) {
    handleDeleteTask(id);
  }
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
// 12. NOTIFICATION DROPDOWN
// ==========================================================================
function toggleNotificationCenter() {
  const panel = document.getElementById("notification-dropdown");
  if (panel) {
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  }
}

window.addEventListener("click", (e) => {
  const notifBtn = document.getElementById("notif-bell-btn");
  const dropdown = document.getElementById("notification-dropdown");
  if (dropdown && notifBtn && !notifBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

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
// 13. BOOTSTRAP APPLICATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  updateDOMTranslations();

  BootLoader.init();
  Router.init();
  Pomodoro.init();

  renderWorkView();
  renderStudyView();
  renderDemoSandbox();

  // Kanban dropzones
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

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "EN" | "TH";

const TRANSLATIONS = {
  EN: {
    // Nav
    nav_work: "WORK",
    nav_study: "EXAM HUB",
    nav_tutorial: "TUTORIAL",
    nav_signin: "SIGN IN",
    nav_signout: "SIGN OUT",
    nav_theme_dark: "DARK",
    nav_theme_light: "LIGHT",

    // Home
    home_brand_sub: "WORKSPACE & EXAM HUB",
    home_quote_1: "STOP ORGANIZING.",
    home_quote_2: "START EXECUTING.",
    home_cta_open: "OPEN WORKSPACE",
    home_cta_demo: "EXPLORE INTERACTIVE TUTORIAL",

    home_sec1_tag: "SECTION I // WORK MANAGEMENT",
    home_sec1_title: "PROJECT WORKSPACE & DEADLINE TRACKING",
    home_sec1_btn: "LAUNCH WORKSPACE",
    home_sec1_card1_title: "KANBAN & LIST VIEWS",
    home_sec1_card1_desc: "Switch in one click between status columns and high-density tabular list rows.",
    home_sec1_card2_title: "DEADLINE SENSORS",
    home_sec1_card2_desc: "Automatic visual tags detect Overdue and Due Today items without manual checking.",
    home_sec1_card3_title: "PRIORITY & TAGS",
    home_sec1_card3_desc: "Real-time multi-filter queries by LOW, MEDIUM, HIGH, URGENT and project tags.",

    home_sec2_tag: "SECTION II // ACADEMIC HUB",
    home_sec2_title: "UNIVERSITY EXAM READINESS ENGINE",
    home_sec2_btn: "LAUNCH EXAM HUB",
    home_sec2_card1_tag: "CHRONOMETRIC",
    home_sec2_card1_title: "EXAM COUNTDOWNS",
    home_sec2_card1_desc: "Real-time Days:Hours:Mins:Secs countdowns sorted automatically by test date.",
    home_sec2_card2_tag: "SYLLABUS",
    home_sec2_card2_title: "% READINESS PROGRESS",
    home_sec2_card2_desc: "Check off course chapters and monitor dynamically computed completion scores.",
    home_sec2_card3_tag: "INTENSIVE WORK",
    home_sec2_card3_title: "POMODORO TIMER",
    home_sec2_card3_desc: "25-minute focus intervals bound to your subjects with automated session logs.",
    home_sec2_card4_tag: "CHEAT-SHEET",
    home_sec2_card4_title: "FORMULA PINBOARD",
    home_sec2_card4_desc: "Pin critical equations and theorems right next to your study timer.",

    home_sec3_tag: "SECTION III // WORKFLOW",
    home_sec3_title: "EXECUTION IN THREE STEPS",
    home_sec3_step1_title: "DISPATCH ITEMS",
    home_sec3_step1_desc: "Add pending project tasks and upcoming exam schedules with target dates.",
    home_sec3_step2_title: "BREAK DOWN CHAPTERS",
    home_sec3_step2_desc: "List course topics with estimated hours and track dynamic progress bars.",
    home_sec3_step3_title: "FOCUS & DELIVER",
    home_sec3_step3_desc: "Start 25-minute Pomodoro sessions, review pinned formulas, and log time.",

    // Work Page
    work_title: "PROJECT WORKSPACE",
    work_subtitle: "High-throughput task dispatch, milestone deadlines, and status tracking.",
    work_btn_new: "NEW TASK",
    work_filter_search: "FILTER TASKS BY TITLE OR DESCRIPTION...",
    work_filter_priority: "PRIORITY:",
    work_filter_tags: "TAGS:",
    work_all: "ALL",

    // Study Page
    study_title: "UNIVERSITY EXAM PREPARATION HUB",
    study_subtitle: "Chronological countdowns, syllabus checklists, focus pomodoro logging, and cheat-sheet formulas.",
    study_btn_register: "REGISTER EXAM",
    study_active_schedule: "ACTIVE EXAM SCHEDULE // CHRONOLOGICAL ORDER",
    study_courses: "COURSES",

    // Common
    footer_text: "MONOLITH CORE // ARCHITECTURAL FORM FACTOR // EST. 2026",
  },
  TH: {
    // Nav
    nav_work: "จัดการงาน",
    nav_study: "ตารางสอบ",
    nav_tutorial: "คู่มือใช้งาน",
    nav_signin: "เข้าสู่ระบบ",
    nav_signout: "ออกจากระบบ",
    nav_theme_dark: "โหมดมืด",
    nav_theme_light: "โหมดสว่าง",

    // Home
    home_brand_sub: "พื้นที่จัดการงานและศูนย์สอบมหาวิทยาลัย",
    home_quote_1: "หยุดเสียเวลาจัดระเบียบ.",
    home_quote_2: "เริ่มลงมือทำจริง.",
    home_cta_open: "เข้าสู่พื้นที่ทำงาน",
    home_cta_demo: "ทดลองใช้งานและดูคู่มือ",

    home_sec1_tag: "ส่วนที่ 1 // การจัดการงาน",
    home_sec1_title: "ระบบจัดการโปรเจกต์และกำหนดส่งงาน",
    home_sec1_btn: "เปิดหน้าจัดการงาน",
    home_sec1_card1_title: "มุมมอง KANBAN และ LIST",
    home_sec1_card1_desc: "สลับมุมมองระหว่างกระดานคอลัมน์และตารางข้อมูลกะทัดรัดได้ในคลิกเดียว",
    home_sec1_card2_title: "ตรวจจับกำหนดส่งงาน",
    home_sec1_card2_desc: "แท็กแจ้งเตือนงานที่เลยกำหนดและงานที่ต้องส่งวันนี้โดยอัตโนมัติ",
    home_sec1_card3_title: "ระดับความสำคัญและแท็ก",
    home_sec1_card3_desc: "กรองงานแบบ Real-time ตามระดับความสำคัญและแท็กหมวดหมู่ของโปรเจกต์",

    home_sec2_tag: "ส่วนที่ 2 // เตรียมสอบระดับมหาวิทยาลัย",
    home_sec2_title: "ระบบประเมินความพร้อมและตารางสอบ",
    home_sec2_btn: "เปิดห้องเตรียมสอบ",
    home_sec2_card1_tag: "นับถอยหลัง",
    home_sec2_card1_title: "เวลานับถอยหลังก่อนสอบ",
    home_sec2_card1_desc: "ตัวเลขนับถอยหลัง วัน:ชั่วโมง:นาที:วินาที แบบ Real-time เรียงตามวิชาที่สอบก่อน-หลัง",
    home_sec2_card2_tag: "เนื้อหารายบท",
    home_sec2_card2_title: "% ความพร้อมตามหลักสูตร",
    home_sec2_card2_desc: "ติ๊กเช็กเนื้อหาที่อ่านจบและดูเกจวัดเปอร์เซ็นต์ความพร้อมคำนวณอัตโนมัติ",
    home_sec2_card3_tag: "โฟกัสเข้มข้น",
    home_sec2_card3_title: "นาฬิกาโฟกัส POMODORO",
    home_sec2_card3_desc: "จับเวลาโฟกัส 25 นาที ผูกตรงกับรายวิชา พร้อมบันทึกสถิติชั่วโมงการอ่าน",
    home_sec2_card4_tag: "สรุปย่อ",
    home_sec2_card4_title: "กระดานสูตรและประเด็นสำคัญ",
    home_sec2_card4_desc: "ปักหมุดสูตร สมการ และทฤษฎีสำคัญไว้ทบทวนก่อนเข้าห้องสอบ",

    home_sec3_tag: "ส่วนที่ 3 // ขั้นตอนการทำงาน",
    home_sec3_title: "เริ่มใช้งานง่ายๆ ใน 3 ขั้นตอน",
    home_sec3_step1_title: "1. บันทึกงานและวันสอบ",
    home_sec3_step1_desc: "กรอกงานโปรเจกต์และตารางสอบของเทอมนี้พร้อมกำหนดวันและเป้าหมาย",
    home_sec3_step2_title: "2. ซอยเนื้อหาเป็นบทย่อย",
    home_sec3_step2_desc: "แบ่งหัวข้อที่ต้องอ่านพร้อมประมาณเวลา แล้วดูเปอร์เซ็นต์ความพร้อมที่เพิ่มขึ้น",
    home_sec3_step3_title: "3. จับเวลาและพิชิตเป้า",
    home_sec3_step3_desc: "เปิดนาฬิกา Pomodoro 25 นาที ทบทวนสูตรที่ปักหมุดไว้ และบันทึกผลงาน",

    // Work Page
    work_title: "พื้นที่จัดการงานและโปรเจกต์",
    work_subtitle: "ศูนย์สั่งการและติดตามสถานะงาน กำหนดส่ง และระดับความสำคัญอย่างแม่นยำ",
    work_btn_new: "+ เพิ่มงานใหม่",
    work_filter_search: "ค้นหางานตามชื่องานหรือรายละเอียด...",
    work_filter_priority: "ความสำคัญ:",
    work_filter_tags: "แท็ก:",
    work_all: "ทั้งหมด",

    // Study Page
    study_title: "ศูนย์เตรียมความพร้อมสอบมหาวิทยาลัย",
    study_subtitle: "นับถอยหลังวันสอบ เช็กลิสต์เนื้อหา จับเวลาโฟกัส Pomodoro และกระดานสรุปสูตร",
    study_btn_register: "+ ลงทะเบียนวิชาสอบ",
    study_active_schedule: "ตารางสอบที่กำลังจะมาถึง // เรียงตามลำดับเวลา",
    study_courses: "วิชา",

    // Common
    footer_text: "MONOLITH CORE // สถาปัตยกรรมขอบเหลี่ยม 90 องศา // EST. 2026",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof TRANSLATIONS["EN"]) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => TRANSLATIONS.EN[key] || (key as string),
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("EN");

  useEffect(() => {
    const stored = localStorage.getItem("monolith_lang") as Language | null;
    if (stored === "TH" || stored === "EN") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("monolith_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "EN" ? "TH" : "EN";
    setLanguage(next);
  };

  const t = (key: keyof typeof TRANSLATIONS["EN"]): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.EN[key] || (key as string);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

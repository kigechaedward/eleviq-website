import { useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", hire_us: "Hire Us", careers: "Careers", privacy: "Privacy", terms: "Terms", blog: "Blog",

    // Hero
    hero_status: "Status: Innovating", hero_title: "Evolving with", hero_span: "Technology",
    hero_desc: "We engineer high-performance software and AI solutions that transform startups into industry leaders. Precision, aesthetics, and results.",
    start_evolution: "Start Evolution", view_artifacts: "View Artifacts", efficiency_gain: "Efficiency Gain", velocity: "Velocity", projects_count: "Projects",

    // Home / Services Section
    capabilities: "Capabilities", engineered_for: "Precision Engineered", performance: "Digital Solutions",
    services_desc: "We bridge the gap between complex engineering and intuitive design.",
    view_all_services: "Exploration", discuss_project: "Discuss Project",

    // Home / Portfolio Section
    selected_artifacts: "Selected Artifacts", artifacts_desc: "Where high-stakes engineering meets high-end aesthetics.",
    flagship: "Flagship", case_study: "Case", deep_dive: "Deep Dive",
    operational_gain: "Operational Gain", operational_desc: "Average efficiency improvement delivered across our fintech and logistics portfolio.",
    efficiency_metric: "27%",

    // Services Data
    s0_t: "Custom Software Development", s0_d: "Bespoke systems, APIs, and integrations tailored to your business needs.",
    s1_t: "Web Development", s1_d: "Modern, fast, and accessible websites and web apps.",
    s2_t: "Mobile App Development", s2_d: "Cross-platform and native mobile applications.",
    s3_t: "AI & Automation Solutions", s3_d: "ML models, automation pipelines, and RPA.",
    s4_t: "IT Consulting", s4_d: "Strategy, architecture, and technical leadership.",
    s5_t: "Cloud Solutions", s5_d: "Cloud migrations, infra-as-code, and ops.",
    s6_t: "Digital Marketing", s6_d: "Campaigns, analytics, and growth engineering.",
    s7_t: "SEO Optimization", s7_d: "Technical SEO and content strategies.",
    s8_t: "E-commerce Solutions", s8_d: "Platform builds, payments, and fulfillment integrations.",

    // Projects Data
    p0_n: "HobbyPlan", p0_d: "Hobby project management and monetization platform.",
    p1_n: "Abiri", p1_d: "Route optimization and fleet tracking.",
    p2_n: "AniTrace", p2_d: "Wildlife tracking and analytics.",
    p3_n: "AuraFlow", p3_d: "Workflow automation for enterprises.",
    p4_n: "FuaSmart", p4_d: "Farm analytics and decision support.",
    p5_n: "Property Management", p5_d: "Property listings, payments, and landlord tools.",

    // FAQ
    faq_title: "Technical FAQ",
    q0: "How long does a typical project take?", a0: "Depends on scope; small sites in 2–6 weeks, larger platforms 3–6+ months.",
    q1: "Do you provide maintenance?", a1: "Yes — SLA-based support and managed services are available.",

    // Careers Data
    job0_t: "Senior Full Stack Engineer", job0_ty: "Remote / Nairobi", job0_d: "Engineering",
    job1_t: "UI/UX Product Designer", job1_ty: "Remote", job1_d: "Design",
    job2_t: "AI/ML Specialist", job2_ty: "Nairobi", job2_d: "Data Science",
    job3_t: "Technical Project Manager", job3_ty: "Hybrid", job3_d: "Operations",

    // Home / Testimonials
    voices_of_trust: "Voices of Trust", trust_desc: "Our partnerships are built on transparency, technical rigor, and consistent delivery.",
    delivered_globally: "Delivered globally",

    // Home / CTA
    ready_to_evolve: "Ready to Evolve", your_digital_dna: "Your Digital DNA?",
    cta_desc: "Let's discuss your next project. Free consultation, no obligation.",
    initiate_project: "Initiate Project", send_transmission: "Send Transmission",

    // About Page
    about_title: "About Eleviq Technologies",
    about_desc: "Based in Nairobi, Kenya, Eleviq helps organizations adopt modern software, AI, and cloud practices to accelerate growth. Our team focuses on design-led engineering, security, and measurable results.",
    process_title: "Our Development Process", stack_title: "Technology Stack",
    step_1: "Discovery & scoping", step_2: "Architecture & design", step_3: "Agile implementation", step_4: "QA, security & performance", step_5: "Launch & continued support",

    // Contact Page
    initiate_contact: "Initiate", contact_span: "Contact", contact_desc: "Have a high-stakes project in mind? We're ready to engineer your evolution.",
    hq_location: "HQ Location", direct_transmission: "Direct Transmission", voice_line: "Voice Line",
    full_name: "Full Name", email_address: "Email Address", phone_optional: "Phone (Optional)", message_brief: "Message Brief",
    transmitting: "Transmitting...", send_contact: "Send Transmission",
    success_msg: "Transmission Successful. Our team will respond shortly.",
    error_msg: "Connection Error. Please retry or email directly.",

    // Footer
    footer_desc: "Evolving with Technology. We build high-performance digital ecosystems for global innovators.",
    company: "Company", navigation: "Navigation", connect: "Connect", newsletter: "Newsletter", subscribe: "Subscribe", all_rights: "All rights reserved.", handcrafted: "Handcrafted in Nairobi",

    // Careers
    join_evolution: "Join the Evolution",
    careers_desc: "We're looking for high-performance individuals who want to build the future of digital ecosystems. At Eleviq, we value precision, aesthetics, and results.",
    open_positions: "Open Positions", apply_now: "Apply Now", dont_see_fit: "Don't see a fit?", exceptional_talent: "We're always looking for exceptional talent. Send us a transmission."
  },
  sw: {
    home: "Nyumbani", about: "Kuhusu", services: "Huduma", portfolio: "Kazi", contact: "Wasiliana", hire_us: "Tuajiri", careers: "Kazi",
    hero_title: "Kukua na", hero_span: "Teknolojia", hero_desc: "Tunaunda programu na suluhisho za AI zenye utendaji wa juu.",
    s0_t: "Uundaji wa Programu Maalum", s0_d: "Mifumo iliyoundwa maalum kulingana na mahitaji yako.",
    s1_t: "Uundaji wa Tovuti", s1_d: "Tovuti za kisasa, haraka na zinazofikika.",
    p1_n: "Abiri", p1_d: "Uboreshaji wa njia na ufuatiliaji wa magari.",
    capabilities: "Uwezo Wetu", engineered_for: "Imeundwa kwa", performance: "Utendaji Bora",
    view_all_services: "Uvumbuzi", flagship: "Kuu", deep_dive: "Angalia Zaidi",
    ready_to_evolve: "Tayari Kukua?", send_transmission: "Tuma Ujumbe",
    footer_desc: "Kukua na Teknolojia. Tunajenga mifumo ya kidijitali kwa wavumbuzi.",
    all_rights: "Haki zote zimehifadhiwa.", handcrafted: "Imeundwa Nairobi"
  },
  zh: {
    home: "首页", about: "关于", services: "服务", portfolio: "案例", contact: "联系", hire_us: "聘请我们",
    hero_title: "与科技", hero_span: "共进",
    s0_t: "定制软件开发", s0_d: "量身定制的系统、API和集成。",
    p1_n: "Abiri", p1_d: "路线优化和车队跟踪。",
    capabilities: "核心能力", engineered_for: "精准工程", performance: "数字方案",
    view_all_services: "探索", flagship: "旗舰", deep_dive: "深入了解",
    send_transmission: "发送信息", footer_desc: "与科技共进。我们构建高性能数字生态。"
  }
};

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'sw', label: 'Kiswahili', flag: '🇰🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' }
];

export function useTranslation() {
  const [lang, setLang] = useState(localStorage.getItem('eleviq_lang') || 'en');
  const t = (key) => translations[lang]?.[key] || translations['en']?.[key] || key;
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('eleviq_lang', newLang);
  };
  return { t, lang, changeLanguage };
}

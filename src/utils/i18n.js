import { useState, useEffect } from 'react';

const translations = {
  en: {
    home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", hire_us: "Hire Us", careers: "Careers", privacy: "Privacy", terms: "Terms", blog: "Blog",
    hero_status: "Status: Innovating", hero_title: "Evolving with", hero_span: "Technology",
    hero_desc: "We engineer high-performance software and AI solutions that transform startups into industry leaders. Precision, aesthetics, and results.",
    start_evolution: "Start Evolution", view_artifacts: "View Artifacts", efficiency_gain: "Efficiency Gain", velocity: "Velocity", projects_count: "Projects",
    capabilities: "Capabilities", engineered_for: "Precision Engineered", performance: "Digital Solutions",
    services_desc: "We bridge the gap between complex engineering and intuitive design.",
    view_all_services: "Exploration", discuss_project: "Discuss Project",
    selected_artifacts: "Selected Artifacts", artifacts_desc: "Where high-stakes engineering meets high-end aesthetics.",
    flagship: "Flagship", case_study: "Case", deep_dive: "Deep Dive",
    operational_gain: "Operational Gain", operational_desc: "Average efficiency improvement delivered across our fintech and logistics portfolio.",
    efficiency_metric: "27%",
    s0_t: "Custom Software Development", s0_d: "Bespoke systems, APIs, and integrations tailored to your business needs.",
    s1_t: "Web Development", s1_d: "Modern, fast, and accessible websites and web apps.",
    s2_t: "Mobile App Development", s2_d: "Cross-platform and native mobile applications.",
    s3_t: "AI & Automation Solutions", s3_d: "ML models, automation pipelines, and RPA.",
    s4_t: "IT Consulting", s4_d: "Strategy, architecture, and technical leadership.",
    s5_t: "Cloud Solutions", s5_d: "Cloud migrations, infra-as-code, and ops.",
    p0_n: "HobbyPlan", p0_d: "Hobby project management and monetization platform.",
    p1_n: "Abiri", p1_d: "Route optimization and fleet tracking.",
    faq_title: "Technical FAQ",
    q0: "How long does a typical project take?", a0: "Depends on scope; small sites in 2–6 weeks, larger platforms 3–6+ months.",
    q1: "Do you provide maintenance?", a1: "Yes — SLA-based support and managed services are available.",
    job0_t: "Senior Full Stack Engineer", job0_ty: "Remote / Nairobi", job0_d: "Engineering",
    voices_of_trust: "Voices of Trust", trust_desc: "Our partnerships are built on transparency, technical rigor, and consistent delivery.",
    ready_to_evolve: "Ready to Evolve", your_digital_dna: "Your Digital DNA?",
    cta_desc: "Let's discuss your next project. Free consultation, no obligation.",
    initiate_project: "Initiate Project", send_transmission: "Send Transmission",
    about_title: "About Eleviq Technologies",
    about_desc: "Based in Nairobi, Kenya, Eleviq helps organizations adopt modern software, AI, and cloud practices to accelerate growth.",
    process_title: "Our Development Process", stack_title: "Technology Stack",
    step_1: "Discovery & scoping", step_2: "Architecture & design", step_3: "Agile implementation", step_4: "QA, security & performance", step_5: "Launch & continued support",
    initiate_contact: "Initiate", contact_span: "Contact", contact_desc: "Have a high-stakes project in mind?",
    hq_location: "HQ Location", direct_transmission: "Direct Transmission", voice_line: "Voice Line",
    full_name: "Full Name", email_address: "Email Address", phone_optional: "Phone (Optional)", message_brief: "Message Brief",
    transmitting: "Transmitting...", send_contact: "Send Transmission",
    success_msg: "Transmission Successful.", error_msg: "Connection Error.",
    footer_desc: "Evolving with Technology. We build high-performance digital ecosystems.",
    company: "Company", navigation: "Navigation", connect: "Connect", newsletter: "Newsletter", subscribe: "Subscribe", all_rights: "All rights reserved.", handcrafted: "Handcrafted in Nairobi",
    join_evolution: "Join the Evolution", careers_desc: "We're looking for high-performance individuals.",
    open_positions: "Open Positions", apply_now: "Apply Now", dont_see_fit: "Don't see a fit?", exceptional_talent: "We're always looking for exceptional talent.",
    whatsapp_chat: "Chat with us",
    bot_greeting: "Hello! I'm Eleviq's AI Assistant. How can I help you today?",
    bot_select_q: "Select a question:",
    bot_faq_q1: "What services do you offer?",
    bot_faq_a1: "We specialize in Custom Software, AI Automation, Mobile Apps, and Cloud Solutions.",
    bot_faq_q2: "Where are you located?",
    bot_faq_a2: "Our headquarters are in Nairobi, Kenya, but we serve clients globally.",
    bot_faq_q3: "How do I get a quote?",
    bot_faq_a3: "You can use our contact form or chat with us on WhatsApp for a custom estimate.",
    bot_connect_human: "Talk to a human",
    bot_close: "Close"
  },
  sw: {
    home: "Nyumbani", about: "Kuhusu", services: "Huduma", portfolio: "Kazi", contact: "Wasiliana", hire_us: "Tuajiri", navigation: "Urambazaji",
    whatsapp_chat: "Zungumza nasi",
    bot_greeting: "Habari! Mimi ni msaidizi wa Eleviq. Nawezaje kukusaidia leo?",
    bot_select_q: "Chagua swali hapa chini:",
    bot_faq_q1: "Mnatoa huduma gani?",
    bot_faq_a1: "Tunajihusisha na Programu Maalum, AI, na Teknolojia ya Wingu.",
    bot_connect_human: "Ongea na mtu"
  },
  zh: {
    home: "首页", about: "关于", services: "服务", portfolio: "案例", contact: "联系", hire_us: "聘请我们", navigation: "导航",
    whatsapp_chat: "与我们聊天",
    bot_greeting: "您好！我是 Eleviq 的人工智能助手。今天我能帮您什么吗？",
    bot_select_q: "请选择一个问题：",
    bot_faq_q1: "你们提供哪些服务？",
    bot_faq_a1: "我们专注于定制软件、人工智能自动化、移动应用和云解决方案。",
    bot_connect_human: "联系人工客服"
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
  const getBrowserLang = () => {
    if (typeof navigator === 'undefined') return 'en';
    const navLang = navigator.language.split('-')[0];
    const supported = LANGUAGES.map(l => l.code);
    return supported.includes(navLang) ? navLang : 'en';
  };
  const [lang, setLang] = useState(localStorage.getItem('eleviq_lang') || getBrowserLang());
  useEffect(() => {
    if (!localStorage.getItem('eleviq_lang')) {
      localStorage.setItem('eleviq_lang', lang);
    }
  }, [lang]);
  const t = (key) => translations[lang]?.[key] || translations['en']?.[key] || key;
  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('eleviq_lang', newLang);
  };
  return { t, lang, changeLanguage };
}

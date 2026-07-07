import { useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", hire_us: "Hire Us", careers: "Careers", privacy: "Privacy", terms: "Terms", blog: "Blog", navigation: "Navigation", company: "Company", connect: "Connect", newsletter: "Newsletter", subscribe: "Subscribe",

    // Hero
    hero_status: "Status: Innovating", hero_title: "Evolving with", hero_span: "Technology", hero_desc: "We engineer high-performance software and AI solutions that transform startups into industry leaders. Precision, aesthetics, and results.", start_evolution: "Start Evolution", view_artifacts: "View Artifacts", efficiency_gain: "Efficiency Gain", velocity: "Velocity", projects_count: "Projects",

    // Home/Services
    capabilities: "Capabilities", engineered_for: "Precision Engineered", performance: "Digital Solutions", services_desc: "We bridge the gap between complex engineering and intuitive design.", view_all_services: "Exploration", discuss_project: "Discuss Project",

    // Home/Portfolio
    selected_artifacts: "Selected Artifacts", artifacts_desc: "Where high-stakes engineering meets high-end aesthetics.", flagship: "Flagship", case_study: "Case", deep_dive: "Deep Dive", operational_gain: "Operational Gain", operational_desc: "Average efficiency improvement delivered across our portfolio.", efficiency_metric: "27%",

    // Testimonials
    voices_of_trust: "Voices of Trust", trust_desc: "Our partnerships are built on transparency, technical rigor, and consistent delivery.", delivered_globally: "Delivered globally",

    // CTA
    ready_to_evolve: "Ready to Evolve", your_digital_dna: "Your Digital DNA?", cta_desc: "Let's discuss your next project. Free consultation, no obligation.", initiate_project: "Initiate Project", send_transmission: "Send Transmission",

    // About
    about_title: "About Eleviq Technologies", about_desc: "Based in Nairobi, Kenya, Eleviq helps organizations adopt modern software, AI, and cloud practices to accelerate growth. Our team focuses on design-led engineering, security, and measurable results.",
    milestone_0_y: "2019-2020", milestone_0_t: "The Genesis", milestone_0_d: "Eleviq was founded in Nairobi with a mission to bridge the gap between African innovation and global scale.",
    milestone_1_y: "2021", milestone_1_t: "Fintech Breakthrough", milestone_1_d: "We launched our first major route optimization platform, increasing efficiency for logistics partners by 27%.",
    milestone_2_y: "2022-2023", milestone_2_t: "AI Integration", milestone_2_d: "Shifted focus to AI-native applications, integrating machine learning into enterprise workflows across East Africa.",
    milestone_3_y: "2024", milestone_3_t: "Global Evolution", milestone_3_d: "Expanded our operations to support international partners while maintaining our core design-led engineering approach.",
    story_end: "Be Part Of Our Story!", process_title: "Our Development Process", stack_title: "Technology Stack",
    step_1: "Discovery & scoping", step_2: "Architecture & design", step_3: "Agile implementation", step_4: "QA, security & performance", step_5: "Launch & continued support",

    // Team
    team_title: "Our Amazing Team", team_tagline: "Precision minds at work", team_desc: "Our team is dedicated to engineering excellence, combining years of experience in high-stakes environments.",
    role_ce: "Chief Engineer", role_la: "Lead Architect", role_ha: "Head of AI",

    // Services
    s0_t: "Custom Software Development", s0_d: "Bespoke systems, APIs, and integrations tailored to your business needs.",
    s1_t: "Web Development", s1_d: "Modern, fast, and accessible websites and web apps.",
    s2_t: "Mobile App Development", s2_d: "Cross-platform and native mobile applications.",
    s3_t: "AI & Automation Solutions", s3_d: "ML models, automation pipelines, and RPA.",
    s4_t: "IT Consulting", s4_d: "Strategy, architecture, and technical leadership.",
    s5_t: "Cloud Solutions", s5_d: "Cloud migrations, infra-as-code, and ops.",
    s6_t: "Digital Marketing", s6_d: "Campaigns, analytics, and growth engineering.",
    s7_t: "SEO Optimization", s7_d: "Technical SEO and content strategies.",
    s8_t: "E-commerce Solutions", s8_d: "Platform builds, payments, and fulfillment integrations.",

    // FAQ
    faq_title: "Technical FAQ",
    q0: "How long does a typical project take?", a0: "Depends on scope; small sites in 2–6 weeks, larger platforms 3–6+ months.",
    q1: "Do you provide maintenance?", a1: "Yes — SLA-based support and managed services are available.",

    // Portfolio Data
    p0_n: "HobbyPlan", p0_d: "Hobby project management and monetization platform.",
    p1_n: "Abiri", p1_d: "Route optimization and fleet tracking.",
    p2_n: "AniTrace", p2_d: "Wildlife tracking and analytics.",
    p3_n: "AuraFlow", p3_d: "Workflow automation for enterprises.",
    p4_n: "FuaSmart", p4_d: "Farm analytics and decision support.",
    p5_n: "Property Management", p5_d: "Property listings, payments, and landlord tools.",
    portfolio_cta: "Interested in working with us?", start_conv: "Start Conversation",

    // Careers
    join_evolution: "Join the Evolution", careers_desc: "We're looking for high-performance individuals who want to build the future of digital ecosystems.",
    open_positions: "Open Positions", apply_now: "Apply Now", dont_see_fit: "Don't see a fit?", exceptional_talent: "We're always looking for exceptional talent. Send us a transmission.",
    job0_t: "Senior Full Stack Engineer", job0_ty: "Remote / Nairobi", job0_d: "Engineering",
    job1_t: "UI/UX Product Designer", job1_ty: "Remote", job1_d: "Design",
    job2_t: "AI/ML Specialist", job2_ty: "Nairobi", job2_d: "Data Science",
    job3_t: "Technical Project Manager", job3_ty: "Hybrid", job3_d: "Operations",

    // Contact
    initiate_contact: "Initiate", contact_span: "Contact", contact_desc: "Have a high-stakes project in mind? We're ready to engineer your evolution.",
    hq_location: "HQ Location", direct_transmission: "Direct Transmission", voice_line: "Voice Line", full_name: "Full Name", email_address: "Email Address", phone_optional: "Phone (Optional)", message_brief: "Message Brief", transmitting: "Transmitting...", send_contact: "Send Transmission",
    success_msg: "Transmission Successful. Our team will respond shortly.", error_msg: "Connection Error. Please retry or email directly.",

    // Footer
    footer_desc: "Evolving with Technology. We build high-performance digital ecosystems for global innovators.",
    all_rights: "All rights reserved.", handcrafted: "Handcrafted in Nairobi",

    // Bot
    whatsapp_chat: "Chat with us", bot_greeting: "Hello! I'm Eleviq's AI Assistant. How can I help you today?", bot_select_q: "Select a question:",
    bot_faq_q1: "What services do you offer?", bot_faq_a1: "We specialize in Custom Software, AI Automation, Mobile Apps, and Cloud Solutions.",
    bot_faq_q2: "Where are you located?", bot_faq_a2: "Our headquarters are in Nairobi, Kenya, but we serve clients globally.",
    bot_faq_q3: "How do I get a quote?", bot_faq_a3: "You can use our contact form or chat with us on WhatsApp for a custom estimate.",
    bot_connect_human: "Talk to a human", bot_close: "Close"
  },
  sw: {
    home: "Nyumbani", about: "Kuhusu", services: "Huduma", portfolio: "Kazi", contact: "Wasiliana", hire_us: "Tuajiri", careers: "Kazi", privacy: "Sera", terms: "Vigezo",
    hero_title: "Kukua na", hero_span: "Teknolojia", hero_desc: "Tunaunda programu na suluhisho za AI zenye utendaji wa juu zinazobadilisha biashara.",
    about_title: "Kuhusu Eleviq Technologies", about_desc: "Kulingana Nairobi, Kenya, Eleviq husaidia mashirika kufuata teknolojia ya kisasa.",
    milestone_0_t: "Mwanzo", milestone_0_d: "Eleviq ilianzishwa Nairobi kusaidia wavumbuzi wa Afrika.",
    story_end: "Kuwa Sehemu ya Hadithi Yetu!", team_title: "Timu Yetu ya Ajabu", team_tagline: "Akili za usahihi kazini",
    whatsapp_chat: "Zungumza nasi", bot_greeting: "Habari! Mimi ni msaidizi wa Eleviq. Nawezaje kukusaidia leo?", bot_connect_human: "Ongea na mtu",
    handcrafted: "Imeundwa Nairobi", all_rights: "Haki zote zimehifadhiwa."
  },
  zh: {
    home: "首页", about: "关于", services: "服务", portfolio: "案例", contact: "联系", hire_us: "聘请我们",
    hero_title: "与科技", hero_span: "共进", hero_desc: "我们设计高性能的软件和人工智能解决方案，帮助初创企业成长。",
    about_title: "关于 Eleviq Technologies", about_desc: "Eleviq 总部位于肯尼亚内罗毕，帮助组织采用现代技术。",
    milestone_0_t: "起源", milestone_0_d: "Eleviq 在内罗毕成立，旨在桥接非洲创新与全球规模。",
    story_end: "成为我们故事的一部分！", team_title: "我们优秀的团队", team_tagline: "精密思维，卓越表现",
    whatsapp_chat: "与我们聊天", bot_greeting: "您好！我是 Eleviq 的人工智能助手。", bot_connect_human: "联系人工客服",
    handcrafted: "内罗毕精诚打造", all_rights: "版权所有。"
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

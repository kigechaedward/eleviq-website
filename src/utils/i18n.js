import { useState, useEffect } from 'react';

const translations = {
  en: {
    home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", hire_us: "Hire Us", careers: "Careers", privacy: "Privacy", terms: "Terms", blog: "Blog",
    hero_status: "Status: Innovating", hero_title: "Evolving with", hero_span: "Technology", hero_desc: "We engineer high-performance software and AI solutions.", start_evolution: "Start Evolution", view_artifacts: "View Artifacts", efficiency_metric: "27%", operational_gain: "Operational Gain", operational_desc: "Average efficiency improvement delivered across our portfolio.",
    capabilities: "Capabilities", engineered_for: "Precision Engineered", performance: "Digital Solutions", services_desc: "We bridge the gap between complex engineering and intuitive design.", view_all_services: "Exploration", discuss_project: "Discuss Project", selected_artifacts: "Selected Artifacts", artifacts_desc: "Where high-stakes engineering meets high-end aesthetics.",
    ready_to_evolve: "Ready to Evolve", your_digital_dna: "Your Digital DNA?", cta_desc: "Let's build something extraordinary together. From concept to deployment, we engineer solutions that scale.", initiate_project: "Initiate Project", send_transmission: "Send Transmission",
    flagship: "Flagship", case_study: "Case", deep_dive: "Deep Dive", stack_title: "Technology Stack", process_title: "Our Development Process",
    role_ce: "Chief Engineer", role_la: "Lead Architect", role_ha: "Head of AI", team_title: "Our Amazing Team", team_tagline: "Precision minds at work", team_desc: "Our team is dedicated to engineering excellence.",
    about_title: "About Eleviq Technologies", about_desc: "Based in Nairobi, Kenya, Eleviq helps organizations adopt modern software.",
    milestone_0_y: "2019-2020", milestone_0_t: "The Genesis", milestone_0_d: "Eleviq was founded in Nairobi.",
    milestone_1_y: "2021", milestone_1_t: "Fintech Breakthrough", milestone_1_d: "We launched our first major platform.",
    milestone_2_y: "2022-2023", milestone_2_t: "AI Integration", milestone_2_d: "Shifted focus to AI-native applications.",
    milestone_3_y: "2024", milestone_3_t: "Global Evolution", milestone_3_d: "Expanded operations globally.",
    story_end: "Be Part Of Our Story!", portfolio_cta: "Interested in working with us?", start_conv: "Start Conversation",
    initiate_contact: "Initiate", contact_span: "Contact", contact_desc: "Have a high-stakes project in mind?",
    hq_location: "HQ Location", direct_transmission: "Direct Transmission", voice_line: "Voice Line", full_name: "Full Name", email_address: "Email Address", phone_optional: "Phone (Optional)", message_brief: "Message Brief",
    transmitting: "Transmitting...", send_contact: "Send Transmission", success_msg: "Transmission Successful.", error_msg: "Connection Error.",
    footer_desc: "Evolving with Technology. We build high-performance digital ecosystems.", all_rights: "All rights reserved.", handcrafted: "Handcrafted in Nairobi",
    join_evolution: "Join the Evolution", careers_desc: "We're looking for high-performance individuals.", open_positions: "Open Positions", apply_now: "Apply Now", dont_see_fit: "Don't see a fit?", exceptional_talent: "We're always looking for exceptional talent.",
    faq_title: "Frequently Asked Questions", q0: "What services do you offer?", a0: "We specialize in Custom Software, AI, and Cloud solutions tailored to your business needs.", q1: "How long does a typical project take?", a1: "Timelines vary, but most projects run 4-12 weeks from discovery to deployment.",
    bot_faq_q2: "Do you work with startups?", bot_faq_a2: "Yes! We work with startups and enterprises alike. Our agile approach fits any team size.", bot_faq_q3: "What is your pricing model?", bot_faq_a3: "We offer fixed-price and time-and-materials models depending on project scope. Let's discuss what fits best.",
    whatsapp_chat: "Chat with us", bot_greeting: "Hello! I'm Eleviq's AI Assistant.", bot_select_q: "Select a question:", bot_faq_q1: "What services do you offer?", bot_faq_a1: "We specialize in Custom Software, AI, and Cloud.", bot_connect_human: "Talk to a human", bot_back: "Back to questions", bot_close: "Close"
  },
  sw: {
    home: "Nyumbani", about: "Kuhusu", services: "Huduma", portfolio: "Kazi", contact: "Wasiliana", hire_us: "Tuajiri", careers: "Kazi", privacy: "Sera", terms: "Vigezo",
    hero_title: "Kukua na", hero_span: "Teknolojia", hero_desc: "Tunaunda programu na suluhisho za AI.",
    about_title: "Kuhusu Eleviq Technologies", about_desc: "Kulingana Nairobi, Kenya, Eleviq husaidia mashirika.",
    milestone_0_t: "Mwanzo", milestone_0_d: "Eleviq ilianzishwa Nairobi.", story_end: "Kuwa Sehemu ya Hadithi Yetu!",
    team_title: "Timu Yetu", team_tagline: "Akili za usahihi", whatsapp_chat: "Zungumza nasi", bot_greeting: "Habari! Mimi ni msaidizi wa Eleviq.", bot_connect_human: "Ongea na mtu", bot_back: "Rudi kwenye maswali",
    handcrafted: "Imeundwa Nairobi", all_rights: "Haki zote zimehifadhiwa."
  },
  zh: {
    home: "首页", about: "关于", services: "服务", portfolio: "案例", contact: "联系", hire_us: "聘请我们",
    hero_title: "与科技", hero_span: "共进", about_title: "关于 Eleviq Technologies", milestone_0_t: "起源", story_end: "成为我们故事的一部分！",
    team_title: "我们的团队", whatsapp_chat: "与我们聊天", bot_greeting: "您好！我是 Eleviq 的人工智能助手。", bot_connect_human: "联系人工客服", bot_back: "返回问题列表",
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

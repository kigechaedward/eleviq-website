import { useState, useEffect } from 'react';

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    hire_us: "Hire Us",
    hero_title: "Evolving with",
    hero_span: "Technology",
    hero_desc: "We engineer high-performance software and AI solutions that transform startups into industry leaders. Precision, aesthetics, and results.",
    start_evolution: "Start Evolution",
    view_artifacts: "View Artifacts",
    capabilities: "Capabilities",
    engineered_for: "Engineered for",
    performance: "Performance",
    view_all_services: "View all services",
    discuss_project: "Discuss Project",
    selected_artifacts: "Selected Artifacts",
    deep_dive: "Deep Dive",
    efficiency_gain: "Efficiency Gain",
    operational_gain: "Operational Gain",
    footer_desc: "Evolving with Technology. We build high-performance digital ecosystems for global innovators."
  },
  es: {
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    portfolio: "Portafolio",
    contact: "Contacto",
    hire_us: "Contrátanos",
    hero_title: "Evolucionando con",
    hero_span: "Tecnología",
    hero_desc: "Diseñamos soluciones de software e IA de alto rendimiento que transforman startups en líderes de la industria. Precisión, estética y resultados.",
    start_evolution: "Iniciar Evolución",
    view_artifacts: "Ver Proyectos",
    capabilities: "Capacidades",
    engineered_for: "Diseñado para el",
    performance: "Rendimiento",
    view_all_services: "Ver todos los servicios",
    discuss_project: "Discutir Proyecto",
    selected_artifacts: "Proyectos Seleccionados",
    deep_dive: "Ver más",
    efficiency_gain: "Ganancia de Eficiencia",
    operational_gain: "Ganancia Operativa",
    footer_desc: "Evolucionando con la Tecnología. Construimos ecosistemas digitales de alto rendimiento para innovadores globales."
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    hire_us: "Recrutez-nous",
    hero_title: "Évoluer avec la",
    hero_span: "Technologie",
    hero_desc: "Nous concevons des solutions logicielles et d'IA haute performance qui transforment les startups en leaders du secteur. Précision, esthétique et résultats.",
    start_evolution: "Démarrer l'évolution",
    view_artifacts: "Voir les projets",
    capabilities: "Capacités",
    engineered_for: "Conçu pour la",
    performance: "Performance",
    view_all_services: "Voir tous les services",
    discuss_project: "Discuter du projet",
    selected_artifacts: "Projets sélectionnés",
    deep_dive: "En savoir plus",
    efficiency_gain: "Gain d'efficacité",
    operational_gain: "Gain opérationnel",
    footer_desc: "Évoluer avec la technologie. Nous construisons des écosystèmes numériques performants pour les innovateurs mondiaux."
  },
  sw: {
    home: "Nyumbani",
    about: "Kuhusu",
    services: "Huduma",
    portfolio: "Kazi zetu",
    contact: "Wasiliana",
    hire_us: "Tuajiri",
    hero_title: "Kukua na",
    hero_span: "Teknolojia",
    hero_desc: "Tunaunda programu na suluhisho za AI zenye utendaji wa juu zinazobadilisha biashara changanga kuwa viongozi wa sekta. Usahihi, urembo, na matokeo.",
    start_evolution: "Anza Mapinduzi",
    view_artifacts: "Tazama Kazi",
    capabilities: "Uwezo Wetu",
    engineered_for: "Imeundwa kwa",
    performance: "Utendaji Bora",
    view_all_services: "Tazama huduma zote",
    discuss_project: "Jadili Mradi",
    selected_artifacts: "Kazi Zilizoteuliwa",
    deep_dive: "Angalia Zaidi",
    efficiency_gain: "Ongezeko la Ufanisi",
    operational_gain: "Ufanisi wa Kazi",
    footer_desc: "Kukua na Teknolojia. Tunajenga mifumo ya kidijitali ya utendaji wa juu kwa wavumbuzi wa kimataifa."
  }
};

export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'sw', label: 'Kiswahili', flag: '🇰🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];

export function useTranslation() {
  const [lang, setLang] = useState(localStorage.getItem('eleviq_lang') || 'en');

  const t = (key) => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem('eleviq_lang', newLang);
  };

  return { t, lang, changeLanguage };
}

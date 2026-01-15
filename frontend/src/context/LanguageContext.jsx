import { createContext, useState } from "react";

export const LanguageContext = createContext();

const translations = {
  EN: {
    navbar: {
      home: "Home",
      events: "Events",
      about: "About",
    },
    footer: {
      tagline: "Find, create and book events across Sweden",
      quickLinks: "Quick Links",
      home: "Home",
      events: "Browse Events",
      about: "About Us",
      host: "Host An Event",
      support: "Support",
      help: "Help Center",
      contact: "Contact",
      faq: "FAQ",
      terms: "Terms Of Service",
      followUs: "Follow Us",
      copyright: "© 2026 EventHub. All rights reserved.",
    },
    howItWorks: {
      title: "How it Works",
      subtitle: "Three simple steps to your next adventure",
    },
  },
  SV: {
    navbar: {
      home: "Hem",
      events: "Evenemang",
      about: "Om",
    },
    footer: {
      tagline: "Hitta, skapa och boka evenemang i hela Sverige",
      quickLinks: "Snabblänkar",
      home: "Hem",
      events: "Evenemang",
      about: "Om oss",
      host: "Skapa evenemang",
      support: "Support",
      help: "Hjälpcenter",
      contact: "Kontakt",
      faq: "FAQ",
      terms: "Användarvillkor",
      followUs: "Följ oss",
      copyright: "EventHub. Alla rättigheter förbehållna.",
    },
    howItWorks: {
      title: "Hur det fungerar",
      subtitle: "Tre enkla steg till ditt nästa äventyr",
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("EN");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

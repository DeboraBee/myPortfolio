import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Language, translations } from "@/lib/translations";

const AVAILABLE_LANGUAGES = ["pt-BR", "en", "es", "fr"] as const;

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (path: string) => string;
  mounted: boolean;
  availableLanguages: typeof AVAILABLE_LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("portfolio-language") as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "en") {
        setLanguage("en");
      } else if (browserLang === "es") {
        setLanguage("es");
      } else if (browserLang === "fr") {
        setLanguage("fr");
      }
      // Default to pt-BR if not matched
    }
    setMounted(true);
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let value: any = translations[language];

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return path; // Return the path if translation not found
      }
    }

    return typeof value === "string" ? value : path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
        mounted,
        availableLanguages: AVAILABLE_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

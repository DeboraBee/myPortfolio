import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const { language, changeLanguage, t, availableLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  const navItems = [
    { key: "about", label: t("nav.about") },
    { key: "skills", label: t("nav.skills") },
    { key: "experience", label: t("nav.experience") },
    { key: "education", label: t("nav.education") },
    { key: "projects", label: t("nav.projects") },
    { key: "contact", label: t("nav.contact") },
  ];

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline">
            Débora
          </span>
        </div>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                title={t("language.select")}
                className="relative"
              >
                <Globe className="w-5 h-5" />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs flex items-center justify-center text-primary-foreground font-bold text-[10px]">
                  {language === "pt-BR" ? "PT" : language.toUpperCase()}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {availableLanguages.map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={language === lang ? "bg-secondary" : ""}
                >
                  {lang === "pt-BR"
                    ? t("language.portuguese")
                    : lang === "en"
                      ? t("language.english")
                      : lang === "es"
                        ? t("language.spanish")
                        : t("language.french")}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title={t("theme.toggle")}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t border-border">
        <div className="container flex flex-wrap gap-1 py-2">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className="px-2 py-1 text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-secondary rounded-md transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

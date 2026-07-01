import { useLanguage } from "@/hooks/useLanguage";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-primary/10">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">D</span>
                </div>
                <span className="font-bold text-foreground">Débora</span>
              </div>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                {[
                  { name: t("nav.about"), id: "about" },
                  { name: t("nav.skills"), id: "skills" },
                  { name: t("nav.experience"), id: "experience" },
                  { name: t("nav.projects"), id: "projects" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">{t("footer.connect")}</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/DeboraBee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/debora-laranjeira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:deboraasilvaa79@gmail.com"
                  className="p-3 rounded-lg bg-background hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/10 my-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
            <p>
              © {currentYear} Débora Laranjeira. {t("footer.copyright")}
            </p>
            <p>
              {t("footer.madeWith")} ❤️ {t("footer.builtWith")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

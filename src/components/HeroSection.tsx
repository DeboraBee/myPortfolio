import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-xl text-primary font-semibold">
                {t("hero.subtitle")}
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                {t("hero.description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold"
                onClick={() => handleScroll("projects")}
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll("contact")}
              >
                {t("contact.title")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/DeboraBee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/debora-laranjeira/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:deboraasilvaa79@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-200"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl"></div>

            <div className="relative w-full max-w-sm aspect-square">
              {/* Para adicionar a foto de perfil, troque este bloco por:
                  <img src={fotoUrl} alt="Débora Laranjeira" className="w-full h-full object-cover rounded-2xl" /> */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-5xl">📸</span>
                  </div>
                  <p className="text-foreground/60 font-medium">
                    {t("hero.photoPlaceholder")}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

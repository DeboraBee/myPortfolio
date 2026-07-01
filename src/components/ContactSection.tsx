import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "deboraasilvaa79@gmail.com",
      href: "mailto:deboraasilvaa79@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+55 14 98822-1987",
      href: "tel:+5514988221987",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "Débora Laranjeira",
      href: "https://www.linkedin.com/in/debora-laranjeira/",
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "DeboraBee",
      href: "https://github.com/DeboraBee",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("contact.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg text-foreground/70">
              {t("contact.description")}
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group p-6 bg-background rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg hover:bg-secondary"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/60">
                        {contact.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                {t("contact.ctaTitle")}
              </h3>
              <p className="text-foreground/70">
                {t("contact.ctaDescription")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:deboraasilvaa79@gmail.com">
                <Button className="w-full sm:w-auto">
                  {t("contact.sendMessage")}
                  <Mail className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/debora-laranjeira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full sm:w-auto">
                  {t("contact.connectLinkedin")}
                  <Linkedin className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

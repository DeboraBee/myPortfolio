import { useLanguage } from "@/hooks/useLanguage";
import { Badge } from "@/components/ui/badge";
import { translations } from "@/lib/translations";
import { CheckCircle2, BookOpen } from "lucide-react";

export default function EducationSection() {
  const { t, language } = useLanguage();
  const educationItems = translations[language].education.items;

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("education.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Education Items */}
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {item.status === "completed" ? (
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    ) : (
                      <BookOpen className="w-6 h-6 text-primary" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {item.degree}
                        </h3>
                        <p className="text-primary font-semibold">
                          {item.institution}
                        </p>
                      </div>
                      <Badge
                        className={`whitespace-nowrap ${
                          item.status === "completed"
                            ? "bg-green-500/10 text-green-700 border border-green-500/30"
                            : "bg-primary/10 text-primary border border-primary/30"
                        }`}
                      >
                        {item.status === "completed"
                          ? t("education.completed")
                          : t("education.ongoing")}
                      </Badge>
                    </div>

                    <p className="text-foreground/70">{item.period}</p>

                    {"highlight" in item && item.highlight && (
                      <div className="pt-2 pl-4 border-l-2 border-primary/30">
                        <p className="text-sm text-foreground/80 italic">
                          ✨ {item.highlight}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

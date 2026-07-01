import { useLanguage } from "@/hooks/useLanguage";
import { Badge } from "@/components/ui/badge";
import { translations } from "@/lib/translations";

export default function ExperienceSection() {
  const { t, language } = useLanguage();
  const experiences = translations[language].experience.roles;

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("experience.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1.5 md:-translate-x-2"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-1/2 md:pr-12" : "md:ml-1/2 md:pl-12"}`}>
                  <div className="bg-secondary rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-200 hover:shadow-lg">
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.position}
                          </h3>
                          <p className="text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <Badge className="bg-primary/10 text-primary border border-primary/30 whitespace-nowrap">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed">
                      {exp.description}
                    </p>
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

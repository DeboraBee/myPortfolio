import { useLanguage } from "@/hooks/useLanguage";
import { Badge } from "@/components/ui/badge";
import { translations } from "@/lib/translations";

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const {
    technicalList: technicalSkills,
    toolsList: tools,
    languagesList: languages,
    certificationsList: certifications,
  } = translations[language].skills;

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("skills.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t("skills.technical")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 px-4 py-2 text-sm font-medium cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t("skills.tools")}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <Badge
                    key={tool}
                    className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 px-4 py-2 text-sm font-medium cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              {t("skills.languages")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 bg-background rounded-lg border border-primary/10 hover:border-primary/30 transition-colors duration-200"
                >
                  <p className="font-semibold text-foreground">{lang.name}</p>
                  <p className="text-sm text-foreground/60">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              {t("skills.certifications")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-background rounded-lg border border-primary/10 hover:border-primary/30 transition-colors duration-200 flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground/80">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

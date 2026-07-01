import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export default function AboutSection() {
  const { t, language } = useLanguage();
  const stats = translations[language].about.stats;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("about.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main description */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t("about.description")}
              </p>

              <div className="p-6 bg-secondary rounded-xl border border-primary/10">
                <p className="text-foreground font-semibold italic">
                  "{t("about.highlight")}"
                </p>
              </div>
            </div>

            {/* Key stats */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-secondary rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-200"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <p className="text-foreground/70 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

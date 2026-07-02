import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import arcangelLogoDark from "@/assets/arcangel-logo.png";
import arcangelLogoLight from "@/assets/arcangel-logo-light.png";
import simuladorRHLogo from "@/assets/simuladorrh-logo.png";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const projects = [
    {
      id: "tech",
      title: t("projects.technology.title"),
      description: t("projects.technology.description"),
      tags: ["Flutter", "Dart", "Supabase"],
      image: theme === "dark" ? arcangelLogoDark : arcangelLogoLight,
      projectUrl: "https://arcangels.uk/#/login",
      codeUrl: "https://github.com/Projeto-Arcangel",
    },
    {
      id: "data",
      title: t("projects.data.title"),
      description: t("projects.data.description"),
      tags: ["Python", "SQL", "PowerBI"],
      image: simuladorRHLogo,
      projectUrl: "https://generationbr.github.io/Projeto-People-Analytics/",
      codeUrl: "https://github.com/GenerationBR/Projeto-People-Analytics",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t("projects.title")}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-secondary rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="relative w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-32 h-32 object-contain"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-primary/10 text-primary border border-primary/30 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full">
                          {t("projects.viewProject")}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    ) : (
                      <Button size="sm" className="flex-1" disabled>
                        {t("projects.viewProject")}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}

                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" variant="outline" className="w-full">
                          {t("projects.viewCode")}
                          <Github className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    ) : (
                      <Button size="sm" variant="outline" className="flex-1" disabled>
                        {t("projects.viewCode")}
                        <Github className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-secondary/50 rounded-lg p-8 border border-primary/10 text-center space-y-4">
            <p className="text-foreground/80">
              {t("projects.moreProjects")}
            </p>
            <a
              href="https://github.com/DeboraBee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                {t("projects.visitGithub")}
                <Github className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

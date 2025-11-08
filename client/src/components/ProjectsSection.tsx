import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import type { Project, ProjectCategory } from "@shared/portfolio-schema";

interface ProjectsSectionProps {
  projects: Project[];
}

type FilterOption = "all" | ProjectCategory;

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const filters: { value: FilterOption; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text" data-testid="text-projects-title">
            Projets en Vedette
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes meilleurs travaux et réalisations
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <Button
              key={filterOption.value}
              variant={filter === filterOption.value ? "default" : "outline"}
              onClick={() => {
                setFilter(filterOption.value);
                setShowAll(false);
              }}
              data-testid={`button-filter-${filterOption.value}`}
            >
              {filterOption.label}
            </Button>
          ))}
        </div>

        {displayedProjects.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Aucun projet trouvé
            </h3>
            <p className="text-muted-foreground">
              Essayez d'ajuster vos critères de recherche ou de filtre
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {filteredProjects.length > 6 && !showAll && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(true)}
                  data-testid="button-load-more"
                >
                  Charger Plus de Projets
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

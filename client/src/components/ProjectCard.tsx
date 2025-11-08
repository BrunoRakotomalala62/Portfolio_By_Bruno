import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { Project } from "@shared/portfolio-schema";

interface ProjectCardProps {
  project: Project;
}

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate group" data-testid={`card-project-${project.id}`}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-project-${project.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground" data-testid={`text-project-title-${project.id}`}>
            {project.title}
          </h3>
          <Badge variant="secondary" data-testid={`badge-project-category-${project.id}`}>
            {categoryLabels[project.category]}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs"
              data-testid={`badge-project-tech-${project.id}-${index}`}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {project.liveUrl && (
          <Button
            variant="default"
            size="sm"
            className="w-full"
            onClick={() => window.open(project.liveUrl, '_blank')}
            data-testid={`button-project-live-${project.id}`}
          >
            Voir le Projet
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  );
}

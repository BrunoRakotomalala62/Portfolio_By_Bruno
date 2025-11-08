import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Skill } from "@shared/portfolio-schema";

interface SkillCardProps {
  skill: Skill;
}

const levelColors = {
  Expert: "bg-primary text-primary-foreground",
  Advanced: "bg-chart-3 text-white",
  Intermediate: "bg-chart-2 text-white",
  Beginner: "bg-muted text-muted-foreground",
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="p-6 space-y-4 hover-elevate" data-testid={`card-skill-${skill.id}`}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-foreground" data-testid={`text-skill-name-${skill.id}`}>
          {skill.name}
        </h3>
        <Badge className={levelColors[skill.level]} data-testid={`badge-skill-level-${skill.id}`}>
          {skill.level}
        </Badge>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Niveau de maîtrise</span>
          <span className="font-semibold text-foreground" data-testid={`text-skill-percentage-${skill.id}`}>
            {skill.percentage}%
          </span>
        </div>
        <Progress value={skill.percentage} className="h-2" data-testid={`progress-skill-${skill.id}`} />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-skill-description-${skill.id}`}>
        {skill.description}
      </p>
    </Card>
  );
}

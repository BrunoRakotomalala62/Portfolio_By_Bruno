import SkillCard from "./SkillCard";
import type { Skill } from "@shared/portfolio-schema";

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-24 px-6 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text" data-testid="text-skills-title">
            Mes Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et niveaux de maîtrise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

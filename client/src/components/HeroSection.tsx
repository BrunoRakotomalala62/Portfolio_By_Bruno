import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  onViewWork: () => void;
}

export default function HeroSection({ name, title, description, imageUrl, onViewWork }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="w-40 h-40 rounded-full border-4 border-primary/20 object-cover"
            data-testid="img-profile"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold font-heading text-foreground" data-testid="text-name">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground" data-testid="text-title">
            {title}
          </h2>
        </div>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed" data-testid="text-description">
          {description}
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            onClick={onViewWork}
            className="px-8 py-6 text-lg"
            data-testid="button-view-work"
          >
            Voir Mes Projets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

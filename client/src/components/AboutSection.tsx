import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import type { Profile } from "@shared/portfolio-schema";

interface AboutSectionProps {
  profile: Profile;
}

export default function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section className="py-24 px-6 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text" data-testid="text-about-title">
            À Propos de Moi
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed" data-testid="text-about-bio">
              {profile.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Localisation</span>
                </div>
                <p className="text-foreground" data-testid="text-about-location">
                  {profile.location}
                </p>
              </Card>

              <Card className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Expérience</span>
                </div>
                <p className="text-foreground" data-testid="text-about-experience">
                  {profile.experience}
                </p>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full max-w-md rounded-lg"
              data-testid="img-about-profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

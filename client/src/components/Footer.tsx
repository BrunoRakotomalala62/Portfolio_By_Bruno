import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin } from "lucide-react";

interface FooterProps {
  socialLinks?: {
    facebook?: string;
    github?: string;
    linkedin?: string;
  };
}

export default function Footer({ socialLinks = {} }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-3">
            {socialLinks.facebook && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.facebook, '_blank')}
                data-testid="button-social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            )}
            {socialLinks.github && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.github, '_blank')}
                data-testid="button-social-github"
              >
                <Github className="h-5 w-5" />
              </Button>
            )}
            {socialLinks.linkedin && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => window.open(socialLinks.linkedin, '_blank')}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            )}
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © {currentYear} Portfolio. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

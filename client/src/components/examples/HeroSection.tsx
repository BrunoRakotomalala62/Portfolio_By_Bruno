import HeroSection from '../HeroSection';
import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_415223e3.png';

export default function HeroSectionExample() {
  return (
    <HeroSection
      name="Votre Nom"
      title="Développeur Web"
      description="Un développeur passionné et autodidacte avec un talent pour créer des solutions web créatives. Je me concentre sur le développement backend, la création d'APIs, le web scraping et le reverse engineering."
      imageUrl={profileImage}
      onViewWork={() => console.log('View work clicked')}
    />
  );
}

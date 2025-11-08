import AboutSection from '../AboutSection';
import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_415223e3.png';

export default function AboutSectionExample() {
  const profile = {
    name: 'Votre Nom',
    title: 'Développeur Web',
    description: 'Un développeur passionné créant des solutions web innovantes.',
    bio: 'Bonjour ! Je suis un développeur autodidacte enthousiaste, passionné par la transformation d\'idées en solutions web innovantes. Mes forces résident dans le développement backend, la création d\'API, le web scraping et le reverse engineering de systèmes pour comprendre leur fonctionnement. J\'aime travailler à la fois sur le frontend et le backend, mais mon objectif principal est de créer des API efficaces, de relever des défis de web scraping et d\'explorer des challenges de reverse engineering. Je suis toujours désireux d\'apprendre de nouvelles technologies et de contribuer à des projets qui font la différence.',
    location: 'France',
    experience: '5+ années',
    imageUrl: profileImage,
    socialLinks: {},
  };

  return <AboutSection profile={profile} />;
}

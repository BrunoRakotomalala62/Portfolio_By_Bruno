import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

import profileImage from '@assets/generated_images/Professional_developer_headshot_portrait_415223e3.png';
import aiWebImage from '@assets/generated_images/AI_chatbot_web_interface_1e37b208.png';
import fbBotImage from '@assets/generated_images/Facebook_messenger_bot_interface_df37fbb7.png';
import apiImage from '@assets/generated_images/REST_API_documentation_display_f0daa213.png';
import animeGenImage from '@assets/generated_images/Anime_image_generator_tool_de2c50b7.png';
import animeStreamImage from '@assets/generated_images/Anime_streaming_platform_interface_3a449f14.png';
import fbShareImage from '@assets/generated_images/Facebook_share_boost_tool_9d924c3a.png';

export default function Home() {
  const profile = {
    name: 'Bruno Rakotomalala',
    title: 'Développeur Web',
    description: 'Un développeur passionné et autodidacte avec un talent pour créer des solutions web créatives. Je me concentre sur le développement backend, la création d\'APIs, le web scraping et le reverse engineering.',
    bio: 'Bonjour ! Je suis un développeur autodidacte enthousiaste, passionné par la transformation d\'idées en solutions web innovantes. Mes forces résident dans le développement backend, la création d\'API, le web scraping et le reverse engineering de systèmes pour comprendre leur fonctionnement. J\'aime travailler à la fois sur le frontend et le backend, mais mon objectif principal est de créer des API efficaces, de relever des défis de web scraping et d\'explorer des challenges de reverse engineering. Je suis toujours désireux d\'apprendre de nouvelles technologies et de contribuer à des projets qui font la différence.',
    location: 'France',
    experience: '5+ années',
    imageUrl: profileImage,
    socialLinks: {
      facebook: 'https://facebook.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  };

  const skills = [
    {
      id: '1',
      name: 'JavaScript',
      level: 'Expert' as const,
      percentage: 90,
      description: 'Développeur JavaScript avancé avec expertise en ES6+, programmation asynchrone et frameworks modernes.',
    },
    {
      id: '2',
      name: 'Node.js',
      level: 'Advanced' as const,
      percentage: 85,
      description: 'Expérience dans la création d\'applications serveur évolutives et d\'APIs RESTful avec Node.js.',
    },
    {
      id: '3',
      name: 'Express.js',
      level: 'Advanced' as const,
      percentage: 80,
      description: 'Compétent dans la création d\'applications web robustes et d\'APIs utilisant le framework Express.js.',
    },
    {
      id: '4',
      name: 'MongoDB',
      level: 'Advanced' as const,
      percentage: 80,
      description: 'Compétent en conception de bases de données NoSQL, requêtes et modélisation de données avec MongoDB.',
    },
    {
      id: '5',
      name: 'HTML5',
      level: 'Expert' as const,
      percentage: 95,
      description: 'Expert en balisage HTML5 sémantique, normes d\'accessibilité et structure web moderne.',
    },
    {
      id: '6',
      name: 'CSS3',
      level: 'Expert' as const,
      percentage: 90,
      description: 'Compétences CSS3 avancées incluant Flexbox, Grid, animations et design responsive.',
    },
    {
      id: '7',
      name: 'React',
      level: 'Advanced' as const,
      percentage: 85,
      description: 'Développeur React expérimenté avec connaissance des hooks, context et patterns React modernes.',
    },
    {
      id: '8',
      name: 'Git',
      level: 'Advanced' as const,
      percentage: 85,
      description: 'Compétent en contrôle de version, stratégies de branches et flux de développement collaboratif.',
    },
    {
      id: '9',
      name: 'Python',
      level: 'Beginner' as const,
      percentage: 50,
      description: 'Apprentissage de Python pour l\'analyse de données, l\'automatisation et l\'expansion de ma boîte à outils.',
    },
  ];

  const projects = [
    {
      id: '1',
      title: 'AI WEB',
      category: 'frontend' as const,
      description: 'Un chatbot web simple et interactif.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
      imageUrl: aiWebImage,
      liveUrl: 'https://p-six-mu.vercel.app/',
    },
    {
      id: '2',
      title: 'FB AUTOBOT',
      category: 'frontend' as const,
      description: 'Chatbot automatisé pour gérer les demandes clients sur Facebook Messenger.',
      technologies: ['Node.js', 'Facebook Messenger API', 'AI Tools'],
      imageUrl: fbBotImage,
      liveUrl: '#',
    },
    {
      id: '3',
      title: 'Rest API',
      category: 'backend' as const,
      description: 'Une API REST publique gratuite.',
      technologies: ['Node.js', 'Express', 'Fastify'],
      imageUrl: apiImage,
      liveUrl: '#',
    },
    {
      id: '4',
      title: 'Générateur d\'Images Anime',
      category: 'frontend' as const,
      description: 'Générateur d\'images anime IA gratuit.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Anime'],
      imageUrl: animeGenImage,
      liveUrl: '#',
    },
    {
      id: '5',
      title: 'Streaming Anime',
      category: 'frontend' as const,
      description: 'Regarder des animes sans publicités.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Anime'],
      imageUrl: animeStreamImage,
      liveUrl: '#',
    },
    {
      id: '6',
      title: 'FB SPAMSHARE',
      category: 'frontend' as const,
      description: 'Booster les partages sur les publications Facebook.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Socket.io', 'Express'],
      imageUrl: fbShareImage,
      liveUrl: '#',
    },
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection
        name={profile.name}
        title={profile.title}
        description={profile.description}
        imageUrl={profile.imageUrl}
        onViewWork={scrollToProjects}
      />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <AboutSection profile={profile} />
      <Footer socialLinks={profile.socialLinks} />
    </div>
  );
}

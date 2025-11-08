import ProjectsSection from '../ProjectsSection';
import aiWebImage from '@assets/generated_images/AI_chatbot_web_interface_1e37b208.png';
import fbBotImage from '@assets/generated_images/Facebook_messenger_bot_interface_df37fbb7.png';
import apiImage from '@assets/generated_images/REST_API_documentation_display_f0daa213.png';
import animeGenImage from '@assets/generated_images/Anime_image_generator_tool_de2c50b7.png';
import animeStreamImage from '@assets/generated_images/Anime_streaming_platform_interface_3a449f14.png';
import fbShareImage from '@assets/generated_images/Facebook_share_boost_tool_9d924c3a.png';

export default function ProjectsSectionExample() {
  const projects = [
    {
      id: '1',
      title: 'AI WEB',
      category: 'frontend' as const,
      description: 'Un chatbot web simple et interactif.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
      imageUrl: aiWebImage,
      liveUrl: 'https://example.com',
    },
    {
      id: '2',
      title: 'FB AUTOBOT',
      category: 'frontend' as const,
      description: 'Chatbot automatisé pour gérer les demandes clients sur Facebook Messenger.',
      technologies: ['Node.js', 'Facebook Messenger API', 'AI Tools'],
      imageUrl: fbBotImage,
      liveUrl: 'https://example.com',
    },
    {
      id: '3',
      title: 'Rest API',
      category: 'backend' as const,
      description: 'Une API REST publique gratuite.',
      technologies: ['Node.js', 'Express', 'Fastify'],
      imageUrl: apiImage,
      liveUrl: 'https://example.com',
    },
    {
      id: '4',
      title: 'Générateur d\'Images Anime',
      category: 'frontend' as const,
      description: 'Générateur d\'images anime IA gratuit.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Anime'],
      imageUrl: animeGenImage,
      liveUrl: 'https://example.com',
    },
    {
      id: '5',
      title: 'Streaming Anime',
      category: 'frontend' as const,
      description: 'Regarder des animes sans publicités.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Anime'],
      imageUrl: animeStreamImage,
      liveUrl: 'https://example.com',
    },
    {
      id: '6',
      title: 'FB SPAMSHARE',
      category: 'frontend' as const,
      description: 'Booster les partages sur les publications Facebook.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Socket.io', 'Express'],
      imageUrl: fbShareImage,
      liveUrl: 'https://example.com',
    },
  ];

  return <ProjectsSection projects={projects} />;
}

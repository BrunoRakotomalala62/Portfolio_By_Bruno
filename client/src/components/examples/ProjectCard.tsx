import ProjectCard from '../ProjectCard';
import aiWebImage from '@assets/generated_images/AI_chatbot_web_interface_1e37b208.png';

export default function ProjectCardExample() {
  const project = {
    id: '1',
    title: 'AI WEB',
    category: 'frontend' as const,
    description: 'Un chatbot web simple et interactif.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
    imageUrl: aiWebImage,
    liveUrl: 'https://example.com',
  };

  return (
    <div className="p-8 bg-background">
      <div className="max-w-sm">
        <ProjectCard project={project} />
      </div>
    </div>
  );
}

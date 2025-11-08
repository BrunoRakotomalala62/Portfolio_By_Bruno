import SkillsSection from '../SkillsSection';

export default function SkillsSectionExample() {
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
      name: 'React',
      level: 'Advanced' as const,
      percentage: 85,
      description: 'Développeur React expérimenté avec connaissance des hooks, context et patterns React modernes.',
    },
    {
      id: '4',
      name: 'TypeScript',
      level: 'Advanced' as const,
      percentage: 80,
      description: 'Compétent en typage statique, interfaces et création d\'applications TypeScript robustes.',
    },
    {
      id: '5',
      name: 'MongoDB',
      level: 'Advanced' as const,
      percentage: 80,
      description: 'Compétent en conception de bases de données NoSQL, requêtes et modélisation de données avec MongoDB.',
    },
    {
      id: '6',
      name: 'Python',
      level: 'Beginner' as const,
      percentage: 50,
      description: 'Apprentissage de Python pour l\'analyse de données, l\'automatisation et l\'expansion de ma boîte à outils.',
    },
  ];

  return <SkillsSection skills={skills} />;
}

import SkillCard from '../SkillCard';

export default function SkillCardExample() {
  const skill = {
    id: '1',
    name: 'JavaScript',
    level: 'Expert' as const,
    percentage: 90,
    description: 'Développeur JavaScript avancé avec expertise en ES6+, programmation asynchrone et frameworks modernes.',
  };

  return (
    <div className="p-8 bg-background">
      <div className="max-w-sm">
        <SkillCard skill={skill} />
      </div>
    </div>
  );
}

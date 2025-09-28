import { SKILLS } from '@/lib/data';
import SkillsChart from '../skills-chart';
import { Badge } from '../ui/badge';

export function Skills() {
  return (
    <section id="skills" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">
              Technical Skills
            </h2>
            <p className="text-muted-foreground md:text-lg">
              I have experience with a wide range of modern web technologies. Here's a snapshot of my skillset, which I'm constantly expanding.
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="text-sm">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SkillsChart skills={SKILLS} />
          </div>
        </div>
      </div>
    </section>
  );
}

import { PROJECTS } from '@/lib/data';
import { ProjectCard } from '../project-card';

export function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">
            My Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

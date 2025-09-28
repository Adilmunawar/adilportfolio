import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/types';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const image = getPlaceholderImage(project.imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
      <CardHeader>
        <div className="aspect-[4/3] relative">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg"
            data-ai-hint={image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {project.githubUrl && (
          <Button variant="outline" size="icon" asChild>
            <Link href={project.githubUrl} target="_blank" aria-label={`${project.title} GitHub repository`}>
              <Github />
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="default" size="icon" asChild>
            <Link href={project.liveUrl} target="_blank" aria-label={`${project.title} live demo`}>
              <ExternalLink />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

import { About } from '@/components/sections/about';
import { BlogPreview } from '@/components/sections/blog-preview';
import { Contact } from '@/components/sections/contact';
import { Experience } from '@/components/sections/experience';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <BlogPreview />
      <Contact />
    </div>
  );
}

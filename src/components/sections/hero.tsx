import Image from 'next/image';
import { NAME, ROLE, BIO } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import BioGenerator from '../bio-generator';

export function Hero() {
  const heroImage = getPlaceholderImage('hero-image');

  return (
    <section id="home" className="bg-secondary border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary font-headline">
              {NAME}
            </h1>
            <h2 className="text-2xl font-medium text-accent tracking-wide">
              {ROLE}
            </h2>
            <p className="max-w-xl text-muted-foreground md:text-xl">
              {BIO.short}
            </p>
            <BioGenerator />
          </div>
          <div className="flex justify-center">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={400}
              height={400}
              priority
              className="rounded-full object-cover shadow-lg border-4 border-card"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

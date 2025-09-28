import { BIO } from '@/lib/data';

export function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">
            About Me
          </h2>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            {BIO.long}
          </p>
        </div>
      </div>
    </section>
  );
}

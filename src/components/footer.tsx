import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { NAME, SOCIAL_LINKS } from '@/lib/data';
import { Logo } from './logo';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" aria-label="Back to homepage">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 transition-colors hover:text-primary" />
            </Link>
            <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 transition-colors hover:text-primary" />
            </Link>
            <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

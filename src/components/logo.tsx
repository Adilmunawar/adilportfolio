import { NAME } from '@/lib/data';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Code2 className="h-7 w-7 text-accent" />
      <span className="text-xl font-bold tracking-tight text-primary">
        {NAME}
      </span>
    </div>
  );
}

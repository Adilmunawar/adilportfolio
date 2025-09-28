import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import {format} from 'date-fns';

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const image = getPlaceholderImage(post.imageId);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="flex flex-col h-full overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1 duration-300">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={image.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-6">
          <CardDescription>{format(new Date(post.date), 'MMMM d, yyyy')}</CardDescription>
          <CardTitle className="mt-2 mb-2">{post.title}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

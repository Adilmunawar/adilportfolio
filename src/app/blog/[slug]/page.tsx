import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/data';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { format } from 'date-fns';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = getPlaceholderImage(post.imageId);

  return (
    <article>
      <header className="bg-secondary py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-accent font-semibold">{format(new Date(post.date), 'MMMM d, yyyy')}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">
            {post.title}
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 my-12">
        <div className="relative aspect-[16/9] mx-auto max-w-4xl rounded-lg overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
        </div>
      </div>
      
      <div className="prose prose-lg dark:prose-invert mx-auto px-4 md:px-6 pb-16 md:pb-24 lg:pb-32 max-w-3xl">
        <p>{post.content}</p>
      </div>
    </article>
  );
}

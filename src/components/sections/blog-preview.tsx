import { BLOG_POSTS } from '@/lib/data';
import { BlogCard } from '../blog-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function BlogPreview() {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary font-headline">
            From My Blog
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Sharing my thoughts on web development, technology, and more.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
                <Link href="/blog">
                    View All Posts <ArrowRight className="ml-2" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

import { Metadata } from 'next';
import { BLOG_POSTS, NAME } from '@/lib/data';
import { BlogCard } from '@/components/blog-card';

export const metadata: Metadata = {
  title: `Blog | ${NAME}`,
  description: `A collection of articles and tutorials by ${NAME} on web development, technology, and more.`,
};

export default function BlogPage() {
  return (
    <div className="bg-secondary">
      <section id="blog-list">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary font-headline">
              My Blog
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
              Welcome to my corner of the internet where I share my thoughts, tutorials, and experiences with web development.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

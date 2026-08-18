import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { getAllBlogCards, getFeaturedPosts } from "@/lib/blog.server";
import BlogCard from "./BlogCard";

export default function BlogIndexPage() {
  const featured = getFeaturedPosts();
  const posts = getAllBlogCards();

  return (
    <div className="bg-white">
      <section className="bg-cloud-gray py-16 md:py-24">
        <Container className="flex flex-col items-center gap-4 text-center">
          <Text as="h1" variant="h1" textColor="black">
            The NeevCloud Blog
          </Text>
          <Text as="p" textColor="black/60" className="max-w-[640px]">
            Engineering notes, product updates, and guides on running AI workloads at scale.
          </Text>
        </Container>
      </section>

      {featured.length > 0 && (
        <section className="py-12 md:py-16">
          <Container className="flex flex-col gap-6">
            <Text as="h2" variant="h4" weight="semibold" textColor="black">
              Featured
            </Text>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {featured.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="pb-16 md:pb-24">
        <Container className="flex flex-col gap-6">
          <Text as="h2" variant="h4" weight="semibold" textColor="black">
            Latest
          </Text>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <Text as="p" textColor="black/60">
              New posts are on the way.
            </Text>
          )}
        </Container>
      </section>
    </div>
  );
}

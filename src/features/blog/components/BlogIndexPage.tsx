import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { getAllBlogCards } from "@/lib/blog.server";
import BlogCard from "./BlogCard";

export default function BlogIndexPage() {
  const posts = getAllBlogCards();

  return (
    <div className="bg-[#0a0d0c]">
      <section className="border-b border-white/10 py-16 md:py-24">
        <Container size="narrow" className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-blog text-[40px] font-bold leading-[112%] tracking-tight text-white md:text-[56px]">
            The NeevCloud Blog
          </h1>
          <Text as="p" textColor="white/60">
            Engineering notes, product updates, and guides on running AI workloads at scale.
          </Text>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} variant="tile" />
              ))}
            </div>
          ) : (
            <Text as="p" textColor="white/60" className="py-16 text-center">
              New posts are on the way.
            </Text>
          )}
        </Container>
      </section>
    </div>
  );
}

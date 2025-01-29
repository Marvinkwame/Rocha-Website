import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

const POSTS_QUERY = `*[_type == 'post'] | order(_createdAt desc) {
  title,
  description,
  "currentSlug": slug.current,
  image,
  _createdAt
}`;

const options = { next: { revalidate: 30 } };

export default async function WorkContent() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  function urlFor(source: any) {
    return builder.image(source).url();
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-center text-blue-600">
          Latest Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              href={`/${post.currentSlug}`}
              key={post._id}
              className="group block"
            >
              <Card className="overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl bg-white dark:bg-zinc-900">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {post.image && (
                    <Image
                      src={urlFor(post.image)}
                      alt={post.title || "Post image"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold line-clamp-2 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      {post.title}
                    </h2>

                    {post.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {post.description}
                      </p>
                    )}

                    <time className="text-xs text-gray-500 dark:text-gray-500">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

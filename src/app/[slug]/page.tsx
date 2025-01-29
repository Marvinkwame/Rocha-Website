import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  publishedAt,
  image,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
  "author": author->{ name, image }
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1200).height(675).url()
    : null;

  const authorImageUrl = post.author?.image
    ? urlFor(post.author.image)?.width(48).height(48).url()
    : null;

  return (
    <article className="min-h-screen bg-gray-50 dark:bg-zinc-900 mt-24">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-purple-100 to-white dark:from-purple-950 dark:to-zinc-900 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to posts
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            {post.author && (
              <div className="flex items-center gap-2">
                {authorImageUrl && (
                  <img
                    src={authorImageUrl}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-zinc-800"
                  />
                )}
                <span>{post.author.name}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>

            {post.estimatedReadingTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.estimatedReadingTime} min read</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Card className="overflow-hidden mb-12">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt={post.title}
              className="w-full object-cover"
              width="1200"
              height="675"
            />
          )}
        </Card>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {Array.isArray(post.body) && (
            <PortableText 
              value={post.body}
              components={{
                block: {
                  h2: ({children}) => (
                    <h2 className="text-3xl font-bold mt-12 mb-6">{children}</h2>
                  ),
                  normal: ({children}) => (
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{children}</p>
                  )
                }
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
}
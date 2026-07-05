import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLdWebPage } from "@/components/JsonLdWebPage";
import { fetchPublishedBlogPost, listPublishedBlogSlugs } from "@/lib/blog-db";
import { getPageMetadata, getSEO } from "@/lib/seo-pages";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await listPublishedBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPublishedBlogPost(slug);
  if (!post) return { title: "Artykuł | HydroBagger" };

  const base = await getPageMetadata("/baza-wiedzy");
  return {
    ...base,
    title: post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      ...base.openGraph,
      title: post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://hydrobagger.pl/baza-wiedzy/${slug}`,
      type: "article",
    },
  };
}

function formatDate(iso: string | null): string {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("pl-PL", { dateStyle: "long" });
  } catch {
    return "";
  }
}

export default async function BazaWiedzyArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPublishedBlogPost(slug);
  if (!post) notFound();

  const seo = getSEO("/baza-wiedzy");
  const jsonLd = seo
    ? {
        ...seo,
        title: post.title,
        description: post.metaDescription || post.excerpt,
        url: `https://hydrobagger.pl/baza-wiedzy/${slug}`,
      }
    : null;

  return (
    <>
      {jsonLd ? <JsonLdWebPage seo={jsonLd} /> : null}
      <section className="bg-slate-50 py-10 lg:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-[var(--hb-water)]">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/baza-wiedzy" className="hover:text-[var(--hb-water)]">
              Baza wiedzy
            </Link>
          </nav>
          {post.publishedAt ? (
            <p className="text-sm text-slate-500">{formatDate(post.publishedAt)}</p>
          ) : null}
          <h1
            className="display-heading mt-2 text-slate-900"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{post.excerpt}</p>
          ) : null}
        </div>
      </section>
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article
            className="legal-content blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/baza-wiedzy"
              className="text-sm font-semibold text-[var(--hb-water)] hover:underline"
            >
              ← Wróć do bazy wiedzy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

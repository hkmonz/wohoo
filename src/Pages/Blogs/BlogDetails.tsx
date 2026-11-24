import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "../../lib/blogs";
import type { BlogBlock } from "../../lib/blogs";

function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-4 space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="rounded-2xl border border-[#E5E5F2] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="flex-1 min-w-0 text-base sm:text-lg font-medium leading-snug text-[#140D2D]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ECECFA] text-lg leading-none text-[#6B5FEF] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] sm:px-6 sm:pb-6 sm:text-base leading-[1.75] text-[#616161]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function renderBlock(block: BlogBlock, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="mt-12 mb-4 text-2xl sm:text-[30px] lg:text-[34px] font-medium leading-snug text-[#140D2D]"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p
          key={index}
          className="mb-5 text-[15px] sm:text-base lg:text-[17px] leading-[1.8] text-[#616161]"
        >
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul key={index} className="mb-6 space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15px] sm:text-base lg:text-[17px] leading-[1.75] text-[#616161]"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7D58EE]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol key={index} className="mb-8 space-y-5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#7D58EE] text-sm font-medium text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#140D2D]">
                  {item.title}
                </h3>
                {item.text && (
                  <p className="mt-1 text-[15px] sm:text-base leading-[1.75] text-[#616161]">
                    {item.text}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      );

    case "image":
      return (
        <figure key={index} className="my-10">
          <div className="overflow-hidden rounded-3xl bg-[#ECECFA] shadow-lg">
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </figure>
      );

    case "faq":
      return <FaqList key={index} items={block.items} />;

    default:
      return null;
  }
}

function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const related = getRelatedBlogs(blog.slug);

  return (
    <div className="bg-white">
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 pb-12">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B5FEF] transition-colors hover:text-[#5445c1] mb-8"
        >
          <span aria-hidden="true">←</span>
          Back to Insights
        </Link>

        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#616161]">
          <span className="rounded-full bg-[#ECECFA] px-4 py-1.5 font-semibold uppercase tracking-wide text-[#6B5FEF]">
            {blog.category}
          </span>
          <span>{blog.date}</span>
          <span className="h-1 w-1 rounded-full bg-[#616161]" />
          <span>{blog.readTime}</span>
        </div>

        <h1 className="text-[30px] sm:text-[42px] lg:text-[52px] font-medium leading-[1.15] tracking-tight text-[#140D2D] mb-6">
          {blog.title}
        </h1>

        <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed text-[#616161] mb-10">
          {blog.excerpt}
        </p>

        <div className="mb-12 overflow-hidden rounded-3xl bg-[#ECECFA] shadow-lg">
          <img
            src={blog.featuredImage}
            alt={blog.title}
            className="w-full object-cover"
          />
        </div>

        <div>{blog.content.map((block, index) => renderBlock(block, index))}</div>
      </article>

      <section className="bg-[#0B0B0B]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-medium leading-tight text-white mb-4">
            See WooHoo® in your own space.
          </h2>
          <p className="mx-auto max-w-xl text-sm sm:text-base lg:text-lg text-[#7C8A9F] mb-8">
            Voice-first rooms, connected hotel systems and one interface for
            every guest request.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/hospitality"
              className="inline-flex items-center justify-center rounded-[16px] bg-gradient-to-r from-[#7D58EE] to-[#2B117E] px-8 py-3 text-sm sm:text-base font-normal !text-white shadow transition duration-500 hover:scale-105"
            >
              Explore Hospitality
            </Link>
            <Link
              to="/x-series"
              className="inline-flex items-center justify-center rounded-[16px] border border-white/30 px-8 py-3 text-sm sm:text-base font-normal text-white transition duration-500 hover:bg-white/10"
            >
              View X-Series
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-medium text-[#140D2D] mb-8">
            Related reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/blogs/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-[#ECECFA] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                  <img
                    src={item.featuredImage}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-[#616161]">
                    <span>{item.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#616161]" />
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium leading-snug text-[#140D2D] mb-3 transition-colors duration-300 group-hover:text-[#6B5FEF]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#616161] leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogDetails;

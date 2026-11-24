import { Link } from "react-router-dom";
import { blogs } from "../../lib/blogs";

function Blogs() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 pb-12 lg:pb-16">
        <span className="inline-block text-xs sm:text-sm lg:text-[16px] font-normal tracking-[0.2em] text-red-500 uppercase mb-4">
          Insights
        </span>
        <h1 className="text-[34px] sm:text-[48px] lg:text-[64px] font-medium text-black leading-[1.15] tracking-tight max-w-4xl">
          Stories from the{" "}
          <span className="text-[#6B5FEF]">physical enterprise.</span>
        </h1>
        <p className="mt-5 text-[16px] sm:text-[18px] lg:text-[22px] text-[#616161] leading-relaxed max-w-2xl">
          Product deep dives, guest experience research and practical notes on
          building voice-first spaces.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blogs/${blog.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl bg-[#ECECFA] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-white">
                <img
                  src={blog.featuredImage}
                  alt={blog.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#140D2D] backdrop-blur-sm">
                  {blog.category}
                </span> */}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#616161]">
                  <span>{blog.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#616161]" />
                  <span>{blog.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-medium leading-snug text-[#140D2D] mb-3 transition-colors duration-300 group-hover:text-[#6B5FEF]">
                  {blog.title}
                </h2>
                <p className="text-sm sm:text-base text-[#616161] leading-relaxed line-clamp-3 mb-6">
                  {blog.excerpt}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#6B5FEF]">
                  Read More
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Blogs;

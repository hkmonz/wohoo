import * as MarqueeModule from "react-fast-marquee";
import type { ComponentType } from "react";

const Marquee = (
  (MarqueeModule as unknown as { default?: { default?: unknown } }).default
    ?.default ??
  (MarqueeModule as unknown as { default?: unknown }).default ??
  MarqueeModule
) as ComponentType<Record<string, unknown>>;

type LogoItem = {
  src: string;
  alt: string;
  link: string;
};

type HomeLogosProps = {
  logos?: LogoItem[];
  direction?: "left" | "right";
  marqueeOnLg?: boolean;
  bgColor?: string;
  heading?: string;
  featuredCustomers?: string[];
};

const LogoImage = ({
  logo,
  priority = false,
}: {
  logo: LogoItem;
  priority?: boolean;
}) => (
  <img
    src={logo.src}
    alt={`${logo.alt} logo`}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    width={160}
    height={80}
    className="h-14 md:h-18  object-contain"
  />
);

function HomeLogos({
  bgColor,
  logos = [],
  direction = "left",
  marqueeOnLg = false,
  heading,
  featuredCustomers = [],
}: HomeLogosProps) {
  const hasLogos = logos.length > 0;
  const captionColor = bgColor?.includes("bg-white") ? "text-slate-800" : "text-white";

  return (
    <section
      className={`${bgColor ?? "bg-black"} py-8 overflow-hidden`}
    >
      <div className="px-4 overflow-hidden">
        {heading && (
          <div className="mx-auto mb-6 max-w-7xl text-center">
            <h2 className={`text-2xl sm:text-3xl font-semibold ${captionColor}`}>
              {heading}
            </h2>
            {featuredCustomers.length > 0 && (
              <p className={`mt-2 text-sm sm:text-base ${captionColor} opacity-80`}>
                {featuredCustomers.join(" · ")}
              </p>
            )}
          </div>
        )}
        {!marqueeOnLg && (
          <div className="hidden lg:flex justify-around items-center gap-8 overflow-hidden">
            {logos.map((logo, idx) => (
              <a
                key={`${logo.src}-${idx}`}
                // href={logo.link}
                // target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
                className="flex flex-col justify-center items-center gap-2 transition-transform duration-300 hover:scale-105"
              >
                <LogoImage
                  logo={logo}
                  priority={idx < 3}
                />
                <span className={`text-xs sm:text-sm font-medium text-center ${captionColor}`}>
                  {logo.alt}
                </span>
              </a>
            ))}
          </div>
        )}

        <div
          className={`${marqueeOnLg ? "" : "lg:hidden"} overflow-hidden`}
        >
          {hasLogos ? (
            <Marquee
              speed={40}
              pauseOnHover
              gradient={false}
              direction={direction}
            >
              {logos.map((logo, idx) => (
                <a
                  key={`${logo.src}-${idx}`}
                  // href={logo.link}
                  // target="_blank"
                  rel="noopener noreferrer"
                  aria-label={logo.alt}
                  className="mx-8 py-5 flex flex-col justify-center items-center gap-2 transition-transform duration-300"
                >
                  <LogoImage logo={logo} />
                  <span className={`text-xs sm:text-sm font-medium text-center whitespace-nowrap ${captionColor}`}>
                    {logo.alt}
                  </span>
                </a>
              ))}
            </Marquee>
          ) : (
            <div className="flex justify-center items-center py-4 text-sm text-white/60">
              No logos available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeLogos;

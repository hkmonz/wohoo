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
    alt={logo.alt}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    width={160}
    height={80}
    className="h-16 md:h-20 w-auto object-contain"
  />
);

function HomeLogos({
  bgColor,
  logos = [],
  direction = "left",
  marqueeOnLg = false,
}: HomeLogosProps) {
  const hasLogos = logos.length > 0;

  return (
    <section
      className={`${bgColor ?? "bg-black"} py-8 overflow-hidden`}
    >
      <div className="px-4 overflow-hidden">
        {!marqueeOnLg && (
          <div className="hidden lg:flex justify-around items-center gap-8 overflow-hidden">
            {logos.map((logo, idx) => (
              <a
                key={`${logo.src}-${idx}`}
                // href={logo.link}
                // target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
                className="flex justify-center items-center transition-transform duration-300 hover:scale-105"
              >
                <LogoImage
                  logo={logo}
                  priority={idx < 3}
                />
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
                  className="mx-8 py-5 flex justify-center items-center transition-transform duration-300 "
                >
                  <LogoImage logo={logo} />
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
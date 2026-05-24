import * as MarqueeModule from "react-fast-marquee";
import type { ComponentType } from "react";

const Marquee = (
  (MarqueeModule as unknown as { default?: { default?: unknown } }).default?.default ??
  (MarqueeModule as unknown as { default?: unknown }).default ??
  MarqueeModule
) as ComponentType<Record<string, unknown>>;


type LogoItem = { src: string; alt: string; link: string };

type HomeLogosProps = {
  logos?: LogoItem[];
  /** Scroll direction for the marquee on smaller screens (and optionally lg) */
  direction?: "left" | "right";
  /**
   * If true, marquee is visible on lg screens as well (no static row).
   * If false (default), static row on lg, marquee only below lg.
   */
  marqueeOnLg?: boolean;
};

function HomeLogos({
  logos,
  direction = "left",
  marqueeOnLg = false,
}: HomeLogosProps) {
  const safeLogos = Array.isArray(logos) ? logos : [];
  const hasLogos = safeLogos.length > 0;

  return (
    <div className="bg-black py-8">
      <div className="px-4">
        {/* Desktop View (static row, only when marqueeOnLg is false) */}
        {!marqueeOnLg && (
          <div className="hidden lg:flex justify-around items-center">
            {safeLogos.map((logo, idx) => (
              <a 
                key={idx}
                href={logo?.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center hover:scale-110 transition-transform duration-300 hover:opacity-100"
              >
                <img src={logo?.src} alt={logo?.alt} className="h-16 w-auto" />
              </a>
            ))}
          </div>
        )}

        {/* Marquee View */}
        <div className={marqueeOnLg ? "" : "lg:hidden"}>
          {hasLogos ? (
            <Marquee
              // core marquee behavior
              speed={40}
              pauseOnHover={true}
              gradient={false}
              // custom direction
              direction={direction}
            >
              {safeLogos.map((logo, idx) => (
                <a
                  key={idx}
                  href={logo?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-8 flex justify-center items-center hover:scale-105 transition-transform duration-300"
                >
                  <img src={logo?.src} alt={logo?.alt} className="h-14 md:w-auto object-contain" />
                </a>
              ))}
            </Marquee>
          ) : (
            <div className="flex justify-center items-center text-white/60 text-sm">
              No logos available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLogos;
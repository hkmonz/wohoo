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
  direction?: "left" | "right";
  marqueeOnLg?: boolean;
  bgColor?:string
};

function HomeLogos({
  bgColor,
  logos,
  direction = "left",
  marqueeOnLg = false,
}: HomeLogosProps) {
  const safeLogos = Array.isArray(logos) ? logos : [];
  const hasLogos = safeLogos.length > 0;

  return (
    <div className={`${bgColor ? bgColor : 'bg-black'} py-8`}>
      <div className="px-4">
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
                <img src={logo?.src} alt={logo?.alt} className="h-15 md:h-18 w-auto" />
              </a>
            ))}
          </div>
        )}

        <div className={marqueeOnLg ? "" : "lg:hidden"}>
          {hasLogos ? (
            <Marquee
              speed={40}
              pauseOnHover={true}
              gradient={false}
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
                  <img src={logo?.src} alt={logo?.alt} className="h-16 md:h-20 md:w-auto object-contain" />
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
import Marquee from "react-fast-marquee";


function HomeLogos({logos}: {logos?: { src: string; alt: string; link: string }[]}) {
  

  return (
    <div className="bg-black py-8">
      <div className="px-4">
        {/* Desktop View */}
        <div className="hidden lg:flex justify-around items-center">
          {logos?.map((logo, idx) => (
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

        {/* Mobile View - Marquee */}
        <div className="lg:hidden">
          {/* <Marquee speed={40} pauseOnHover={true} gradient={false}> */}
            {logos?.map((logo, idx) => (
              <a
                key={idx}
                href={logo?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-8 flex justify-center items-center hover:scale-105 transition-transform duration-300"
              >
                <img src={logo?.src} alt={logo?.alt} className="h-10 w-auto object-contain" />
              </a>
            ))}
          {/* </Marquee> */}
        </div>
      </div>
    </div>
  );
};

export default HomeLogos;
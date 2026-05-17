import CircleLight from "../../assets/Icons/circle-light.svg"
import CircleDark from "../../assets/Icons/circle-dark.svg"
import LargeSquareLight from "../../assets/Icons/square-light.svg"
import SmallSquareDark from "../../assets/Icons/square-dark.svg"
import PloygonLight from "../../assets/Icons/Polygon-light.svg"
import PolygonDark from "../../assets/Icons/Polygon-dark.svg"
import SquareLight from "../../assets/Icons/squarelight.svg"
import SquareDark from "../../assets/Icons/squaredark.svg"
export default function Hero() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      
      {/* Top Right Decorative Elements */}
      <div className="hidden md:block absolute top-0 right-4 sm:right-8 md:right-16 lg:right-32 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <img src={CircleLight} alt="Light Circle" className="w-full h-full object-contain" />
        <img src={CircleDark} alt="Dark Circle" className="absolute top-4 sm:top-8 md:top-12 lg:top-10 w-16 sm:w-24 md:w-32  object-contain" />
      </div>

      {/* Top Left Decorative Elements */}
      <div className="hidden md:block absolute top-0 left-4 sm:left-8 md:left-16 lg:left-32 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <img src={LargeSquareLight} alt="Light Square" className="w-full h-full object-contain" />
        <img src={SmallSquareDark} alt="Dark Square" className="absolute top-4 sm:top-8 md:top-12 lg:top-10 -right-2 sm:-right-3 md:-right-5  object-contain" />
      </div>

      {/* Bottom Left Decorative Elements */}
      <div className="hidden md:block absolute bottom-8 sm:bottom-16 md:bottom-24 lg:bottom-30 left-4 sm:left-8 md:left-16 lg:left-32 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <img src={PloygonLight} alt="Light Polygon" className=" w object-center" />
        <img src={PolygonDark} alt="Dark Polygon" className="absolute bottom-19 right-2 sm:right-4 md:right-30  object-contain" />
      </div>

      {/* Bottom Right Decorative Elements */}
      <div className="hidden md:block absolute bottom-4 sm:bottom-8 md:bottom-16 lg:bottom-40 right-4 sm:right-8 md:right-16 lg:right-32 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <img src={SquareLight} alt="Light Square" className="w-full h-full object-contain" />
        <img src={SquareDark} alt="Dark Square" className="absolute top-0 sm:top-4 md:top-8 lg:top-10 -right-2 sm:-right-3 md:-right-5 lg:-right-0 w-12 sm:w-20 md:w-28 lg:w-32 object-contain" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[60vh] md:min-h-screen px-4 sm:px-6 md:px-8 lg:px-8 pb-8">
        <div className="text-center max-w-7xl w-full">
          <div className="">
            <span className="inline-block text-[#C75B66] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal tracking-widest uppercase">
              Careers
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-[#140D2D] leading-tight mt-4 sm:mt-6 md:mt-8 lg:mt-10 !mb-4 ">
            Let&apos;s Build Together
          </h1>

          <p className="text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#616161] leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
            We&apos;re curating the future of digital art through high-precision engineering and human-centric product design.
          </p>
        </div>
      </div>
    </div>
  )
}

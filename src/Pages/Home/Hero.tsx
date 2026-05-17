import HomeHeroImg from '../../assets/Images/homehero.png'
import IntelIcon from "../../assets/Icons/intel.svg"
import AppleIcon from "../../assets/Icons/apple.svg"
import AndriodIcon from "../../assets/Icons/android.svg"
import UblIcon from '../../assets/Icons/ubl.svg'

export default function Hero() {
  const partners = [
    { name: "Intel", icon: IntelIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Apple", icon: AppleIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Android", icon: AndriodIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "UBL", icon: UblIcon, description: "Lorem ipsum dolor sit amet consectetur." }
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-5 md:pt-24 pb-12 sm:px-6 lg:px-8  lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center justify-center">
          <div className="flex flex-col justify-center ">
            <div>
              <span className="inline-block text-xs sm:text-sm lg:text-[16px] font-normal tracking-[0.2em] text-red-500 uppercase mb-4">
                Woohoo X-Series
              </span>
            </div>
            <div>
              <h1 className="text-[32px] sm:text-[48px] lg:text-[66px] max-w-3xl font-medium text-black leading-[1.2] lg:leading-[71.53px] tracking-tight">
                Now experience the world of digital{' '}
                <span className="text-nowrap">ai voice</span> assistant in
                hospitality
              </h1>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[23px] max-w-2xl text-[#616161] leading-relaxed lg:leading-[26px] font-normal">
              We&apos;re curating the future of digital ai through high-precision
              engineering and human-centric product design.
            </p>
          </div>

          <div className="relative flex justify-center items-center ">
            <div
              className="absolute z-10"
              style={{
                width: '500.69px',
                height: '500.69px',
                top: '50%',
                left: '50%',
                // rotate: '-15deg',
                transform: 'translate(-50%, -50%) rotate(-15deg)',
                borderRadius: '77px',
                background: '#ECECFA',
                filter: 'blur(128.8px)',
                opacity: 1,
              }}
            />

            <div className="relative w-full max-w-xs lg:max-w-xl aspect-square flex items-center justify-center">
              <img
                src={HomeHeroImg}
                alt="Woohoo X-Series Device"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 lg:pt-8">
          <p className="text-[30px] text-[#140D2D] font-semibold text-black mb-4 lg:mb-6">
            Powered By
          </p>
          <div className="flex flex-wrap lg:flex-nowrap gap-3 sm:gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 sm:gap-3 bg-[#ECECFA] rounded-full px-8 py-2 sm:py-3 transition-colors"
              >
                <div className="relative ">
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    className="object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 ">
                  {partner.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
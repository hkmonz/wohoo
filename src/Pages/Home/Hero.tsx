import HomeHeroImg from '../../assets/Images/HeaderGif.mp4'
import IntelIcon from "../../assets/Icons/hero1.svg"
import AppleIcon from "../../assets/Icons/hero2.svg"
import AndriodIcon from "../../assets/Icons/hero3.svg"
import SmartIcon from '../../assets/Icons/google.svg'
import UblIcon from '../../assets/Icons/hero5.svg'
import Button from '../../Components/Commons/Button'
import { useState } from 'react'
import BookDemo from '../../Components/Commons/BookDemo'
import VideoModal from '../../Components/Commons/VideoModal'

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const partners = [
    { name: "Intel", icon: IntelIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Apple", icon: AppleIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Android", icon: AndriodIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "Smart", icon: SmartIcon, description: "Lorem ipsum dolor sit amet consectetur." },
    { name: "UBL", icon: UblIcon, description: "Lorem ipsum dolor sit amet consectetur." }
  ]

  const handleNavigate = () => {
    setOpenVideo(true);
  }


  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-5 md:pt-24 pb-12 sm:px-6 lg:px-8  lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center ">
            <div>
              <span className="inline-block text-xs sm:text-sm lg:text-[16px] font-normal tracking-[0.2em] text-red-500 uppercase mb-4">
                WooHoo® Gen AI Assistants
              </span>
            </div>
            <div>
              <h1 className="text-[32px] sm:text-[48px] lg:text-[66px] max-w-3xl font-medium text-black leading-[1.2] lg:leading-[71.53px] tracking-tight">
                The agentic 
operating system <br />
<span className='text-[#6B5FEF]'>for the physical 
enterprise.</span>
              </h1>
            </div>
            <p className="text-[16px] sm:text-[18px] lg:text-[23px] max-w-2xl text-[#616161] leading-relaxed lg:leading-[26px] font-normal">
              We are curating the future of digital AI Assistants through high-precision engineering and human-centric product design.
            </p>
            <div className='flex flex-col md:flex-row gap-3'>
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="!px-6 sm:!px-8 lg:!px-10 !py-3 sm:!py-4 !text-sm sm:!text-base lg:!text-lg !font-normal"
              >
                Book a demo
              </Button>
              <Button
              onClick={handleNavigate}
                size="lg"
                variant='secondary'
                className='!px-6 sm:!px-8 lg:!px-9 !py-3 sm:!py-4 !text-sm sm:!text-base lg:!text-lg !font-normal'
              >
                Explore WooHoo
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">

            <video
              src={HomeHeroImg}
              autoPlay
              loop
              muted
              playsInline
    className="relative z-10 w-full max-w-[620px] md:max-w-[550px] lg:max-w-[1000px] h-auto object-contain"
            />
          </div>
        </div>
        <div className="pt-6 lg:pt-8">
          <p className="text-[30px] text-[#140D2D] font-semibold text-black mb-4 lg:mb-6">
            Powered By
          </p>
          <div className="flex z-1000 flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-3 sm:gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center px-8 py-2 sm:py-3 transition-colors"
              >
                <div className="relative ">
                  <img
                    src={partner.icon}
                    alt={partner.name}
                    className="w-40 h-20 lg:w-45 lg:h-20 object-contain "
                  />
                </div>
                {/* <span >
                  {partner.description}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BookDemo open={open} onClose={() => setOpen(false)} />
      <VideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        videoUrl="https://www.youtube.com/embed/5wh7BBoapxY?&mute=1"
        title="Digital Transformation: Copthorne King's Hotel x WooHoo®"
      />
    </section>
  )
}
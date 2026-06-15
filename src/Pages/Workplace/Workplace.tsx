import HomeLogos from "../../Components/Commons/Logos"
import Hero from "./hero"
import Logo1 from "../../assets/Icons/logow1.svg";
import Logo2 from "../../assets/Icons/logow2.svg";
import Logo3 from "../../assets/Icons/logow3.svg";
import Logo4 from "../../assets/Icons/logow4.svg";
import Logo5 from "../../assets/Icons/logow5.svg";
import Logo6 from "../../assets/Icons/logow6.svg";
import Logo7 from "../../assets/Icons/logow7.svg";
import Industries from "./Industries";
function Workplace() {
  return (
    <div>
        <Hero/>
              <HomeLogos bgColor={'bg-white'} logos={[
        { src: Logo1, alt: "logo1", link: "https://www.untourism.int/" },
        { src: Logo2, alt: "logo2", link: "https://elisium.city/" },
        { src: Logo3, alt: "logo3", link: "https://www.pif.gov.sa/en/" },
        { src: Logo4, alt: "logo4", link: "https://www.stb.gov.sg/" },
        { src: Logo5, alt: "logo5", link: "https://www.neom.com/en-us" },
        { src: Logo6, alt: "logo6", link: "https://www.sta.gov.sa/en/home" },
        { src: Logo7, alt: "logo7", link: "https://www.dubaidet.gov.ae/en/" },
      ]} />
      <Industries/>
    </div>
  )
}

export default Workplace

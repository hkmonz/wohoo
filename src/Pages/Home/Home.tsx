import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Explore from "../../Components/Commons/Explore";
import InsightSection from "../../Components/Commons/InsightSection";
import HomeLogos from "../../Components/Commons/Logos";
import { ProductCarousel } from "../../Components/Commons/ProductCarousel";
import { FeatureCarousel } from "../../Components/Commons/FeatureCarousel";
import HealthcareProduct from "./HealthcareProduct";
import Hero from "./Hero";
import Plateform from "./Plateform";
import Speaker1 from '../../assets/Images/Optimized Gif 1.mp4'
import Speaker2 from '../../assets/Images/Optmized Gif 2.mp4'
import Speaker3 from '../../assets/Images/Optmized Gif 3.mp4'
import Speaker4 from '../../assets/Images/Optmized Gif 4.mp4'
import Feature1 from '../../assets/Images/gif1.mp4'
import Feature2 from '../../assets/Images/gif2.mp4'
import Feature3 from '../../assets/Images/gif3.mp4'
import Feature4 from '../../assets/Images/gif4.mp4'
import Feature5 from '../../assets/Images/gif5.mp4'
import Award1 from '../../assets/Images/award1.webp'
import Award2 from '../../assets/Images/award2.webp'
import Award3 from '../../assets/Images/award3.webp'
import Award4 from '../../assets/Images/award4.webp'
import Award5 from '../../assets/Images/award5.webp'
import Award6 from '../../assets/Images/award6.webp'
import Award7 from '../../assets/Images/award7.webp'
import Award8 from '../../assets/Images/award8.webp'
import Award9 from '../../assets/Images/award9.webp'
import Logo1 from "../../assets/Icons/logo1.svg";
import Logo2 from "../../assets/Icons/logo2.svg";
import Logo3 from "../../assets/Icons/logo3.svg";
import Logo4 from "../../assets/Icons/logo4.svg";
import Logo5 from "../../assets/Icons/logo5.svg";
import Logo6 from "../../assets/Icons/logo6.svg";
import Logo7 from "../../assets/Icons/logo7.svg";
import Logo8 from "../../assets/Icons/logo8.svg";
import Logo9 from "../../assets/Icons/logo9.svg";
import Logo10 from "../../assets/Icons/logo10.svg";
import Logo11 from "../../assets/Icons/logo11.svg";
import Logo12 from "../../assets/Icons/logo12.svg";
import Logo13 from "../../assets/Icons/logo13.svg";
import Logo14 from "../../assets/Icons/logo14.svg";
import Logo15 from "../../assets/Icons/logo15.svg";
import Logo16 from "../../assets/Icons/logo16.svg";
import Logo17 from "../../assets/Icons/logo17.svg";
import Logo18 from "../../assets/Icons/logo18.svg";
import Logo19 from "../../assets/Icons/logo19.svg";
import Logo20 from "../../assets/Icons/logo20.svg";
import Logo21 from "../../assets/Icons/logo21.svg";
import { AwardAndRecognition } from "../../Components/Commons/AwardAndRecognition";

export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image?: string;
    video?: string;  
}

export interface FeatureCarousel {
  image: string;
}
export interface AwardCarousel {
  image: string;
}
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#explore") return;
    requestAnimationFrame(() => {
      document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname, location.hash]);

   const products: CarouselProduct[] = [
      {
        id: '1',
        title: 'Enterprise-Grade Reliability ',
        description: 'Designed for high-traffic environments, the X, Y, and Z series feature anti-theft locking systems and a robust chassis. The integrated battery ensures uninterrupted operation, keeping your AI agent active even during power fluctuations.',
        video: Speaker2,
      },
      {
        id: '2',
        title: 'Precision Acoustic Excellence',
        description: 'Custom-engineered Sound by JBL by Harman, the internal acoustic chamber utilizes dual woofers and balanced passive radiators to deliver deep, room-filling sound that transforms any physical space into an immersive audio environment.',
        video: Speaker4,
      },
      {
        id: '3',
        title: 'Intuitive Control Interface',
        description: 'Experience the perfect blend of voice and touch. The high-definition IPS display provides a crisp, interactive gateway to hotel services, telehealth portals, or office workflows, backed by a responsive I2C touch interface.',
        video: Speaker1,
      },
      {
        id: '4',
        title: 'Advanced Neural Processing',
        description: 'Built on 3rd Gen Intel® Xeon® architecture, the device features a dedicated on-device wake-word chip. This ensures lightning-fast voice responsiveness while maintaining enterprise-grade privacy by processing local commands without cloud reliance.',
        video: Speaker3,
      },
    ];

    const Features: FeatureCarousel[] = [
      {
        image: Feature1,
      },
      {
        image: Feature2,
      },
      {
        image: Feature3,
      },
      {
        image: Feature4,
      },
      {
        image: Feature5,
      },
    ];

    const Award: AwardCarousel[] = [
      {
        image: Award1,
      },
      {
        image: Award2,
      },
      {
        image: Award3,
      },
      {
        image: Award4,
      },
      {
        image: Award5,
      },
      {
        image: Award6,
      },
      {
        image: Award7,
      },
      {
        image: Award8,
      },
      {
        image: Award9,
      },
    ];



  return (
    <div>
      <Hero />
      <HomeLogos logos={[
        { src: Logo1, alt: "logo1", link: "https://www.untourism.int/" },
        { src: Logo2, alt: "logo2", link: "https://elisium.city/" },
        { src: Logo3, alt: "logo3", link: "https://www.pif.gov.sa/en/" },
        { src: Logo4, alt: "logo4", link: "https://www.stb.gov.sg/" },
        { src: Logo5, alt: "logo5", link: "https://www.neom.com/en-us" },
        { src: Logo6, alt: "logo6", link: "https://www.sta.gov.sa/en/home" },
        { src: Logo7, alt: "logo7", link: "https://www.dubaidet.gov.ae/en/" },
      ]} />
      <HealthcareProduct />
      <ProductCarousel products={products} />
      <FeatureCarousel features={Features} />
      <HomeLogos
      direction="right"
      marqueeOnLg={true}
      logos={[
        { src: Logo8, alt: "logo8", link: "" },
        { src: Logo9, alt: "logo9", link: "" },
        { src: Logo10, alt: "logo10", link: "" },
        { src: Logo11, alt: "logo11", link: "" },
        { src: Logo12, alt: "logo12", link: "" },
        { src: Logo13, alt: "logo13", link: "" },
        { src: Logo14, alt: "logo14", link: "" },
         { src: Logo15, alt: "logo15", link: "" },
        { src: Logo16, alt: "logo16", link: "" },
        { src: Logo17, alt: "logo17", link: "" },
        { src: Logo18, alt: "logo18", link: "" },
        { src: Logo19, alt: "logo19", link: "" },
        { src: Logo20, alt: "logo20", link: "" },
        { src: Logo21, alt: "logo21", link: "" },
      ]} />
      <HomeLogos
      direction="left"
      marqueeOnLg={true}
      logos={[
        { src: Logo8, alt: "logo8", link: "" },
        { src: Logo9, alt: "logo9", link: "" },
        { src: Logo10, alt: "logo10", link: "" },
        { src: Logo11, alt: "logo11", link: "" },
        { src: Logo12, alt: "logo12", link: "" },
        { src: Logo13, alt: "logo13", link: "" },
        { src: Logo14, alt: "logo14", link: "" },
        { src: Logo15, alt: "logo15", link: "" },
        { src: Logo16, alt: "logo16", link: "" },
        { src: Logo17, alt: "logo17", link: "" },
        { src: Logo18, alt: "logo18", link: "" },
        { src: Logo19, alt: "logo19", link: "" },
        { src: Logo20, alt: "logo20", link: "" },
        { src: Logo21, alt: "logo21", link: "" },
      ]} />
      <Plateform />
      <Explore />
      <AwardAndRecognition Award={Award} />
      <InsightSection/>
    </div>
  )
}

export default Home

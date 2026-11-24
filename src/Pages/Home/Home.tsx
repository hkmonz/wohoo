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
import Smartflow from "./Smartflow";

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
  alt: string;
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
        alt: "German Design Award Special trophy",
      },
      {
        image: Award2,
        alt: "WooHoo Innovation and Technology 2023 award for fostering ecosystem partnerships",
      },
      {
        image: Award3,
        alt: "UNWTO Women in Tech Startup Competition Middle East award",
      },
      {
        image: Award4,
        alt: "WooHoo Best AI Innovation Award for Cognitive Cities, presented by Elisium",
      },
      {
        image: Award5,
        alt: "A' Design Award and Competition trophy",
      },
      {
        image: Award6,
        alt: "Red Herring 100 North America winner award",
      },
      {
        image: Award7,
        alt: "CES Innovation Awards Best of Innovation trophy",
      },
      {
        image: Award8,
        alt: "Singapore Tourism Awards trophy",
      },
      {
        image: Award9,
        alt: "CIO Review award honoring WooHoo among 20 most promising artificial intelligence solution providers",
      },
    ];



  return (
    <div>
      <Hero />
      <HomeLogos
        heading="Running in properties like"
        featuredCustomers={["Elisium City Hotels", "Singapore Tourism Board", "UNWTO"]}
        logos={[
          { src: Logo1, alt: "UNWTO", link: "https://www.untourism.int/" },
          { src: Logo2, alt: "Elisium City Hotels", link: "https://elisium.city/" },
          { src: Logo4, alt: "Singapore Tourism Board", link: "https://www.stb.gov.sg/" },
          { src: Logo3, alt: "Public Investment Fund", link: "https://www.pif.gov.sa/en/" },
          { src: Logo5, alt: "NEOM", link: "https://www.neom.com/en-us" },
          { src: Logo6, alt: "Saudi Tourism Authority", link: "https://www.sta.gov.sa/en/home" },
          { src: Logo7, alt: "Dubai Department of Economy and Tourism", link: "https://www.dubaidet.gov.ae/en/" },
        ]}
      />
      <HealthcareProduct />
      <ProductCarousel products={products} />
      <FeatureCarousel features={Features} />
      <HomeLogos
      direction="right"
      marqueeOnLg={true}
      logos={[
        { src: Logo8, alt: "Schneider Electric", link: "" },
        { src: Logo9, alt: "INTEREL", link: "" },
        { src: Logo10, alt: "AMX by HARMAN", link: "" },
        { src: Logo11, alt: "Lightspeed", link: "" },
        { src: Logo12, alt: "Agilysys", link: "" },
        { src: Logo13, alt: "TableCheck", link: "" },
        { src: Logo14, alt: "Knowcross", link: "" },
        { src: Logo15, alt: "Honeywell", link: "" },
        { src: Logo16, alt: "Infrasys by Shiji", link: "" },
        { src: Logo17, alt: "Oracle MICROS Simphony", link: "" },
        { src: Logo18, alt: "SevenRooms", link: "" },
        { src: Logo19, alt: "Mews", link: "" },
        { src: Logo20, alt: "Oracle Hospitality", link: "" },
        { src: Logo21, alt: "MessageBox", link: "" },
      ]} />
      <HomeLogos
      direction="left"
      marqueeOnLg={true}
      logos={[
        { src: Logo8, alt: "Schneider Electric", link: "" },
        { src: Logo9, alt: "INTEREL", link: "" },
        { src: Logo10, alt: "AMX by HARMAN", link: "" },
        { src: Logo11, alt: "Lightspeed", link: "" },
        { src: Logo12, alt: "Agilysys", link: "" },
        { src: Logo13, alt: "TableCheck", link: "" },
        { src: Logo14, alt: "Knowcross", link: "" },
        { src: Logo15, alt: "Honeywell", link: "" },
        { src: Logo16, alt: "Infrasys by Shiji", link: "" },
        { src: Logo17, alt: "Oracle MICROS Simphony", link: "" },
        { src: Logo18, alt: "SevenRooms", link: "" },
        { src: Logo19, alt: "Mews", link: "" },
        { src: Logo20, alt: "Oracle Hospitality", link: "" },
        { src: Logo21, alt: "MessageBox", link: "" },
      ]} />
      <Plateform />
      <Smartflow/>
      <Explore />
      <AwardAndRecognition Award={Award} />
      <InsightSection/>
    </div>
  )
}

export default Home

import Explore from "../../Components/Commons/Explore";
import InsightSection from "../../Components/Commons/InsightSection";
import HomeLogos from "../../Components/Commons/Logos";
import { ProductCarousel } from "../../Components/Commons/ProductCarousel";
import { FeatureCarousel } from "../../Components/Commons/FeatureCarousel";
import HealthcareProduct from "./HealthcareProduct";
import Hero from "./Hero";
import Speaker1 from '../../assets/Images/speaker1.png'
import Speaker2 from '../../assets/Images/speaker2.png'
import Speaker3 from '../../assets/Images/speaker3.png'
import Speaker4 from '../../assets/Images/speaker4.png'
import Feature1 from '../../assets/Images/feature1.png'
import Award1 from '../../assets/Images/award1.png'
import Award2 from '../../assets/Images/award2.png'
import Award3 from '../../assets/Images/award3.png'
import Award4 from '../../assets/Images/award4.png'
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
  image: string;
}

export interface FeatureCarousel {
  image: string;
}
export interface AwardCarousel {
  image: string;
}
function Home() {

   const products: CarouselProduct[] = [
      {
        id: '1',
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas fringilla vulputate aliquam volutpat proin. Sit neque ornare mauris risus.',
        image: Speaker1,
      },
      {
        id: '2',
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas fringilla vulputate aliquam volutpat proin. Sit neque ornare mauris risus.',
        image: Speaker2,
      },
      {
        id: '3',
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas fringilla vulputate aliquam volutpat proin. Sit neque ornare mauris risus.',
        image: Speaker3,
      },
      {
        id: '4',
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas fringilla vulputate aliquam volutpat proin. Sit neque ornare mauris risus.',
        image: Speaker4,
      },
      {
        id: '5',
        title: 'Lorem ipsum dolor ',
        description: 'Lorem ipsum dolor sit amet consectetur. Maecenas fringilla vulputate aliquam volutpat proin. Sit neque ornare mauris risus.',
        image: Speaker1,
      },
    ];

    const Features: FeatureCarousel[] = [
      {
        image: Feature1,
      },
      {
        image: Feature1,
      },
      {
        image: Feature1,
      },
      {
        image: Feature1,
      },
      {
        image: Feature1,
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
        image: Award1,
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
      <HomeLogos logos={[
        { src: Logo8, alt: "logo8", link: "" },
        { src: Logo9, alt: "logo9", link: "" },
        { src: Logo10, alt: "logo10", link: "" },
        { src: Logo11, alt: "logo11", link: "" },
        { src: Logo12, alt: "logo12", link: "" },
        { src: Logo13, alt: "logo13", link: "" },
        { src: Logo14, alt: "logo14", link: "" },
      ]} />
      <HomeLogos logos={[
        { src: Logo15, alt: "logo15", link: "" },
        { src: Logo16, alt: "logo16", link: "" },
        { src: Logo17, alt: "logo17", link: "" },
        { src: Logo18, alt: "logo18", link: "" },
        { src: Logo19, alt: "logo19", link: "" },
        { src: Logo20, alt: "logo20", link: "" },
        { src: Logo21, alt: "logo21", link: "" },
      ]} />

      <Explore />
      <AwardAndRecognition Award={Award} />
      <InsightSection/>
    </div>
  )
}

export default Home

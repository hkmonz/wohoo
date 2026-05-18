import Design from "../../Components/Commons/Design"
import ProductSection from "../../Components/Commons/ProductSection"
import Description from "./Description"
import XSeriesHero from "./XSeriesHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import xSeriesImg from '../../assets/Images/x-series.png';
import tabletImg from '../../assets/Images/tablet.png';
import qrcodeImg from '../../assets/Images/qrcode.png';
import Speaker1 from '../../assets/Images/speaker1.png'
import Speaker2 from '../../assets/Images/speaker2.png'
import Speaker3 from '../../assets/Images/speaker3.png'
import Speaker4 from '../../assets/Images/speaker4.png'
import { ProductCarousel } from "../../Components/Commons/ProductCarousel";
import InsightSection from "../../Components/Commons/InsightSection";
export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
}
function XSeries() {

  const sections = [
    {
      category: 'hospitality',
      labelColor: 'text-[#6B9A86]',
      label: 'Hospitality',
      mainTitle: [
        { text: 'Now experience the world of ', highlight: false },
        { text: 'Digital Voice', highlight: false },
        { text: ' AI Assistants in ', highlight: false },
        { text: 'hospitality.', highlight: true },
      ],
      logoUrl: woohooLogo,
      highlightText: { color: 'text-[#6B9A86]' },
      description: '',
      buttonColor: 'bg-[#BDD9CD]  text[#090909]',
      products: [
        {
          image: xSeriesImg,
          logo: woohooLogo,
          title: 'X-Series',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
          route: '/x-series',
        },
        {
          image: tabletImg,
          logo: woohooLogo,
          title: 'Tablets',
          route:'/tablet',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: qrcodeImg,
          logo: woohooLogo,
          title: 'QR Code',
          route:'/qrcode',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
      ],
    },
  ];


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
  return (
    <div>
        <XSeriesHero/>
        <Description/>
        <Design/>
        {sections.map((section, index) => (
          <ProductSection 
            key={index}
            category={section?.category}
            label={section?.label}
            labelColor={section?.labelColor}
            mainTitle={section?.mainTitle}
            highlightText={section?.highlightText}
            description={section?.description}
            buttonColor={section?.buttonColor}
            products={section?.products}
          />
        ))}
              <ProductCarousel products={products} />
              <InsightSection/>

    </div>
  )
}

export default XSeries

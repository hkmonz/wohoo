import Design from "../../Components/Commons/Design"
import Description from "./Description"
import TabletHero from "./TabletHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import xSeriesImg from '../../assets/Images/x-series.png';
import tabletImg from '../../assets/Images/tablet.png';
import qrcodeImg from '../../assets/Images/qrcode.png';
import ProductSection from "../../Components/Commons/ProductSection";
import InsightSection from "../../Components/Commons/InsightSection";
export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
}
function Tablet() {
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
  return (
    <div>
      <TabletHero/>
      <Description/>
      <Design/>
      {sections.map((section, index) => (
                <ProductSection
                  // key={index}
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
              <InsightSection/>
    </div>
  )
}

export default Tablet

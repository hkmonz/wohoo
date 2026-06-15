import Design from "../../Components/Commons/Design"
import ProductSection from "../../Components/Commons/ProductSection"
import Description from "./Description"
import XSeriesHero from "./XSeriesHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import xSeriesImg from '../../assets/Images/x-series.webp';
import tabletImg from '../../assets/Images/tablet.webp';
import qrcodeImg from '../../assets/Images/qrcode.webp';
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
      textWidth: '',
      description: '',
      buttonColor: '!bg-white  !text[#090909]',
      products: [
        {
          image: xSeriesImg,
          logo: woohooLogo,
          title: 'X-Series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
          route: '/x-series',
        },
        {
          image: tabletImg,
          logo: woohooLogo,
          title: 'Tablets',
          route: '/tablet',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: qrcodeImg,
          logo: woohooLogo,
          title: 'QR Code',
          route: '/qrcode',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
      ],
    },
  ];

  return (
    <div>
        <XSeriesHero/>
        <Description/>
        <Design/>
        {sections.map((section, index) => (
          <div
                   key={index}
         
                 >
                   <ProductSection
                     textWidth={section.textWidth}
                     logoUrl={section.logoUrl}
                     category={section.category}
                     label={section.label}
                     labelColor={section.labelColor}
                     mainTitle={section.mainTitle}
                     highlightText={section.highlightText}
                     description={section.description}
                     buttonColor={section.buttonColor}
                     products={section.products}
                   />
                 </div>
        ))}

    </div>
  )
}

export default XSeries

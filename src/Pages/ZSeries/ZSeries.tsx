import Design from "../../Components/Commons/Design"
import ProductSection from "../../Components/Commons/ProductSection"
import Description from "./Description"
import ZSeriesHero from "./ZSeriesHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import KingdomImg from '../../assets/Images/workplacekingdom.webp';
import AvatarImg from '../../assets/Images/workplaceavatar.webp';
import WorkplaceMeetingTabletImg from '../../assets/Images/workplacemeetingtablet.webp';
import { HelmetProvider } from "react-helmet-async";
export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
}
function ZSeries() {

  const sections = [
    {
      category: 'workplace',
      label: 'Workplace',
      labelColor: 'text-white',
      mainTitle: [
        { text: 'Designing Smart Cities for a', highlight: true },
        { text: ' Smarter Future', highlight: true },
      ],
      logoUrl: woohooLogo,
      highlightText: { color: 'text-white ' },
      description: '',
      buttonColor: 'bg-white !text-black',
      textWidth: 'max-w-3xl',
      products: [
        {
          image: KingdomImg,
          logo: woohooLogo,
          title: 'Z Series',
          route: '/z-series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WorkplaceMeetingTabletImg,
          logo: woohooLogo,
          title: 'Meeting Room Tablet',
          route: '/meeting-room-tablet',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: AvatarImg,
          logo: woohooLogo,
          title: 'Conversational AI Avatar',
          route: '/avatar',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
      ],
    },
  ];

  return (
    <div>
         <HelmetProvider>
                    <title>Voice Activated Technology for Workplace | SmartBeings</title>
                    <meta
                      name="description"
                      content="Transform workplace productivity with voice-activated technology and AI assistants that simplify everyday tasks and improve employee experiences."
                    />
         </HelmetProvider>
      <ZSeriesHero />
      <Description />
      <Design />
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

export default ZSeries

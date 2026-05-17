import Design from "../../Components/Commons/Design"
import ProductSection from "../../Components/Commons/ProductSection"
import Description from "./Description"
import ZSeriesHero from "./ZSeriesHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import KingdomImg from '../../assets/Images/workplacekingdom.png';
import AvatarImg from '../../assets/Images/workplaceavatar.png';
import WorkplaceMeetingTabletImg from '../../assets/Images/workplacemeetingtablet.png';
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
function ZSeries() {

  const sections = [
    {
      category: 'workplace',
      label: 'Workplace',
      labelColor: 'text-[#083735]',
      mainTitle: [
        { text: 'Designing Smart Cities for a', highlight: false },
        { text: ' Smarter Future', highlight: false },
      ],
      logoUrl: woohooLogo,
      highlightText: { color: 'text-teal-900' },
      description: '',
      buttonColor: 'bg-[#083735] !text-white',
      products: [
        {
          image: KingdomImg,
          logo: woohooLogo,
          title: 'Kingdome Series',
          route: '/z-series',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WorkplaceMeetingTabletImg,
          logo: woohooLogo,
          title: 'Meeting Room Tablet',
          route: '/meeting-room-tablet',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: AvatarImg,
          logo: woohooLogo,
          title: 'Avatar',
          route: '/avatar',
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
        <ZSeriesHero/>
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
              <ProductCarousel products={products} />
              <InsightSection/>

    </div>
  )
}

export default ZSeries

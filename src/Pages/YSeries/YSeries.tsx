import Design from "../../Components/Commons/Design"
import ProductSection from "../../Components/Commons/ProductSection"
import Description from "./Description"
import YSeriesHero from "./YSeriesHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import YSeriesImg from '../../assets/Images/healthcareyseries.png';
import WellnessDashboardImg from '../../assets/Images/healthcaredashboard.png';
import SoundbarImg from '../../assets/Images/healthcaresoundbar.png';
import Speaker1 from '../../assets/Images/speaker1.png'
import Speaker2 from '../../assets/Images/speaker2.png'
import Speaker3 from '../../assets/Images/speaker3.png'
import Speaker4 from '../../assets/Images/speaker4.png'
import InsightSection from "../../Components/Commons/InsightSection";
export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
}
function YSeries() {

  const sections = [
   {
      category: 'healthcare',
      label: 'Health Care',
      labelColor: 'text-[#6366F1]',
      mainTitle: [
        { text: 'The Future of ', highlight: false },
        { text: 'Connected Healthcare', highlight: true },
        { text: ' is an AI-Powered Experience.', highlight: false },
      ],
      logoUrl: woohooLogo,

      highlightText: { color: 'text-[#6366F1]' },
      description: '',
      buttonColor: 'bg-[#6366F1] !text-white',
      products: [
        {
          image: YSeriesImg,
          logo: woohooLogo,
          title: 'Y-Series',
          route: '/y-series',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WellnessDashboardImg,
          logo: woohooLogo,
          title: 'Wellness Dashboard',
          route: '/wellness-dashboard',
          description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: SoundbarImg,
          logo: woohooLogo,
          title: 'Soundboard',
          route: '/soundboard',
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
        <YSeriesHero/>
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

export default YSeries

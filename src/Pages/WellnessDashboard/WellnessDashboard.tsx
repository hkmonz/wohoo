import Design from "../../Components/Commons/Design"
import Description from "./Description"
import WellnessDashboardHero from "./WellnessDashboardHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import YSeriesImg from '../../assets/Images/healthcareyseries.webp';
import WellnessDashboardImg from '../../assets/Images/healthcaredashboard.webp';
import SoundbarImg from '../../assets/Images/healthcaresoundbar.webp';
import ProductSection from "../../Components/Commons/ProductSection";
export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
}
function WellnessDashboard() {
    const sections = [
    {
      category: 'healthcare',
      label: 'Health Care',
      labelColor: 'text-white',
      mainTitle: [
        { text: 'The Future of ', highlight: true },
        { text: 'Connected Healthcare', highlight: true },
        { text: ' is an AI-Powered Experience.', highlight: true },
      ],
      logoUrl: woohooLogo,

      highlightText: { color: 'text-white' },
      description: '',
      buttonColor: 'bg-white !text-black',
      products: [
        {
          image: YSeriesImg,
          logo: woohooLogo,
          title: 'Y-Series',
          route: '/y-series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WellnessDashboardImg,
          logo: woohooLogo,
          title: 'Wellness Dashboard',
          route: '/wellness-dashboard',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: SoundbarImg,
          logo: woohooLogo,
          title: 'Soundboard',
          route: '/soundboard',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
      ],
    },
  ];
  return (
    <div>
      <WellnessDashboardHero/>
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
    </div>
  )
}

export default WellnessDashboard

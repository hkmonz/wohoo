import Design from "../../Components/Commons/Design"
import Description from "./Description"
import MeetingRoomHero from "./MeetingRoomHero"
import woohooLogo from '../../assets/Icons/logo.svg';
import KingdomImg from '../../assets/Images/workplacekingdom.png';
import AvatarImg from '../../assets/Images/workplaceavatar.png';
import WorkplaceMeetingTabletImg from '../../assets/Images/workplacemeetingtablet.png';
import ProductSection from "../../Components/Commons/ProductSection";
import InsightSection from "../../Components/Commons/InsightSection";
export interface CarouselProduct {
  id: string;
  title: string;
  description: string;
  image: string;
}
function MeetingRoom() {
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
  return (
    <div>
      <MeetingRoomHero/>
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

export default MeetingRoom

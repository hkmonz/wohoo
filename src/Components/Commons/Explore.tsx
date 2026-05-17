import ProductSection from './ProductSection';
import xSeriesImg from '../../assets/Images/x-series.png';
import tabletImg from '../../assets/Images/tablet.png';
import qrcodeImg from '../../assets/Images/qrcode.png';
import YSeriesImg from '../../assets/Images/healthcareyseries.png';
import WellnessDashboardImg from '../../assets/Images/healthcaredashboard.png';
import SoundbarImg from '../../assets/Images/healthcaresoundbar.png';
import KingdomImg from '../../assets/Images/workplacekingdom.png';
import AvatarImg from '../../assets/Images/workplaceavatar.png';
import WorkplaceMeetingTabletImg from '../../assets/Images/workplacemeetingtablet.png';
import woohooLogo from '../../assets/Icons/logo.svg';

export default function Explore() {
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
    <div className="min-h-screen bg-white">
      {sections.map((section, index) => (
        <ProductSection
          key={index}
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
      ))}
    </div>
  );
}

import ProductSection from './ProductSection';
import xSeriesImg from '../../assets/Images/x-series.webp';
import tabletImg from '../../assets/Images/tablet.webp';
import qrcodeImg from '../../assets/Images/qrcode.webp';
import YSeriesImg from '../../assets/Images/healthcareyseries.webp';
import WellnessDashboardImg from '../../assets/Images/healthcaredashboard.webp';
import SoundbarImg from '../../assets/Images/healthcaresoundbar.webp';
import KingdomImg from '../../assets/Images/workplacekingdom.webp';
import AvatarImg from '../../assets/Images/workplaceavatar.webp';
import WorkplaceMeetingTabletImg from '../../assets/Images/workplacemeetingtablet.webp';
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
      textWidth: '',

      highlightText: { color: 'text-[#6366F1]' },
      description: '',
      buttonColor: 'bg-[#6366F1] !text-white',
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
    <div id="explore" className="min-h-screen scroll-mt-24">
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
  );
}

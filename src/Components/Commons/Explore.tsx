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
import FiveStarImg from '../../assets/Icons/fivestar.svg';
import FourStarImg from '../../assets/Icons/fourstar.svg';
import ThreeStarImg from '../../assets/Icons/threestar.svg';

export default function Explore() {
  const sections = [
    {
      category: 'hospitality',
      labelColor: 'text-[#6B9A86]',
      label: 'Hospitality',
      mainTitle: [
        { text: 'Now Experience the World of ', highlight: false },
        { text: 'Digital Voice', highlight: false },
        { text: ' AI Assistants in ', highlight: false },
        { text: 'Hospitality.', highlight: true },
      ],
      logoUrl: woohooLogo,
      highlightText: { color: 'text-[#6B9A86]' },
      textWidth: '',
      description: '',
      buttonColor: '!bg-white  !text[#090909]',
      products: [
        {
          starImg:FiveStarImg,
          starAlt: "Five-star product rating",
          image: xSeriesImg,
          imageAlt: "WooHoo X-Series smart speaker and touchscreen for hotel guest rooms",
          logo: woohooLogo,
          title: 'X-Series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
          route: '/x-series',
        },
        {
          starImg:FourStarImg,
          starAlt: "Four-star product rating",
          image: tabletImg,
          imageAlt: "WooHoo tablet for accessing hotel guest services",
          logo: woohooLogo,
          title: 'Tablets',
          route: '/tablet',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          starImg:ThreeStarImg,
          starAlt: "Three-star product rating",
          image: qrcodeImg,
          imageAlt: "WooHoo QR code interface for digital hotel guest services",
          logo: woohooLogo,
          title: 'QR Code',
          route: '/qrcode',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
      ],
    },
    {
      category: 'healthcare',
      label: 'Healthcare',
      labelColor: 'text-white',
      mainTitle: [
        { text: 'The Future of ', highlight: true },
        { text: 'Connected Healthcare', highlight: true },
        { text: ' is an AI-Powered Experience.', highlight: true },
      ],
      logoUrl: woohooLogo,
      textWidth: '',

      highlightText: { color: 'text-white' },
      description: '',
      buttonColor: 'bg-white !text-black',
      products: [
        {
          image: YSeriesImg,
          imageAlt: "WooHoo Y-Series care and telehealth device for senior-living residents",
          logo: woohooLogo,
          title: 'Y-Series',
          route: '/y-series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WellnessDashboardImg,
          imageAlt: "WooHoo wellness dashboard for senior-care monitoring",
          logo: woohooLogo,
          title: 'Wellness Dashboard',
          route: '/wellness-dashboard',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: SoundbarImg,
          imageAlt: "WooHoo soundbar for a senior-living resident room",
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
          imageAlt: "WooHoo Z-Series workplace assistant for meeting and office services",
          logo: woohooLogo,
          title: 'Z Series',
          route: '/z-series',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WorkplaceMeetingTabletImg,
          imageAlt: "WooHoo tablet for meeting-room booking and controls",
          logo: woohooLogo,
          title: 'Meeting Room Tablet',
          route: '/meeting-room-tablet',
          // description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: AvatarImg,
          imageAlt: "WooHoo conversational AI avatar for workplace assistance",
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

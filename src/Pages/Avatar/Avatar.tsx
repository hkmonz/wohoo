import AvatarHero from "./AvatarHero";
import Description from "./Description";
import KingdomImg from "../../assets/Images/workplacekingdom.webp";
import AvatarImg from "../../assets/Images/workplaceavatar.webp";
import WorkplaceMeetingTabletImg from "../../assets/Images/workplacemeetingtablet.webp";
import woohooLogo from "../../assets/Icons/logo.svg";
import ProductSection from "../../Components/Commons/ProductSection";
import Specialized from "./Specialized";
import Why from "./Why";
import Verdent from "./Verdent";
import Contact from "./Contact";
import { HelmetProvider } from "react-helmet-async";

function Avatar() {
  const sections = [
    {
      category: "workplace",
      label: "Workplace",
      labelColor: "text-white",
      mainTitle: [
        { text: "Designing Smart Cities for a", highlight: true },
        { text: " Smarter Future", highlight: true },
      ],
      logoUrl: woohooLogo,
      highlightText: { color: "text-white " },
      description: "",
      buttonColor: "bg-white !text-black",
      textWidth: "max-w-3xl",
      products: [
        {
          image: KingdomImg,
          logo: woohooLogo,
          title: "Z Series",
          route: "/z-series",
          //   description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: WorkplaceMeetingTabletImg,
          logo: woohooLogo,
          title: "Meeting Room Tablet",
          route: "/meeting-room-tablet",
          //   description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
        {
          image: AvatarImg,
          logo: woohooLogo,
          title: "Conversational AI Avatar",
          route: "/avatar",
          //   description: 'Lorem ipsum dolor sit amet consectetur. Maecenas Fingitiis',
        },
      ],
    },
  ];
  return (
    <div>
      <HelmetProvider>
        <title>Generative AI for Workplace | SmartBeings</title>
        <meta
          name="description"
          content="Discover generative AI for the workplace with intelligent assistants that deliver instant answers, streamline tasks, and support better decision-making."
        />
      </HelmetProvider>
      <AvatarHero />
      <Description />
      <Why />
      <Verdent />
      <Specialized />
      <Contact />
      {sections.map((section, index) => (
        <div key={index}>
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

export default Avatar;

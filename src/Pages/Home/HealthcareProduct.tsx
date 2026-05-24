import { ProductCard } from '../../Components/Commons/ProductCard';
import HealthcareImage1 from '../../assets/Images/xseriesproduct.webp';
import HealthcareImage2 from '../../assets/Images/yseriesproduct.webp';
import HealthcareImage3 from '../../assets/Images/zseriesproduct.webp';
import WohooLogo from '../../assets/Icons/productlogo.svg';
import ArrowIcon from '../../assets/Icons/arrow.svg';

const healthcareProducts = [
  {
    id: "1",
    title: "X-Series",
    logo: WohooLogo,
    image: HealthcareImage1,
    badge: ArrowIcon,
    description:
      "The guestroom, reimagined. Nine native revenue channels and the AI Recommendation Engine that doubles attach rates.",
    list: [
      "Privacy by design (no camera)",
      "JBL by Harman audio",
      "50+ hospitality integrations",
      "Voice + 7″ touch display",
      "SIP-based PBX replacement"
    ],
  },
  {
    id: "2",
    title: "Y-Series",
    logo: WohooLogo,
    image: HealthcareImage2,
    badge: ArrowIcon,
    description:
      "The guestroom, reimagined. Nine native revenue channels and the AI Recommendation Engine that doubles attach rates.",
    list: [
      "5MP HD camera with 330° rotation",
      "One-touch telehealth video",
      "Image-based medication reminders",
      "Configurable routine prompts",
      "Emergency service voice calling"
    ],
  },
  {
    id: "3",
    title: "Z-Series",
    logo: WohooLogo,
    image: HealthcareImage3,
    badge: ArrowIcon,
    description:
      "The guestroom, reimagined. Nine native revenue channels and the AI Recommendation Engine that doubles attach rates.",
    list: [
      "Uniquely designed form factor",
      "Meeting room booking & control",
      "Visitor check-in & badging",
      "Calendar & collaboration integration",
      "Building management connection"],
  },
];

function HealthcareProduct() {
  const category = "SmartBeings Inc.";
  const title = "Next Generation of  AI Agent Assistants for customized and secure Enterprise deployment";
  const products = healthcareProducts;

  return (
    <div className=" bg-[#ECECFA] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-center">
        {category && (
          <div className="inline-block mb-1">
            <span className="text-[22px] font-normal text-gray-600 letter-spacing-[2.5px] line-height-[11.11px] uppercase">
              {category}
            </span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-[55px] !font-medium text-[#0B0B0B] mb-4 sm:mb-6 leading-2rem letter-spacing-[-0.02em]">
          {title}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              logo={product.logo}
              description={product.description}
              list={product.list}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthcareProduct;
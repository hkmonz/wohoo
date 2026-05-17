import { ProductCard } from '../../Components/Commons/ProductCard';
import HealthcareImage1 from '../../assets/Images/xseriesproduct.png';
import HealthcareImage2 from '../../assets/Images/yseriesproduct.png';
import HealthcareImage3 from '../../assets/Images/zseriesproduct.png';
import WohooLogo from '../../assets/Icons/productlogo.svg';

export interface Product {
  id: string;
  title: string;
  image: string;
}

const healthcareProducts = [
  {
    id: "1",
    title: "X-Series",
    logo: WohooLogo,
    image: HealthcareImage1,
  },
  {
    id: "2",
    title: "Y-Series",
    logo: WohooLogo,
    image: HealthcareImage2,
  },
  {
    id: "3",
    title: "Z-Series",
    logo: WohooLogo,
    image: HealthcareImage3,
  }
];

function HealthcareProduct() {
  const category = "Healthcare";
  const title = "Smart Healthcare Solutions";
  const subtitle = "Innovative products designed to revolutionize patient care and wellness monitoring";
  const products = healthcareProducts;

  return (
    <div className=" bg-[#ECECFA] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 lg:mb-20 text-center">
        {category && (
          <div className="inline-block mb-1">
            <span className="text-[22px] font-normal text-gray-600 letter-spacing-[2.5px] line-height-[11.11px] uppercase">
              {category}
            </span>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-[55px] font-medium text-[#0B0B0B] mb-4 sm:mb-6 leading-[74px] letter-spacing-[-0.02em]">
          {title}
        </h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              logo={product.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthcareProduct;
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from './Cards';

export default function ProductSection({
  category,
  label,
  labelColor,
  mainTitle,
  highlightText,
  description,
  buttonColor,
  products,
  textWidth
}: any) {
    const navigate = useNavigate();

  const handleExplore = () => {
    if (category === 'hospitality') {
      navigate('/hospitality');
    } else if (category === 'healthcare') {
      navigate('/healthcare');
    } else if (category === 'workplace') {
      navigate('/workplace');
    }
  };
  return (
    <section
      className={`py-16 ${
        category === 'hospitality'
          ? 'bg-[#C0D9CF]'
          : category === 'healthcare'
          ? 'bg-[#ECECFA]'
          : 'bg-[#06413F]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-10">
        <div className="text-center mb-12">
          <p
            className={`text-[22.22px] font-normal uppercase tracking-wide mb-2 ${labelColor}`}
          >
            {label}
          </p>

          <h2 className={`text-4xl md:text-5xl font-bold text-[#1D1832] mb-4 mx-auto ${textWidth}`}>
            {mainTitle.map((part: any, index: any) => (
              <span
                key={index}
                className={part.highlight ? highlightText.color : ''}
              >
                {part.text}
              </span>
            ))}
          </h2>

          <p className="text-gray-600 text-lg mb-8">{description}</p>

          <button
          onClick={handleExplore}
            className={`px-12 py-4 rounded-xl font-normal transition-all hover:shadow-lg ${buttonColor}`}
            >
            Explore
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product: any, index: any) => (
            <ProductCard
              key={index}
              logoUrl={product.logo}
              image={product.image}
              logo={product.logo}
              title={product.title}
              description={product.description}
              route={product.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
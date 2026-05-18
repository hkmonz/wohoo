import ProductCard from './Cards';

export default function ProductSection({  label, labelColor, mainTitle, highlightText, description, buttonColor, products }:any) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          
          <p className={`text-[22.22px] font-normal  uppercase tracking-wide mb-2 ${labelColor}`}>
            {label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D1832] mb-4">
            {mainTitle.map((part:any, index:any) => (
              <span key={index} className={part.highlight ? highlightText.color : ''}>
                {part.text}
              </span>
            ))}
          </h2>
          <p className="text-gray-600 text-lg mb-8">{description}</p>
          <button
            className={`px-12 py-4 rounded-xl font-normal  transition-all hover:shadow-lg ${buttonColor}`}
          >
            Explore
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product:any, index:any) => (
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

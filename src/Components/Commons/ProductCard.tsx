interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  description?: string;
  badge?: string;
  logo?: any;
  list?: string[]; 
}

export function ProductCard({
  title,
  image,
  description,
  badge,
  logo,
  list,
}: ProductCardProps) {
  return (
    <div className="group relative w-full h-auto overflow-hidden rounded-3xl bg-white shadow-lg transition-all">
      
      {/* Image Container */}
      <div className="relative w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 p-4 rounded-full text-xs font-semibold text-gray-700 shadow-md">
            <img src={badge} alt="arrow icon" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="text-lg flex justify-center items-center font-medium text-gray-900 transition-colors duration-300">
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="w-35 mb-1 inline-block"
            />
          )}
          {title}
        </h3>

        {description && (
          <p className="text-sm text-[#616161] line-clamp-4 mb-4">
            {description}
          </p>
        )}

        {/* List */}
        {list && list.length > 0 && (
          <ul className="list-disc pl-5 space-y-2 text-sm text-[#616161]">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
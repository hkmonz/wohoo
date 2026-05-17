interface SliderCardProps {
  image?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}

export function SliderCard({ image, title, description }: SliderCardProps) {
  return (
    <div>
      <div className={`  rounded-2xl overflow-hidden bg-[#ECF0F6]  transition-all duration-500 `}>
        <img
          src={image}
          alt={title}
          className="object-cover  p-5  "
        />
        <div className="  p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#131313] mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-[#606060] line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

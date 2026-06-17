import React from 'react';
import ExploreBg from '../../assets/Images/explorebg.webp';

interface FeatureCardProps {
  label: string;
  title: string;
  description: string;
  labelColor: string;
  image: string;
  imgWidth?: string;
}

const ExploreCard: React.FC<FeatureCardProps> = ({ label, title, description, labelColor, image, imgWidth }) => {
  return (
    <div className="relative max-w-7xl h-96 sm:h-[28rem] md:h-[32rem] lg:h-116 mx-auto rounded-3xl bg-[#ECECFA] overflow-hidden cursor-pointer group mb-6">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={ExploreBg}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-left z-10"
        />
        <div className="absolute inset-0 bg-white/60 z-10" />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col sm:flex-row">
        <div className="flex-1 flex flex-col justify-center sm:justify-end p-4 sm:p-6 lg:p-8 order-1 sm:order-1">
          <div className="text-white">
            <p className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal uppercase !mb-2 sm:!mb-1 tracking-wider text-[#6FB7C1] ${labelColor}`}>
              {label}
            </p>
            <h2 className="!min-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight text-[#140D2D] mb-2 sm:mb-3">
              {title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed text-[#616161] max-w-xl mb-5">
              {description}
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#6B5FEF] px-10 py-3 text-sm md:!text-base font-normal text-white shadow-lg transition hover:bg-[#5848c6]"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Image Content - Bottom on mobile, Right on larger screens */}
        <div className="flex-1 flex items-center justify-center sm:justify-end md:mr-18 p-4 sm:p-6 lg:p-8 order-2 sm:order-2">
          <img
            src={image}
            alt={title}
            className={`w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] xl:max-w-[26rem] 2xl:max-w-[28rem] object-contain ${imgWidth || ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;

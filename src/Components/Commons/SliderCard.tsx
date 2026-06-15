import { useRef, useEffect } from 'react';

interface SliderCardProps {
  image?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
  video?: string;
}

export function SliderCard({ image, video, title, description }: SliderCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile && videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  };

  return (
    <div>
      <div className="rounded-2xl overflow-hidden bg-[#ECECFA] transition-all duration-500">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="object-cover p-5 w-full cursor-pointer"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="object-cover p-5"
          />
        )}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-[#131313] mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-[#606060] line-clamp-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
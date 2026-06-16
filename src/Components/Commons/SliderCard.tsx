import { useRef, useEffect, useState } from 'react';

interface SliderCardProps {
  image?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
  video?: string;
  poster?: string; // Add poster image
}

export function SliderCard({ image, video, title, description, poster, isActive }: SliderCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Lazy load video when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play on mobile only when visible
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile && isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's OK
      });
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video play failed');
      });
    }
  };

  const handleMouseLeave = () => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div ref={containerRef}>
      <div className="rounded-2xl overflow-hidden bg-[#ECECFA] transition-all duration-500">
        {video && isVisible ? (
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                <div className="animate-spin">
                  <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full" />
                </div>
              </div>
            )}
            
            <video
              ref={videoRef}
              poster={poster || image} 
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onLoadStart={() => setIsLoading(true)}
              onCanPlay={() => setIsLoading(false)}
              onLoadedMetadata={() => setIsLoading(false)}
              className="object-cover p-5 w-full cursor-pointer"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="object-cover p-5 w-full"
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
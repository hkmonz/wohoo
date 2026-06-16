import React, { useState, useRef, useEffect } from 'react';
import { MdPlayArrow as Play, MdChevronRight as ChevronRight, MdChevronLeft as ChevronLeft } from 'react-icons/md';
import { Modal } from 'antd';
import 'antd/dist/reset.css';
import NewsImage from '../../assets/Images/news.webp';
import NewsImage1 from '../../assets/Images/news1.png';
import NewsImage2 from '../../assets/Images/news2.png';
import NewsImage3 from '../../assets/Images/news3.png';
import NewsImage4 from '../../assets/Images/news4.png';
import NewsImage5 from '../../assets/Images/news5.png';
import VidImg1 from '../../assets/Images/vid1.webp';
import VidImg2 from '../../assets/Images/vid2.webp';
import VidImg3 from '../../assets/Images/vid3.webp';

interface NewsArticle {
    id: number;
    title: string;
    date: string;
    author: string;
    link: string;
}

interface Testimonial {
    id: string;
    title: string;
    description: string;
}

interface FeatureCard {
    id: string;
    title: string;
    description: string;
    image: string;
    color: string;
}

const InsightSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoSectionRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const videoUrls = [
        'https://www.youtube.com/embed/JS6Dk9lJj84?start=53&autoplay=1&mute=1',
        'https://www.youtube.com/embed/3bTBst9MGzE?start=25190&autoplay=1&mute=1',
        'https://www.youtube.com/embed/5wh7BBoapxY?autoplay=1&mute=1',
    ];

    const newsImages = [
        NewsImage,
        NewsImage1,
        NewsImage2,
        NewsImage3,
        NewsImage4,
        NewsImage5,
    ];

    // Lazy load video iframe
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVideoVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.25 }
        );

        if (videoSectionRef.current) {
            observer.observe(videoSectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleVideoClick = (videoIndex: number) => {
        setCurrentVideoUrl(videoUrls[videoIndex]);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setCurrentVideoUrl('');
    };

    const newsArticles: NewsArticle[] = [
        {
            id: 1,
            title: "WooHoo X-Series Selected by Elisium City Hotels for City-Wide Hospitality Upgrade",
            date: "August 25, 2025",
            author: "WooHoo",
            link: "https://www.forbes.com/sites/jonathanreichental/2025/07/06/inside-the-bold-vision-for-americas-first-cognitive-city/",
        },
        {
            id: 2,
            title: "Women's empowerment is vital to success, says UNWTO executive director",
            date: "September 21, 2023",
            author: "WooHoo",
            link: "https://www.arabnews.com/node/2381546/saudi-arabia",
        },
        {
            id: 3,
            title: "WooHoo Partners with Intel to Redefine the Hotel Guest Experience with Generative Voice AI Assistant Speaker",
            date: "August 25, 2025",
            author: "WooHoo",
            link: "https://hoteltechnologynews.com/2023/11/woohoo-partners-with-intel-to-redefine-the-hotel-guest-experience-with-next-generation-voice-ai-assistant-speaker/",
        },
        {
            id: 4,
            title: "SparkleHaze part of the Ministry of Economy, UAE Grant program for Innovation",
            date: "August 09, 2025",
            author: "WooHoo",
            link: "https://www.arabianbusiness.com/startup/ministry-of-economy-ewa-launch-acceleration-programme-for-women-led-startups-in-uae",
        },
        {
            id: 5,
            title: "Inside the bold version of America's first cognitive city",
            date: "July 06, 2025",
            author: "WooHoo",
            link: "https://www.forbes.com/sites/jonathanreichental/2025/07/06/inside-the-bold-vision-for-americas-first-cognitive-city/",
        },
        {
            id: 6,
            title: "SparkleHaze and COGNITIVE, ELISIUM's Tech Subsidiary team up together to spearhead Development of Next-Generation Hardware and Software for Cities of Tomorrow",
            date: "February 05, 2025",
            author: "WooHoo",
            link: "https://www.linkedin.com/posts/sparklehaze_elisiumkey-usa-elisiumkey-activity-7376716352591392768-_Db5?utm_source=share&utm_medium=member_ios&rcm=ACoAAAElvqsBz0cNSrZXCydh3ToSpuhAPA5J2pk",
        },
    ];

    const testimonial: Testimonial = {
        id: '1',
        title: 'What Our Clients Say',
        description: 'Watch Video To See How Woohoo® Has Transformed Hotel Experiences For Customers',
    };

    const featureCards: FeatureCard[] = [
        {
            id: '1',
            title: 'WooHoo making life easier than ever before',
            image: VidImg1,
            description: '',
            color: 'bg-gradient-to-br from-[#A2285D] to-[#570026]',
        },
        {
            id: '2',
            title: 'WooHoo making life easier than ever before',
            image: VidImg2,
            description: '',
            color: 'bg-gradient-to-br from-[#0072AC] to-[#000757]',
        },
        {
            id: '3',
            title: 'WooHoo making life easier than ever before',
            image: VidImg3,
            description: '',
            color: 'bg-gradient-to-br from-[#00C0CE] to-[#005157]',
        },
    ];

    const handleNextArticle = () => {
        setCurrentArticleIndex((prev) => (prev + 1) % newsArticles.length);
    };

    const handlePrevArticle = () => {
        setCurrentArticleIndex((prev) => (prev - 1 + newsArticles.length) % newsArticles.length);
    };

    const currentArticle = newsArticles[currentArticleIndex];
    const currentImage = newsImages[currentArticleIndex];

    return (
        <div ref={sectionRef} className="w-full">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Row 1: News card + Featured image */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
                    {/* Left: title + news card */}
                    <div className="space-y-6">
                        <div className="overflow-hidden rounded-[2rem] bg-black px-8 py-10 sm:px-10 sm:py-12 shadow-2xl">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                Insights & News
                            </h1>
                        </div>

                        {/* Fixed height card */}
                        <div className="overflow-hidden rounded-[2rem] bg-white p-6 sm:p-8 shadow-xl border border-slate-200 min-h-[400px] sm:min-h-[450px] flex flex-col">
                            <div className="flex-1 flex flex-col">
                                <div className="space-y-4 sm:space-y-6 flex-1">
                                    <div>
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-tight line-clamp-3">
                                            {currentArticle.title}
                                        </h2>

                                        <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                            <span className="font-medium text-[#000000]">{currentArticle.author}</span>
                                            <div className="border-l h-5 border-[#00000040]"></div>
                                            <span className="text-[#000000BF]">{currentArticle.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                                    <a
                                        href={currentArticle.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-11 px-6 !text-[#7C56EC] text-sm sm:text-base hover:opacity-80 transition-opacity"
                                    >
                                        Read More →
                                    </a>
                                </div>

                                <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                    <button
                                        onClick={handlePrevArticle}
                                        className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black !text-white transition-transform hover:scale-105 active:scale-95"
                                        aria-label="Previous article"
                                    >
                                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </button>
                                    <button
                                        onClick={handleNextArticle}
                                        className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black !text-white transition-transform hover:scale-105 active:scale-95"
                                        aria-label="Next article"
                                    >
                                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </button>
                                </div>

                                <div className="mt-4 flex justify-center gap-2">
                                    {newsArticles.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentArticleIndex(idx)}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                idx === currentArticleIndex ? 'w-6 bg-[#7C56EC]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                            aria-label={`Go to article ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: featured image - OPTIMIZED */}
                    <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl">
                        <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-full bg-slate-200">
                            <img
                                src={currentImage}
                                alt={`Featured news - ${currentArticle.title}`}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover transition-all duration-300"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600';
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Video and Testimonial */}
                <div 
                    ref={videoSectionRef}
                    className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr]"
                >
                    {/* Lazy load video iframe */}
                    <div className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl">
                        <div className="relative aspect-video overflow-hidden bg-slate-900">
                            {isVideoVisible ? (
                                <iframe
                                    src="https://www.youtube.com/embed/JS6Dk9lJj84?start=53"
                                    className="w-full h-full min-h-[200px] sm:min-h-[250px] rounded-xl"
                                    title="Digital Transformation: Copthorne King's Hotel x Woohoo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                                    <div className="text-white/60">Loading video...</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] bg-[#ECECFA] shadow-xl border border-slate-200 flex justify-center items-center">
                        <div className="p-8 sm:p-10 lg:p-8 max-w-sm">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-[#140D2D] leading-tight">
                                {testimonial.title}
                            </h3>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 text-slate-600">
                                {testimonial.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {featureCards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`${card.color} h-52 sm:h-56 lg:h-60 w-full relative overflow-hidden rounded-[2rem] p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group`}
                            onClick={() => handleVideoClick(index)}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={card.image}
                                    alt={`${card.title} background`}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover opacity-30"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
                            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 z-20">
                                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-2xl">
                                    <Play className="h-6 w-6 sm:h-7 sm:w-7 text-slate-900 ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 px-2 z-10">
                                <h3 className="text-base sm:text-lg md:text-xl !font-normal text-white leading-tight">
                                    {card.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <Modal
                open={isModalOpen}
                onCancel={handleModalClose}
                footer={null}
                width="90%"
                style={{ maxWidth: 800 }}
                centered
                destroyOnClose
                title="Video"
            >
                <div className="aspect-video">
                    {currentVideoUrl && (
                        <iframe
                            src={currentVideoUrl}
                            className="w-full h-full rounded-lg"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            frameBorder="0"
                            loading="lazy"
                        />
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default InsightSection;
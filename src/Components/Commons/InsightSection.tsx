import React, { useState } from 'react';
import { MdPlayArrow as Play, MdChevronRight as ChevronRight, MdChevronLeft as ChevronLeft } from 'react-icons/md';
import { Modal } from 'antd';
import 'antd/dist/reset.css';
import NewsImage from '../../assets/Images/news.png';
import KirtiIcon from '../../assets/Icons/kirti.svg';
import VidImg1 from '../../assets/Images/vid1.png';
import VidImg2 from '../../assets/Images/vid2.png';
import VidImg3 from '../../assets/Images/vid3.png';

interface NewsArticle {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
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

    const videoUrls = [
        'https://www.youtube.com/embed/JS6Dk9lJj84?start=53&autoplay=1&mute=1',
        'https://www.youtube.com/embed/3bTBst9MGzE?start=25190&autoplay=1&mute=1',
        'https://www.youtube.com/embed/5wh7BBoapxY?autoplay=1&mute=1',
    ];

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
            id: '1',
            title: 'WooHoo X-Series Selected by Elisium City Hotels for City-Wide Hospitality Upgrade',
            date: 'August 09, 2025',
            excerpt:
                "Are you keeping pace with the rapid evolution of guest expectations? In today's market, hotels",
            image: 'assets/images/hotel-exterior.jpg',
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

    return (
        <div className="w-full">
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

                        <div className="overflow-hidden rounded-[2rem] bg-white p-6 sm:p-8 shadow-xl border border-slate-200">
                            <div className="space-y-4 sm:space-y-6">
                                <div>
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                                        {newsArticles[0].title}
                                    </h2>

                                    <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                        <img
                                            src={KirtiIcon}
                                            alt="News"
                                            className="h-9 w-9 rounded-full object-cover"
                                        />
                                        <span className="font-medium text-[#000000]">Kirti</span>
                                        <div className="border-l h-5 border-[#00000040]"></div>
                                        <span className="text-[#000000BF]">{newsArticles[0].date}</span>
                                    </div>
                                </div>

                                <p className="text-slate-600 text-sm sm:text-base leading-6 sm:leading-7">
                                    {newsArticles[0].excerpt}
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                                <button className="ml-auto inline-flex h-11 px-6 items-center justify-center !text-[#7C56EC] text-sm sm:text-base">
                                    Read More →
                                </button>
                            </div>

                            <div className="mt-4 sm:mt-6 flex gap-4">
                                <button className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black !text-white">
                                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                                </button>
                                <button className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black !text-white">
                                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: featured image */}
                    <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl">
                        <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-full">
                            <img
                                src={NewsImage}
                                alt="Featured hotel"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600';
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr]">

                    <div className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl">
                        <div className="relative aspect-video overflow-hidden bg-slate-900">
                            <iframe
                                src="https://www.youtube.com/embed/JS6Dk9lJj84?start=53"
                                className="w-full h-full min-h-[200px] sm:min-h-[250px] rounded-xl"
                                title="Digital Transformation: Copthorne King's Hotel x Woohoo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            />
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

                {/* Row 3: Feature video cards */}
                <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {featureCards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`${card.color} h-52 sm:h-56 lg:h-60 w-full relative overflow-hidden rounded-[2rem] p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            {/* Background image */}
                            <div className="absolute inset-0">
                                <img
                                    src={card.image}
                                    alt="Background"
                                    className="h-full w-full object-cover opacity-30"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10" />

                            {/* Play button */}
                            <button
                                onClick={() => handleVideoClick(index)}
                                className="absolute inset-0 flex items-center justify-center transition-transform duration-300 hover:scale-105 z-20"
                            >
                                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white shadow-2xl">
                                    <Play className="h-6 w-6 sm:h-7 sm:w-7 text-slate-900 ml-1" />
                                </div>
                            </button>

                            {/* Card title */}
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
                        />
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default InsightSection;
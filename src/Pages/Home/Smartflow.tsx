import { useEffect, useRef, useState } from 'react';
import SmartflowVideo from "../../assets/Images/smartflowvideo.mp4";

export default function Smartflow() {
    const [shouldLoad, setShouldLoad] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapperRef.current || shouldLoad) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px', threshold: 0.25 }
        );

        observer.observe(wrapperRef.current);

        return () => observer.disconnect();
    }, [shouldLoad]);

    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
                <span className="inline-block text-xs sm:text-sm font-normal tracking-[0.2em] text-black uppercase mb-2">
                    SMARTFLOW
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium leading-tight lg:leading-[1.2] mb-10 sm:mb-12">
                    SmartFlow Agentic AI Platform
                </h2>

                <div ref={wrapperRef} className="VideoSection mt-10 overflow-hidden rounded-3xl shadow-xl bg-slate-950/5">
                    <div className="relative w-full pb-[56.25%]">
                        <video
                            src={shouldLoad ? SmartflowVideo : undefined}
                            controls
                            preload="none"
                            playsInline
                            autoPlay
                            loop
                            muted
                            className="absolute inset-0 h-full w-full object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}
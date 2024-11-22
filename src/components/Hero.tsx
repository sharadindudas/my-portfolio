"use client";

import RetroGrid from "@/components/ui/retro-grid";

const HeroSection = () => {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                Sharadindu Das
            </span>
            <div className="max-w-2xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight">
                    Full Stack Developer
                </h1>
                <p className="text-lg md:text-xl text-center">
                    Developing design and functionality with cutting-edge
                    frontend expertise and rapidly expanding backend skills.
                    Transforming ideas into seamless, user-centric digital
                    experiences.
                </p>
            </div>

            <RetroGrid />
        </div>
    );
};

export default HeroSection;

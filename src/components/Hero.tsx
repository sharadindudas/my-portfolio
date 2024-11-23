"use client";

import RetroGrid from "@/components/ui/retro-grid";

const HeroSection = () => {
    return (
        <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 md:px-6 lg:px-8 md:shadow-xl">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tighter text-transparent mb-2">
                Sharadindu Das
            </span>
            <div className="max-w-2xl mx-auto space-y-6 z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight text-foreground">
                    Full Stack Developer
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-center text-muted-foreground">
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

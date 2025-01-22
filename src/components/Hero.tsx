"use client";

import RetroGrid from "@/components/ui/retro-grid";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

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
                <div className="flex justify-center mt-8">
                    <Link
                        className="group flex items-center gap-2 bg-white text-black px-5 sm:h-11 h-10 text-sm sm:text-base font-medium rounded-lg"
                        href="https://drive.google.com/file/d/17lj-O63oMrin2Tzr_vgcgLRiaZZQnSz5/view?usp=drive_link"
                        target="_blank"
                    >
                        <DownloadIcon className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Download Resume
                    </Link>
                </div>
            </div>
            <RetroGrid />
        </div>
    );
};

export default HeroSection;

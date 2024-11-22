"use client";

import IconCloud from "@/components/ui/icon-cloud";
import { useEffect, useState } from "react";

const slugs = [
    "typescript",
    "react",
    "nextdotjs",
    "nodedotjs",
    "express",
    "mongodb",
    "html5",
    "css3",
    "javascript",
    "firebase",
    "vercel",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
    "framer",
    "bootstrap",
    "tailwindcss",
    "sass",
    "c",
    "python",
    "tsnode",
    "nodemon",
    "shadcnui",
    "render",
    "dotenv",
    "netlify",
    "eslint",
    "prettier",
    "redux"
];

const SkillSection = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8 ">
            {isMounted && <IconCloud iconSlugs={slugs} />}
        </div>
    );
};

export default SkillSection;

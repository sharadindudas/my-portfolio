import { Project } from "@/types/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "Mystry Message",
        description:
            "Mystery Message is a web application where logged-in users can receive messages, and anyone not logged-in can send messages anonymously. Share your link to collect anonymous messages or use someone's link to send one.",
        image: "/assets/project1.png",
        liveSite: "https://mystry-message.sharadindudas.com",
        github: "https://github.com/R3MODAS/mystry-message",
        techStack: [
            "Next",
            "Typescript",
            "MongoDB",
            "Redis",
            "Shadcn/ui",
            "Tailwind"
        ]
    },
    {
        id: 2,
        title: "Spicy Pricey",
        description:
            "Spicy Pricey is a food delivery application using Swiggy's Realtime API for restaurant data, location-based recommendations, menu browsing, and Razorpay for secure payments. Enjoy a seamless food ordering experience.",
        image: "/assets/project2.png",
        liveSite: "https://spicy-pricey-food-delivery.vercel.app",
        github: "https://github.com/R3MODAS/spicy-pricey",
        techStack: ["React", "Redux", "JavaScript", "Shadcn/ui", "Tailwind"]
    },
    {
        id: 3,
        title: "Gouranga Paul & Sons",
        description:
            "Gouranga Paul is a modern e-commerce platform offering premium readymade blouses and petticoats across Kolkata ensuring a seamless shopping experience, so browse our products, pick your favorites and securely pay via CCAvenue",
        image: "/assets/project3.png",
        liveSite: "https://gpsons-ecommerce.vercel.app",
        github: "https://github.com/R3MODAS/gpsons",
        techStack: ["Next", "Typescript", "Shadcn/ui", "Tailwind"]
    }
];

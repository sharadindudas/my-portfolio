import { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
    {
        id: 1,
        title: "Mystry Message",
        description:
            "Mystery Message is a web application where logged-in users can receive messages, and anyone not logged-in can send messages anonymously. Share your link to collect anonymous messages or use someone's link to send one.",
        image: "/assets/project1.png",
        liveSite: "https://mystry-message.sharadindudas.com",
        github: "https://github.com/sharadindudas/mystry-message",
        techStack: ["Next", "TypeScript", "MongoDB", "Redis", "Shadcn", "Tailwind"]
    },
    {
        id: 2,
        title: "Spicy Pricey",
        description:
            "Spicy Pricey is a food delivery application using Swiggy's Realtime API for restaurant data, location-based recommendations, menu browsing, and Razorpay for secure payments. Enjoy a seamless food ordering experience.",
        image: "/assets/project2.png",
        liveSite: "https://spicy-pricey.sharadindudas.com",
        github: "https://github.com/sharadindudas/spicy-pricey",
        techStack: ["React", "Redux", "JavaScript", "Shadcn", "Tailwind"]
    },
    {
        id: 3,
        title: "Gouranga Paul & Sons",
        description:
            "Gouranga Paul is a modern e-commerce platform offering premium readymade blouses and petticoats across Kolkata ensuring a seamless shopping experience, so browse our products, pick your favorites and securely pay via CCAvenue",
        image: "/assets/project3.png",
        liveSite: "https://gourangapaul.vercel.app",
        github: "https://github.com/sharadindudas/gpsons",
        techStack: ["Next", "TypeScript", "Shadcn", "Tailwind"]
    },
    {
        id: 4,
        title: "United Monks",
        description:
            "A modern, responsive website built for a Full Stack Development Agency that showcases their comprehensive services including web development, mobile app development, and branding solutions.",
        image: "/assets/project4.png",
        liveSite: "https://united-monks.vercel.app",
        github: "https://github.com/sharadindudas/united-monks",
        techStack: ["React", "JavaScript", "Sass"]
    }
];

const ProjectSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">My Projects</h2>
                    <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-muted-foreground">
                        Check out some of the projects I have worked on various web applications which showcases my skills and creativity.
                    </p>
                </div>
                <div className="mt-8 sm:mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;

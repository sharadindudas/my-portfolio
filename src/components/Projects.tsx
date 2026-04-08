import { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Gouranga Paul & Sons",
    description:
      "Gouranga Paul is a modern e-commerce platform offering premium readymade blouses and petticoats across Kolkata ensuring a seamless shopping experience, so browse our products, pick your favorites and securely pay via CCAvenue",
    image: "/assets/gpsons.png",
    liveSite: "https://gourangapaul.com",
    techStack: ["Next", "TypeScript", "Shadcn", "Tailwind"]
  },
  {
    id: 2,
    title: "Devtinder",
    description:
      "DevTinder is a developer networking platform that allows users to connect, chat, and collaborate based on mutual interest. Featuring a swipe-based matchmaking system, real-time chat with Socket.io, and secure authentication, it helps developers build meaningful connections effortlessly. 🚀",
    image: "/assets/devtinder.png",
    liveSite: "https://devtinder-remo.vercel.app",
    github: "https://github.com/sharadindudas/devtinder",
    techStack: ["React", "JavaScript", "DaisyUi", "Tailwind", "Node", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Foodflow",
    description:
      "A modern food ordering web application delivering a seamless experience with real-time restaurant data, cart management, Firebase authentication, and Razorpay payments. It securely routes external API calls through a custom Backend-for-Frontend (BFF) Express API Gateway.",
    image: "/assets/foodflow.png",
    liveSite: "https://foodflow-remo.vercel.app",
    github: "https://github.com/sharadindudas/foodflow",
    techStack: ["React", "JavaScript", "Tailwind", "Shadcn", "Node", "Express", "Firebase"]
  },
  {
    id: 4,
    title: "United Monks",
    description:
      "A modern, responsive website built for a Full Stack Development Agency that showcases their comprehensive services including web development, mobile app development, and branding solutions.",
    image: "/assets/united-monks.png",
    liveSite: "https://united-monks.vercel.app",
    github: "https://github.com/sharadindudas/united-monks",
    techStack: ["React", "JavaScript", "Sass"]
  },
  {
    id: 5,
    title: "Mystry Message",
    description:
      "Mystery Message is a web application where logged-in users can receive messages, and anyone not logged-in can send messages anonymously. Share your link to collect anonymous messages or use someone's link to send one.",
    image: "/assets/mystry-message.png",
    liveSite: "https://mystry-message-remo.vercel.app",
    github: "https://github.com/sharadindudas/mystry-message",
    techStack: ["Next", "TypeScript", "MongoDB", "Redis", "Shadcn", "Tailwind"]
  }
];

const ProjectSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">My Projects</h2>
          <p className="max-w-225 text-sm sm:text-base md:text-lg text-muted-foreground">
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

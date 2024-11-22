import { Project } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
                src={project.image}
                alt={project.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[270px] object-top object-cover rounded-lg"
            />
            <div className="bg-background p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                </p>
                {/* <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="flex h-8 w-8 items-center justify-center rounded-full"
              title={TechIcons[tech].name}
            >
              {TechIcons[tech].icon}
            </div>
          ))}
        </div> */}
                <div className="mt-4 flex gap-2">
                    <Link
                        href={project.liveSite}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLinkIcon className="mr-2 h-4 w-4" />
                        Live Site
                    </Link>
                    <Link
                        href={project.github}
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon className="mr-2 h-4 w-4" />
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;

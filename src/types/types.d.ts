export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveSite: string;
    github: string;
    techStack: string[];
}

interface TechIcon {
    name: string;
    icon: React.ReactNode;
}

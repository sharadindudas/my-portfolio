const AboutSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container flex justify-center">
                <div className="flex-1 space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        About Me
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Hello! I&apos;m Sharadindu, a passionate web developer
                        with a knack for crafting responsive, user-centric
                        digital experiences. With over a year of hands-on
                        experience, I&apos;ve been on an exciting journey of
                        turning complex ideas into sleek, high-performing web
                        applications.
                    </p>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        My toolkit includes{" "}
                        <span className="font-bold text-primary">
                            Next.js, TypeScript, React, and JavaScript
                        </span>{" "}
                        for frontend magic, while I&apos;m actively expanding my
                        backend repertoire with{" "}
                        <span className="font-bold text-primary">
                            Node.js, Express.js, Redis, and MongoDB
                        </span>
                        .
                    </p>
                </div>
                <div className="flex-1 space-y-2 text-lg">
                    <div className="grid gap-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Background
                        </h2>
                        <p className="text-muted-foreground">
                            I&apos;ve done B.Tech in Computer Science &
                            Engineering, and worked with dynamic startups. These
                            experiences have sharpened my ability to innovate,
                            collaborate effectively, and tackle real-world
                            challenges head-on.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Skills Snapshot
                        </h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>
                                <span className="font-semibold text-white">
                                    Frontend Mastery:
                                </span>{" "}
                                Next.js, TypeScript, React, JavaScript
                            </li>
                            <li>
                                <span className="font-semibold text-white">
                                    Backend Exploration:
                                </span>{" "}
                                Node.js, Express.js, Redis, MongoDB
                            </li>
                            <li>
                                <span className="font-semibold text-white">
                                    UI/UX Focus:
                                </span>{" "}
                                Intuitive, responsive designs with usability at
                                the core
                            </li>
                            <li>
                                <span className="font-semibold text-white">
                                    Version Control:
                                </span>{" "}
                                Git proficiency for seamless code management
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

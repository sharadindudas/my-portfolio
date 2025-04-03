const AboutSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">About Me</h2>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                            Hello! I&apos;m Sharadindu, a passionate web developer with a knack for crafting responsive, user-centric digital
                            experiences. With over a year of hands-on experience, I&apos;ve been on an exciting journey of turning complex ideas into
                            sleek, high-performing web applications.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                            My toolkit includes <span className="font-bold text-primary">Next.js, TypeScript, React, and JavaScript</span> for
                            frontend magic, while I&apos;m actively expanding my backend repertoire with{" "}
                            <span className="font-bold text-primary">Node.js, Express.js, Redis, and MongoDB</span>.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-2">Background</h3>
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                                I&apos;ve done B.Tech in Computer Science & Engineering, and worked with dynamic startups. These experiences have
                                sharpened my ability to innovate, collaborate effectively, and tackle real-world challenges head-on.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-2">Skills Snapshot</h3>
                            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-muted-foreground space-y-2">
                                <li>
                                    <span className="font-semibold text-primary">Frontend Mastery:</span> Next.js, TypeScript, React, JavaScript
                                </li>
                                <li>
                                    <span className="font-semibold text-primary">Backend Exploration:</span> Node.js, Express.js, Redis, MongoDB
                                </li>
                                <li>
                                    <span className="font-semibold text-primary">UI/UX Focus:</span> CSS, Sass, Tailwind CSS, Bootstrap, shadcn/ui
                                </li>
                                <li>
                                    <span className="font-semibold text-primary">Version Control:</span> Git proficiency for seamless code management
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

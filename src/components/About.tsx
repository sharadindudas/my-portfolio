const AboutSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">About Me</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              Hello! I&apos;m Sharadindu, a passionate full-stack web developer focused on building fast, scalable, and user-centric digital
              experiences. With over a year of hands-on experience, I&apos;ve worked on real-world products including SaaS dashboards, real-time
              collaboration tools, and production-grade web applications—turning complex ideas into clean, high-performing systems.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              My toolkit includes <span className="font-bold text-primary">Next.js, React, TypeScript, and JavaScript</span> for crafting modern
              frontend experiences, along with advanced tools like{" "}
              <span className="font-bold text-primary">TanStack Query, Router, Table, and Form</span>. On the backend, I work with{" "}
              <span className="font-bold text-primary">Node.js, Express.js, Hono, and Bun</span>, building scalable APIs using{" "}
              <span className="font-bold text-primary">GraphQL and REST</span>. I also have experience with{" "}
              <span className="font-bold text-primary">PostgreSQL, MongoDB, and Redis</span> for efficient data management.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-2">Background</h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                I&apos;ve done B.Tech in Computer Science & Engineering, and worked with dynamic startups. These experiences have sharpened my ability
                to innovate, collaborate effectively, and tackle real-world challenges head-on.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl mb-2">Skills Snapshot</h3>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-muted-foreground space-y-2">
                <li>
                  <span className="font-semibold text-primary">Frontend Mastery:</span> Next.js, React, TypeScript, JavaScript, TanStack Router,
                  TanStack Query, TanStack Table, TanStack Form, Zustand, Redux
                </li>

                <li>
                  <span className="font-semibold text-primary">Backend Development:</span> Node.js, Express.js, Hono, Bun, GraphQL, REST APIs,
                  PostgreSQL, MongoDB, Redis
                </li>

                <li>
                  <span className="font-semibold text-primary">UI/UX Focus:</span> Tailwind CSS, Sass, Bootstrap, shadcn/ui, Daisy-ui
                </li>

                <li>
                  <span className="font-semibold text-primary">DevOps & Tools:</span> Git, GitHub, Gitlab, AWS EC2, Nginx, PM2
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

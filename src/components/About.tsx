"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const highlights = [
  { value: "5+", label: "Projects Built" },
  { value: "3+", label: "Tech Stacks" },
  { value: "1+", label: "Years Experience" },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "CI/CD", "VS Code", "Vercel"],
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="relative">
      <SectionHeading
        label="About Me"
        title="Get to Know Me"
        description="A passionate developer focused on crafting exceptional digital experiences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I&apos;m <span className="text-accent-light font-medium">Kavin Nishanthan P D</span>, 
                a Full Stack Developer passionate about building high-quality, 
                scalable web applications. My journey in software development 
                began with curiosity about how things work on the web, and it has 
                grown into a career dedicated to creating impactful digital solutions.
              </p>
              <p>
                I specialize in the <span className="text-accent-light">React</span> and{" "}
                <span className="text-accent-light">Node.js</span> ecosystem, 
                with hands-on experience in building full-stack applications 
                from concept to deployment. I enjoy solving complex problems 
                and turning ideas into clean, efficient, and user-friendly products.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, 
                contributing to open source, or refining my skills through 
                building personal projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center p-4 rounded-lg bg-bg-primary/50"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {item.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-3">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-md bg-bg-primary text-text-secondary border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

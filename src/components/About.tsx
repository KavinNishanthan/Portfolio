"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const highlights = [
  { value: "5+", label: "Projects Built", icon: "📦" },
  { value: "3+", label: "Tech Stacks", icon: "⚡" },
  { value: "1+", label: "Years Experience", icon: "🚀" },
  { value: "100%", label: "Passion", icon: "❤️" },
];

const techStack = [
  { name: "React", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", color: "from-white to-gray-400" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", color: "from-sky-400 to-sky-600" },
  { name: "MongoDB", color: "from-emerald-400 to-emerald-600" },
  { name: "Express.js", color: "from-yellow-400 to-yellow-600" },
  { name: "Git", color: "from-orange-400 to-orange-600" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="About Me"
        title="Get to Know Me"
        description="A passionate developer focused on crafting exceptional digital experiences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Bio - Left column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-card-glow rounded-2xl p-8">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
              <div className="w-3 h-3 rounded-full bg-rose" />
              <div className="w-3 h-3 rounded-full bg-warning" />
              <div className="w-3 h-3 rounded-full bg-success" />
              <span className="ml-3 text-xs text-text-muted font-mono">
                about-me.tsx
              </span>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p className="text-lg">
                Hi there! 👋 I&apos;m{" "}
                <span className="text-accent-light font-semibold">
                  Kavin Nishanthan P D
                </span>
                , a Full Stack Developer with a passion for building
                high-quality, scalable web applications.
              </p>
              <p>
                My journey in software development started with curiosity about
                how things work on the web and has evolved into a dedication for
                creating impactful digital solutions. I specialize in the{" "}
                <span className="text-accent-light">React</span> and{" "}
                <span className="text-accent-light">Node.js</span> ecosystem,
                building full-stack applications from concept to deployment.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating
                experiences that users love. When I&apos;m not coding, I&apos;m
                exploring new technologies and contributing to the developer
                community.
              </p>
            </div>

            {/* Tech orbit */}
            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-xs text-text-muted uppercase tracking-widest mb-4 font-semibold">
                Technologies I Work With
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-bg-primary/80 text-text-secondary border border-border/50 cursor-default hover:border-accent/30 hover:text-accent-light transition-all duration-300"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats - Right column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.02 }}
              className="glass-card-glow rounded-2xl p-6 flex items-center gap-5 group cursor-default"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-accent/8 text-2xl group-hover:bg-accent/15 transition-colors shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">
                  {item.value}
                </div>
                <div className="text-sm text-text-muted">{item.label}</div>
              </div>
            </motion.div>
          ))}

          {/* Quick action */}
          <motion.a
            href="/resume.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 glass-card rounded-2xl p-5 text-accent-light hover:border-accent/30 transition-all duration-300 group cursor-pointer"
          >
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-semibold text-sm">Download Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

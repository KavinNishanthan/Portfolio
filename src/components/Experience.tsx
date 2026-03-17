"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Record",
    period: "2024 – Present",
    type: "Internship",
    description:
      "Contributing to full-stack development initiatives, building and maintaining scalable web applications using modern frameworks and best practices.",
    achievements: [
      "Built and shipped production-ready features using React and Node.js, improving user experience for 500+ users",
      "Designed and implemented RESTful APIs with Express.js, reducing data fetch times by 40%",
      "Optimized application performance through code splitting and lazy loading, reducing page load times by 30%",
      "Participated in agile development cycles, conducting code reviews and establishing coding best practices",
      "Developed responsive UI components reused across 5+ product pages, improving development velocity",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Git"],
    color: "from-accent to-secondary",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-dots">
      <SectionHeading
        label="Experience"
        title="Professional Journey"
        description="My work experience and contributions in the industry"
      />

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline connector */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

            {/* Timeline dot with pulse */}
            <div className="absolute left-[25px] top-10 hidden md:flex flex-col items-center">
              <span className="relative flex h-[22px] w-[22px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-20" />
                <span className="relative inline-flex rounded-full h-[22px] w-[22px] border-4 border-bg-primary bg-gradient-to-br from-accent to-secondary" />
              </span>
            </div>

            <div className="md:ml-20 glass-card-glow rounded-2xl overflow-hidden">
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
              
              <div className="p-7">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-accent-light font-semibold text-lg">
                      @ {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-accent/10 text-accent-light border border-accent/20">
                      {exp.type}
                    </span>
                    <span className="px-3 py-1.5 text-xs font-medium rounded-lg bg-bg-primary text-text-muted border border-border/50">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, aIdx) => (
                    <motion.div
                      key={aIdx}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * aIdx }}
                      className="flex items-start gap-3 text-sm text-text-secondary group"
                    >
                      <div className="w-6 h-6 flex items-center justify-center rounded-md bg-accent/8 text-accent-light shrink-0 mt-0.5 group-hover:bg-accent/15 transition-colors">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border/30 mb-4" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-bg-primary/80 text-text-secondary border border-border/50 hover:border-accent/30 hover:text-accent-light transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

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
      "Contributing to full-stack development initiatives, building and maintaining scalable web applications.",
    achievements: [
      "Built and shipped production-ready features using React and Node.js, improving user experience",
      "Collaborated with cross-functional teams to design and implement RESTful APIs",
      "Optimized application performance, reducing page load times by 30%",
      "Participated in code reviews and contributed to establishing coding best practices",
      "Implemented responsive UI components used across multiple product pages",
    ],
    skills: ["React", "Node.js", "Express.js", "MongoDB", "Git"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary/50">
      <SectionHeading
        label="Experience"
        title="Professional Journey"
        description="My work experience and contributions"
      />

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-6 top-16 bottom-0 w-px bg-border" />

            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-5 h-5 rounded-full bg-accent border-4 border-bg-primary z-10" />

            <div className="ml-14 glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-accent-light font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20">
                    {exp.type}
                  </span>
                  <span className="text-sm text-text-muted">{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-2 mb-5">
                {exp.achievements.map((achievement, aIdx) => (
                  <motion.li
                    key={aIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * aIdx }}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent-light mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {achievement}
                  </motion.li>
                ))}
              </ul>

              {/* Skills used */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-bg-primary text-text-secondary border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

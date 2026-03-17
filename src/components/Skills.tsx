"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const skillsData = [
  {
    category: "Frontend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "CI/CD", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Vercel", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-bg-secondary/50">
      <SectionHeading
        label="Skills"
        title="My Tech Stack"
        description="Technologies and tools I use to bring ideas to life"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
            className="glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                {group.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {group.category}
              </h3>
            </div>

            {/* Skills list */}
            <div className="space-y-4">
              {group.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIdx * 0.1 + skillIdx * 0.05 }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-text-secondary">
                      {skill.name}
                    </span>
                    <span className="text-xs text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-bg-primary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: groupIdx * 0.1 + skillIdx * 0.1,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

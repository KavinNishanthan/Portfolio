"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const skillsData = [
  {
    category: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-500",
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
    description: "Designing scalable server-side architecture",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
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
    description: "Streamlining development workflows",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
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
    <SectionWrapper id="skills" className="bg-dots">
      <SectionHeading
        label="Skills"
        title="My Tech Stack"
        description="Technologies and tools I use to bring ideas to life"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.15 }}
            className="glass-card-glow rounded-2xl overflow-hidden group"
          >
            {/* Colored top bar */}
            <div className={`h-1 bg-gradient-to-r ${group.gradient}`} />
            
            <div className="p-7">
              {/* Header */}
              <div className="flex items-center gap-4 mb-2">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-lg`}>
                  {group.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {group.category}
                  </h3>
                  <p className="text-xs text-text-muted">{group.description}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-border/30" />

              {/* Skills list */}
              <div className="space-y-5">
                {group.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: groupIdx * 0.1 + skillIdx * 0.06 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-secondary">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-accent-light bg-accent/8 px-2 py-0.5 rounded-md">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: groupIdx * 0.1 + skillIdx * 0.12,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

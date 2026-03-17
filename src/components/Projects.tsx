"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

type ProjectCategory = "All" | "Full Stack" | "Frontend";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: ProjectCategory[];
  github: string;
  demo: string;
  features: string[];
  gradient: string;
  icon: string;
  status: string;
}

const projects: Project[] = [
  {
    title: "Milk Supply Management",
    description: "A comprehensive web application for managing milk distribution",
    longDescription:
      "Full-stack application built to streamline milk supply chain operations. Features include admin dashboard with analytics, real-time sales tracking, vehicle history management, and automated bill generation with detailed reporting.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: ["All", "Full Stack"],
    github: "https://github.com/kavinnishanthan",
    demo: "#",
    features: [
      "Admin dashboard with sales analytics",
      "Real-time vehicle tracking & history",
      "Automated bill management system",
      "Sales tracking with detailed reports",
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "🥛",
    status: "Production",
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern and responsive portfolio showcasing projects and skills",
    longDescription:
      "Built with Next.js and Tailwind CSS, featuring smooth Framer Motion animations, a dark theme, fully responsive design, and SEO optimization for maximum developer visibility.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: ["All", "Frontend"],
    github: "https://github.com/kavinnishanthan",
    demo: "#",
    features: [
      "Smooth Framer Motion animations",
      "Fully responsive dark theme",
      "SEO optimized with Next.js",
      "Typing effect & interactive UI",
    ],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "🌐",
    status: "Live",
  },
  {
    title: "Task Management App",
    description: "Productivity-focused task manager with real-time collaboration",
    longDescription:
      "Feature-rich task management application with intuitive drag-and-drop interface, priority levels, deadline tracking, and real-time team collaboration capabilities.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: ["All", "Full Stack"],
    github: "https://github.com/kavinnishanthan",
    demo: "#",
    features: [
      "Drag-and-drop task organization",
      "Priority-based management",
      "Real-time collaboration",
      "Deadline tracking & notifications",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "✅",
    status: "In Progress",
  },
];

const categories: ProjectCategory[] = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter((project) =>
    project.category.includes(activeCategory)
  );

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Projects"
        title="Featured Work"
        description="A selection of projects that showcase my skills and experience"
      />

      {/* Filter buttons */}
      <div className="flex justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeCategory === cat
                ? "text-white"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="activeProjectFilter"
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-xl shadow-lg shadow-accent/20"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="group glass-card-glow rounded-2xl overflow-hidden"
            >
              {/* Gradient header with icon */}
              <div
                className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-grid opacity-20" />
                <span className="text-5xl relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>
                {/* Status pill */}
                <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/30 backdrop-blur-sm text-white/90 border border-white/10">
                  {project.status}
                </span>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary mb-5 leading-relaxed line-clamp-3">
                  {project.longDescription}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-xs text-text-secondary"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-success mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-lg bg-accent/8 text-accent-light border border-accent/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border/30 mb-4" />

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-light transition-colors group/link"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="group-hover/link:underline">Source Code</span>
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-light transition-colors group/link"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="group-hover/link:underline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}

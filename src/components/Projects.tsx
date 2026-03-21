"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

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
    description:
      "A comprehensive web application for managing milk distribution",
    longDescription:
      "Full-stack application built to streamline milk supply chain operations. Features include admin dashboard with analytics, real-time sales tracking, vehicle history management, and automated bill generation with detailed reporting.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: ["All", "Full Stack"],
    github: "https://github.com/kavinnishanthan",
    demo: "https://www.kanakkupaaru.in",
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
    title: "Portfolio Hub",
    description:
      "Interactive personal portfolio showcasing modern web development",
    longDescription:
      "A premium, responsive portfolio website featuring fluid framer-motion animations, sleek glassmorphism design, and a highly interactive UI built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: ["All", "Frontend"],
    github: "https://github.com/kavinnishanthan",
    demo: "#",
    features: [
      "Modern Glassmorphism UI",
      "Smooth Framer Motion Animations",
      "Fully Responsive Grid System",
      "Performant Next.js App Router",
    ],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: "✨",
    status: "Active",
  },
];

const categories: ProjectCategory[] = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter((project) =>
    project.category.includes(activeCategory),
  );

  // Swiper needs more slides than `slidesPerView` to loop seamlessly.
  // If we have very few projects (like 1 or 2), we gracefully duplicate them for the infinite loop effect.
  const displayProjects =
    filteredProjects.length > 0 && filteredProjects.length < 4
      ? [...filteredProjects, ...filteredProjects, ...filteredProjects].slice(
        0,
        4,
      )
      : filteredProjects;

  return (
    <SectionWrapper id='projects'>
      <SectionHeading
        label='Projects'
        title='Featured Work'
        description='A selection of projects that showcase my skills and experience'
      />

      <div className='w-full max-w-6xl mx-auto'>
        <Swiper
          effect={"coverflow"}
          speed={1400}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            scale: 0.9,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.15,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1.25,
              spaceBetween: 60,
            },
          }}

          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, EffectCoverflow, Autoplay]}
          className=' w-full pb-16! [&_.swiper-pagination-bullet]:bg-text-secondary [&_.swiper-pagination-bullet-active]:bg-accent '>
          {displayProjects.map((project, idx) => (
            <SwiperSlide
              key={project.title + idx}
              className='py-4 flex justify-center'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className='w-full flex justify-center'>
                <div
                  className='group w-[90%] sm:w-full mx-auto bg-background/40 backdrop-blur-xl rounded-xl border border-border/50 shadow-2xl transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.1)] flex flex-col lg:flex-row h-auto lg:min-h-120'>
                  {/* LEFT CONTENT (Info & Details) */}
                  <div className='w-full lg:w-[50%] xl:w-[50%] p-8 lg:p-10 flex flex-col grow relative z-10'>
                    <div className='flex-1'>
                      {/* Title & Status */}
                      <div className='flex justify-between items-start mb-4'>
                        <h3 className='text-2xl md:text-3xl font-bold text-text-primary group-hover:text-accent-light transition-colors'>
                          {project.title}
                        </h3>
                        <span className='shrink-0 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-success/10 text-success border border-success/20 ml-4'>
                          {project.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className='text-sm md:text-base text-text-secondary mb-6 leading-relaxed line-clamp-3'>
                        {project.longDescription}
                      </p>

                      {/* Features */}
                      <div className='space-y-3 mb-6 hidden md:block'>
                        {project.features.slice(0, 3).map((feature) => (
                          <div
                            key={feature}
                            className='flex items-start gap-3 text-sm text-text-secondary'>
                            <svg
                              className='w-4 h-4 text-accent shrink-0 mt-0.5'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className='flex flex-wrap gap-2 mb-6'>
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className='px-3 py-1 text-[10px] md:text-xs font-medium tracking-wide rounded-md bg-accent/10 text-accent-light border border-accent/20'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className='border-t border-border/30 flex gap-8'>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent-light transition-colors group/link'>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                        </svg>
                        <span className='group-hover/link:underline'>
                          Source Code
                        </span>
                      </a>
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent-light transition-colors group/link'>
                          <svg
                            className='w-5 h-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                          <span className='group-hover/link:underline'>
                            Live Demo
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* RIGHT VISUAL (Webpage Mockup) */}
                  <div className='w-full lg:w-[50%] xl:w-[50%] border-t lg:border-t-0 lg:border-l border-border/30 bg-black/10 flex flex-col relative overflow-hidden min-h-62.5 lg:min-h-full'>
                    {/* Browser Header Bar */}
                    <div className='h-10 bg-background/80 backdrop-blur-md border-b border-border/30 flex items-center px-4 shrink-0 z-20 w-full'>
                      <div className='flex gap-2'>
                        <div className='w-3 h-3 rounded-full bg-rose-500/80 shadow-sm' />
                        <div className='w-3 h-3 rounded-full bg-amber-500/80 shadow-sm' />
                        <div className='w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm' />
                      </div>
                      {/* URL Bar */}
                      <div className='flex-1 mx-4'>
                        <div className='h-6 w-full max-w-62.5 mx-auto bg-black/40 hover:text-accent-light rounded border border-border flex items-center px-3 justify-center'>
                          <span className='text-[10px] text-xs truncate'>
                            {project.demo !== "#"
                              ? project.demo
                              : `https://${project.title.toLowerCase().replace(/\s+/g, "-")}.app`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Browser Viewport Content */}
                    <div className='flex-1 relative flex items-center justify-center overflow-hidden bg-surface group-hover:bg-accent/5 transition-colors duration-500'>
                      {/* Gloss / Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700 blur-2xl`}
                      />

                      {/* Webpage iframe visualization - Desktop Scale logic */}
                      {project.demo !== "#" ? (
                        <div className='absolute inset-0 z-10 w-full h-full overflow-hidden bg-white/50 opacity-90 group-hover:opacity-100 transition-opacity duration-700 pointer-events-auto'>
                          <iframe
                            src={project.demo}
                            title={project.title}
                            className='absolute top-0 left-0 border-none origin-top-left w-full h-full'
                            sandbox='allow-scripts allow-same-origin'
                            loading='lazy'
                          />
                        </div>
                      ) : (
                        <div className='flex flex-col items-center justify-center relative z-10 transform group-hover:scale-110 transition-transform duration-700'>
                          <span className='text-8xl md:text-9xl mb-6 filter drop-shadow-xl opacity-90 group-hover:opacity-100'>
                            {project.icon}
                          </span>
                          {/* Wireframe UI hints */}
                          <div className='w-48 h-3 bg-text-primary/10 rounded-full mb-3' />
                          <div className='w-32 h-2 bg-text-primary/10 rounded-full mb-2' />
                          <div className='w-40 h-2 bg-text-primary/10 rounded-full' />
                        </div>
                      )}

                      {/* Shimmer Effect */}
                      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none  transition-opacity duration-700'>
                        <div className='absolute top-0 -left-full w-[50%] h-[200%] bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] group-hover:animate-shimmer' />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </SectionWrapper>
  );
}

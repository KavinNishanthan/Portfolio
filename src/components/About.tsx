"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";



const techStack = [
  // Frontend
  {
    label: "HTML",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        className='w-7 h-7'
        alt='HTML'
      />
    ),
  },
  {
    label: "CSS",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        className='w-7 h-7'
        alt='CSS'
      />
    ),
  },
  {
    label: "JavaScript",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        className='w-7 h-7'
        alt='JS'
      />
    ),
  },
  {
    label: "React JS",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        className='w-7 h-7'
        alt='React'
      />
    ),
  },
  {
    label: "Next Js",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        className='w-7 h-7 bg-white rounded'
        alt='Next.js'
      />
    ),
  },
  {
    label: "Tailwind CSS",
    icon: (
      <Image
        src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
        className='w-7 h-7'
        alt='Tailwind'
      />
    ),
  },

  // Backend
  {
    label: "Node JS",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        className='w-7 h-7'
        alt='Node'
      />
    ),
  },
  {
    label: "Express JS",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        className='w-7 h-7 bg-white'
        alt='Express'
      />
    ),
  },
  {
    label: "Java",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        className='w-7 h-7'
        alt='Java'
      />
    ),
  },
  {
    label: "Python",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        className='w-7 h-7'
        alt='Python'
      />
    ),
  },
  // DB
  {
    label: "MongoDB",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        className='w-7 h-7'
        alt='MongoDB'
      />
    ),
  },
  {
    label: "MySQL",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        className='w-7 h-7'
        alt='MySQL'
      />
    ),
  },

  // Tools
  {
    label: "Git",
    icon: (
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        className='w-7 h-7'
        alt='Git'
      />
    ),
  },
  {
    label: "Postman",
    icon: (
      <Image
        src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
        className='w-7 h-7'
        alt='Postman'
      />
    ),
  },
];

export default function About() {
  return (
    <SectionWrapper id='about'>
      <SectionHeading
        label='About Me'
        title='Get to Know Me'
        description='A passionate developer focused on crafting exceptional digital experiences'
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Bio - Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-1'>
            <div className='glass-card-glow rounded-2xl px-8 py-6'>
              {/* Terminal header */}
              <div className='flex items-center justify-between mb-6 pb-4 border-b border-border/50'>
                {/* LEFT SIDE */}
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-rose' />
                  <div className='w-3 h-3 rounded-full bg-warning' />
                  <div className='w-3 h-3 rounded-full bg-success' />
                  <span className='ml-3 text-xs text-text-muted font-mono'>
                    about-me.tsx
                  </span>
                </div>

                {/* RIGHT SIDE BUTTON */}
                <motion.a
                  href='/resume.pdf'
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center justify-center gap-1 ml-6 px-3 py-2 text-sm font-semibold bg-linear-to-r from-accent to-accent-dark text-white rounded-lg shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300'>
                  <svg
                    className='w-5 h-5 group-hover:translate-y-0.5 transition-transform'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  <span className='font-semibold text-sm'>Resume</span>
                </motion.a>
              </div>

              <div className='space-y-2.5 text-text-secondary leading-relaxed'>
                <p className='text-lg'>
                  Hi there! 👋 I&apos;m{" "}
                  <span className='text-accent-light font-semibold'>
                    Kavin Nishanthan P D
                  </span>
                  , a Full Stack Developer with a passion for building
                  high-quality, scalable web applications.
                </p>
                <p>
                  My journey in software development started with curiosity
                  about how things work on the web and has evolved into a
                  dedication for creating impactful digital solutions. I
                  specialize in the{" "}
                  <span className='text-accent-light'>React</span> and{" "}
                  <span className='text-accent-light'>Node.js</span> ecosystem,
                  building full-stack applications from concept to deployment.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating
                  experiences that users love. When I&apos;m not coding,
                  I&apos;m exploring new technologies and contributing to the
                  developer community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Stats - Right column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-1'>
            <div className='glass-card-glow rounded-2xl px-8 py-6'>
              {/* Terminal header */}
              <div className='flex items-center justify-between mb-6 pb-4 border-b border-border/50'>
                <div className='flex items-center gap-2 py-2'>
                  <div className='w-3 h-3 rounded-full bg-rose' />
                  <div className='w-3 h-3 rounded-full bg-warning' />
                  <div className='w-3 h-3 rounded-full bg-success' />
                  <span className='ml-3 text-xs text-text-muted font-mono'>
                    tech-stack.tsx
                  </span>
                </div>
              </div>
              {/* Tech Stack */}
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 gap-y-5'>
                {techStack.map((techStack, index) => (
                  <div
                    className='flex flex-col gap-5 items-center justify-center'
                    key={index}>
                    {techStack.icon}
                    <span className='text-xs text-accent-light'>
                      {techStack.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Spotlight */}
      <div className="absolute inset-0 spotlight" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent-light border border-accent/20 mb-8">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-text-secondary mb-4 font-mono"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Kavin Nishanthan</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl text-text-secondary font-normal mt-2">
            P D
          </span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {[
            "Full Stack Developer",
            "Frontend Engineer",
            "Backend Developer",
          ].map((role) => (
            <span
              key={role}
              className="px-3 py-1 text-sm rounded-md bg-bg-card border border-border text-text-secondary"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Building scalable web applications with modern technologies.
          <br className="hidden sm:block" />
          Turning ideas into polished digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-medium rounded-xl transition-all duration-300 glow animate-pulse-glow"
          >
            <span className="flex items-center gap-2">
              View Projects
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 font-medium rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-border rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent-light rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

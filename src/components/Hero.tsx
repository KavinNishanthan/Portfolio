"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Multi-layer spotlights */}
      <div className="absolute inset-0 spotlight" />
      <div className="absolute inset-0 spotlight-bottom" />

      {/* Floating orbs — layered with different colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-accent/8 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute top-1/3 right-1/5 w-96 h-96 bg-secondary/6 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-tertiary/5 rounded-full blur-[80px] animate-float"
          style={{ animationDelay: "4s" }}
        />
        {/* Rotating gradient ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-accent/5 animate-spin-slow opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full border border-secondary/3 animate-spin-slow opacity-20" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">


        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg text-sm font-medium bg-accent/8 text-accent-light border border-accent/15  backdrop-blur-sm ">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
            </span>
            Available for opportunities
          </span>
        </motion.div>
         
 
        {/* Code-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6"
          >
          <span className="inline-block px-4 py-1.5 rounded-lg bg-bg-card/80 border border-border/50 text-text-muted font-mono text-sm">
            <span className="text-accent-light">const</span>{" "}
            <span className="text-secondary">developer</span>{" "}
            <span className="text-text-muted">=</span>{" "}
            <span className="text-success">&quot;Kavin Nishanthan P D&quot;</span>
          </span>
        </motion.div>
    

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mt-3 mb-3 tracking-tight"
        >
          <span className="gradient-text-hero">Kavin</span>
          <br />
          <span className="gradient-text-hero">Nishanthan</span>
          <span className="block text-xl sm:text-3xl md:text-4xl text-shadow-text-muted font-light mt-3 tracking-widest uppercase">
            P D
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-3 rounded-xl bg-bg-card/60 border border-border/50 backdrop-blur-sm">
            <span className="w-3 h-3 rounded-full bg-rose" />
            <span className="w-3 h-3 rounded-full bg-warning" />
            <span className="w-3 h-3 rounded-full bg-success" />
            <span className="ml-2 text-lg md:text-xl font-mono text-accent-light">
              {displayText}
              <span className="typing-cursor" />
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-base md:text-lg text-text-secondary max-w-xl mx-auto mb-4 leading-relaxed"
        >
          Crafting <span className="text-accent-light font-medium">scalable web applications</span> with modern technologies.
          Turning ideas into polished, performant digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary animate-pulse-glow">
            View Projects
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get in Touch
          </a>
        </motion.div>


        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-8 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-text-muted uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 border border-border/60 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-accent-light rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

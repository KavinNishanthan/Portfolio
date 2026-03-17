"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light bg-accent/8 rounded-full border border-accent/15"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
        {label}
      </motion.span>
      <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === title.split(" ").length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </h2>
      {description && (
        <p className="mt-5 text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-8 section-divider max-w-xs mx-auto" />
    </motion.div>
  );
}

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glow?: boolean;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  glow = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`${glow ? "glass-card-glow" : "glass-card"} rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

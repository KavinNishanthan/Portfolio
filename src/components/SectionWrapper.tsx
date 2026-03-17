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
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
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
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest text-accent-light bg-accent/10 rounded-full border border-accent/20">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

// Reusable AnimatedCard
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  // { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  h-18 ${
        isScrolled
          ? "bg-bg-primary/80 backdrop-blur-2xl border-b border-border/40 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}>
      <div className='w-full px-6 sm:px-8 lg:px-12'>
        <div className='flex items-center justify-between h-18'>
          {/* Logo */}
          <motion.a
            href='#home'
            className='text-xl font-bold gradient-text tracking-tight'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            &lt;KN /&gt;
          </motion.a>

          {/* Desktop nav */}
          <div className='hidden md:flex items-center gap-2'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-secondary"
                }`}>
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId='activeNav'
                    className='absolute inset-0 bg-accent/10 border border-accent/20 rounded-lg'
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className='relative z-10'>{link.label}</span>
              </a>
            ))}
            <motion.a
              href='/resume.pdf'
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='ml-6 px-5 py-2.5 text-sm font-semibold bg-linear-to-r from-accent to-accent-dark text-white rounded-lg shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300'>
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden relative w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5'
            aria-label='Toggle menu'>
            <div className='w-5 flex flex-col gap-1.5'>
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className='md:hidden bg-bg-primary/95 backdrop-blur-2xl border-t border-border/40 overflow-hidden'>
            <div className='px-6 py-5 space-y-1'>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "bg-accent/10 text-accent-light border border-accent/15"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                  }`}>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href='/resume.pdf'
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className='block px-4 py-3 mt-3 text-center text-sm font-semibold bg-linear-to-r from-accent to-accent-dark text-white rounded-xl shadow-md shadow-accent/20'>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

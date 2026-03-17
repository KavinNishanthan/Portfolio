"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const contactInfo = [
  {
    label: "Email",
    value: "kavinnishanthan@gmail.com",
    href: "mailto:kavinnishanthan@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/kavinnishanthan",
    href: "https://github.com/kavinnishanthan",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kavinnishanthan",
    href: "https://linkedin.com/in/kavinnishanthan",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 4000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        description="Have a project in mind or want to chat? Feel free to reach out!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Get in Touch
            </h3>
            <div className="space-y-5">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm text-text-secondary group-hover:text-accent-light transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Download resume CTA */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full glass-card rounded-xl p-4 text-accent-light hover:border-accent/30 transition-all duration-300 group"
          >
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-medium text-sm">Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-text-secondary mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-text-secondary mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm text-text-secondary mb-1.5"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-text-secondary mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : submitStatus === "success" ? (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

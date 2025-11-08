"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ProjectsShowcase() {
  const projects = [
    {
      id: 1,
      title: "Luxury Residential Rewire",
      location: "Kensington, London",
      category: "Residential",
      size: "large",
    },
    {
      id: 2,
      title: "Modern Office Fit-Out",
      location: "Canary Wharf",
      category: "Commercial",
      size: "medium",
    },
    {
      id: 3,
      title: "Period Property Restoration",
      location: "Chelsea",
      category: "Heritage",
      size: "medium",
    },
    {
      id: 4,
      title: "Smart Home Integration",
      location: "Hampstead",
      category: "Technology",
      size: "small",
    },
    {
      id: 5,
      title: "Industrial Complex",
      location: "South East London",
      category: "Industrial",
      size: "large",
    },
    {
      id: 6,
      title: "Boutique Hotel",
      location: "Mayfair",
      category: "Hospitality",
      size: "medium",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden border-t border-border">
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-white to-light-bg" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-accent/10 rounded-2xl rotate-12"
        animate={{
          rotate: [12, 20, 12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 border border-primary/10 rounded-2xl -rotate-12"
        animate={{
          rotate: [-12, -20, -12],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
              <span className="electrical-gradient bg-clip-text text-transparent">OUR</span>
              <span className="text-secondary"> SHOWCASE</span>
            </h2>
            <Sparkles className="w-10 h-10 text-accent" />
          </div>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Exceptional electrical installations across London and the South East
          </p>
          <div className="w-32 h-1 electrical-gradient mx-auto mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`group relative ${
                project.size === "large" ? "md:col-span-2 md:h-96" : "h-80"
              }`}
            >
              <div className="relative h-full rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-white via-light-bg to-white backdrop-blur-sm shadow-lg hover:shadow-luxury overflow-hidden transition-all duration-500 hover:border-accent/50">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-amber-mid/10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Image placeholder with overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-accent/15 font-bold text-2xl uppercase tracking-wider">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-accent/30 tracking-widest">{project.category}</div>
                    <div className="w-20 h-px bg-accent/20 mx-auto" />
                  </div>
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 electrical-gradient opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Bottom accent corner */}
                <div className="absolute bottom-0 right-0 w-1 h-full electrical-gradient opacity-30" />
                <div className="absolute bottom-0 left-0 w-full h-1 electrical-gradient opacity-30" />

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-primary/5 group-hover:to-transparent transition-all duration-500"
                />

                {/* Project info card */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-white/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  initial={{ y: "100%" }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs uppercase tracking-widest text-accent font-bold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary font-display">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {project.location}
                    </p>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-accent via-primary to-accent" />
                </motion.div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/20 group-hover:border-accent/50 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/20 group-hover:border-accent/50 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="w-24 h-1 electrical-gradient mx-auto mb-6" />
          <p className="text-muted text-lg mb-8">
            Ready to bring your electrical project to life?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block electrical-gradient text-white font-bold px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 uppercase tracking-wider relative group"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

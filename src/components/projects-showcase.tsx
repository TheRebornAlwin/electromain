"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuxuryImagePlaceholder } from "@/components/common/LuxuryImagePlaceholder";

export default function ProjectsShowcase() {
  const featuredProject = {
    id: 1,
    title: "Luxury Residential Rewire",
    location: "Kensington, London",
    category: "RESIDENTIAL",
    description: "Complete electrical redesign for a 6-bedroom townhouse featuring smart home integration, ambient lighting systems, and premium finishes throughout.",
    aspectRatio: "16/9" as const,
  };

  const supportingProjects = [
    {
      id: 2,
      title: "Modern Office Fit-Out",
      location: "Canary Wharf",
      category: "COMMERCIAL",
      description: "Full electrical installation for 15,000 sq ft commercial space with advanced lighting control.",
      aspectRatio: "4/3" as const,
    },
    {
      id: 3,
      title: "Period Property Restoration",
      location: "Chelsea",
      category: "HERITAGE",
      description: "Sympathetic electrical restoration preserving original features while meeting modern standards.",
      aspectRatio: "4/3" as const,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-gray/30 via-paper to-warm-gray/30" />
      <div className="absolute inset-0 luxury-pattern opacity-30" />

      <div className="container relative z-10">
        {/* Luxury header with fluid typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink-600 font-bold" style={{ letterSpacing: '2px' }}>
              Recent Projects
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display font-light text-ink-900 mb-6 tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <span className="font-extralight">Our</span>
            <span className="gradient-text font-semibold"> Showcase</span>
          </h2>

          <p className="text-ink-700 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '-0.01em' }}>
            Exceptional electrical installations across London and the South East
          </p>
        </motion.div>

        {/* Asymmetrical Grid - Ferrari Pattern */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Featured Project - Large */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:row-span-2"
          >
            <div className="group relative h-full bg-white rounded-3xl border border-ink-500/10 shadow-luxury hover:shadow-float transition-all duration-500 overflow-hidden">
              <div className="p-8 md:p-10 h-full flex flex-col">
                {/* Featured image */}
                <div className="mb-6">
                  <LuxuryImagePlaceholder
                    aspectRatio={featuredProject.aspectRatio}
                    variant="elevated"
                    animate={true}
                  />
                </div>

                {/* Category badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
                  <span className="text-[10px] uppercase font-bold text-brand-burnt-orange" style={{ letterSpacing: '2px' }}>
                    {featuredProject.category}
                  </span>
                </div>

                {/* Title with dramatic typography */}
                <h3 className="font-display font-semibold text-ink-900 mb-3 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}>
                  {featuredProject.title}
                </h3>

                {/* Location */}
                <p className="text-sm text-brand-amber font-medium mb-4 italic">
                  {featuredProject.location}
                </p>

                {/* Description */}
                <p className="text-ink-700 leading-relaxed mb-6 flex-grow" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.125rem)' }}>
                  {featuredProject.description}
                </p>

                {/* Animated CTA with underline */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand-burnt-orange font-semibold text-sm group/link"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="relative">
                    View Project Details
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-brand-burnt-orange origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-brand-sun-yellow/5 via-brand-amber/5 to-brand-burnt-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Supporting Projects - Smaller */}
          <div className="grid gap-6 md:gap-8 lg:grid-rows-2">
            {supportingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (index + 1) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="group relative h-full bg-white rounded-3xl border border-ink-500/10 shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Image */}
                    <div className="mb-4">
                      <LuxuryImagePlaceholder
                        aspectRatio={project.aspectRatio}
                        variant="minimal"
                        animate={true}
                      />
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-1 rounded-full bg-brand-amber" />
                      <span className="text-[9px] uppercase font-bold text-brand-burnt-orange" style={{ letterSpacing: '2px' }}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-900 mb-2 tracking-tight leading-tight" style={{ letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>

                    {/* Location */}
                    <p className="text-xs text-brand-amber font-medium mb-3 italic">
                      {project.location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-ink-700 leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Simple arrow link */}
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-brand-burnt-orange font-semibold text-xs"
                      whileHover={{ x: 2 }}
                    >
                      <span className="relative">
                        View Details
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-px bg-brand-burnt-orange origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      </span>
                      →
                    </motion.a>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-amber/5 to-brand-burnt-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-brand-amber text-brand-burnt-orange font-semibold hover:bg-brand-amber/5 transition-all duration-300 uppercase text-xs"
            style={{ letterSpacing: '2px' }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

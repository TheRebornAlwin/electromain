"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Rewire",
      location: "Kensington, London",
      category: "Residential",
    },
    {
      id: 2,
      title: "Modern Office Fit-Out",
      location: "Canary Wharf",
      category: "Commercial",
    },
    {
      id: 3,
      title: "Period Property Restoration",
      location: "Chelsea",
      category: "Heritage",
    },
    {
      id: 4,
      title: "Smart Home Integration",
      location: "Hampstead",
      category: "Technology",
    },
    {
      id: 5,
      title: "Industrial Complex",
      location: "South East London",
      category: "Industrial",
    },
    {
      id: 6,
      title: "Boutique Hotel",
      location: "Mayfair",
      category: "Hospitality",
    },
    {
      id: 7,
      title: "Premium Apartment Complex",
      location: "Notting Hill",
      category: "Residential",
    },
    {
      id: 8,
      title: "Flagship Retail Store",
      location: "Bond Street",
      category: "Commercial",
    },
  ];

  return (
    <section className="relative py-24 bg-paper overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-gray/30 via-paper to-warm-gray/30" />

      <div className="relative z-10">
        {/* Luxury header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            <span className="text-soft-black font-extralight">Our</span>
            <span className="bg-gradient-to-r from-amber via-burnt-orange to-deep-orange bg-clip-text text-transparent font-normal"> Showcase</span>
          </h2>
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-amber to-transparent mx-auto mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <p className="text-charcoal text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Exceptional electrical installations across London and the South East
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={scrollContainerRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto pb-6 px-6 md:px-12 scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative flex-shrink-0 w-[340px] h-[440px] snap-center"
              >
                <div className="relative h-full rounded-lg glass-light border border-divider shadow-ambient hover:shadow-luxury overflow-hidden transition-all duration-700 hover:border-amber/30">
                  {/* Subtle luxury gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sun-yellow/[0.02] via-transparent to-amber/[0.01]" />

                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3 opacity-20">
                      <div className="text-xs text-amber/60 tracking-[0.3em] uppercase font-light">{project.category}</div>
                    </div>
                  </div>

                  {/* Bottom info section with light glass */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-md">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber" />
                        <span className="text-[10px] uppercase tracking-[0.25em] text-amber font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-normal text-soft-black tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-charcoal font-light tracking-wide">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-charcoal/40 font-light">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}

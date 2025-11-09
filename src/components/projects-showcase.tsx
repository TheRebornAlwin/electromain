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
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200/40 via-background to-dark-200/40" />
      <div className="absolute inset-0 industrial-pattern opacity-10" />

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
            <span className="text-off-white font-extralight">Our</span>
            <span className="brand-gradient bg-clip-text text-transparent font-normal glow-text-orange"> Showcase</span>
          </h2>
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto mb-6"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <p className="text-muted text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Exceptional electrical installations across London and the South East
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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
                <div className="relative h-full rounded-lg glass border border-brand-orange/20 shadow-luxury hover:shadow-glow-orange overflow-hidden transition-all duration-700 hover:border-brand-orange/40 metallic">
                  {/* Industrial gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.04] via-transparent to-brand-gradient/[0.02]" />

                  {/* Industrial pattern overlay */}
                  <div className="absolute inset-0 industrial-pattern opacity-15" />

                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3 opacity-20">
                      <div className="text-xs text-brand-orange/60 tracking-[0.3em] uppercase font-light">{project.category}</div>
                    </div>
                  </div>

                  {/* Bottom info section with dark glass */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/95 via-background/80 to-transparent backdrop-blur-md">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <motion.div
                          className="w-1 h-1 rounded-full bg-brand-orange"
                          animate={{
                            boxShadow: [
                              "0 0 4px rgba(242, 140, 0, 0.4)",
                              "0 0 8px rgba(242, 140, 0, 0.6)",
                              "0 0 4px rgba(242, 140, 0, 0.4)",
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <span className="text-[10px] uppercase tracking-[0.25em] text-brand-orange/70 font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-normal text-off-white tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted font-light tracking-wide">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  {/* Glowing top accent */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted/40 font-light">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}

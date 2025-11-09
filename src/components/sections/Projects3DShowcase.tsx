'use client';

/**
 * ElectroMain 3D Projects Showcase
 * 3D marquee displaying project portfolio with luxury image placeholders
 */

import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { motion } from "framer-motion";

const projects = [
  { title: "Luxury Residential Rewire", category: "RESIDENTIAL", aspectRatio: "16/9" as const },
  { title: "Modern Office Fit-Out", category: "COMMERCIAL", aspectRatio: "4/3" as const },
  { title: "Period Property Restoration", category: "HERITAGE", aspectRatio: "16/9" as const },
  { title: "Smart Home Integration", category: "TECHNOLOGY", aspectRatio: "4/3" as const },
  { title: "Industrial Complex", category: "INDUSTRIAL", aspectRatio: "16/9" as const },
  { title: "Boutique Hotel", category: "HOSPITALITY", aspectRatio: "3/2" as const },
  { title: "Premium Apartment Complex", category: "RESIDENTIAL", aspectRatio: "4/3" as const },
  { title: "Flagship Retail Store", category: "COMMERCIAL", aspectRatio: "16/9" as const },
  { title: "Data Center Installation", category: "TECHNOLOGY", aspectRatio: "4/3" as const },
  { title: "Listed Building Upgrade", category: "HERITAGE", aspectRatio: "16/9" as const },
  { title: "Warehouse Electrical Fit-Out", category: "INDUSTRIAL", aspectRatio: "3/2" as const },
  { title: "Restaurant Chain Rollout", category: "HOSPITALITY", aspectRatio: "4/3" as const },
  { title: "Luxury Penthouse", category: "RESIDENTIAL", aspectRatio: "16/9" as const },
  { title: "Corporate Headquarters", category: "COMMERCIAL", aspectRatio: "4/3" as const },
  { title: "Georgian Townhouse", category: "HERITAGE", aspectRatio: "16/9" as const },
  { title: "Manufacturing Facility", category: "INDUSTRIAL", aspectRatio: "3/2" as const },
];

export function Projects3DShowcase() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-warm-gray overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-paper via-warm-gray to-paper" />
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
            <p className="text-[11px] uppercase text-ink-600 font-bold" style={{ letterSpacing: '2px' }}>
              Project Portfolio
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display font-light text-ink-900 mb-6 tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}>
            <span className="font-extralight">Our</span>
            <span className="gradient-text font-semibold"> Portfolio</span>
          </h2>

          <p className="text-ink-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '-0.01em' }}>
            Exceptional electrical installations across London and the South East
          </p>
        </motion.div>

        {/* 3D Marquee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto my-10 max-w-7xl rounded-3xl bg-white p-2 ring-1 ring-brand-amber/10 shadow-luxury"
        >
          <ThreeDMarquee projects={projects} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-ink-600 mb-6">
            Ready to start your project?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-brand-amber text-brand-burnt-orange font-semibold hover:bg-brand-amber/5 transition-all duration-300 uppercase text-xs"
            style={{ letterSpacing: '2px' }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Your Project
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

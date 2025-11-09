"use client";
import { motion } from "framer-motion";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative py-32 md:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-gray/20 via-white to-warm-gray/20" />
      <div className="absolute inset-0 luxury-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
            <p className="text-[11px] uppercase text-ink-600 font-bold" style={{ letterSpacing: '2px' }}>
              Our Journey
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display font-light text-ink-900 mb-6 tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}>
            <span className="font-extralight">Building Excellence</span>
            <span className="gradient-text font-semibold"> Since 2015</span>
          </h2>

          <p className="text-ink-700 leading-relaxed max-w-xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '-0.01em' }}>
            Years of experience delivering exceptional electrical installations across London
          </p>
        </motion.div>

        <div className="space-y-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-12 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                    {item.title}
                  </div>
                </div>

                <div className="flex-1 relative">
                  <div className="absolute -left-6 top-3 w-2 h-2 rounded-full bg-brand-amber shadow-[0_0_10px_rgba(246,162,26,0.5)]" />
                  <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-ink-500/10 hover:border-brand-amber/20 shadow-card hover:shadow-luxury transition-all duration-500 group overflow-hidden">
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-sun-yellow/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative text-sm md:text-base text-ink-700 font-light leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>

              {index < data.length - 1 && (
                <motion.div
                  className="absolute left-[5.5rem] top-12 bottom-0 w-px bg-gradient-to-b from-brand-amber/30 via-brand-amber/20 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'top' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

export const AnimatedTestimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative py-32 md:py-40 bg-gradient-to-b from-white via-light-bg/30 to-white overflow-hidden">
      {/* Subtle image placeholder */}
      <div className="absolute right-16 top-1/3 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-56 h-72 rounded-lg border border-accent/5 bg-gradient-to-br from-white via-light-bg/30 to-white backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.01] to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            <span className="text-secondary font-extralight">Client</span>
            <span className="electrical-gradient bg-clip-text text-transparent font-normal"> Testimonials</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-6" />
          <p className="text-muted text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Trusted by homeowners and businesses across London
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative bg-white backdrop-blur-sm p-12 md:p-16 rounded-lg border border-accent/10 shadow-2xl">
                <p className="text-lg md:text-xl text-secondary font-light mb-12 leading-relaxed italic">
                  "{testimonials[active].quote}"
                </p>

                <div className="pt-8 border-t border-border/30">
                  <h3 className="text-base font-normal text-secondary mb-1 tracking-tight">
                    {testimonials[active].name}
                  </h3>
                  <p className="text-xs text-muted/60 font-light tracking-wide uppercase">
                    {testimonials[active].designation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-border/50 hover:border-accent/30 flex items-center justify-center transition-all duration-500 bg-white hover:bg-light-bg/50"
            >
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === active ? "w-8 bg-accent" : "w-1 bg-border"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-border/50 hover:border-accent/30 flex items-center justify-center transition-all duration-500 bg-white hover:bg-light-bg/50"
            >
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

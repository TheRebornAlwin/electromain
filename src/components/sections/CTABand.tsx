'use client';

/**
 * ElectroMain Dramatic CTA Band
 * FULL-WIDTH pre-footer call-to-action with electrical energy
 * Inspired by Tesla/Apple product launches
 *
 * Features:
 * - MASSIVE headline typography (display-1 scale)
 * - Full-bleed gradient background with circuit patterns
 * - Animated electrical pulse effects
 * - Premium button treatments
 * - Parallax-style reveal
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calculator, Zap } from 'lucide-react';
import { track } from '@/lib/analytics';
import { useRef } from 'react';

export function CTABand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 1.02]);

  const handleBookVisit = () => {
    track.ctaBandClick({ cta: 'book_visit' });
    // TODO: Open booking modal
  };

  const handleGetEstimate = () => {
    track.ctaBandClick({ cta: 'get_estimate' });
    // Scroll to estimate section
    const estimateSection = document.querySelector('#instant-estimate');
    if (estimateSection) {
      estimateSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-ink-900"
      style={{ opacity, scale }}
    >
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-brand-sun-yellow/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-[0.03]" />

      {/* Electrical grid lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-amber/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-amber/20 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Animated electrical icon */}
          <motion.div
            className="inline-flex mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-brand-sun-yellow via-brand-amber to-brand-burnt-orange flex items-center justify-center shadow-float"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(246, 162, 26, 0.3)',
                    '0 0 40px rgba(246, 162, 26, 0.5)',
                    '0 0 20px rgba(246, 162, 26, 0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-white" fill="white" strokeWidth={1.5} />
              </motion.div>

              {/* Pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-brand-amber"
                animate={{
                  scale: [1, 1.3, 1.3],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </div>
          </motion.div>

          {/* Massive headline with fluid typography */}
          <motion.h2
            className="font-display font-light text-white mb-6 md:mb-8 leading-[1.05]"
            style={{ fontSize: 'clamp(2rem, 8vw, 5.5rem)', letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Precision electrical work.{' '}
            <span className="gradient-text font-semibold">Transparent</span> pricing.{' '}
            Uncompromising safety.
          </motion.h2>

          {/* Subline with fluid typography */}
          <motion.p
            className="text-white/70 mb-10 md:mb-14 max-w-3xl mx-auto"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', letterSpacing: '-0.01em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Same-day slots often available. NICEIC-certified installations with documented handover.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary CTA */}
            <motion.button
              onClick={handleBookVisit}
              className="
                group relative px-8 md:px-10 py-4 md:py-5 rounded-full
                bg-gradient-to-r from-brand-sun-yellow via-brand-amber to-brand-burnt-orange
                text-ink-900 text-base md:text-lg font-bold
                shadow-float hover:shadow-[0_24px_80px_rgba(246,162,26,0.4)]
                transition-all duration-300
                flex items-center gap-3
                overflow-hidden
              "
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />

              <span className="relative z-10 flex items-center gap-3 uppercase" style={{ letterSpacing: '1px' }}>
                Book a Site Visit
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              onClick={handleGetEstimate}
              className="
                group px-8 md:px-10 py-4 md:py-5 rounded-full
                border-2 border-white/30 text-white text-base md:text-lg font-bold
                hover:bg-white/10 hover:border-white/50
                transition-all duration-300
                flex items-center gap-3 uppercase
              "
              style={{ letterSpacing: '1px' }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calculator className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
              <span>Get Instant Estimate</span>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base text-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-sun-yellow" />
              <span>NICEIC Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-sun-yellow" />
              <span>98.7% On-Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-sun-yellow" />
              <span>4.98★ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-sun-yellow" />
              <span>5-Year Warranty</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/50 to-transparent" />
    </motion.section>
  );
}

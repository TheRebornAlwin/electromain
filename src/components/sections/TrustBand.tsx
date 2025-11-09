'use client';

/**
 * ElectroMain Luxury Trust Band
 * DRAMATIC accreditations showcase with premium treatment
 * Inspired by luxury brand credibility sections
 *
 * Features:
 * - Animated gradient borders
 * - Electrical circuit pattern reveals
 * - Premium logo placeholders with sophisticated hover states
 * - Marquee scroll on mobile
 * - Whisper-quiet elegance meets electrical energy
 */

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Shield, Award, Zap, CheckCircle2 } from 'lucide-react';

// Accreditation data
const accreditations = [
  {
    name: 'NICEIC Approved Contractor',
    abbr: 'NICEIC',
    icon: Shield,
    color: 'from-brand-amber to-brand-burnt-orange',
  },
  {
    name: 'OZEV Approved Installer',
    abbr: 'OZEV',
    icon: Zap,
    color: 'from-brand-sun-yellow to-brand-amber',
  },
  {
    name: 'Tesla Approved Installer',
    abbr: 'TESLA',
    icon: Zap,
    color: 'from-brand-burnt-orange to-brand-deep-orange',
  },
  {
    name: 'Schneider Electric Partner',
    abbr: 'SCHNEIDER',
    icon: CheckCircle2,
    color: 'from-brand-amber to-brand-burnt-orange',
  },
  {
    name: 'City & Guilds Certified',
    abbr: 'C&G',
    icon: Award,
    color: 'from-brand-sun-yellow to-brand-amber',
  },
  {
    name: 'SafeContractor Approved',
    abbr: 'SAFE',
    icon: Shield,
    color: 'from-brand-amber to-brand-deep-orange',
  },
  {
    name: 'CHAS Accredited',
    abbr: 'CHAS',
    icon: CheckCircle2,
    color: 'from-brand-burnt-orange to-brand-deep-orange',
  },
  {
    name: 'ISO 9001:2015',
    abbr: 'ISO',
    icon: Award,
    color: 'from-brand-sun-yellow to-brand-amber',
  },
];

// Premium logo placeholder component
function LogoPlaceholder({
  accreditation,
  index
}: {
  accreditation: typeof accreditations[0];
  index: number;
}) {
  const Icon = accreditation.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Card container with gradient border */}
      <div className="
        relative px-8 py-6 rounded-2xl
        bg-white border border-ink-500/10
        hover:border-transparent
        shadow-ambient hover:shadow-luxury
        transition-all duration-500
        overflow-hidden
      ">
        {/* Circuit pattern background (subtle) */}
        <div className="absolute inset-0 circuit-pattern opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500" />

        {/* Gradient border reveal on hover */}
        <div className={`
          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
          bg-gradient-to-br ${accreditation.color} p-[1px]
          -z-10
        `}>
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Icon with gradient */}
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center
            bg-gradient-to-br ${accreditation.color}
            group-hover:scale-110 transition-transform duration-500
          `}>
            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>

          {/* Abbreviation */}
          <div className="text-center">
            <div className="font-display text-lg font-bold text-ink-900 tracking-tight mb-1">
              {accreditation.abbr}
            </div>
            <div className="text-[9px] uppercase tracking-[0.15em] text-ink-600 font-medium">
              Certified
            </div>
          </div>
        </div>

        {/* Animated sweep on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </div>

      {/* Tooltip on hover */}
      <div className="
        absolute -bottom-12 left-1/2 -translate-x-1/2
        px-4 py-2 rounded-lg
        bg-ink-900 text-white text-xs font-medium whitespace-nowrap
        opacity-0 group-hover:opacity-100
        pointer-events-none
        transition-opacity duration-300
        shadow-float
      ">
        {accreditation.name}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ink-900 rotate-45" />
      </div>
    </motion.div>
  );
}

export function TrustBand() {
  return (
    <section className="relative py-16 bg-warm-gray border-y border-ink-500/10 overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-sun-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-600 font-semibold">
              Accreditations & Partnerships
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-light text-ink-900 tracking-tight">
            Certified Excellence
          </h2>
          <p className="text-ink-600 text-sm mt-2 max-w-2xl mx-auto">
            Backed by industry-leading accreditations and trusted by premium brands
          </p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {accreditations.map((acc, idx) => (
            <LogoPlaceholder
              key={acc.abbr}
              accreditation={acc}
              index={idx}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-8 border-t border-ink-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: '2,500+', label: 'Projects Completed' },
            { value: '98.7%', label: 'On-Time Completion' },
            { value: '15+', label: 'Years Experience' },
            { value: '4.98★', label: 'Customer Rating' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
            >
              <div className="font-display text-2xl md:text-3xl font-semibold gradient-text tabular-nums">
                {stat.value}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-ink-600 font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom keyline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/20 to-transparent" />
    </section>
  );
}

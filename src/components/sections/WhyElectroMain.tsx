'use client';

/**
 * ElectroMain Why Section - Proof Deck
 * DRAMATIC two-column layout with OVERSIZED stats
 * Inspired by luxury brand credibility sections
 *
 * Features:
 * - MASSIVE stat displays with animated counters
 * - Premium typography treatment
 * - Editorial paragraphs with luxury spacing
 * - Gradient accents and electrical patterns
 * - Sophisticated reveal animations
 */

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Award, Clock, Shield, Zap, Gift } from 'lucide-react';

// Stat data with large numbers
const stats = [
  {
    value: 98.7,
    suffix: '%',
    label: 'On-time completion',
    sublabel: 'Based on 200+ jobs completed in past 12 months',
    icon: Clock,
    gradient: 'from-brand-sun-yellow to-brand-amber',
  },
  {
    value: 4.98,
    suffix: '★',
    label: 'Average rating',
    sublabel: 'From 200+ recent verified installations',
    icon: Award,
    gradient: 'from-brand-amber to-brand-burnt-orange',
  },
  {
    value: 5,
    suffix: '-year',
    label: 'Workmanship warranty',
    sublabel: 'Covering labor and installation quality',
    icon: Shield,
    gradient: 'from-brand-burnt-orange to-brand-deep-orange',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Emergency coverage',
    sublabel: 'Round-the-clock electrical response',
    icon: Zap,
    gradient: 'from-brand-sun-yellow to-brand-burnt-orange',
  },
  {
    value: 100,
    suffix: '%',
    label: 'OZEV grant assistance',
    sublabel: 'Help navigating EV charger funding',
    icon: Gift,
    gradient: 'from-brand-amber to-brand-deep-orange',
  },
];

// Animated counter component
function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (display.current) {
        display.current.textContent = latest.toFixed(
          value % 1 === 0 ? 0 : 2
        );
      }
    });
    return unsubscribe;
  }, [springValue, value]);

  return (
    <div ref={ref} className="inline-flex items-baseline">
      <span
        ref={display}
        className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tabular-nums"
      >
        0
      </span>
      <span className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold ml-1">
        {suffix}
      </span>
    </div>
  );
}

// Stat card component
function StatCard({
  stat,
  index,
}: {
  stat: typeof stats[0];
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div className="relative bg-white rounded-2xl p-8 md:p-10 border border-ink-500/10 shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden">
        {/* Circuit pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500" />

        {/* Gradient overlay - B&O pattern */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient}`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.03 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} items-center justify-center mb-6 shadow-card`}>
            <Icon className="w-7 h-7 text-white" strokeWidth={2} />
          </div>

          {/* Animated number */}
          <div className="mb-4 gradient-text">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>

          {/* Label */}
          <h3 className="text-xl md:text-2xl font-semibold text-ink-900 mb-2 leading-tight">
            {stat.label}
          </h3>

          {/* Sublabel */}
          <p className="text-sm text-ink-600 leading-relaxed">
            {stat.sublabel}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyElectroMain() {
  return (
    <section className="relative py-24 md:py-32 bg-warm-gray overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-sun-yellow/5 rounded-full blur-3xl" />

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
              Why ElectroMain
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display font-light text-ink-900 mb-6 tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}>
            Engineered for <span className="gradient-text font-semibold">Precision</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column - Editorial paragraphs */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quality Engineering */}
            <div className="group relative bg-white rounded-2xl p-8 md:p-10 border border-ink-500/10 shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden">
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />

              <div className="relative z-10">
                <h3 className="font-display font-semibold text-ink-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', letterSpacing: '-0.02em' }}>
                  Quality Engineering
                </h3>
                <p className="text-ink-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', letterSpacing: '-0.01em' }}>
                  Every installation is designed with longevity in mind. We specify components from trusted manufacturers, follow BS 7671 wiring regulations to the letter, and provide comprehensive test documentation. Cable routes are planned to avoid future interference; terminations are mechanically sound and clearly labeled.
                </p>
              </div>
            </div>

            {/* Reliability on Schedule */}
            <div className="group relative bg-white rounded-2xl p-8 md:p-10 border border-ink-500/10 shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />

              <div className="relative z-10">
                <h3 className="font-display font-semibold text-ink-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', letterSpacing: '-0.02em' }}>
                  Reliability on Schedule
                </h3>
                <p className="text-ink-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', letterSpacing: '-0.01em' }}>
                  We arrive on time, complete within quoted timescales, and communicate proactively if circumstances change. Our 98.7% on-time completion rate reflects robust project planning and buffer time for unforeseen site conditions. You'll receive a daily briefing on progress and next steps.
                </p>
              </div>
            </div>

            {/* Safety Without Compromise */}
            <div className="group relative bg-white rounded-2xl p-8 md:p-10 border border-ink-500/10 shadow-card hover:shadow-luxury transition-all duration-500 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />

              <div className="relative z-10">
                <h3 className="font-display font-semibold text-ink-900 mb-4 tracking-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', letterSpacing: '-0.02em' }}>
                  Safety Without Compromise
                </h3>
                <p className="text-ink-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', letterSpacing: '-0.01em' }}>
                  All installations undergo dead and live testing before energization. We isolate circuits safely, follow lock-off procedures, and never skip earthing checks. Our NICEIC certification is audited annually, ensuring that our standards remain current and our team stays trained on the latest safety protocols.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - OVERSIZED stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

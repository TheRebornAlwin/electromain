'use client';

/**
 * ElectroMain Dramatic Services Grid
 * LARGE-SCALE presentation of 7 signature services
 * NOW WITH LUXURY IMAGE PLACEHOLDERS
 */

import { motion } from 'framer-motion';
import {
  Zap,
  Cable,
  Eye,
  Flame,
  Droplet,
  Wrench,
  Phone,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { track } from '@/lib/analytics';
import { LuxuryImagePlaceholder } from '@/components/common/LuxuryImagePlaceholder';

// Service data with all copy from guide
const services = [
  {
    icon: Zap,
    title: 'Electrical Installations',
    proofline: 'NICEIC-certified. Clean installs. Documented handover.',
    bullets: [
      'Consumer unit upgrades to 18th Edition BS 7671',
      'Socket and lighting circuits tested and certified',
      'Minimal disruption with dust sheets and daily cleanup',
    ],
    gradient: 'from-brand-sun-yellow via-brand-amber to-brand-burnt-orange',
    ctaText: 'See Details',
    href: '/services/electrical',
    featured: true,
  },
  {
    icon: Cable,
    title: 'EV Charger Installation',
    proofline: 'OZEV grant guidance & certified testing.',
    bullets: [
      '7kW to 22kW chargers for home and commercial',
      'Cable management designed for clean appearance',
      'Load testing and commissioning certification included',
    ],
    gradient: 'from-brand-amber to-brand-deep-orange',
    ctaText: 'See Details',
    href: '/services/ev-chargers',
    featured: true,
  },
  {
    icon: Eye,
    title: 'CCTV & Access Control',
    proofline: 'Discreet placement • Proper cable management.',
    bullets: [
      'BS EN 50132 compliant CCTV systems',
      'Access control with key card or biometric entry',
      'Network integration and remote viewing setup',
    ],
    gradient: 'from-brand-sun-yellow to-brand-burnt-orange',
    ctaText: 'See Details',
    href: '/services/cctv',
    featured: false,
  },
  {
    icon: Flame,
    title: 'Fire Alarm Systems',
    proofline: 'BS 5839 compliant with commissioning certificates.',
    bullets: [
      'Addressable and conventional systems',
      'Smoke, heat, and manual call points',
      'Regular testing schedules and maintenance plans',
    ],
    gradient: 'from-brand-amber to-brand-deep-orange',
    ctaText: 'See Details',
    href: '/services/fire-alarms',
    featured: false,
  },
  {
    icon: Droplet,
    title: 'Plumbing & Heating Services',
    proofline: 'Gas Safe registered with workmanship warranty.',
    bullets: [
      'Boiler installations and servicing',
      'Underfloor heating and radiator systems',
      'Emergency leak response and repairs',
    ],
    gradient: 'from-brand-sun-yellow to-brand-amber',
    ctaText: 'See Details',
    href: '/services/plumbing-heating',
    featured: false,
  },
  {
    icon: Wrench,
    title: 'Facilities Maintenance',
    proofline: 'Planned and reactive for commercial properties.',
    bullets: [
      'PAT testing and compliance audits',
      'Emergency lighting and exit sign maintenance',
      'Scheduled inspections with detailed reports',
    ],
    gradient: 'from-brand-amber to-brand-burnt-orange',
    ctaText: 'See Details',
    href: '/services/facilities',
    featured: false,
  },
  {
    icon: Phone,
    title: '24/7 Emergency Response',
    proofline: 'Round-the-clock electrical emergency call-out.',
    bullets: [
      'Response within 60 minutes in central London',
      'Power outage diagnosis and restoration',
      'Emergency lighting and fire alarm faults',
    ],
    gradient: 'from-brand-burnt-orange to-brand-deep-orange',
    ctaText: 'Call Now: 020 1234 5678',
    href: 'tel:+442012345678',
    featured: true,
    isEmergency: true,
  },
];

// Service card component
function ServiceCard({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) {
  const Icon = service.icon;

  const handleClick = () => {
    track.serviceCardClick({
      service: service.title,
      location: 'services_grid',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative h-full
        ${service.featured ? 'md:col-span-1' : ''}
      `}
    >
      <div
        className={`
          relative h-full
          bg-white rounded-3xl
          border border-ink-500/10
          p-8 md:p-10
          shadow-card hover:shadow-float
          transition-all duration-500
          overflow-hidden
          ${service.isEmergency ? 'ring-2 ring-brand-deep-orange/20' : ''}
        `}
      >
        {/* Circuit pattern background */}
        <div className="absolute inset-0 circuit-pattern opacity-[0.015] group-hover:opacity-[0.03] transition-opacity duration-500" />

        {/* Gradient overlay on hover */}
        <motion.div
          className={`
            absolute inset-0 bg-gradient-to-br ${service.gradient}
            opacity-0 group-hover:opacity-[0.02]
            transition-opacity duration-500
          `}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Luxury Image Placeholder - NEW! */}
          <div className="mb-6 -mx-10 -mt-10">
            <LuxuryImagePlaceholder
              aspectRatio="16/9"
              variant="minimal"
              animate={true}
            />
          </div>

          {/* Icon with gradient background */}
          <div className="mb-6">
            <motion.div
              className={`
                inline-flex w-16 h-16 md:w-20 md:h-20 rounded-2xl
                bg-gradient-to-br ${service.gradient}
                items-center justify-center
                shadow-card group-hover:shadow-float
              `}
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
            </motion.div>

            {service.isEmergency && (
              <motion.div
                className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-full bg-brand-deep-orange/10 border border-brand-deep-orange/20"
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-deep-orange animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider font-bold text-brand-deep-orange">
                  Live Now
                </span>
              </motion.div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink-900 mb-3 tracking-tight leading-tight">
            {service.title}
          </h3>

          {/* Proofline */}
          <p className="text-sm text-brand-burnt-orange font-medium mb-6 leading-relaxed">
            {service.proofline}
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-8 flex-grow">
            {service.bullets.map((bullet, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 text-sm text-ink-700 leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.05 + 0.3 }}
              >
                <ChevronRight className="w-4 h-4 text-brand-amber mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href={service.href}
            onClick={handleClick}
            className={`
              group/cta inline-flex items-center justify-center gap-2
              px-6 py-3.5 rounded-full
              font-semibold text-sm
              transition-all duration-300
              ${
                service.isEmergency
                  ? 'bg-gradient-to-r from-brand-burnt-orange to-brand-deep-orange text-white shadow-luxury hover:shadow-float hover:scale-[1.02]'
                  : 'border-2 border-brand-amber/30 text-brand-burnt-orange hover:border-brand-amber hover:bg-brand-amber/5'
              }
            `}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{service.ctaText}</span>
            <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Animated gradient border on hover */}
        <div className={`
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br ${service.gradient}
          transition-opacity duration-500
          -z-10
          blur-xl
        `} />
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background patterns */}
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink-600 font-bold">
              Our Services
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-light text-ink-900 mb-6 tracking-tight leading-[1.1]">
            Seven <span className="gradient-text font-semibold">Signature</span> Services
          </h2>

          <p className="text-lg text-ink-700 leading-relaxed">
            From precision electrical installations to 24/7 emergency response, every service is delivered with NICEIC-certified quality and documented compliance.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm text-ink-600 mb-6">
            Need something else? We offer bespoke electrical solutions.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-brand-amber text-brand-burnt-orange font-semibold hover:bg-brand-amber/5 transition-all duration-300"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

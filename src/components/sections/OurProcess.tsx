'use client';

/**
 * ElectroMain Our Process Section
 * Sticky scroll reveal showing our comprehensive service process
 */

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { LuxuryImagePlaceholder } from "@/components/common/LuxuryImagePlaceholder";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "1. Initial Consultation",
    description:
      "We start with a detailed consultation to understand your electrical needs. Whether it's a full rewire, EV charger installation, or smart home integration, we assess your property and discuss your requirements. Our NICEIC-certified engineers provide expert advice on compliance, safety, and best practices.",
    content: (
      <div className="h-full w-full flex items-center justify-center p-4">
        <LuxuryImagePlaceholder
          aspectRatio="4/3"
          variant="elevated"
          animate={true}
        />
      </div>
    ),
  },
  {
    title: "2. Detailed Planning & Quote",
    description:
      "Our team creates a comprehensive project plan with clear timelines, itemized costs, and technical specifications. You'll receive a transparent, no-obligation quote that covers labor, materials, testing, and certification. We explain every aspect so you know exactly what to expect.",
    content: (
      <div className="h-full w-full flex items-center justify-center p-4">
        <LuxuryImagePlaceholder
          aspectRatio="4/3"
          variant="elevated"
          animate={true}
        />
      </div>
    ),
  },
  {
    title: "3. Professional Installation",
    description:
      "Our qualified electricians arrive on time with all necessary equipment and materials. We work efficiently while maintaining the highest safety standards. Daily cleanup keeps your property tidy, and we provide progress updates throughout the installation to keep you informed.",
    content: (
      <div className="h-full w-full flex items-center justify-center p-4">
        <LuxuryImagePlaceholder
          aspectRatio="4/3"
          variant="elevated"
          animate={true}
        />
      </div>
    ),
  },
  {
    title: "4. Testing & Certification",
    description:
      "Every installation undergoes rigorous dead and live testing to BS 7671 standards. We perform comprehensive electrical safety checks, verify earthing and bonding, and ensure all circuits function correctly. You receive full certification documentation for your records and building compliance.",
    content: (
      <div className="h-full w-full flex items-center justify-center p-4">
        <LuxuryImagePlaceholder
          aspectRatio="4/3"
          variant="elevated"
          animate={true}
        />
      </div>
    ),
  },
  {
    title: "5. Handover & Support",
    description:
      "We provide a complete handover with all test certificates, compliance documentation, and user guidance. Our 5-year workmanship warranty covers labor and installation quality. Ongoing support is available 24/7 for emergencies, and we're always here to answer questions about your electrical system.",
    content: (
      <div className="h-full w-full flex items-center justify-center p-4">
        <LuxuryImagePlaceholder
          aspectRatio="4/3"
          variant="elevated"
          animate={true}
        />
      </div>
    ),
  },
];

export function OurProcess() {
  return (
    <section className="relative py-24 md:py-32 bg-paper overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-warm-gray/30 to-white" />
      <div className="absolute inset-0 luxury-pattern opacity-20" />

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
              Our Process
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display font-light text-ink-900 mb-6 tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}>
            From <span className="gradient-text font-semibold">Consultation</span> to <span className="gradient-text font-semibold">Completion</span>
          </h2>

          <p className="text-ink-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '-0.01em' }}>
            We handle every detail of your electrical project with precision and care, from initial planning through to final certification.
          </p>
        </motion.div>

        {/* Sticky scroll content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <StickyScroll content={processSteps} />
        </motion.div>
      </div>
    </section>
  );
}

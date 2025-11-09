'use client';

/**
 * ElectroMain Instant Estimate Component
 *
 * Features:
 * - Seeded deterministic random number generation (Mulberry32)
 * - Persistent seed in localStorage (per session)
 * - Animated number transitions with spring physics
 * - Analytics events on every change
 * - Responsive: sticky rail (desktop) / full-width section (mobile)
 * - Accessibility: labels, 44px touch targets, keyboard navigation
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, Check } from 'lucide-react';

// ============================================================================
// SEEDED RANDOM NUMBER GENERATOR (Mulberry32)
// ============================================================================

function mulberry32(a: number) {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) | 0;
  }
  return mulberry32(h);
}

// ============================================================================
// TYPES
// ============================================================================

interface EstimateInputs {
  service: string;
  urgency: string;
  property: string;
}

interface EstimateRange {
  low: number;
  high: number;
}

// ============================================================================
// ESTIMATE RANGE CALCULATOR (Deterministic per session)
// ============================================================================

function estimateRange(inputs: EstimateInputs): EstimateRange {
  const seedKey = 'em-seed';
  const existing = typeof window !== 'undefined' ? localStorage.getItem(seedKey) : null;

  // Create seed from inputs + random suffix (once per session)
  const seed = existing ?? (
    inputs.service +
    inputs.urgency +
    inputs.property +
    Math.random().toString(36).slice(2)
  );

  // Store seed if new
  if (typeof window !== 'undefined' && !existing) {
    localStorage.setItem(seedKey, seed);
  }

  const r = seededRandom(seed);

  // Base prices per service type
  const baseMap: Record<string, number> = {
    'Electrical': 180,
    'EV Chargers': 680,
    'CCTV & Access': 440,
    'Fire Alarms': 360,
    'Plumbing & Heating': 170,
    'Facilities Maintenance': 250,
    'Emergency': 230,
  };

  const base = baseMap[inputs.service] ?? 220;

  // Urgency multipliers
  const kUrg: Record<string, number> = {
    'Today': 1.35,
    '48h': 1.15,
    'Flexible': 1.0,
  };

  // Property type multipliers
  const kProp: Record<string, number> = {
    'Home': 1.0,
    'Commercial': 1.25,
    'Industrial': 1.45,
  };

  // Random swing (-6% to +16%)
  const swing = 1 + (r() * 0.22 - 0.06);

  // Calculate midpoint
  const mid = base * (kUrg[inputs.urgency] ?? 1) * (kProp[inputs.property] ?? 1) * swing;

  // Range: low = 85% of mid, high = 125% of mid
  const low = Math.round(mid * 0.85);
  const high = Math.round(mid * 1.25);

  return { low, high };
}

// ============================================================================
// SERVICE OPTIONS
// ============================================================================

const serviceOptions = [
  'Electrical',
  'EV Chargers',
  'CCTV & Access',
  'Fire Alarms',
  'Plumbing & Heating',
  'Facilities Maintenance',
  'Emergency',
];

const urgencyOptions = ['Today', '48h', 'Flexible'];
const propertyOptions = ['Home', 'Commercial', 'Industrial'];

// ============================================================================
// COMPONENT
// ============================================================================

export function InstantEstimate() {
  const [inputs, setInputs] = useState<EstimateInputs>({
    service: 'Electrical',
    urgency: 'Flexible',
    property: 'Home',
  });

  const [range, setRange] = useState<EstimateRange>({ low: 0, high: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate range whenever inputs change
  useEffect(() => {
    const newRange = estimateRange(inputs);
    setRange(newRange);

    // Analytics event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'estimate_change',
        service: inputs.service,
        urgency: inputs.urgency,
        property: inputs.property,
        low: newRange.low,
        high: newRange.high,
      });
    }
  }, [inputs]);

  const handleSubmit = () => {
    // Analytics event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'estimate_submit',
        service: inputs.service,
        urgency: inputs.urgency,
        property: inputs.property,
        low: range.low,
        high: range.high,
      });
    }

    // TODO: Open modal or navigate to quote form
    console.log('Submit estimate:', { inputs, range });
  };

  const handleBookVisit = () => {
    // Analytics event
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'book_visit_click',
        location: 'estimate_panel',
        label: 'Book a Site Visit',
      });
    }

    // TODO: Open booking modal
    console.log('Book visit from estimate');
  };

  return (
    <motion.div
      className="
        bg-white rounded-2xl shadow-float p-8 border border-ink-500/10
        lg:sticky lg:top-24
      "
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0">
          <Calculator className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display text-h4 text-ink-900 mb-1">Instant Estimate</h3>
          <p className="text-caption text-ink-600">Range updates as you refine scope.</p>
        </div>
      </div>

      {/* Service Selection */}
      <div className="mb-6">
        <label htmlFor="service-select" className="block text-sm font-medium text-ink-800 mb-2">
          Service
        </label>
        <select
          id="service-select"
          value={inputs.service}
          onChange={(e) => setInputs({ ...inputs, service: e.target.value })}
          className="
            w-full px-4 py-3 rounded-lg border border-ink-500/20
            text-ink-900 bg-white text-body
            focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20
            outline-none transition-all duration-200
          "
          aria-label="Select service type"
        >
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Urgency Selection */}
      <div className="mb-6">
        <p className="block text-sm font-medium text-ink-800 mb-2">Urgency</p>
        <div className="grid grid-cols-3 gap-2" role="group" aria-label="Select urgency">
          {urgencyOptions.map((urg) => (
            <button
              key={urg}
              onClick={() => setInputs({ ...inputs, urgency: urg })}
              className={`
                px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                min-h-[44px] flex items-center justify-center
                focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
                ${
                  inputs.urgency === urg
                    ? 'bg-brand-600 text-white shadow-card'
                    : 'bg-surface-tint text-ink-700 hover:bg-ink-500/10'
                }
              `}
              aria-pressed={inputs.urgency === urg}
            >
              {urg}
            </button>
          ))}
        </div>
      </div>

      {/* Property Type Selection */}
      <div className="mb-8">
        <p className="block text-sm font-medium text-ink-800 mb-2">Property</p>
        <div className="grid grid-cols-3 gap-2" role="group" aria-label="Select property type">
          {propertyOptions.map((prop) => (
            <button
              key={prop}
              onClick={() => setInputs({ ...inputs, property: prop })}
              className={`
                px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                min-h-[44px] flex items-center justify-center
                focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
                ${
                  inputs.property === prop
                    ? 'bg-brand-600 text-white shadow-card'
                    : 'bg-surface-tint text-ink-700 hover:bg-ink-500/10'
                }
              `}
              aria-pressed={inputs.property === prop}
            >
              {prop}
            </button>
          ))}
        </div>
      </div>

      {/* Range Display with Animated Numbers */}
      <div className="bg-gradient-to-br from-brand-400/10 to-brand-600/10 rounded-xl p-6 mb-6 border border-brand-500/20">
        <p className="text-micro text-ink-600 uppercase tracking-wider font-medium mb-2">
          Estimated Range
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={`${range.low}-${range.high}`}
            className="font-display text-h2 text-ink-900 font-semibold tabular-nums"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
          >
            £{range.low.toLocaleString()} – £{range.high.toLocaleString()}
          </motion.p>
        </AnimatePresence>
        <p className="text-caption text-ink-600 mt-2">
          Based on {inputs.service} • {inputs.urgency} • {inputs.property}
        </p>
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        <button
          onClick={handleSubmit}
          className="
            w-full px-6 py-3.5 rounded-full
            bg-gradient-to-r from-brand-500 to-brand-700
            text-white font-semibold text-sm
            shadow-card hover:shadow-float hover:scale-105
            transition-all duration-200
            flex items-center justify-center gap-2
            min-h-[48px]
            focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
            group
          "
        >
          Get Exact Quote
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={handleBookVisit}
          className="
            w-full px-6 py-3.5 rounded-full
            border border-brand-600 text-brand-600 font-semibold text-sm
            hover:bg-brand-500/5 transition-all duration-200
            min-h-[48px]
            focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
          "
        >
          Book a Site Visit
        </button>
      </div>

      {/* Helper Text */}
      <p className="text-micro text-ink-500 mt-4 text-center">
        Free site visits • Fixed-price quotes • No hidden fees
      </p>
    </motion.div>
  );
}

// Export estimate logic for reuse
export { estimateRange, type EstimateInputs, type EstimateRange };

'use client';

/**
 * ElectroMain Luxury Utility Bar
 * Premium top bar with electrical circuit pattern reveal
 * Inspired by Apple's attention to detail
 */

import { Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { track } from '@/lib/analytics';

export function UtilityBar() {
  const handlePhoneClick = () => {
    track.phoneClick({
      location: 'header',
      phone_number: '+442012345678',
    });
  };

  return (
    <motion.div
      className="relative bg-ink-900 border-b border-white/10 overflow-hidden"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle circuit pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="circuit-pattern w-full h-full" />
      </div>

      {/* Animated gradient sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-amber/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

      <div className="container relative z-10">
        <div className="flex items-center justify-between py-2.5 text-[11px] tracking-wide">

          {/* Left: Phone + Same-day availability */}
          <div className="flex items-center gap-8">
            <motion.a
              href="tel:+442012345678"
              onClick={handlePhoneClick}
              className="flex items-center gap-2.5 text-white/90 hover:text-brand-sun-yellow transition-colors duration-300 group"
              aria-label="Call ElectroMain"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-7 h-7 rounded-full bg-brand-amber/10 flex items-center justify-center group-hover:bg-brand-amber/20 transition-colors">
                <Phone className="w-3.5 h-3.5" strokeWidth={2} />
              </div>
              <span className="font-semibold tabular-nums">020 1234 5678</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-2 text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-sun-yellow animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider font-medium">
                Same-day slots available
              </span>
            </div>
          </div>

          {/* Right: Hours + Coverage */}
          <div className="flex items-center gap-6 text-white/70">
            <div className="hidden lg:flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-white/50" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">
                Mon-Fri 7AM-8PM • Sat 8AM-6PM • <span className="text-brand-sun-yellow">24/7 Emergency</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-amber" strokeWidth={1.5} />
              <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">
                London & South East
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient keyline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(246, 162, 26, 0.3) 50%, transparent 100%)',
        }}
      />
    </motion.div>
  );
}

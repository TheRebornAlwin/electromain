'use client';

/**
 * Luxury Image Placeholder Component
 * Premium framed placeholders with animated effects
 */

import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

interface LuxuryImagePlaceholderProps {
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | '21/9';
  caption?: string;
  variant?: 'bordered' | 'elevated' | 'minimal';
  animate?: boolean;
}

export function LuxuryImagePlaceholder({
  aspectRatio = '16/9',
  caption,
  variant = 'elevated',
  animate = true,
}: LuxuryImagePlaceholderProps) {
  const aspectRatioMap = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
    '21/9': 'aspect-[21/9]',
  };

  const variantStyles = {
    bordered: 'border-2 border-brand-amber/20 shadow-card',
    elevated: 'shadow-luxury border border-ink-500/10',
    minimal: 'border border-ink-500/10',
  };

  return (
    <motion.div
      className="overflow-hidden rounded-2xl"
      initial={animate ? { opacity: 0, scale: 0.95 } : false}
      whileInView={animate ? { opacity: 1, scale: 1 } : false}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative ${aspectRatioMap[aspectRatio]} ${variantStyles[variant]} overflow-hidden group`}>
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gray via-white to-warm-gray" />

        {/* Circuit pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-[0.02]" />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-brand-sun-yellow/10 via-brand-amber/5 to-brand-burnt-orange/10"
          animate={animate ? {
            opacity: [0.3, 0.5, 0.3],
          } : false}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-brand-amber to-brand-burnt-orange flex items-center justify-center shadow-card group-hover:scale-110 transition-transform duration-500">
            <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </div>

      {caption && (
        <p className="text-xs text-ink-600 mt-3 text-center italic">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

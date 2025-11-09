// ElectroMain Motion Library — Framer Motion Variants
// Luxury easing: cubic-bezier(0.22, 1, 0.36, 1) — slow-out

export const motionVariants = {
  // SECTION REVEALS (parent → children)
  section: {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  },

  // CARD REVEALS
  card: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },

  // STAT CHIPS
  chip: {
    hidden: { opacity: 0, scale: 0.98 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  },

  // COUNTER NUMBERS
  counter: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  },

  // GRADIENT KEYLINE BORDERS
  border: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1 },
    },
  },

  // FADE UP (general purpose)
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },

  // FADE IN
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },

  // SCALE UP (subtle)
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },

  // SLIDE IN (from side)
  slideInRight: {
    hidden: { opacity: 0, x: 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },

  slideInLeft: {
    hidden: { opacity: 0, x: -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },

  // STAGGER CHILDREN (for lists)
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

// SPRING CONFIGURATIONS
export const springConfigs = {
  // Number counters
  counter: {
    type: 'spring',
    stiffness: 300,
    damping: 25,
  },

  // Modals and overlays
  modal: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
  },

  // Button hover states
  button: {
    type: 'spring',
    stiffness: 500,
    damping: 35,
  },
};

// HOVER ANIMATIONS (for whileHover)
export const hoverAnimations = {
  // Button arrow slide
  arrowSlide: {
    x: 3,
    transition: { duration: 0.15 },
  },

  // Card lift
  cardLift: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },

  // Subtle scale
  scale: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

// TAP ANIMATIONS (for whileTap)
export const tapAnimations = {
  // Button press
  buttonPress: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },

  // Chip press
  chipPress: {
    scale: 0.96,
    transition: { duration: 0.1 },
  },
};

// REDUCED MOTION (prefers-reduced-motion: reduce)
export const reducedMotionVariants = {
  // Instant reveals (no animation)
  section: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0 } },
  },

  card: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0 } },
  },

  fadeUp: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0 } },
  },
};

// UTILITY: Get variants based on user's motion preference
export function getMotionVariants(variantName: keyof typeof motionVariants) {
  if (typeof window !== 'undefined') {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && variantName in reducedMotionVariants) {
      return reducedMotionVariants[variantName as keyof typeof reducedMotionVariants];
    }
  }
  return motionVariants[variantName];
}

// EXAMPLE USAGE:
// <motion.div variants={getMotionVariants('section')} initial="hidden" whileInView="show">
//   <motion.div variants={motionVariants.card}>Card content</motion.div>
// </motion.div>

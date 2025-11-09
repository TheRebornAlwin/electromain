'use client';

/**
 * ElectroMain Luxury Header
 * DRAMATIC navigation inspired by Apple, Rolex, Tesla
 * Features:
 * - Oversized logo with electrical pulse
 * - Glass morphism with circuit pattern reveal on scroll
 * - Sophisticated hover states with energy feedback
 * - Premium CTA treatment
 * - Mobile menu with unique transitions
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Zap, ArrowRight, Menu, X, Phone, Calculator } from 'lucide-react';
import { track } from '@/lib/analytics';

const navItems = [
  { label: 'Services', href: '#services', featured: false },
  { label: 'Case Studies', href: '#case-studies', featured: false },
  { label: 'Process', href: '#process', featured: false },
  { label: 'Compliance', href: '#compliance', featured: false },
  { label: 'Sectors', href: '#sectors', featured: false },
  { label: 'FAQ', href: '#faq', featured: false },
];

export function LuxuryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Logo scale decreases slightly as user scrolls
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.92]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookVisit = () => {
    track.bookVisitClick({
      location: 'header',
      label: 'Book a Site Visit',
    });
    // TODO: Open booking modal
  };

  const handleGetEstimate = () => {
    // Scroll to estimate section
    const estimateSection = document.querySelector('#instant-estimate');
    if (estimateSection) {
      estimateSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <motion.header
        className={`
          sticky top-0 z-50 transition-all duration-500
          ${scrolled
            ? 'glass-light shadow-luxury'
            : 'bg-white'
          }
        `}
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        {/* Circuit pattern background (reveals on scroll) */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              className="absolute inset-0 circuit-pattern opacity-[0.015] pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.015 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </AnimatePresence>

        <div className="container relative z-10">
          <div className={`
            flex items-center justify-between transition-all duration-500
            ${scrolled ? 'py-4' : 'py-6'}
          `}>

            {/* LOGO - Oversized and dramatic */}
            <motion.a
              href="/"
              className="flex items-center gap-4 group relative"
              aria-label="ElectroMain - Home"
              style={{ scale: logoScale }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {/* Electrical pulse glow */}
              <motion.div
                className="absolute -inset-2 rounded-2xl bg-brand-amber/0 group-hover:bg-brand-amber/5 transition-colors duration-500"
                initial={false}
              />

              {/* Icon container with gradient */}
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden shadow-card group-hover:shadow-float transition-shadow duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #F6A21A 0%, #D96A0B 100%)',
                  }}
                >
                  {/* Animated sweep on hover */}
                  <div className="sweep-effect absolute inset-0" />

                  <Zap
                    className="w-6 h-6 text-white relative z-10"
                    fill="white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Pulsing dot indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-sun-yellow shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Wordmark */}
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold leading-none tracking-tight">
                  <span className="text-ink-900">Electro</span>
                  <span className="gradient-text">Main</span>
                </span>
                <span className="text-[9px] uppercase text-ink-500 font-medium mt-1" style={{ letterSpacing: '2px' }}>
                  Precision Engineering
                </span>
              </div>
            </motion.a>

            {/* DESKTOP NAVIGATION */}
            <nav
              className="hidden lg:flex items-center gap-10"
              aria-label="Main navigation"
            >
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => track.navClick({ label: item.label, destination: item.href })}
                  className="relative text-sm font-medium text-ink-700 hover:text-brand-burnt-orange group py-2 block"
                  style={{
                    transition: 'color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    animationDelay: `${0.5 + idx * 0.05}s`
                  }}
                >
                  {item.label}

                  {/* Luxury animated underline - B&O pattern */}
                  <motion.span
                    className="absolute -bottom-0 left-0 h-px bg-gradient-to-r from-brand-amber to-brand-deep-orange origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />

                  {/* Gradient overlay on hover - B&O pattern */}
                  <motion.span
                    className="absolute inset-x-0 -inset-y-1 rounded-lg -z-10"
                    initial={{ background: 'transparent' }}
                    whileHover={{
                      background: 'linear-gradient(135deg, rgba(246, 162, 26, 0.03) 0%, rgba(217, 106, 11, 0.05) 100%)'
                    }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </a>
              ))}
            </nav>

            {/* DESKTOP CTAs */}
            <motion.div
              className="hidden lg:flex items-center gap-3"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Secondary CTA - Get Estimate */}
              <motion.button
                onClick={handleGetEstimate}
                className="
                  group relative px-6 py-3 rounded-full
                  border-2 border-brand-amber/30
                  text-brand-burnt-orange text-sm font-semibold
                  hover:border-brand-amber hover:bg-brand-amber/5
                  transition-all duration-300
                  flex items-center gap-2
                "
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calculator className="w-4 h-4" strokeWidth={2} />
                <span>Get Estimate</span>
              </motion.button>

              {/* Primary CTA - Book Visit */}
              <motion.button
                onClick={handleBookVisit}
                className="
                  group relative px-7 py-3 rounded-full
                  text-white text-sm font-semibold
                  shadow-luxury hover:shadow-float
                  transition-all duration-300
                  flex items-center gap-2
                  overflow-hidden
                "
                style={{
                  background: 'linear-gradient(135deg, #F6A21A 0%, #D96A0B 100%)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  Book a Site Visit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>

            {/* MOBILE MENU TOGGLE */}
            <motion.button
              className="lg:hidden w-11 h-11 rounded-xl border border-ink-500/20 flex items-center justify-center text-ink-900 hover:bg-ink-500/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

          </div>
        </div>

        {/* Gradient keyline bottom border (appears on scroll) */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px keyline-border"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(90deg, rgba(246, 162, 26, 0.2) 0%, rgba(217, 106, 11, 0.3) 50%, rgba(246, 162, 26, 0.2) 100%)',
              }}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-ink-900/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              className="
                fixed top-[72px] left-0 right-0 bottom-0
                bg-white z-40 lg:hidden
                overflow-y-auto
                circuit-pattern
              "
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="container py-8">
                {/* Navigation links */}
                <nav className="space-y-1 mb-8">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        track.navClick({ label: item.label, destination: item.href });
                      }}
                      className="
                        block px-6 py-4 rounded-xl
                        text-lg font-semibold text-ink-900
                        hover:bg-brand-amber/5 transition-colors
                        border border-transparent hover:border-brand-amber/20
                      "
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTAs */}
                <motion.div
                  className="space-y-3 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleBookVisit();
                    }}
                    className="
                      w-full px-6 py-4 rounded-full
                      bg-gradient-to-r from-brand-amber to-brand-deep-orange
                      text-white text-base font-semibold
                      shadow-luxury
                      flex items-center justify-center gap-2
                    "
                  >
                    Book a Site Visit
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleGetEstimate();
                    }}
                    className="
                      w-full px-6 py-4 rounded-full
                      border-2 border-brand-amber text-brand-burnt-orange text-base font-semibold
                      flex items-center justify-center gap-2
                    "
                  >
                    <Calculator className="w-5 h-5" />
                    Get Instant Estimate
                  </button>
                </motion.div>

                {/* Contact info */}
                <motion.div
                  className="mt-12 px-6 pt-8 border-t border-ink-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="tel:+442012345678"
                    className="flex items-center gap-3 text-ink-900 hover:text-brand-burnt-orange transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-amber/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-burnt-orange" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-600 font-medium">Call Us</div>
                      <div className="text-xl font-semibold tabular-nums">020 1234 5678</div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

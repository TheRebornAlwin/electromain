'use client';

/**
 * ElectroMain Testimonial Masonry Grid
 * Luxury-themed testimonial showcase with image cards
 * Features:
 * - Masonry grid layout with responsive columns
 * - Image testimonials with hover effects
 * - Amber/orange gradient theme
 * - Professional luxury aesthetic
 */

import * as React from 'react';
import { MasonryGrid } from '@/components/ui/image-testimonial-grid';
import { motion } from 'framer-motion';

// ElectroMain testimonial data
const testimonials = [
  {
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    name: 'David Thompson',
    feedback: 'Exceptional Commercial Installation',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=1200&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    name: 'Sarah Mitchell',
    feedback: 'Luxury Residential Rewire Excellence',
    mainImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&h=1000&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    name: 'James Wilson',
    feedback: 'Smart Home Integration Perfection',
    mainImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&h=1200&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    name: 'Emma Richardson',
    feedback: 'Professional EV Charger Install',
    mainImage: 'https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=800&h=1000&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    name: 'Michael Chen',
    feedback: 'Industrial Electrical Expertise',
    mainImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=1200&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    name: 'Rachel Green',
    feedback: 'Heritage Property Restoration',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=1000&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    name: 'Tom Anderson',
    feedback: 'CCTV & Security Systems',
    mainImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&h=1200&q=80',
    rating: 5,
  },
  {
    profileImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    name: 'Sophie Bennett',
    feedback: 'Office Lighting Transformation',
    mainImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&h=1000&q=80',
    rating: 5,
  },
];

// Testimonial Card Component
const TestimonialCard = ({ profileImage, name, feedback, mainImage, rating }: (typeof testimonials)[0]) => (
  <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105">
    <img
      src={mainImage}
      alt={feedback}
      className="w-full h-auto object-cover"
      onError={(e) => {
        e.currentTarget.src = 'https://placehold.co/800x600/FAFAF8/D96A0B?text=ElectroMain';
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/30 to-transparent" />
    <div className="absolute top-0 left-0 p-6 md:p-8 text-white">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={profileImage}
          className="w-10 h-10 rounded-full border-2 border-brand-sun-yellow/80"
          alt={name}
          onError={(e) => {
            e.currentTarget.src = 'https://placehold.co/100x100/F6A21A/FFFFFF?text=' + name.charAt(0);
          }}
        />
        <span className="font-semibold text-base drop-shadow-md">{name}</span>
      </div>
      <p className="text-sm font-medium leading-tight drop-shadow-md mb-2">{feedback}</p>
      {/* Star rating */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-brand-sun-yellow text-sm">★</span>
        ))}
      </div>
    </div>
  </div>
);

// Main Component
export function TestimonialMasonry() {
  const [columns, setColumns] = React.useState(4);

  // Function to determine columns based on screen width
  const getColumns = (width: number) => {
    if (width < 640) return 1;    // sm
    if (width < 1024) return 2;   // lg
    if (width < 1280) return 3;   // xl
    return 4;                     // 2xl and up
  };

  React.useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize(); // Set initial columns on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="client-testimonials" className="relative py-24 md:py-32 bg-paper overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-gray/30 via-paper to-warm-gray/30" />
      <div className="absolute inset-0 luxury-pattern opacity-30" />

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
              Client Testimonials
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent" />
          </div>

          <h2 className="font-display font-light text-ink-900 mb-6 tracking-tight leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}>
            <span className="font-extralight">What People Are</span>
            <span className="gradient-text font-semibold"> Saying</span>
          </h2>

          <p className="text-ink-700 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', letterSpacing: '-0.01em' }}>
            Trusted by homeowners and businesses across London and the South East
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <MasonryGrid columns={columns} gap={4}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}

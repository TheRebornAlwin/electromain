"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Wrench, Car, Shield, Camera, KeyRound } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    icon: <Zap className="h-5 w-5" />,
    title: "Electrical Installation",
    description: "Design, installation, maintenance, repairs and testing services for domestic, commercial and public sector properties.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    id: 2,
    icon: <Wrench className="h-5 w-5" />,
    title: "Plumbing & Heating",
    description: "Comprehensive plumbing solutions including heating systems, boiler installations, and emergency repairs.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    id: 3,
    icon: <Car className="h-5 w-5" />,
    title: "EV Charger Installation",
    description: "Professional electric vehicle charging point installation for residential and commercial properties.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
  },
  {
    id: 4,
    icon: <Shield className="h-5 w-5" />,
    title: "Fire & Security Systems",
    description: "Advanced fire alarm and security system installations to protect your property and ensure compliance.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
  },
  {
    id: 5,
    icon: <Camera className="h-5 w-5" />,
    title: "CCTV Solutions",
    description: "State-of-the-art CCTV surveillance systems with remote monitoring capabilities for complete peace of mind.",
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",
  },
  {
    id: 6,
    icon: <KeyRound className="h-5 w-5" />,
    title: "Access Control Systems",
    description: "Intelligent access control solutions including key card systems, biometric entry, and smart building integration.",
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]",
  },
];

export default function ServicesCards() {
  return (
    <section className="relative py-40 md:py-48 bg-gradient-to-b from-warm-gray via-paper to-warm-gray overflow-hidden">
      {/* Light luxury background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-warm-gray/60 via-paper to-paper" />

      {/* Subtle ambient orbs for depth */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-sun-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />

      {/* Light luxury image placeholders */}
      <div className="absolute left-16 top-1/3 hidden 2xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateZ: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-72 h-96 rounded-2xl glass-light shadow-ambient relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sun-yellow/[0.03] via-transparent to-amber/[0.02]" />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      <div className="absolute right-16 bottom-1/4 hidden 2xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateZ: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
          className="w-80 h-64 rounded-2xl glass-light shadow-ambient relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber/[0.03] via-transparent to-burnt-orange/[0.02]" />
          <motion.div
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burnt-orange/40 to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
              <span className="text-soft-black font-extralight">Our</span>
              <span className="bg-gradient-to-r from-amber via-burnt-orange to-deep-orange bg-clip-text text-transparent font-normal"> Services</span>
            </h2>
            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent via-amber to-transparent mx-auto mb-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            viewport={{ once: true }}
            className="text-charcoal text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto tracking-wide"
          >
            We specialise in providing electrical, plumbing and facility maintenance services to domestic, commercial and public sector properties throughout London and the South East.
          </motion.p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:grid-rows-2">
          {services.map((service, index) => (
            <GridItem
              key={service.id}
              area={service.area}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  index: number;
}

const GridItem = ({ area, icon, title, description, index }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={cn("min-h-[15rem] list-none", area)}
    >
      <div className="relative h-full rounded-[1.5rem] border border-divider p-2.5 md:rounded-[1.75rem] md:p-3.5 group hover:border-amber/30 transition-all duration-700">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={2.5}
          movementDuration={2.5}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl glass-light shadow-ambient group-hover:shadow-luxury transition-all duration-700 md:p-8 p-8">

          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon badge with subtle accent */}
            <motion.div
              className="w-fit rounded-xl border border-amber/20 bg-gradient-to-br from-sun-yellow/5 to-amber/5 p-3 shadow-ambient"
              whileHover={{ scale: 1.05 }}
              transition={{ scale: { duration: 0.3 } }}
            >
              <div className="text-amber">
                {icon}
              </div>
            </motion.div>

            <div className="space-y-4">
              <h3 className="text-2xl leading-tight font-normal tracking-tight text-soft-black">
                {title}
              </h3>
              <p className="text-sm leading-relaxed md:text-base md:leading-relaxed text-charcoal font-light">
                {description}
              </p>
            </div>
          </div>

          {/* Subtle hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-sun-yellow/[0.02] to-amber/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
        </div>
      </div>
    </motion.li>
  );
};

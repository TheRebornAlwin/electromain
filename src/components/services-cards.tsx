"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, Building2, Lightbulb, Leaf } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Residential Wiring",
    desc: "Complete home electrical solutions from rewiring to smart integration.",
  },
  {
    icon: Building2,
    title: "Commercial Installation",
    desc: "Professional electrical systems for offices, retail, and hospitality.",
  },
  {
    icon: Lightbulb,
    title: "Smart Automation",
    desc: "Cutting-edge home automation and intelligent lighting control.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    desc: "Renewable installations, EV chargers, and solar integrations.",
  },
];

export default function ServicesCards() {
  return (
    <section className="relative py-32 md:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg/20 via-white to-light-bg/20" />

      {/* Subtle image placeholders */}
      <div className="absolute left-12 top-1/4 hidden 2xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-48 h-64 rounded-lg border border-accent/5 bg-gradient-to-br from-white via-light-bg/30 to-white backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.01] to-transparent" />
        </motion.div>
      </div>

      <div className="absolute right-12 bottom-1/4 hidden 2xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-52 h-68 rounded-lg border border-primary/5 bg-gradient-to-br from-white via-light-bg/30 to-white backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.01] to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            <span className="text-secondary font-extralight">Our</span>
            <span className="electrical-gradient bg-clip-text text-transparent font-normal"> Services</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-6" />
          <p className="text-muted text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Comprehensive electrical solutions delivered with precision and care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-12 rounded-lg bg-white border border-border/30 hover:border-accent/20 shadow-sm hover:shadow-xl transition-all duration-700 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-light-bg to-white border border-border/30 mb-8 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-xl font-normal text-secondary mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-sm text-muted/70 font-light leading-relaxed tracking-wide">
                  {service.desc}
                </p>

                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

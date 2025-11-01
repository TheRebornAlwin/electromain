"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Home, Building2, BatteryCharging } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Residential Wiring",
    desc: "Modern, safe installations that power homes with precision and style.",
    color: "from-accent to-primary",
  },
  {
    icon: Home,
    title: "Smart Home Automation",
    desc: "Integrate lighting, energy, and comfort control through seamless automation.",
    color: "from-primary to-amber-mid",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Scalable electrical systems designed for offices, retail, and construction environments.",
    color: "from-amber-mid to-accent",
  },
  {
    icon: BatteryCharging,
    title: "Sustainable Energy Solutions",
    desc: "Renewable installations, EV chargers, and solar integrations that last decades.",
    color: "from-accent via-primary to-amber-mid",
  },
];

export default function ServicesCards() {
  return (
    <section id="scroll-services" className="relative py-32 bg-black circuit-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-display tracking-tight">
            <span className="electrical-gradient bg-clip-text text-transparent">POWER</span>
            <span className="text-foreground"> YOUR WORLD</span>
          </h2>
          <p className="text-muted-foreground text-lg">Electrical excellence across every voltage level</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl from-accent to-primary" />

              <div
                className={cn(
                  "relative p-8 rounded-2xl bg-secondary/50 border-2 border-accent/20",
                  "hover:border-accent/60 transition-all duration-300",
                  "backdrop-blur-sm overflow-hidden"
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(90deg, #F28C00, #E24E1C, #C31919)` }} />

                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-2 h-2 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>

                <motion.div
                  className="flex justify-center mb-6 relative"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <s.icon className="h-14 w-14 text-accent relative z-10" strokeWidth={2} />
                    <motion.div
                      className={cn("absolute inset-0 rounded-full blur-xl bg-gradient-to-br", s.color)}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-foreground text-center font-display tracking-wide uppercase">
                  {s.title}
                </h3>

                <div className="w-16 h-0.5 bg-accent mx-auto mb-4" />

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {s.desc}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-brand-orange/20"
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo with breathing glow */}
        <motion.a
          href="#"
          className="flex items-center gap-2.5 group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 8px rgba(242, 140, 0, 0.4))",
                "drop-shadow(0 0 12px rgba(242, 140, 0, 0.6))",
                "drop-shadow(0 0 8px rgba(242, 140, 0, 0.4))",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap className="w-5 h-5 text-brand-orange" strokeWidth={2} fill="currentColor" />
          </motion.div>
          <span className="font-light text-lg tracking-tight">
            <span className="brand-gradient bg-clip-text text-transparent font-normal">Electro</span>
            <span className="text-off-white font-medium">Main</span>
          </span>
        </motion.a>

        {/* Navigation links with pulse underlines */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-light tracking-[0.15em] uppercase">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Timeline", href: "#timeline" },
            { label: "Testimonials", href: "#testimonials" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-muted hover:text-brand-orange transition-colors duration-500 group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <span>{item.label}</span>
              {/* Pulse underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-gradient-to-r from-brand-orange via-brand-gradient to-brand-orange"
                initial={{ width: 0, opacity: 0 }}
                whileHover={{
                  width: "100%",
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  width: { duration: 0.5 },
                  opacity: { duration: 1.5, repeat: Infinity }
                }}
              />
            </motion.a>
          ))}

          {/* Contact button with breathing glow */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(242, 140, 0, 0.3)",
                "0 0 30px rgba(242, 140, 0, 0.5)",
                "0 0 20px rgba(242, 140, 0, 0.3)",
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity },
              scale: { duration: 0.2 }
            }}
            className="brand-gradient px-6 py-2.5 rounded-full text-background text-[10px] tracking-[0.2em] font-semibold relative overflow-hidden"
          >
            <span className="relative z-10">Contact</span>
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
            />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

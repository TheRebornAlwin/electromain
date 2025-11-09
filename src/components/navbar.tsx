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
      className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-divider"
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo with subtle hover lift */}
        <motion.a
          href="#"
          className="flex items-center gap-2.5 group"
          whileHover={{ scale: 1.02, y: -1 }}
          transition={{ duration: 0.16 }}
        >
          <Zap className="w-5 h-5 text-amber group-hover:text-burnt-orange transition-colors duration-200" strokeWidth={2} fill="currentColor" />
          <span className="font-light text-lg tracking-tight">
            <span className="brand-gradient bg-clip-text text-transparent font-semibold">Electro</span>
            <span className="text-soft-black font-semibold">Main</span>
          </span>
        </motion.a>

        {/* Navigation links with subtle underlines */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-medium tracking-[0.15em] uppercase">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Timeline", href: "#timeline" },
            { label: "Testimonials", href: "#testimonials" },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-charcoal hover:text-amber transition-colors duration-300 group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <span>{item.label}</span>
              {/* Subtle underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}

          {/* Contact button - light pill */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="brand-gradient px-6 py-2.5 rounded-full text-white text-[10px] tracking-[0.2em] font-semibold shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

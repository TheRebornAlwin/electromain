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
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/30"
    >
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <motion.a
          href="#"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Zap className="w-5 h-5 text-accent" strokeWidth={2} fill="currentColor" />
          <span className="font-light text-lg tracking-tight">
            <span className="electrical-gradient bg-clip-text text-transparent font-normal">Electro</span>
            <span className="text-secondary">Main</span>
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-12 text-[11px] font-light tracking-[0.15em] uppercase">
          {[
            { label: "Projects", href: "#projects" },
            { label: "Services", href: "#services" },
            { label: "Timeline", href: "#timeline" },
            { label: "Testimonials", href: "#testimonials" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-muted/70 hover:text-accent transition-colors duration-500 group"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="electrical-gradient px-6 py-2.5 rounded-full text-white text-[10px] tracking-[0.2em] font-medium shadow-md hover:shadow-xl transition-all duration-500"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

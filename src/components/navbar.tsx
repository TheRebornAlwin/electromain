"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        <div className="absolute inset-0 circuit-pattern opacity-5 pointer-events-none" />

        <motion.div
          className="flex items-center gap-3 relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="relative">
            <Zap className="w-8 h-8 text-accent" strokeWidth={2.5} fill="currentColor" />
            <motion.div
              className="absolute inset-0 bg-accent rounded-full blur-lg opacity-40"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <h1 className="font-display text-2xl font-bold tracking-wider">
            <span className="electrical-gradient bg-clip-text text-transparent">ELECTRO</span>
            <span className="text-secondary">MAIN</span>
          </h1>
        </motion.div>

        <div className="flex items-center gap-8 text-sm font-medium tracking-wide relative z-10">
          <a
            href="#estimate"
            className="relative text-muted hover:text-accent transition-colors duration-300 uppercase tracking-wider group"
          >
            <span>Estimate</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </a>
          <div className="w-px h-4 bg-border" />
          <a
            href="#services"
            className="relative text-muted hover:text-accent transition-colors duration-300 uppercase tracking-wider group"
          >
            <span>Services</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </a>
          <div className="w-px h-4 bg-border" />
          <a
            href="#timeline"
            className="relative text-muted hover:text-accent transition-colors duration-300 uppercase tracking-wider group"
          >
            <span>Timeline</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </a>
          <div className="w-px h-4 bg-border" />
          <a
            href="#testimonials"
            className="relative text-muted hover:text-accent transition-colors duration-300 uppercase tracking-wider group"
          >
            <span>Testimonials</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </a>
          <div className="w-px h-4 bg-border" />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="electrical-gradient px-6 py-2 rounded-full font-bold text-white shadow-md hover:shadow-xl transition-all duration-300 uppercase tracking-wider relative group"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

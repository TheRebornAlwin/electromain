"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./aurora-background";

export function ElectricalHero({
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  title: string;
  description: string;
  primaryAction: { label: string; onClick: () => void };
  secondaryAction: { label: string; onClick: () => void };
}) {
  return (
    <AuroraBackground>
      {/* Left floating image stack */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
          transition={{
            opacity: { delay: 0.5, duration: 0.8 },
            x: { delay: 0.5, duration: 0.8 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-56 h-72 rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-white via-light-bg to-white backdrop-blur-sm shadow-luxury overflow-hidden relative group hover:border-accent/60 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
          <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-bold text-sm uppercase tracking-wider">
            Premium Work
          </div>
          <div className="absolute top-0 left-0 w-full h-1 electrical-gradient" />
          <div className="absolute bottom-0 right-0 w-1 h-full electrical-gradient opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
          transition={{
            opacity: { delay: 0.7, duration: 0.8 },
            x: { delay: 0.7, duration: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-56 h-56 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-white via-light-bg to-white backdrop-blur-sm shadow-luxury overflow-hidden relative group hover:border-primary/60 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-bold text-sm uppercase tracking-wider">
            Certified
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
          <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-50" />
        </motion.div>
      </div>

      {/* Right floating image stack */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
          transition={{
            opacity: { delay: 0.6, duration: 0.8 },
            x: { delay: 0.6, duration: 0.8 },
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-56 h-64 rounded-2xl border-2 border-amber-mid/30 bg-gradient-to-br from-white via-light-bg to-white backdrop-blur-sm shadow-luxury overflow-hidden relative group hover:border-amber-mid/60 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-mid/5 to-primary/5" />
          <div className="absolute inset-0 flex items-center justify-center text-amber-mid/20 font-bold text-sm uppercase tracking-wider">
            Excellence
          </div>
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-amber-mid to-primary" />
          <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-amber-mid to-primary opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 0.8 },
            x: { delay: 0.8, duration: 0.8 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-56 h-80 rounded-2xl border-2 border-accent/30 bg-gradient-to-br from-white via-light-bg to-white backdrop-blur-sm shadow-luxury overflow-hidden relative group hover:border-accent/60 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-amber-mid/5" />
          <div className="absolute inset-0 flex items-center justify-center text-accent/20 font-bold text-sm uppercase tracking-wider">
            Expertise
          </div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-accent to-amber-mid" />
          <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-accent to-amber-mid opacity-50" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold dark:text-white text-center font-display tracking-tight"
        >
          <span className="electrical-gradient bg-clip-text text-transparent electrical-glow">
            {title}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-light text-lg md:text-2xl text-muted py-4 text-center max-w-3xl"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.button
            onClick={primaryAction.onClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="electrical-gradient text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
          >
            <span className="relative z-10">{primaryAction.label}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
          <motion.button
            onClick={secondaryAction.onClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold px-10 py-6 text-lg rounded-full transition-all duration-300 bg-white shadow-md hover:shadow-xl relative group"
          >
            <span className="relative z-10">{secondaryAction.label}</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}

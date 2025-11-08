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

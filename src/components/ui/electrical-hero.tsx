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
      {/* Subtle image placeholders - positioned to not overlap text */}
      <div className="absolute left-12 top-32 hidden 2xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{
            opacity: { delay: 0.8, duration: 1.2 },
            scale: { delay: 0.8, duration: 1.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-48 h-64 rounded-lg border border-accent/10 bg-gradient-to-br from-white/80 via-light-bg/60 to-white/80 backdrop-blur-md shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </motion.div>
      </div>

      <div className="absolute right-12 bottom-32 hidden 2xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, 15, 0] }}
          transition={{
            opacity: { delay: 1, duration: 1.2 },
            scale: { delay: 1, duration: 1.2 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-56 h-72 rounded-lg border border-primary/10 bg-gradient-to-br from-white/80 via-light-bg/60 to-white/80 backdrop-blur-md shadow-2xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-4 py-32"
      >
        {/* Luxury spacing and typography */}
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl xl:text-8xl font-light text-center tracking-tight leading-[1.1]"
          >
            <span className="block text-secondary font-extralight mb-4 tracking-wide">
              {title.split(' ').slice(0, -1).join(' ')}
            </span>
            <span className="electrical-gradient bg-clip-text text-transparent font-semibold tracking-tighter">
              {title.split(' ').slice(-1)[0]}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="flex justify-center"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-xl text-muted text-center max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <motion.button
              onClick={primaryAction.onClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="electrical-gradient text-white font-medium px-12 py-5 text-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 uppercase tracking-[0.2em] relative group overflow-hidden"
            >
              <span className="relative z-10">{primaryAction.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]" />
            </motion.button>
            <motion.button
              onClick={secondaryAction.onClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="border border-accent/30 text-accent hover:border-accent font-medium px-12 py-5 text-sm rounded-full transition-all duration-500 bg-white/50 backdrop-blur-sm hover:bg-white uppercase tracking-[0.2em] shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">{secondaryAction.label}</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 1 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-5 h-9 border border-accent/20 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              className="w-1 h-1 bg-accent/40 rounded-full"
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 2.5,
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

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
      {/* Sophisticated layered imagery - Apple style */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left floating elements - depth layering */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="absolute left-16 top-1/4 hidden xl:block"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotateZ: [-2, 2, -2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-80 h-[28rem] rounded-3xl border border-accent/10 bg-gradient-to-br from-white/95 via-light-bg/80 to-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.02]" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            {/* Accent lines - Rolex inspired */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
              animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Inner glow */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Right floating elements - asymmetrical balance */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="absolute right-16 bottom-1/4 hidden xl:block"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotateZ: [2, -2, 2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-72 h-96 rounded-3xl border border-primary/10 bg-gradient-to-br from-white/95 via-light-bg/80 to-white/95 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.12)] relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.03]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-transparent via-accent/20 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 5.5, repeat: Infinity }}
            />

            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Additional depth - smaller floating element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          className="absolute left-1/4 bottom-20 hidden 2xl:block"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-48 h-64 rounded-2xl border border-accent/8 bg-gradient-to-br from-white/90 to-light-bg/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(245,158,11,0.1)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_hsl(var(--accent)/0.04),transparent_70%)]" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-4 pt-40 pb-32 min-h-screen"
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Typography - Apple style hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-extralight text-center tracking-tight leading-[1.05]">
              <span className="block text-secondary mb-6 tracking-wide">
                {title.split(' ').slice(0, -1).join(' ')}
              </span>
              <span className="electrical-gradient bg-clip-text text-transparent font-medium tracking-tight">
                {title.split(' ').slice(-1)[0]}
              </span>
            </h1>

            {/* Refined divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-2xl text-muted text-center max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* CTA buttons - refined luxury */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={primaryAction.onClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="electrical-gradient text-white font-medium px-14 py-6 text-sm rounded-full shadow-[0_10px_40px_-10px_rgba(245,158,11,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.5)] transition-all duration-700 uppercase tracking-[0.25em] relative group overflow-hidden"
            >
              <span className="relative z-10">{primaryAction.label}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "linear",
                }}
              />
            </motion.button>

            <motion.button
              onClick={secondaryAction.onClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="border border-accent/20 text-accent hover:border-accent/40 hover:bg-accent/5 font-medium px-14 py-6 text-sm rounded-full transition-all duration-700 bg-white/60 backdrop-blur-sm uppercase tracking-[0.25em] shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">{secondaryAction.label}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator - minimal and refined */}
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-6 h-11 border border-accent/15 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-accent/30 rounded-full"
              animate={{
                y: [0, 18, 0],
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

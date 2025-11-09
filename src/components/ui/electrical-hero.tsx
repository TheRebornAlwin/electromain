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
      {/* Industrial-luxury layered imagery - copper, steel, metallic */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left floating element - dark glass with orange glow */}
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
            className="w-80 h-[28rem] rounded-3xl glass-dark shadow-glow-orange relative overflow-hidden metallic"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Industrial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.08] via-transparent to-brand-gradient/[0.05]" />

            {/* Industrial grid pattern */}
            <div className="absolute inset-0 industrial-pattern opacity-30" />

            {/* Breathing glow lines */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent"
              animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-brand-gradient/50 to-transparent"
              animate={{ opacity: [0.4, 0.8, 0.4], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Inner border glow */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-brand-orange/10 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Right floating element - dark glass with red glow */}
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
            className="w-72 h-96 rounded-3xl glass-dark shadow-glow-gradient relative overflow-hidden metallic"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Industrial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gradient/[0.06] via-transparent to-brand-red/[0.04]" />

            {/* Industrial grid pattern */}
            <div className="absolute inset-0 industrial-pattern opacity-25" />

            {/* Breathing glow lines */}
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gradient/60 to-transparent"
              animate={{ opacity: [0.4, 0.9, 0.4], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-transparent via-brand-red/50 to-transparent"
              animate={{ opacity: [0.4, 0.8, 0.4], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 5.5, repeat: Infinity }}
            />

            {/* Inner border glow */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-brand-red/10 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Additional depth - smaller floating element with pulse */}
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
            className="w-48 h-64 rounded-2xl glass shadow-glow-orange relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.1] via-transparent to-brand-gradient/[0.05]" />
            <div className="absolute inset-0 industrial-pattern opacity-20" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-brand-orange/[0.08] to-transparent" />
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
          {/* Cinematic typography with industrial glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-extralight text-center tracking-tight leading-[1.05]">
              <motion.span
                className="block text-off-white mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2 }}
              >
                {title.split(' ').slice(0, -1).join(' ')}
              </motion.span>
              <motion.span
                className="brand-gradient bg-clip-text text-transparent font-medium tracking-tight glow-text-orange"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1.2 }}
              >
                {title.split(' ').slice(-1)[0]}
              </motion.span>
            </h1>

            {/* Glowing divider with breathing effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
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

          {/* CTA buttons - industrial-luxury with breathing effect */}
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
              animate={{
                boxShadow: [
                  "0 10px 40px -10px rgba(242, 140, 0, 0.4)",
                  "0 20px 50px -10px rgba(242, 140, 0, 0.6)",
                  "0 10px 40px -10px rgba(242, 140, 0, 0.4)",
                ]
              }}
              transition={{
                boxShadow: { duration: 4, repeat: Infinity },
                scale: { duration: 0.2 }
              }}
              className="brand-gradient text-background font-medium px-14 py-6 text-sm rounded-full uppercase tracking-[0.25em] relative group overflow-hidden"
            >
              <span className="relative z-10 font-semibold">{primaryAction.label}</span>
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
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(242, 140, 0, 0.6)",
                backgroundColor: "rgba(242, 140, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="border border-brand-orange/30 text-brand-orange glass font-medium px-14 py-6 text-sm rounded-full uppercase tracking-[0.25em]"
            >
              <span className="relative z-10">{secondaryAction.label}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator with orange glow */}
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-6 h-11 border border-brand-orange/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-brand-orange rounded-full"
              animate={{
                y: [0, 18, 0],
                opacity: [0.5, 1, 0.5],
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

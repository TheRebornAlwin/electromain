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
      {/* Light luxury layered imagery - precision, craftsmanship */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Left floating element - light glass with subtle amber glow */}
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
            className="w-80 h-[28rem] rounded-3xl glass-light shadow-ambient relative overflow-hidden shine"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Light luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber/[0.04] via-transparent to-sun-yellow/[0.02]" />

            {/* Subtle luxury pattern */}
            <div className="absolute inset-0 luxury-pattern opacity-40" />

            {/* Subtle breathing accent lines */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-burnt-orange/20 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Inner subtle glow */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-amber/5 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Right floating element - light glass with burnt orange accent */}
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
            className="w-72 h-96 rounded-3xl glass-light shadow-ambient relative overflow-hidden shine"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Light luxury gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange/[0.03] via-transparent to-deep-orange/[0.02]" />

            {/* Subtle luxury pattern */}
            <div className="absolute inset-0 luxury-pattern opacity-35" />

            {/* Subtle breathing accent lines */}
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-burnt-orange/30 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3], scaleX: [0.8, 1, 0.8] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-transparent via-amber/25 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3], scaleY: [0.8, 1, 0.8] }}
              transition={{ duration: 5.5, repeat: Infinity }}
            />

            {/* Inner subtle glow */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-burnt-orange/5 to-transparent" />
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
            className="w-48 h-64 rounded-2xl glass shadow-ambient relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sun-yellow/[0.06] via-transparent to-amber/[0.03]" />
            <div className="absolute inset-0 luxury-pattern opacity-30" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-amber/[0.04] to-transparent" />
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
        className="relative flex flex-col gap-8 items-center justify-center px-4 pt-40 pb-32"
        style={{ minHeight: 'max(100dvh, 43.75rem)' }}
      >
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Light luxury typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-8"
          >
            <h1 className="font-extralight text-center leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}>
              <motion.span
                className="block text-soft-black mb-6 font-light"
                style={{ letterSpacing: '0.02em' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2 }}
              >
                {title.split(' ').slice(0, -1).join(' ')}
              </motion.span>
              <motion.span
                className="brand-gradient bg-clip-text text-transparent font-bold"
                style={{ letterSpacing: '-0.03em' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1.2 }}
              >
                {title.split(' ').slice(-1)[0]}
              </motion.span>
            </h1>

            {/* Subtle divider with breathing effect */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <motion.div
                className="w-24 h-px bg-gradient-to-r from-transparent via-amber to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-charcoal text-center max-w-3xl mx-auto font-normal leading-relaxed"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', letterSpacing: '-0.01em' }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* CTA buttons - light luxury pill style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={primaryAction.onClick}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.16 }}
              className="brand-gradient text-white font-semibold px-14 py-6 text-sm rounded-full uppercase shadow-ambient-hover relative group overflow-hidden"
              style={{ letterSpacing: '2px' }}
            >
              <span className="relative z-10">{primaryAction.label}</span>
              {/* Luxury animated underline - B&O pattern */}
              <motion.div
                className="absolute bottom-5 left-0 right-0 h-px bg-white/40 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.button>

            <motion.button
              onClick={secondaryAction.onClick}
              whileHover={{
                scale: 1.02,
                y: -2,
                borderColor: "rgba(246, 162, 26, 0.4)",
                backgroundColor: "rgba(246, 162, 26, 0.05)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.16 }}
              className="border-2 border-divider text-charcoal bg-white/80 backdrop-blur-sm font-semibold px-14 py-6 text-sm rounded-full uppercase shadow-ambient"
              style={{ letterSpacing: '2px' }}
            >
              <span className="relative z-10">{secondaryAction.label}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-6 h-11 border border-amber/20 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-amber rounded-full"
              animate={{
                y: [0, 18, 0],
                opacity: [0.4, 0.8, 0.4],
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

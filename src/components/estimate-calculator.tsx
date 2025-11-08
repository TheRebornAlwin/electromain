"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EstimateCalculator() {
  const [rooms, setRooms] = useState<number>(3);
  const [lighting, setLighting] = useState<number>(5);
  const [outlets, setOutlets] = useState<number>(10);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);

  const calculateEstimate = () => {
    setCalculating(true);
    setTimeout(() => {
      const calloutFee = 150;
      const roomCost = rooms * 500;
      const fixtureCost = lighting * 75;
      const outletCost = outlets * 100;
      const randomVariance = 0.9 + Math.random() * 0.2;

      const total = (calloutFee + roomCost + fixtureCost + outletCost) * randomVariance;
      setEstimate(Number(total.toFixed(0)));
      setCalculating(false);
    }, 1500);
  };

  return (
    <section className="relative py-32 md:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg/20 via-white to-light-bg/20" />

      {/* Subtle image placeholder */}
      <div className="absolute right-12 top-1/3 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-64 h-80 rounded-lg border border-accent/5 bg-gradient-to-br from-white via-light-bg/30 to-white backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.01] to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            <span className="text-secondary font-extralight">Quick</span>
            <span className="electrical-gradient bg-clip-text text-transparent font-normal"> Estimate</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-6" />
          <p className="text-muted text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Configure your requirements for an instant estimate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { label: "Rooms", value: rooms, setValue: setRooms, min: 1 },
            { label: "Fixtures", value: lighting, setValue: setLighting, min: 0 },
            { label: "Outlets", value: outlets, setValue: setOutlets, min: 0 },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted/60 mb-6 font-medium">
                {item.label}
              </label>
              <div className="relative group">
                <input
                  type="number"
                  value={item.value}
                  min={item.min}
                  onChange={(e) => item.setValue(Number(e.target.value))}
                  className="w-full rounded-lg bg-white border border-border/50 focus:border-accent/30 px-6 py-8 text-center text-5xl md:text-6xl font-extralight text-secondary focus:ring-1 focus:ring-accent/10 outline-none transition-all duration-500 shadow-sm hover:shadow-md"
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={calculateEstimate}
          disabled={calculating}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 px-16 py-5 text-xs font-medium rounded-full electrical-gradient text-white shadow-xl hover:shadow-2xl transition-all duration-700 uppercase tracking-[0.3em] disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <span className="relative z-10">
            {calculating ? "Calculating" : "Calculate"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.button>

        {estimate && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24"
          >
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 electrical-gradient rounded-lg blur-3xl opacity-5" />
              <div className="relative bg-white backdrop-blur-sm p-16 rounded-lg border border-accent/10 shadow-2xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted/60 mb-8 font-medium">
                  Estimated Cost
                </p>
                <div className="w-8 h-px bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30 mx-auto mb-12" />

                <h3 className="text-6xl md:text-8xl font-extralight mb-12 tracking-tight">
                  <span className="electrical-gradient bg-clip-text text-transparent">£{estimate.toLocaleString()}</span>
                </h3>

                <p className="text-xs text-muted/70 font-light leading-relaxed max-w-md mx-auto tracking-wide">
                  This is an indicative estimate. Final pricing will be determined after a comprehensive site assessment.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

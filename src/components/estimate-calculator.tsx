"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Power, Gauge } from "lucide-react";

export default function EstimateCalculator() {
  const [rooms, setRooms] = useState<number>(3);
  const [lighting, setLighting] = useState<number>(5);
  const [outlets, setOutlets] = useState<number>(10);
  const [estimate, setEstimate] = useState<number | null>(null);
  const [calculating, setCalculating] = useState(false);

  const calculateEstimate = () => {
    setCalculating(true);
    setTimeout(() => {
      // Realistic UK electrical pricing:
      // Base callout: £150
      // Per room rewiring: £450-550
      // Light fixture installation: £60-90 per fixture
      // Socket installation: £90-120 per socket
      const calloutFee = 150;
      const roomCost = rooms * 500; // £500 per room avg
      const fixtureCost = lighting * 75; // £75 per fixture
      const outletCost = outlets * 100; // £100 per outlet
      const randomVariance = 0.9 + Math.random() * 0.2; // +/- 10% variance

      const total = (calloutFee + roomCost + fixtureCost + outletCost) * randomVariance;
      setEstimate(Number(total.toFixed(0))); // Round to nearest pound
      setCalculating(false);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-white border-t border-border overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg/50 via-white to-light-bg/50" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Gauge className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              <span className="electrical-gradient bg-clip-text text-transparent">Quick</span>
              <span className="text-secondary"> Estimate</span>
            </h2>
            <Gauge className="w-10 h-10 text-accent" />
          </div>
          <p className="text-muted max-w-2xl mx-auto mb-16 text-lg">
            Get an instant price estimate for your electrical project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <label className="block text-xs uppercase tracking-widest text-accent mb-3 font-bold">ROOMS</label>
            <div className="relative">
              <input
                type="number"
                value={rooms}
                min={1}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full rounded-xl bg-white border-2 border-border focus:border-accent px-6 py-5 text-center text-3xl font-bold text-accent focus:shadow-glow outline-none transition-all shadow-md"
              />
              <div className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <label className="block text-xs uppercase tracking-widest text-accent mb-3 font-bold">FIXTURES</label>
            <div className="relative">
              <input
                type="number"
                value={lighting}
                min={0}
                onChange={(e) => setLighting(Number(e.target.value))}
                className="w-full rounded-xl bg-white border-2 border-border focus:border-accent px-6 py-5 text-center text-3xl font-bold text-accent focus:shadow-glow outline-none transition-all shadow-md"
              />
              <div className="absolute top-3 right-3 w-2 h-2 bg-amber-mid rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <label className="block text-xs uppercase tracking-widest text-accent mb-3 font-bold">OUTLETS</label>
            <div className="relative">
              <input
                type="number"
                value={outlets}
                min={0}
                onChange={(e) => setOutlets(Number(e.target.value))}
                className="w-full rounded-xl bg-white border-2 border-border focus:border-accent px-6 py-5 text-center text-3xl font-bold text-accent focus:shadow-glow outline-none transition-all shadow-md"
              />
              <div className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </div>

        <motion.button
          onClick={calculateEstimate}
          disabled={calculating}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 px-12 py-6 text-lg font-bold rounded-full electrical-gradient text-white shadow-lg hover:shadow-2xl transition-all duration-300 uppercase tracking-wider relative group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <Power className="w-6 h-6" />
            {calculating ? "CALCULATING..." : "GET ESTIMATE"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        </motion.button>

        {estimate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mt-16"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 electrical-gradient rounded-2xl blur-2xl opacity-10 animate-pulse-glow" />
              <div className="relative bg-white backdrop-blur-sm p-12 rounded-2xl border-2 border-accent/30 shadow-luxury">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                <p className="text-sm uppercase tracking-widest text-muted mb-4 font-bold">ESTIMATED COST</p>
                <div className="w-24 h-1 electrical-gradient mx-auto mb-8" />

                <h3 className="text-6xl md:text-7xl font-bold font-display mb-6">
                  <span className="electrical-gradient bg-clip-text text-transparent">£{estimate}</span>
                </h3>

                <p className="text-sm text-muted mt-6 leading-relaxed max-w-lg mx-auto">
                  This is an approximate estimate based on your requirements. Final pricing may vary depending on property access, existing wiring condition, and specific installation requirements.
                </p>
                <p className="text-sm text-muted mt-3 font-semibold">
                  Contact us for a detailed quote and free consultation.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 electrical-gradient rounded-b-2xl" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-accent/20 rotate-45" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent/20 rotate-45" />
    </section>
  );
}

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
      const base = 50;
      const randomFactor = 0.8 + Math.random() * 0.4;
      const total = (rooms * 200 + lighting * 75 + outlets * 45) * randomFactor;
      setEstimate(Number(total.toFixed(2)));
      setCalculating(false);
    }, 1500);
  };

  return (
    <section className="relative py-32 bg-black border-t-2 border-accent/30 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-black to-secondary/30" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Gauge className="w-12 h-12 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
              <span className="text-foreground">POWER </span>
              <span className="electrical-gradient bg-clip-text text-transparent">CALCULATOR</span>
            </h2>
            <Gauge className="w-12 h-12 text-accent" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
            Configure your electrical requirements — instant voltage-accurate pricing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <label className="block text-xs uppercase tracking-widest text-accent mb-3 font-bold">ROOMS</label>
            <div className="relative">
              <input
                type="number"
                value={rooms}
                min={1}
                onChange={(e) => setRooms(Number(e.target.value))}
                className="w-full rounded-lg bg-secondary/60 border-2 border-accent/30 px-6 py-4 text-center text-2xl font-bold text-accent focus:border-accent focus:shadow-glow outline-none transition-all backdrop-blur-sm"
              />
              <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
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
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <label className="block text-xs uppercase tracking-widest text-accent mb-3 font-bold">FIXTURES</label>
            <div className="relative">
              <input
                type="number"
                value={lighting}
                min={0}
                onChange={(e) => setLighting(Number(e.target.value))}
                className="w-full rounded-lg bg-secondary/60 border-2 border-accent/30 px-6 py-4 text-center text-2xl font-bold text-accent focus:border-accent focus:shadow-glow outline-none transition-all backdrop-blur-sm"
              />
              <div className="absolute top-2 right-2 w-2 h-2 bg-amber-mid rounded-full animate-pulse" />
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
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <label className="block text-xs uppercase tracking-widest text-accent mb-3 font-bold">OUTLETS</label>
            <div className="relative">
              <input
                type="number"
                value={outlets}
                min={0}
                onChange={(e) => setOutlets(Number(e.target.value))}
                className="w-full rounded-lg bg-secondary/60 border-2 border-accent/30 px-6 py-4 text-center text-2xl font-bold text-accent focus:border-accent focus:shadow-glow outline-none transition-all backdrop-blur-sm"
              />
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={calculateEstimate}
            disabled={calculating}
            className="mt-6 px-12 py-6 text-xl font-bold rounded-lg electrical-gradient text-black hover:shadow-glow-strong transition-all duration-300 uppercase tracking-wider relative overflow-hidden group"
          >
            <Power className="inline-block w-6 h-6 mr-3" />
            {calculating ? "PROCESSING..." : "CALCULATE POWER"}
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              animate={calculating ? {
                x: ["-100%", "100%"],
              } : {}}
              transition={{
                duration: 1,
                repeat: calculating ? Infinity : 0,
                ease: "linear",
              }}
            />
          </Button>
        </motion.div>

        {estimate && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mt-16"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 electrical-gradient rounded-2xl blur-xl opacity-30 animate-pulse-glow" />
              <div className="relative bg-secondary/80 backdrop-blur-sm p-12 rounded-2xl border-2 border-accent/50">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4 font-bold">POWER REQUIREMENT ANALYSIS</p>
                <div className="w-24 h-1 electrical-gradient mx-auto mb-6" />

                <motion.h3
                  className="text-7xl font-bold font-display mb-4"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(242, 140, 0, 0.5)",
                      "0 0 40px rgba(242, 140, 0, 0.8)",
                      "0 0 20px rgba(242, 140, 0, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="electrical-gradient bg-clip-text text-transparent">£{estimate}</span>
                </motion.h3>

                <p className="text-xs text-muted-foreground mt-6 uppercase tracking-wide">
                  ⚡ Estimated cost based on standard installation parameters
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Contact us for precise voltage-level quotation
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

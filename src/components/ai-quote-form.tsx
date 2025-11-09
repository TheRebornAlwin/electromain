"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AIQuoteForm() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    await new Promise((res) => setTimeout(res, 1500));

    const text = input.toLowerCase();
    let basePrice = 3000;
    let propertyMultiplier = 1;

    if (text.includes('mansion') || text.includes('estate')) {
      basePrice = 20000;
      propertyMultiplier = 1.5;
    } else if (text.includes('commercial') || text.includes('office') || text.includes('shop') || text.includes('retail')) {
      basePrice = 12000;
      propertyMultiplier = 1.4;
    } else if (text.includes('flat') || text.includes('apartment') || text.includes('studio')) {
      basePrice = 2500;
      propertyMultiplier = 0.8;
    } else if (text.includes('bungalow')) {
      basePrice = 3500;
    } else if (text.includes('4 bed') || text.includes('4-bed') || text.includes('5 bed') || text.includes('5-bed')) {
      basePrice = 6500;
    } else if (text.includes('3 bed') || text.includes('3-bed')) {
      basePrice = 4500;
    }

    const floorKeywords = ['floor', 'story', 'storey', 'level'];
    let floors = 0;
    floorKeywords.forEach(keyword => {
      const match = text.match(new RegExp(`(\\d+)[-\\s]?${keyword}`, 'i'));
      if (match) {
        floors = Math.max(floors, parseInt(match[1]));
      }
    });

    if (floors >= 7) basePrice *= 4;
    else if (floors >= 5) basePrice *= 2.5;
    else if (floors >= 4) basePrice *= 1.8;
    else if (floors >= 3) basePrice *= 1.3;

    let itemsCost = 0;
    const outletMatch = text.match(/(\d+)\s*(outlet|socket|point)/i);
    if (outletMatch) itemsCost += parseInt(outletMatch[1]) * 110;

    const lightMatch = text.match(/(\d+)\s*(light|fixture|downlight|led)/i);
    if (lightMatch) itemsCost += parseInt(lightMatch[1]) * 80;

    const roomMatch = text.match(/(\d+)\s*(room|bedroom)/i);
    if (roomMatch) itemsCost += parseInt(roomMatch[1]) * 600;

    if (text.includes('full rewire') || text.includes('complete rewire') || text.includes('rewiring')) basePrice *= 2.2;
    if (text.includes('consumer unit') || text.includes('fuse box')) itemsCost += 1000;
    if (text.includes('ev charger') || text.includes('car charger')) itemsCost += 1200;
    if (text.includes('outdoor') || text.includes('garden')) itemsCost += 800;
    if (text.includes('security') || text.includes('cctv')) itemsCost += 600;
    if (text.includes('smart home') || text.includes('automation')) itemsCost += 1500;
    if (text.includes('underfloor heating')) itemsCost += 2000;

    if (text.includes('period') || text.includes('listed') || text.includes('victorian')) propertyMultiplier *= 1.35;
    if (text.includes('kensington') || text.includes('chelsea') || text.includes('mayfair')) propertyMultiplier *= 1.2;

    let totalPrice = (basePrice + itemsCost) * propertyMultiplier;
    const variance = 0.95 + Math.random() * 0.1;
    totalPrice *= variance;
    totalPrice = Math.max(totalPrice, 800);
    const finalPrice = Math.round(totalPrice / 50) * 50;

    const messages = [
      `Based on your project description, we estimate approximately £${finalPrice.toLocaleString()}. This includes materials, labour, and certification.`,
      `For the work described, our indicative quote is £${finalPrice.toLocaleString()}. A detailed breakdown will follow a site visit.`,
      `Initial estimate: £${finalPrice.toLocaleString()}. Final pricing confirmed after on-site assessment.`,
    ];
    setResponse(messages[Math.floor(Math.random() * messages.length)]);
    setLoading(false);
  };

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-warm-gray via-paper to-warm-gray overflow-hidden">

      {/* Light luxury image placeholder */}
      <div className="absolute left-12 bottom-20 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-56 h-72 rounded-lg glass-light shadow-ambient relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sun-yellow/[0.03] to-transparent" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            <span className="text-soft-black font-extralight">Detailed</span>
            <span className="bg-gradient-to-r from-amber via-burnt-orange to-deep-orange bg-clip-text text-transparent font-normal"> Quote</span>
          </h2>
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-amber to-transparent mx-auto mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <p className="text-charcoal text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Describe your electrical project for an instant tailored estimate
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative mb-10"
          >
            <textarea
              required
              placeholder="Example: Complete rewiring for a 3-bedroom house in Kensington. Requirements include 15 LED downlights, 20 double sockets, consumer unit upgrade, outdoor security lighting, and EV charger installation."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full min-h-[280px] rounded-lg glass-light border border-divider px-10 py-8 text-soft-black placeholder:text-charcoal/60 focus:border-amber/60 focus:ring-2 focus:ring-amber/20 outline-none transition-all duration-500 text-base leading-relaxed shadow-ambient hover:shadow-luxury resize-none"
            />

            {loading && (
              <motion.div
                className="absolute bottom-6 left-6 flex items-center gap-3 text-amber text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-amber/60 rounded"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
                <span className="uppercase tracking-[0.2em] font-light">Calculating</span>
              </motion.div>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading || input.length < 10}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-16 py-5 text-xs font-semibold rounded-full bg-gradient-to-r from-amber via-burnt-orange to-deep-orange text-white uppercase tracking-[0.3em] disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden group shadow-luxury"
          >
            <span className="relative z-10">{loading ? "Calculating" : "Get Quote"}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
            />
          </motion.button>
        </form>

        {response && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <div className="relative">
              {/* Subtle ambient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-sun-yellow via-amber to-burnt-orange rounded-lg blur-3xl opacity-10" />

              <div className="relative glass-light p-12 md:p-16 rounded-lg border border-divider shadow-luxury">
                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber mb-8 font-medium">
                    Your Quote
                  </p>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-amber/40 via-amber/70 to-amber/40 mb-10"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <p className="text-base md:text-lg text-soft-black font-light mb-12 leading-relaxed">
                    {response}
                  </p>

                  <div className="pt-8 border-t border-divider">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/70 mb-3 font-medium">
                      Please Note
                    </p>
                    <p className="text-xs text-charcoal font-light leading-relaxed">
                      This is an indicative estimate. A free site survey will be conducted to provide an accurate quote tailored to your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

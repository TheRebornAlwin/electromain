"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cpu, Send } from "lucide-react";

export default function AIQuoteForm() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    await new Promise((res) => setTimeout(res, 1500));

    const basePrice = 250 + Math.floor(Math.random() * 700);
    const variance = Math.random() * 0.2 - 0.1;
    const finalPrice = (basePrice * (1 + variance)).toFixed(2);

    const messages = [
      `Based on your request, a tailored estimate would be around £${finalPrice}.`,
      `Considering your description, we'd project a cost near £${finalPrice}.`,
      `Approximate quote: £${finalPrice}. We can refine this after a short consultation.`,
    ];
    const chosen = messages[Math.floor(Math.random() * messages.length)];

    setResponse(chosen);
    setLoading(false);
  };

  return (
    <section id="ai-quote" className="relative py-32 bg-black border-t-2 border-accent/30 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 circuit-pattern opacity-5" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 electrical-gradient rounded-full blur-[150px] opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cpu className="w-10 h-10 text-accent animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight">
              <span className="electrical-gradient bg-clip-text text-transparent">NEURAL</span>
              <span className="text-foreground"> ESTIMATOR</span>
            </h2>
            <Cpu className="w-10 h-10 text-accent animate-pulse" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AI-powered instant quotation system — describe your project and receive calculated estimates
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>

            <textarea
              required
              placeholder="SYSTEM INPUT: Describe your electrical requirements...

Example: Residential rewiring for 3-bedroom property including 15 LED fixtures, 20 power outlets, consumer unit upgrade, and external security lighting."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full min-h-[200px] rounded-lg bg-secondary/60 backdrop-blur-sm border-2 border-accent/30 px-8 py-6 text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:shadow-glow outline-none transition-all font-mono text-sm"
            />

            {loading && (
              <motion.div
                className="absolute bottom-4 left-4 flex items-center gap-2 text-accent text-xs font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-1 h-4 bg-accent"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <span>PROCESSING NEURAL NETWORK...</span>
              </motion.div>
            )}

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              disabled={loading || input.length < 10}
              className="mx-auto px-12 py-6 text-lg font-bold rounded-lg electrical-gradient text-black hover:shadow-glow-strong transition-all duration-300 uppercase tracking-wider relative overflow-hidden group"
            >
              <Send className="inline-block w-5 h-5 mr-3" />
              {loading ? "PROCESSING..." : "GENERATE ESTIMATE"}
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                animate={loading ? {
                  x: ["-100%", "100%"],
                } : {}}
                transition={{
                  duration: 1,
                  repeat: loading ? Infinity : 0,
                  ease: "linear",
                }}
              />
            </Button>
          </motion.div>
        </form>

        {response && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 electrical-gradient rounded-2xl blur-2xl opacity-20 animate-pulse-glow" />

              <div className="relative bg-secondary/80 backdrop-blur-sm p-10 rounded-2xl border-2 border-accent/50">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                <div className="text-xs uppercase tracking-widest text-accent mb-4 font-bold font-mono flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  NEURAL NETWORK OUTPUT
                </div>

                <div className="w-32 h-1 electrical-gradient mb-6" />

                <p className="text-xl text-foreground font-medium mb-6 leading-relaxed">
                  {response}
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-6" />

                <div className="flex items-start gap-3 text-xs text-muted-foreground">
                  <div className="mt-1">⚡</div>
                  <div>
                    <p className="uppercase tracking-wide font-bold mb-1">SYSTEM DISCLAIMER</p>
                    <p className="leading-relaxed">
                      AI-generated estimate for demonstration purposes. Contact our technical team for precision voltage-level quotations and detailed electrical system analysis.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 electrical-gradient rounded-b-2xl" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute top-1/2 left-10 w-40 h-40 border border-accent/10 rotate-45" />
      <div className="absolute top-1/4 right-10 w-40 h-40 border border-accent/10 -rotate-45" />
    </section>
  );
}

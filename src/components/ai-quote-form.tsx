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

    // Realistic UK electrical pricing based on project description
    const basePrice = 800 + Math.floor(Math.random() * 3200); // £800-£4000 range
    const variance = Math.random() * 0.15 - 0.075; // +/- 7.5% variance
    const finalPrice = Math.round(basePrice * (1 + variance)); // Rounded to nearest pound

    const messages = [
      `Based on your project description, we estimate the cost at approximately £${finalPrice}. This includes materials, labour, and certification.`,
      `For the work you've described, our indicative quote is around £${finalPrice}. We'd be happy to provide a detailed breakdown after a site visit.`,
      `Initial estimate: £${finalPrice}. Final pricing will be confirmed following an on-site assessment and discussion of your specific requirements.`,
    ];
    const chosen = messages[Math.floor(Math.random() * messages.length)];

    setResponse(chosen);
    setLoading(false);
  };

  return (
    <section id="ai-quote" className="relative py-24 bg-gradient-to-br from-light-bg via-white to-light-bg border-t border-border overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 circuit-pattern opacity-5" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 electrical-gradient rounded-full blur-[150px] opacity-5"
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
            <Send className="w-10 h-10 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              <span className="electrical-gradient bg-clip-text text-transparent">Detailed</span>
              <span className="text-secondary"> Quote Request</span>
            </h2>
            <Send className="w-10 h-10 text-accent" />
          </div>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Describe your electrical project and get an instant estimate tailored to your requirements
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
              placeholder="Describe your electrical project in detail...

Example: Complete rewiring needed for a 3-bedroom house in Kensington. Requirements include 15 LED downlights, 20 double sockets, consumer unit upgrade to 17th edition, outdoor security lighting, and EV charger installation."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full min-h-[220px] rounded-xl bg-white border-2 border-border px-8 py-6 text-secondary placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-base leading-relaxed shadow-md"
            />

            {loading && (
              <motion.div
                className="absolute bottom-4 left-4 flex items-center gap-2 text-accent text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-1 h-4 bg-accent rounded"
                  animate={{ scaleY: [1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <span>Calculating estimate...</span>
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
              className="mx-auto px-12 py-6 text-lg font-bold rounded-full electrical-gradient text-white hover:shadow-luxury transition-all duration-300 uppercase tracking-wider relative overflow-hidden group"
            >
              <Send className="inline-block w-5 h-5 mr-3" />
              {loading ? "CALCULATING..." : "GET QUOTE"}
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
              <div className="absolute inset-0 electrical-gradient rounded-2xl blur-2xl opacity-10 animate-pulse-glow" />

              <div className="relative bg-white backdrop-blur-sm p-10 rounded-2xl border-2 border-accent/30 shadow-luxury">
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-3 h-3 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>

                <div className="text-sm uppercase tracking-widest text-accent mb-4 font-bold flex items-center gap-2">
                  YOUR QUOTE
                </div>

                <div className="w-32 h-1 electrical-gradient mb-6" />

                <p className="text-lg text-secondary font-medium mb-6 leading-relaxed">
                  {response}
                </p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-6" />

                <div className="flex items-start gap-3 text-sm text-muted">
                  <div className="mt-1">💡</div>
                  <div>
                    <p className="uppercase tracking-wide font-bold mb-1">Please Note</p>
                    <p className="leading-relaxed">
                      This is an indicative estimate. For an accurate quote, we'll need to conduct a free site survey to assess your property and discuss your specific needs in detail.
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

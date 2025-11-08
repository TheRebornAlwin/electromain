"use client";
import { motion } from "framer-motion";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="relative py-32 md:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg/20 via-white to-light-bg/20" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            <span className="text-secondary font-extralight">Our</span>
            <span className="electrical-gradient bg-clip-text text-transparent font-normal"> Journey</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mb-6" />
          <p className="text-muted text-sm md:text-base font-light tracking-wide max-w-xl mx-auto">
            Years of experience delivering excellence across London
          </p>
        </motion.div>

        <div className="space-y-16">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-12 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl md:text-3xl font-light electrical-gradient bg-clip-text text-transparent">
                    {item.title}
                  </div>
                </div>

                <div className="flex-1 relative">
                  <div className="absolute -left-6 top-3 w-2 h-2 rounded-full bg-accent/40" />
                  <div className="relative bg-white p-8 md:p-10 rounded-lg border border-border/30 hover:border-accent/20 shadow-sm hover:shadow-lg transition-all duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.005] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                    <div className="relative text-sm md:text-base text-muted/80 font-light leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>

              {index < data.length - 1 && (
                <div className="absolute left-[5.5rem] top-12 bottom-0 w-px bg-gradient-to-b from-accent/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

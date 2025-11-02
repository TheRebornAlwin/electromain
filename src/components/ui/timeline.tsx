"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary/20 to-black" />

      <div className="max-w-6xl mx-auto py-20 px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display tracking-tight">
            <span className="electrical-gradient bg-clip-text text-transparent">POWER</span>
            <span className="text-foreground"> TIMELINE</span>
          </h2>
          <p className="text-muted-foreground max-w-lg text-lg">
            Decades of electrical innovation, precision engineering, and industry-leading installations
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row pt-10 md:pt-32 gap-10 relative"
          >
            <div className="sticky top-40 self-start max-w-xs relative">
              <div className="absolute -left-8 top-4 w-6 h-6 rounded-full border-4 border-accent bg-black z-20">
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <h3 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-2">
                <span className="electrical-gradient bg-clip-text text-transparent">{item.title}</span>
              </h3>
              <div className="w-20 h-1 bg-accent mt-3" />
            </div>

            <div className="flex-1 bg-secondary/30 backdrop-blur-sm p-8 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-foreground leading-relaxed">{item.content}</div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
          </motion.div>
        ))}

        <motion.div
          style={{ height: heightTransform, opacity: opacityTransform }}
          className="absolute left-3 md:left-6 top-0 w-[4px] rounded-full overflow-hidden"
        >
          <div className="w-full h-full electrical-gradient" />
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-10 w-40 h-40 border-2 border-accent/10 rotate-45" />
      <div className="absolute top-40 right-10 w-40 h-40 border-2 border-accent/10 -rotate-45" />
    </div>
  );
};

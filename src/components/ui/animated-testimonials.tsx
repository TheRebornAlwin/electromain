"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [autoplay]);

  return (
    <div className={cn("max-w-6xl mx-auto py-20 px-6 relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 font-display tracking-tight">
          <span className="electrical-gradient bg-clip-text text-transparent">CLIENT</span>
          <span className="text-foreground"> TESTIMONIALS</span>
        </h2>
        <p className="text-muted-foreground text-lg">Powering satisfaction across every installation</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="relative h-80">
          <div className="absolute inset-0 electrical-gradient rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />
          <AnimatePresence>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-accent/30">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-center">
          <div className="relative bg-secondary/40 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent/30">
            <div className="absolute top-0 left-0 w-full h-1 electrical-gradient" />

            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-3xl font-bold font-display tracking-tight mb-2">
                <span className="electrical-gradient bg-clip-text text-transparent">{testimonials[active].name}</span>
              </h3>
              <div className="w-16 h-1 bg-accent mb-4" />
              <p className="text-muted-foreground mb-6 uppercase text-sm tracking-wider">
                {testimonials[active].designation}
              </p>
            </motion.div>

            <motion.p
              key={active + "_quote"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-foreground mb-8"
            >
              "{testimonials[active].quote}"
            </motion.p>

            <div className="flex gap-4">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-12 w-12 rounded-lg bg-secondary border-2 border-accent/30 flex items-center justify-center hover:border-accent hover:shadow-glow transition-all"
              >
                <IconArrowLeft className="text-accent" />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-12 w-12 rounded-lg bg-secondary border-2 border-accent/30 flex items-center justify-center hover:border-accent hover:shadow-glow transition-all"
              >
                <IconArrowRight className="text-accent" />
              </motion.button>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

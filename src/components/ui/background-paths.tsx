"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingPaths() {
  // Create smooth diagonal lines going from bottom-left to top-right
  const paths = Array.from({ length: 20 }, (_, i) => {
    const yOffset = i * 30;
    const xStart = -100;
    const xEnd = 800;
    const yStart = -50 + yOffset;
    const yMid = 150 + yOffset;
    const yEnd = 350 + yOffset;

    return {
      id: i,
      // Smooth bezier curve going diagonally upward
      d: `M${xStart} ${yStart} Q${xEnd / 3} ${yMid}, ${xEnd / 2} ${yMid + 20} T${xEnd} ${yEnd}`,
      width: 0.8 + (i % 3) * 0.2,
      delay: i * 0.3,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <svg className="w-full h-full" viewBox="0 0 700 700" fill="none" preserveAspectRatio="xMidYMid slice">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="url(#grad1)"
            strokeWidth={path.width}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 8,
              delay: path.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F97316" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FB923C" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function BackgroundPaths({ title = "Empowering Precision" }: { title?: string }) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-light-bg to-white">
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-bg/50 to-transparent" />

      <div className="absolute inset-0">
        <FloatingPaths />
      </div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 electrical-gradient rounded-full blur-[120px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight font-display mb-6"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="inline-block mr-4 last:mr-0"
            >
              <span className="electrical-gradient bg-clip-text text-transparent">{w}</span>
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
          className="text-muted text-xl max-w-2xl mx-auto mb-12"
        >
          Cutting-edge electrical infrastructure designed for maximum performance and reliability
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="electrical-gradient text-white border-none rounded-full px-10 py-6 text-lg font-bold hover:shadow-luxury transition-all duration-300 uppercase tracking-wider"
            >
              Power Up Your Project →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-accent/20 rotate-45" />
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-accent/20 -rotate-45" />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  return (
    <a
      href={href || "/"}
      className={cn("relative group cursor-pointer z-40", className)}
      onMouseEnter={() => setTransform("translate(-50%,-50%) rotateX(35deg) scale(0.9)")}
      onMouseLeave={() => setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")}
    >
      <div
        style={{ perspective: "1000px" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          style={{ transform }}
          className="p-6 bg-secondary/90 backdrop-blur-sm rounded-2xl border-2 border-accent/40 shadow-glow-strong relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 electrical-gradient" />
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-amber-mid animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="absolute inset-0 circuit-pattern opacity-5" />
          <div className="relative z-10">{children}</div>
          <div className="absolute bottom-0 left-0 w-full h-1 electrical-gradient" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-20 electrical-gradient rounded-full animate-pulse-glow" />
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-accent bg-black"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
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
      />
    </a>
  );
};

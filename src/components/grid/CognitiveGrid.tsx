"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CognitiveGrid({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  // Warp the grid based on scroll progress to simulate cognitive mapping
  const warpX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const warpY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.15]);

  return (
    <div className="relative w-full min-h-screen">
      {/* The Nexus Mesh - A deterministic coordinate system */}
      <motion.div
        style={{ x: warpX, y: warpY, opacity }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground/20"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

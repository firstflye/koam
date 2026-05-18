"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background px-6 py-12 md:px-12 lg:px-24 flex flex-col justify-between">
      {/* The Atmospheric Void - Soft, luminescent glow */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] opacity-10 blur-[150px] rounded-full bg-accent pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] opacity-5 blur-[120px] rounded-full bg-accent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-between min-h-[85vh]">

        {/* Navigation - Functional and Balanced */}
        <nav className="flex justify-between items-center w-full py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl font-black tracking-tighter uppercase"
          >
            <a href="#home" className="hover:opacity-80 transition-opacity">
              Koam<span className="text-accent">ों.</span>
            </a>
          </motion.div>
          <div className="flex gap-8 items-center">
            <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.3em] opacity-60 font-bold">
              <a href="#revelation" className="hover:text-accent transition-colors">The Revelation</a>
              <a href="#mirror" className="hover:text-accent transition-colors">The Mirror</a>
              <a href="#glimpse" className="hover:text-accent transition-colors">The Glimpse</a>
            </div>
            <div className="w-px h-4 bg-foreground opacity-30" />
            <div className="text-[10px] uppercase tracking-widest opacity-40 font-mono">
              v1.0_alpha
            </div>
          </div>
        </nav>

        {/* The Main Statement - Balanced Editorial */}
        <div className="mt-12 md:mt-24 text-center flex flex-col items-center">
          {/* The l a l a l a - Subtle glow behind the text */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[100px] bg-accent rounded-full pointer-events-none"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-foreground"
          >
            Beyond the <br />
            <span className="text-accent relative">
              algorithm.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '33%' }}
                transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-accent opacity-50"
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-12 max-w-2xl mx-auto space-y-8"
          >
            <p className="text-lg md:text-2xl opacity-70 font-light leading-relaxed">
              We are not just building a tool. We are building a sanctuary.
              For the artists who are tired of renting their souls to the feed.
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold">
                The New Standard
              </p>
              <p className="text-sm opacity-60 font-mono italic">
                Stop guessing your growth. Start seeing the map.
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Invitation - Centered and Magnetic */}
        <div className="flex justify-center items-center py-12">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-12 py-6 overflow-hidden border border-foreground/30 hover:border-accent transition-all duration-500"
          >
            <span className="relative z-10 uppercase tracking-[0.4em] text-[10px] font-black group-hover:text-background transition-colors duration-300">
              Enter the Nexus
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.button>
        </div>
      </div>

      {/* Bottom Anchor - Balanced Detail */}
      <div className="absolute bottom-8 left-0 right-0 px-12 flex justify-between items-end text-[10px] uppercase tracking-widest opacity-30">
        <div className="text-left">Coord: 00.00 / Nova_Sovereign</div>
        <div className="text-right">Status: Evolving</div>
      </div>
    </section>
  );
}

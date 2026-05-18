"use client";

import React, { useEffect, useState, useRef } from 'react';

const Artifact = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (  <div className="group relative p-8 border border-foreground/10 bg-foreground/5 backdrop-blur-md rounded-sm transition-all duration-500 hover:border-accent/50 hover:bg-foreground/10">
    <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent opacity-20 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <h3 className="text-xs uppercase tracking-[0.3em] opacity-40 font-bold mb-2">{title}</h3>
      <div className="mb-6 overflow-hidden rounded-sm bg-background/50 border border-foreground/5">
        {children}
      </div>
      <p className="text-sm opacity-60 font-light leading-relaxed italic">
        {description}
      </p>
    </div>
  </div>
);

export default function Glimpse() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-background px-6 py-24 md:px-12 lg:px-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-20 space-y-4">
          <h2 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-foreground transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A glimpse into <br />
            <span className="text-accent">the Nexus.</span>
          </h2>
          <p className={`text-lg opacity-60 font-light max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            We are building more than a dashboard. We are building a new way to perceive,
            quantify, and scale your creative presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artifact 1: The Ledger */}
          <Artifact
            title="The Ledger"
            description="An immutable record of growth. No vanity. Just truth."
          >
            <div className="p-4 space-y-3 font-mono text-[10px]">
              <div className="flex justify-between opacity-40">
                <span>Sess_01: Fragmented</span>
                <span>-12%</span>
              </div>
              <div className="flex justify-between text-accent font-bold">
                <span>Sess_02: Centralized</span>
                <span>+42%</span>
              </div>
              <div className="flex justify-between opacity-40">
                <span>Sess_03: Synergy</span>
                <span>+18%</span>
              </div>
              <div className="h-px w-full bg-foreground/10 my-2" />
              <div className="flex justify-between font-bold">
                <span>Net Attention Delta</span>
                <span className="text-accent">+60%</span>
              </div>
            </div>
          </Artifact>

          {/* Artifact 2: The Nexus */}
          <Artifact
            title="The Nexus"
            description="Collaborate with peer architects. Growth is a collective act."
          >
            <div className="h-32 flex items-center justify-center relative overflow-hidden bg-background/20">
              <div className="absolute w-12 h-12 bg-accent opacity-20 rounded-full blur-xl animate-pulse" />
              <div className="relative flex gap-2 items-center">
                <div className="w-2 h-2 bg-foreground rounded-full" />
                <div className="w-8 h-px bg-foreground/30" />
                <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_#ccff00]" />
                <div className="w-8 h-px bg-foreground/30" />
                <div className="w-2 h-2 bg-foreground rounded-full" />
              </div>
            </div>
          </Artifact>

          {/* Artifact 3: The Map */}
          <Artifact
            title="The Map"
            description="A precise trajectory from fragmented attention to equity."
          >
            <div className="h-32 flex items-center justify-center relative p-4">
              <svg className="w-full h-full opacity-60" viewBox="0 0 100 40">
                <path
                  d="M0 35 Q 20 35, 40 25 T 80 10 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground"
                />
                <path
                  d="M0 35 Q 20 35, 40 25 T 80 10 T 100 5"
                  fill="none"
                  stroke="#ccff00"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="5" r="2" fill="#ccff00" />
              </svg>
            </div>
          </Artifact>
        </div>
      </div>
    </section>
  );
}

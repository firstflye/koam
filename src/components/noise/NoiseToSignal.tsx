"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function NoiseToSignal() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Generate random positions only on the client to avoid hydration mismatch
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      transitionDelay: `${Math.random() * 1000}ms`,
      transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`
    }));
    setParticles(generatedParticles);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      {/* Noise Layer - Floating fragments that collapse into the signal */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute w-px h-px bg-foreground transition-all duration-1000 ease-in-out
              ${isVisible
                ? 'opacity-0 scale-0 translate-x-0 translate-y-0'
                : 'opacity-40'}`}
            style={{
              left: p.left,
              top: p.top,
              transitionDelay: p.transitionDelay,
              transform: isVisible ? 'translate(0, 0)' : p.transform
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* The Headline - Editorial contrast */}
          <div className="space-y-4">
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-foreground transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              The world is <span className="text-foreground/30">noise.</span>
            </h2>
            <h2 className={`text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-accent transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              We are the signal.
            </h2>
          </div>

          {/* The Visual Revelation - The "Collapse" */}
          <div className="relative w-full max-w-3xl h-64 flex items-center justify-center">
            {/* The Signal Line */}
            <div
              className={`h-px bg-accent transition-all duration-1000 ease-in-out ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
              style={{ boxShadow: '0 0 20px #ccff00' }}
            />

            {/* Pulsing Core */}
            <div
              className={`absolute w-4 h-4 bg-accent rounded-full transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
              style={{ boxShadow: '0 0 30px #ccff00' }}
            />
          </div>

          <div className={`max-w-xl mx-auto text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl font-light leading-relaxed">
              Fragmented feeds, algorithm-driven anxiety, and a constant race for a finish line that keeps moving.
              We've filtered out the static.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

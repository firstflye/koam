"use client";

import React, { useEffect, useState, useRef } from 'react';

export default function Mirror() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
      {/* Background Accent - Subtle a la Refined Rebellion */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-accent opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* The Reflection - Describing the pain */}
          <div className="space-y-8">
            <div className="text-xs uppercase tracking-[0.3em] opacity-40 font-bold mb-4">
              The Reflection
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-foreground leading-none">
              We know the <br />
              <span className="text-accent">weight.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg md:text-xl opacity-60 font-light leading-relaxed">
                The 2 AM edit. The anxiety of the reach-drop. The feeling of being a ghost in your own machine.
              </p>
              <p className="text-lg md:text-xl opacity-60 font-light leading-relaxed">
                You&apos;ve spent years building a presence on land you don&apos;t own, obeying algorithms that don&apos;t know your name.
              </p>
            </div>
          </div>

          {/* The Pivot - The "Fellow Artist" shift */}
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="p-10 border-l-2 border-accent bg-foreground/5 backdrop-blur-sm relative">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent opacity-30" />

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tighter uppercase italic text-foreground">
                  The Shift
                </h3>
                <p className="text-md opacity-80 font-light leading-relaxed">
                  We built Koam because we were tired of the race. We realized that the only way to stop being a &quot;content creator&quot; was to start being an <span className="text-accent font-bold italic">architect.</span>
                </p>
                <p className="text-md opacity-80 font-light leading-relaxed">
                  This is a sanctuary for the vision. A place where your attention is treated as currency, not a product to be sold to the highest bidder.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { joinWaitlist } from '@/app/actions';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const result = await joinWaitlist(email);

    if (result.error) {
      setErrorMessage(result.error);
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] w-full bg-background px-6 py-24 md:px-12 lg:px-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Pulse - The Final Magnet */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-5 blur-[180px] rounded-full bg-accent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">

        <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-foreground leading-none mb-8">
            The Nexus is <br />
            <span className="text-accent">evolving in private.</span>
          </h2>

          <p className="text-lg opacity-60 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            We are selecting a limited cohort of architects to shape the future of attention.
            No noise. No algorithms. Just the vision.
          </p>

          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col md:flex-row items-center gap-4 p-2 rounded-sm border border-foreground/20 bg-foreground/5 backdrop-blur-md focus-within:border-accent transition-all duration-500"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@address.com"
              className="w-full bg-transparent px-6 py-4 outline-none text-foreground placeholder:text-foreground/30 font-mono text-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full md:w-auto px-8 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-[10px] font-black hover:bg-accent hover:text-background transition-all duration-300 whitespace-nowrap"
            >
              {status === 'idle' || status === 'error' ? "Request Access" :
               status === 'loading' ? "Verifying..." :
               "Application Sent"}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-6 animate-fade-in text-accent font-mono text-xs uppercase tracking-widest">
              Welcome to the waitlist, architect.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 animate-fade-in text-red-500 font-mono text-xs uppercase tracking-widest">
              {errorMessage}
            </div>
          )}
        </div>

        <div className="mt-24 opacity-20 text-[10px] uppercase tracking-[0.5em] font-bold">
          © 2026 Koam Productions / Sovereign Intelligence
        </div>
      </div>
    </section>
  );
}

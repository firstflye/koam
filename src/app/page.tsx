"use client";

import React from 'react';
import Hero from '@/components/hero/Hero';
import NoiseToSignal from '@/components/noise/NoiseToSignal';
import Mirror from '@/components/mirror/Mirror';
import Glimpse from '@/components/glimpse/Glimpse';
import GrowthTrajectory from '@/components/growth/GrowthTrajectory';
import Waitlist from '@/components/waitlist/Waitlist';
import CognitiveGrid from '@/components/grid/CognitiveGrid';

export default function Page() {
  return (
    <CognitiveGrid>
      <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
        <Hero />
        <NoiseToSignal />
        <Mirror />
        <Glimpse />
        <GrowthTrajectory />
        <Waitlist />
      </main>
    </CognitiveGrid>
  );
}

import React from 'react';

const STAGES = [
  {
    title: "The Algorithmic Loop",
    description: "Fragmentation. Reaction. Noise. The machine defines your boundaries.",
    status: "Past",
    color: "text-muted-foreground"
  },
  {
    title: "The Signal Shift",
    description: "Curation. Intention. Clarity. You begin to see the architecture.",
    status: "Present",
    color: "text-foreground"
  },
  {
    title: "Sovereign Architecture",
    description: "Synthesis. Equity. Ownership. You are the architect of your own trajectory.",
    status: "Future",
    color: "text-accent"
  }
];

export default function GrowthTrajectory() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground mb-4">
          The Trajectory of Growth
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Movement from the fragmented state of consumption to the integrated state of sovereignty.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -z-10" style={{ transform: 'translateY(-50%)' }} />

        {STAGES.map((stage, index) => (
          <div key={index} className="relative group">
            <div className="mb-8 flex justify-center">
              <div className={`w-4 h-4 rounded-full border-2 ${stage.status === 'Future' ? 'bg-accent border-accent' : 'bg-background border-border'} transition-all duration-500 group-hover:scale-150`} />
            </div>
            <div className="text-center p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm transition-all duration-300 hover:border-accent/50">
              <span className="text-xs uppercase tracking-widest opacity-50 mb-2 block">
                {stage.status}
              </span>
              <h3 className={`text-xl font-medium mb-3 ${stage.color}`}>
                {stage.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

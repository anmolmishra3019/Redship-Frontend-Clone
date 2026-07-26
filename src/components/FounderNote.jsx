import React from 'react';
import { Quote } from 'lucide-react';

export default function FounderNote() {
  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="relative bg-zinc-900/30 border border-zinc-800 p-8 sm:p-12 rounded-3xl backdrop-blur-sm overflow-hidden">
        
        {/* Glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <Quote className="w-12 h-12 text-red-500/20 absolute top-8 left-8" />

        <div className="relative space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500">From the Founder</span>
          
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            Built by a founder tired of missing Reddit opportunities
          </h2>

          <div className="text-zinc-400 space-y-4 text-base sm:text-lg font-light leading-relaxed">
            <p>
              "I've launched multiple SaaS products and know how valuable Reddit can be for finding early customers. But manually searching through subreddits every single day? That's exhausting."
            </p>
            <p>
              "I wanted a tool that would monitor Reddit for me, score posts with AI, and deliver the best opportunities to my inbox each morning. So I built RedShip."
            </p>
            <p>
              "Now I wake up to a curated list of Reddit opportunities, instead of spending hours searching. I hope it helps you save time and grow your startup too."
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-white shadow-inner">
              AS
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Axel Schapmann</h4>
              <p className="text-zinc-500 text-sm">Founder, RedShip.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

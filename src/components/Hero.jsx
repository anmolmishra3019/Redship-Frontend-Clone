import React from 'react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  const redditQueries = [
    "Best CRM for small business?",
    "Anyone using Reddit for lead gen?",
    "Looking for a tool to monitor social mentions",
    "How do you handle customer support?",
    "Need Reddit marketing automation tool",
    "What tools are you using for lead gen in 2025?",
    "How are you finding your first 100 customers?",
    "Best way to get traction beyond Product Hunt?",
  ];

  // Duplicate the list to create a seamless infinite scrolling loop
  const marqueeItems = [...redditQueries, ...redditQueries];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Top pill badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 mb-6 hover:border-zinc-700 transition-colors cursor-default">
        <Sparkles className="w-3.5 h-3.5 text-red-500" />
        <span>A new way to acquire SaaS customers</span>
      </div>

      {/* Core Headings */}
      <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-4xl text-white leading-[1.1] mb-6">
        Turn Reddit into your best{' '}
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
          Acquisition Channel
        </span>
      </h1>

      <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed mb-10">
        Monitor conversations where people are looking for solutions like yours. RedShip uses AI to score and notify you of ready-to-buy leads on Reddit 24/7.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full justify-center">
        <a
          href="#simulator"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5"
        >
          Try Live Simulator <ArrowRight className="w-5 h-5" />
        </a>
        <a
          href="#pricing"
          className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-semibold rounded-xl transition-all duration-300"
        >
          View Pricing
        </a>
      </div>

      {/* Trust Pilot / Founders Proof */}
      <div className="flex flex-col items-center gap-2 mb-12">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-500" />
          ))}
        </div>
        <p className="text-sm font-semibold text-zinc-400">
          Loved by <span className="text-zinc-200">800+</span> founders & marketers
        </p>
      </div>

      {/* Infinite Scrolling Reddit Queries Ticker */}
      <div className="relative w-full max-w-5xl overflow-hidden py-4 border-y border-zinc-800/50 bg-zinc-950/40 backdrop-blur-sm">
        {/* Left and Right fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-8 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, index) => (
            <span
              key={index}
              className="text-zinc-400 hover:text-red-400 font-medium text-sm sm:text-base bg-zinc-900/50 border border-zinc-800/80 px-4 py-2 rounded-full cursor-default transition-colors duration-200"
            >
              💬 {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

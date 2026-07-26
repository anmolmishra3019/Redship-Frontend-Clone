import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "RedShip is one of those rare products that feels instantly useful from day one. It turns Reddit from a noisy time-sink into a laser-focused acquisition channel. The setup is fast, the UI is clean, and the AI relevance scoring makes it obvious where to jump in. I recommend it without hesitation to anyone who wants to take Reddit marketing seriously in 2026.",
      author: "Marc L.",
      role: "Solo Indie Hacker"
    },
    {
      quote: "A big thank you to Axel for Redship! It's hard to stay consistent on Reddit. I tried to be active on it several times, but I always gave up. I thought maybe it wasn't my platform to get used to. And now I'm actively using only Redship. It's a very useful service. If you're also having trouble getting used to and being consistent on Reddit, I highly recommend it.",
      author: "Sarah K.",
      role: "SaaS Marketing Director"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/10 inline-flex items-center gap-1.5 mb-4">
          <MessageSquare className="w-3.5 h-3.5" /> Customer Feedback
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Loved by Founders & Marketers
        </h2>
        <p className="text-zinc-400 text-lg">
          See how companies use RedShip to accelerate organic user acquisition.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((rev, index) => (
          <div 
            key={index}
            className="flex flex-col justify-between bg-zinc-900/20 border border-zinc-800/80 p-8 rounded-2xl backdrop-blur-sm relative hover:border-zinc-700 transition-colors duration-200"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic">
                "{rev.quote}"
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center font-bold text-xs text-zinc-300">
                {rev.author[0]}
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                <p className="text-zinc-500 text-xs">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

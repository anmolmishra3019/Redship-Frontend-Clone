import React from 'react';
import { Target, Clock, Search, ShieldAlert, Sparkles, Inbox, Bookmark } from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: "AI-Powered Scoring",
      desc: "Every Reddit post is analyzed and scored from 0-100 based on exact semantic alignment to your product."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Real-time Monitoring",
      desc: "Get notified of fresh threads matching your keywords within minutes of them being published on Reddit."
    },
    {
      icon: <Search className="w-6 h-6 text-amber-500" />,
      title: "SEO Opportunities",
      desc: "Locate Reddit posts that are already ranking on Google for high-volume searches and answer them for long-term traffic."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
      title: "AI Reply Suggestions",
      desc: "Get context-aware reply drafts matched to the exact thread conversation, saving hours of manual drafting."
    },
    {
      icon: <Inbox className="w-6 h-6 text-orange-500" />,
      title: "Daily Opportunity Inbox",
      desc: "Wake up to a clean, curated summary of high-value Reddit leads delivered directly to your email inbox."
    },
    {
      icon: <Bookmark className="w-6 h-6 text-amber-500" />,
      title: "Save & Organize",
      desc: "Bookmark threads, add labels, track status, and measure which keywords yield the most customers."
    }
  ];

  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
          Everything You Need to Acquire Customers on Reddit
        </h2>
        <p className="text-zinc-400 text-lg">
          RedShip automates the tedious parts of lead-gen so you can focus on building genuine connections.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainFeatures.map((feat, index) => (
          <div 
            key={index}
            className="group relative bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-2xl transition-all duration-300 hover:bg-zinc-900/50 hover:border-zinc-700/80 hover:-translate-y-1"
          >
            {/* Top accent glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center mb-6 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
              {feat.icon}
            </div>

            <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight">
              {feat.title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Globe, Inbox, Heart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: "Add your website",
      desc: "Input your SaaS landing page. RedShip analyzes your value proposition, customer profiles, and generates optimal keywords."
    },
    {
      step: "02",
      icon: <Inbox className="w-6 h-6 text-orange-500" />,
      title: "Get relevant posts",
      desc: "Our engine scans millions of Reddit posts 24/7. AI evaluates the search intent, filters noise, and delivers scores straight to your inbox."
    },
    {
      step: "03",
      icon: <Heart className="w-6 h-6 text-amber-500" />,
      title: "Engage & acquire",
      desc: "Review high-scoring leads, customize the AI-drafted reply to preserve your genuine voice, and post in one click."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950/40 border-y border-zinc-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            How RedShip Works
          </h2>
          <p className="text-zinc-400 text-lg">
            A simple 3-step setup to turn Reddit conversations into a compounding growth channel.
          </p>
        </div>

        {/* Stepper Timeline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-zinc-800 -translate-y-1/2 -z-10" />

          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col items-center text-center bg-zinc-900/10 border border-zinc-800/40 p-8 rounded-2xl backdrop-blur-sm"
            >
              {/* Stepper Number Badge */}
              <div className="absolute -top-5 bg-zinc-950 border border-zinc-800 text-red-500 font-mono font-bold text-xs px-3 py-1 rounded-full">
                Step {item.step}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-6 mt-2 shadow-inner">
                {item.icon}
              </div>

              <h3 className="font-display font-extrabold text-xl text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

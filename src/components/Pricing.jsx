import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // monthly vs annual

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started with Reddit marketing",
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        "1 website tracked",
        "10 tracked keywords",
        "Weekly SEO opportunities",
        "Live Reddit monitoring",
        "Unlimited AI reply suggestions",
        "30 daily outreach checks",
        "1 team seat",
        "Email & Slack notifications"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Creator",
      desc: "Starter + full creation suite (compliance & voice)",
      priceMonthly: 89,
      priceAnnual: 71,
      features: [
        "Everything in Starter",
        "AI-drafted posts in your voice",
        "Subreddit-rule compliance check",
        "Verify a post you already wrote",
        "Calendar to plan your posts",
        "Memory & context preferences",
        "Voice-to-draft transcription",
        "Priority queue processing"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Agency",
      desc: "Higher volume, agency-level seats, custom pipelines",
      priceMonthly: 199,
      priceAnnual: 159,
      features: [
        "10+ websites tracked",
        "80+ tracked keywords",
        "Team seats for whole agency",
        "Webhooks + custom integrations",
        "Multi-brand workspaces",
        "Priority support & onboarding call",
        "Dedicated API key access",
        "SLA response guarantees"
      ],
      cta: "Talk to us",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-zinc-400 text-lg">
          Start finding customers on Reddit today. Cancel or upgrade anytime.
        </p>

        {/* Dynamic Billing Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all ${
              billingPeriod === 'monthly'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
              billingPeriod === 'annual'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Annual 
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-md font-bold uppercase">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Grid Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const currentPrice = billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual;
          return (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-zinc-900/60 border-red-500/80 shadow-xl shadow-red-600/5'
                  : 'bg-zinc-900/20 border-zinc-800/80 hover:border-zinc-700/80'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              {/* Top Section info */}
              <div>
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">{plan.desc}</p>
                
                {/* Cost */}
                <div className="flex items-baseline gap-1.5 mb-8 border-b border-zinc-800 pb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">${currentPrice}</span>
                  <span className="text-zinc-500 text-sm">/mo</span>
                  {billingPeriod === 'annual' && (
                    <span className="text-[10px] text-zinc-500 block italic ml-1">(billed annually)</span>
                  )}
                </div>

                {/* Features Checklist */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-300 leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5'
                      : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-850 hover:border-zinc-700'
                  }`}
                >
                  {plan.cta}
                </button>
                <p className="text-[10px] text-zinc-500 text-center mt-3 flex justify-center items-center gap-1">
                  <Info className="w-3 h-3 text-zinc-600" /> Cancel anytime. Money-back guarantee.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

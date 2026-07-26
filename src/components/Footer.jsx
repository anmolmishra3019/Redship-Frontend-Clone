import React, { useState } from 'react';
import { Rocket, Send, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 border-b border-zinc-900 pb-12">
        
        {/* Brand / Newsletter Column */}
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-lg text-white">
              RedShip<span className="text-red-500">.io</span>
            </span>
          </div>
          <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-sm">
            Acquire SaaS customers on Reddit by automatically monitoring active buyer intent conversations and drafting genuine replies.
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-2">
            <label htmlFor="newsletter" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Get Product Updates
            </label>
            <div className="flex max-w-sm">
              <input 
                type="email" 
                id="newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                required
                className="bg-zinc-900 border border-zinc-800 rounded-l-lg px-3 py-2 text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-red-500/50 flex-1"
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-500 px-4 rounded-r-lg flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                {subscribed ? <span className="text-xs text-white font-bold">✓</span> : <Send className="w-4 h-4 text-white" />}
              </button>
            </div>
            {subscribed && <span className="text-[10px] text-green-500 block">Successfully subscribed!</span>}
          </form>
        </div>

        {/* Links Column 1: Features */}
        <div className="space-y-3.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Features</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#features" className="text-zinc-500 hover:text-zinc-300 transition-colors">Reddit Monitoring</a></li>
            <li><a href="#features" className="text-zinc-500 hover:text-zinc-300 transition-colors">AI Reply Generator</a></li>
            <li><a href="#features" className="text-zinc-500 hover:text-zinc-300 transition-colors">SEO Opportunities</a></li>
            <li><a href="#features" className="text-zinc-500 hover:text-zinc-300 transition-colors">Post Monitoring</a></li>
            <li><a href="#features" className="text-zinc-500 hover:text-zinc-300 transition-colors">Comment Monitoring</a></li>
          </ul>
        </div>

        {/* Links Column 2: Product */}
        <div className="space-y-3.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Product</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#pricing" className="text-zinc-500 hover:text-zinc-300 transition-colors">Pricing</a></li>
            <li><a href="#faq" className="text-zinc-500 hover:text-zinc-300 transition-colors">FAQ</a></li>
            <li><a href="#docs" className="text-zinc-500 hover:text-zinc-300 transition-colors">Documentation</a></li>
            <li><a href="#affiliates" className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">Affiliate <span className="text-[9px] bg-red-500/10 text-red-500 px-1 py-0.5 rounded border border-red-500/20 font-bold">30%</span></a></li>
            <li><a href="#contact" className="text-zinc-500 hover:text-zinc-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Links Column 3: Free Tools */}
        <div className="space-y-3.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Free Tools</h4>
          <ul className="space-y-2 text-xs sm:text-sm col-span-1">
            <li><a href="#tools" className="text-zinc-500 hover:text-zinc-300 transition-colors">Subreddit Finder</a></li>
            <li><a href="#tools" className="text-zinc-500 hover:text-zinc-300 transition-colors">Website to Subreddits</a></li>
            <li><a href="#tools" className="text-zinc-500 hover:text-zinc-300 transition-colors">Brand Analyzer</a></li>
            <li><a href="#tools" className="text-zinc-500 hover:text-zinc-300 transition-colors">Karma Checker</a></li>
            <li><a href="#tools" className="text-zinc-500 hover:text-zinc-300 transition-colors">Rules Checker</a></li>
          </ul>
        </div>

        {/* Links Column 4: Comparisons */}
        <div className="space-y-3.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Resources</h4>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li><a href="#compare" className="text-zinc-500 hover:text-zinc-300 transition-colors">Best Reddit Tools</a></li>
            <li><a href="#compare" className="text-zinc-500 hover:text-zinc-300 transition-colors">Competitor Compare</a></li>
            <li><a href="#resources" className="text-zinc-500 hover:text-zinc-300 transition-colors">Marketing Glossary</a></li>
            <li><a href="#resources" className="text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Policy</a></li>
            <li><a href="#resources" className="text-zinc-500 hover:text-zinc-300 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright and Signature */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <span>&copy; {new Date().getFullYear()} RedShip.io. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by{' '}
          <a href="https://x.com/aschapmann" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-400 underline underline-offset-2">
            Axel Schapmann
          </a>
        </span>
      </div>
    </footer>
  );
}

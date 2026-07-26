import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI Relevance Scoring work?",
      answer: "We analyze the title and body of each Reddit post, evaluating the poster's semantic intent. Instead of simple keyword matching (which yields mostly noise), our algorithm grades the post on a scale of 0-100. A score of 90+ indicates someone is actively looking to purchase or try a solution like yours."
    },
    {
      question: "Will my Reddit account get shadowbanned?",
      answer: "No, because RedShip does not automate the posting process. Auto-reply bots are heavily targeted and banned by Reddit within days. Instead, RedShip automates the crawling, scoring, and response-drafting stages, leaving the actual review and posting to you. Genuine human participation protects your accounts."
    },
    {
      question: "How fast do you catch new Reddit posts?",
      answer: "For Starter and Growth plans, our trackers sweep targeted subreddits every 10-15 minutes. High-intent opportunities are delivered straight to your notification channels (Slack/Email) within minutes of being posted."
    },
    {
      question: "Can I monitor brand mentions or competitors?",
      answer: "Absolutely. You can add your brand name, competitor products, or specific topic tags as keywords. RedShip will track comment threads and post titles for mentions, keeping you updated on public sentiment or competitor switch opportunities."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can upgrade, downgrade, or cancel your subscription at any point from your dashboard. If you cancel, your account will remain active until the end of the current billing cycle."
    }
  ];

  const toggleFAQ = (idx) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/10 inline-flex items-center gap-1.5 mb-4">
          <HelpCircle className="w-3.5 h-3.5" /> Support Center
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-zinc-400 text-base">
          Everything you need to know about finding opportunities on Reddit.
        </p>
      </div>

      {/* Accordion Cards */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="bg-zinc-900/10 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-350"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-5 text-left text-zinc-200 hover:text-white font-medium focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-red-500' : 'rotate-0'
                  }`} 
                />
              </button>
              
              {/* Collapsible Answer */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-48 border-t border-zinc-800/60' : 'max-h-0'
                }`}
              >
                <p className="p-5 text-xs sm:text-sm text-zinc-400 leading-relaxed bg-zinc-950/20">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

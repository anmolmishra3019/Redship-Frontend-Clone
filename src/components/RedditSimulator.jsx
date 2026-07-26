import React, { useState, useEffect } from 'react';
import { Search, Globe, Sparkles, MessageSquare, Check, ArrowRight, RefreshCw, AlertCircle, AlertTriangle } from 'lucide-react';

const mockProductScenarios = {
  crm: {
    keywords: ["CRM for startups", "sales tool", "customer pipeline", "leads tracker"],
    posts: [
      {
        id: 1,
        subreddit: "r/startups",
        author: "u/growth_hacker",
        time: "3m ago",
        title: "Need recommendations for a CRM that doesn't cost a fortune",
        content: "We are a team of 4 and HubSpot is getting way too expensive. We just need simple pipeline tracking, contact notes, and email integrations. What is everyone using?",
        score: 96,
        reason: "Directly asking for startup CRM recommendations. Budget-conscious and matches simple pipeline requirements.",
        draft: "Hey u/growth_hacker! We built [Your CRM] specifically for small startup teams who are priced out of HubSpot. It handles pipeline tracking and email integrations without all the bloat. Happy to set up a free trial for your team if you want to check it out!"
      },
      {
        id: 2,
        subreddit: "r/SaaS",
        author: "u/solo_coder",
        time: "42m ago",
        title: "How do you handle customer support + sales pipeline in early stages?",
        content: "I am a solo founder. Managing spreadsheets for sales leads and answering support emails is becoming a mess. Is there a unified tool that connects these or do I need separate tools?",
        score: 84,
        reason: "User is asking about managing sales pipelines. Good opportunity to explain how your CRM can act as a simple CRM + integration source.",
        draft: "Congratulations on launching! Spreadsheets break fast. A lightweight CRM is definitely better than two separate systems early on. [Your CRM] has built-in contact records that make tracking interactions simple. Let me know if you want a custom demo."
      },
      {
        id: 3,
        subreddit: "r/Entrepreneur",
        author: "u/bizdev_guy",
        time: "2h ago",
        title: "What tools are you using for lead gen in 2026?",
        content: "Looking to audit our tech stack for outbound sales. What are the must-have tools for cold outreach, lead tracking, and closing deals?",
        score: 72,
        reason: "General discussion about lead generation and sales tools. Relevant, but not a direct vendor request.",
        draft: "For lead tracking, you'll definitely need a robust but simple CRM so leads don't slip through the cracks. [Your CRM] helps you visualize your pipeline easily. What specific outbound channels are you focusing on?"
      }
    ]
  },
  resume: {
    keywords: ["resume builder", "AI resume", "job search tool", "cv templates"],
    posts: [
      {
        id: 1,
        subreddit: "r/jobs",
        author: "u/career_changer",
        time: "12m ago",
        title: "Best tool to customize resumes for ATS scanner?",
        content: "I have been applying for months and getting zero callbacks. I heard I need to customize my resume for every single job description to pass ATS checks. Is there an AI tool that makes this fast?",
        score: 98,
        reason: "Direct match for AI resume building and ATS tailoring. Highest conversion intent.",
        draft: "Hey u/career_changer! I faced the same issue and built [Your AI Resume]. It scans the job description, compares it to your resume, and uses AI to highlight the exact keywords missing in seconds. I'd love for you to try it out for free and let me know if it helps get you interviews."
      },
      {
        id: 2,
        subreddit: "r/cscareerquestions",
        author: "u/grad_2026",
        time: "1h ago",
        title: "Resume review - 200 applications, 1 interview",
        content: "New grad here. Applying to swe roles. Here is my resume. I've been tailoring it manually but it takes 30 mins per app. Any advice on how to speed up this process?",
        score: 91,
        reason: "Strong fit. Target audience is struggling with manual resume customization and time efficiency.",
        draft: "Tailoring manually takes way too long. I created [Your AI Resume] to automate this. It matches your projects/experience to the job keywords in under a minute so you can apply faster. Best of luck with the grad search!"
      },
      {
        id: 3,
        subreddit: "r/resumes",
        author: "u/recruit_expert",
        time: "4h ago",
        title: "My advice on how to format your resume in 2026",
        content: "Recruiter here. Please stop using multi-column canvas resumes. ATS systems hate them. Keep it single column, clean margins, and bullet points starting with action verbs...",
        score: 65,
        reason: "Informational post on resume formatting. Good for brand awareness, but user is not looking to buy.",
        draft: "Spot on advice! This is why we designed [Your AI Resume] to export clean, single-column templates that recruiters actually like and ATS can parse. Thanks for sharing these tips!"
      }
    ]
  },
  generic: {
    keywords: ["social media tracker", "Reddit marketing", "customer finder", "business leads"],
    posts: [
      {
        id: 1,
        subreddit: "r/startups",
        author: "u/founder_daily",
        time: "10m ago",
        title: "Best way to find early users without budget?",
        content: "We just launched our SaaS product. We have no budget for ads. Where should we look for our first 100 users? Slack communities? Reddit? How do you do it consistently?",
        score: 95,
        reason: "Directly asking for non-ad user acquisition methods. Reddit is mentioned as a potential source, aligning perfectly with RedShip features.",
        draft: "Hey u/founder_daily! Finding early users is all about going where they discuss their problems. Reddit is gold for this. Instead of spamming, find posts where people ask about the problem your product solves, write helpful replies, and reference your tool. We built [Your Product] to monitor these queries 24/7!"
      },
      {
        id: 2,
        subreddit: "r/SaaS",
        author: "u/saas_builder",
        time: "1h ago",
        title: "Reddit outreach: automated or manual?",
        content: "I want to start monitoring Reddit threads to promote my new developer utility. Should I code a bot to auto-reply, or do it manually? What are the ban risks?",
        score: 89,
        reason: "Highly relevant. Asking about Reddit marketing automation and ban risks. Perfect opportunity to educate on the value of assisted (not fully automated) posting.",
        draft: "Great question. Never automate the actual posting—Reddit's bot detection will shadow-ban you instantly. The best approach is to automate the search and draft-writing, but review and edit the comment yourself before posting. That's actually why we created [Your Product]!"
      },
      {
        id: 3,
        subreddit: "r/solopreneur",
        author: "u/indie_coder",
        time: "3h ago",
        title: "Tired of marketing. Just want to code.",
        content: "Marketing is exhausting. I spend hours looking at Twitter, Reddit, and LinkedIn trying to plug my product but it feels like shouting into a void. How do indie hackers streamline this?",
        score: 78,
        reason: "Indie founder complaining about marketing overhead. Fits the productivity angle of lead monitoring.",
        draft: "Marketing is definitely a grind. The key is to narrow your focus to high-intent conversations. Rather than shouting into the void, look for people actively asking for what you built. [Your Product] does the monitoring for you so you can focus on coding. Happy to share a trial link."
      }
    ]
  }
};

export default function RedditSimulator() {
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [selectedType, setSelectedType] = useState('generic'); // crm, resume, generic
  const [step, setStep] = useState('idle'); // idle, loading, results
  const [loadingStep, setLoadingStep] = useState(0);
  const [keywords, setKeywords] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [draftContent, setDraftContent] = useState('');

  const loadingMessages = [
    "Analyzing your product details...",
    "Extracting high-intent keyword strategies...",
    "Crawling relevant subreddits (r/SaaS, r/startups, r/Entrepreneur)...",
    "Running AI Relevance Scoring (0-100)...",
    "Generating context-aware reply drafts..."
  ];

  // Auto-detect type based on keywords entered or let user choose a quick-fill preset
  const handleQuickFill = (preset) => {
    setSelectedType(preset);
    if (preset === 'crm') {
      setProductName('Pipedream CRM');
      setProductDesc('A lightweight, affordable CRM for startups to track contacts and deals without enterprise pricing.');
    } else if (preset === 'resume') {
      setProductName('ResumePulse AI');
      setProductDesc('An AI-powered tool that instantly adapts your resume bullets to job descriptions to pass ATS checks.');
    } else {
      setProductName('MentionWatch');
      setProductDesc('A social listening tool that tracks mentions of your brand across social media networks.');
    }
  };

  const startScanning = (e) => {
    e.preventDefault();
    if (!productName || !productDesc) return;

    setStep('loading');
    setLoadingStep(0);
  };

  // Animate the loading screen
  useEffect(() => {
    if (step !== 'loading') return;

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // Transition to results
          setTimeout(() => {
            const scenario = mockProductScenarios[selectedType] || mockProductScenarios.generic;
            // Personalize the posts with user's product name
            const personalizedPosts = scenario.posts.map(p => ({
              ...p,
              draft: p.draft.replaceAll('[Your CRM]', productName)
                            .replaceAll('[Your AI Resume]', productName)
                            .replaceAll('[Your Product]', productName)
            }));
            
            setKeywords(scenario.keywords);
            setPosts(personalizedPosts);
            setSelectedPost(personalizedPosts[0]);
            setDraftContent(personalizedPosts[0].draft);
            setStep('results');
          }, 600);
          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [step, selectedType, productName]);

  const selectPost = (post) => {
    setSelectedPost(post);
    setDraftContent(post.draft);
    setCopiedIndex(null);
  };

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="simulator" className="py-20 bg-zinc-950/60 border-y border-zinc-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-semibold uppercase tracking-wider border border-red-500/10 inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Sandbox
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            See How RedShip Works
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Tell us what you built, and we will simulate running Reddit monitoring scans and drafting tailored outreach comments instantly.
          </p>
        </div>

        {/* Outer Glassmorphic Card Container */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
          
          {/* STEP 1: IDLE / FORM FILL */}
          {step === 'idle' && (
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Inputs Column */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex flex-wrap gap-2 items-center justify-between border-b border-zinc-800/60 pb-4">
                    <span className="text-sm font-semibold text-zinc-300">Quick Fill Example Presets:</span>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => handleQuickFill('crm')}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors ${selectedType === 'crm' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'}`}
                      >
                        SaaS CRM
                      </button>
                      <button 
                        type="button"
                        onClick={() => handleQuickFill('resume')}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors ${selectedType === 'resume' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'}`}
                      >
                        AI Resume Builder
                      </button>
                    </div>
                  </div>

                  <form onSubmit={startScanning} className="space-y-4">
                    <div>
                      <label htmlFor="prodName" className="block text-sm font-medium text-zinc-400 mb-1.5">Product Name</label>
                      <input 
                        type="text" 
                        id="prodName"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g. ChatPulse" 
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500/50 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="prodDesc" className="block text-sm font-medium text-zinc-400 mb-1.5">What problem does it solve? (AI Keyword Targeter)</label>
                      <textarea 
                        id="prodDesc"
                        rows="3"
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                        placeholder="e.g. An AI customer support widget that learns from your documentation to auto-resolve 70% of tickets."
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500/50 rounded-xl px-4 py-3 text-zinc-100 placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!productName || !productDesc}
                      className="w-full inline-flex justify-center items-center gap-2 py-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-600/10"
                    >
                      Analyze & Crawl Reddit <Search className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Information Callout Column */}
                <div className="lg:col-span-2 flex flex-col justify-between bg-zinc-950/40 border border-zinc-800/50 p-6 rounded-xl">
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-lg text-white">How This Simulation Works</h3>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400 mt-0.5">1</div>
                        <p className="text-xs text-zinc-400 leading-relaxed"><strong className="text-zinc-200">AI Analyses Details:</strong> We process your product description to construct optimal target subreddits and keyword parameters.</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400 mt-0.5">2</div>
                        <p className="text-xs text-zinc-400 leading-relaxed"><strong className="text-zinc-200">Reddit Search Scrape:</strong> The system matches actual active community threads containing high-intent questions.</p>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400 mt-0.5">3</div>
                        <p className="text-xs text-zinc-400 leading-relaxed"><strong className="text-zinc-200">Relevance Algorithm:</strong> Posts are ranked 0-100, and a helpful AI reply suggestion is generated specifically for the conversation.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-zinc-800/60 pt-4 flex gap-2 items-center text-xs text-zinc-500">
                    <AlertCircle className="w-4 h-4 text-red-500/70" />
                    <span>No real Reddit account connection is required to test.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SCANNING LOADER */}
          {step === 'loading' && (
            <div className="p-12 sm:p-20 flex flex-col items-center justify-center min-h-[350px]">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-zinc-800 border-t-red-600 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-red-500/80 animate-pulse" />
                </div>
              </div>
              
              <h3 className="font-semibold text-lg text-white mb-2">Analyzing Product Strategy</h3>
              
              {/* Progress Steps */}
              <div className="w-full max-w-md bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 space-y-2.5">
                {loadingMessages.map((msg, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    {loadingStep > index ? (
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                    ) : loadingStep === index ? (
                      <div className="w-4 h-4 rounded-full border-2 border-red-500 border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-zinc-800 shrink-0" />
                    )}
                    <span className={loadingStep === index ? "text-zinc-200 font-medium" : loadingStep > index ? "text-zinc-500 line-through" : "text-zinc-600"}>
                      {msg}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: RESULTS AND INTERACTIVE FEED */}
          {step === 'results' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
              
              {/* Left Column: Keyword List & Simulated Reddit Thread List */}
              <div className="lg:col-span-5 p-4 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400">
                    <Globe className="w-3.5 h-3.5 text-zinc-500" /> Web Target
                  </div>
                  <button 
                    onClick={() => setStep('idle')} 
                    className="text-xs text-red-500 hover:text-red-400 flex items-center gap-1 font-medium transition-colors"
                  >
                    Reset & Scan New <RefreshCw className="w-3 h-3" />
                  </button>
                </div>

                <div className="bg-zinc-950 border border-zinc-800/60 p-3 rounded-lg flex items-center justify-between">
                  <div className="truncate">
                    <span className="font-semibold text-white text-xs block truncate">{productName}</span>
                    <span className="text-[10px] text-zinc-500 block truncate max-w-[200px]">{productDesc}</span>
                  </div>
                  <div className="flex gap-1">
                    {keywords.slice(0, 2).map((k, idx) => (
                      <span key={idx} className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                        #{k.replace(' ', '')}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Live Post Scans</h4>

                <div className="space-y-3">
                  {posts.map((post) => {
                    const isSelected = selectedPost && selectedPost.id === post.id;
                    return (
                      <div
                        key={post.id}
                        onClick={() => selectPost(post)}
                        className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isSelected 
                            ? 'bg-red-500/5 border-red-500/50 shadow-md shadow-red-500/5' 
                            : 'bg-zinc-900/30 border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-800'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[11px] font-bold text-zinc-400">{post.subreddit}</span>
                          <span className="text-[10px] text-zinc-500">{post.time}</span>
                        </div>
                        <h5 className="font-bold text-sm text-zinc-200 leading-snug mb-2 line-clamp-1">
                          {post.title}
                        </h5>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-500">by {post.author}</span>
                          
                          {/* AI Score Badge */}
                          <div className={`px-2 py-0.5 rounded-full text-xs font-bold border ${
                            post.score >= 90 
                              ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                              : post.score >= 80 
                                ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' 
                                : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                          }`}>
                            Score: {post.score}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: AI Detail Analyzer & Draft suggestions */}
              <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-between min-h-[480px]">
                {selectedPost ? (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    
                    {/* Post Content Display */}
                    <div className="space-y-4">
                      <div className="border-b border-zinc-800/80 pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-semibold rounded">
                              {selectedPost.subreddit}
                            </span>
                            <span className="text-xs text-zinc-500">Posted by {selectedPost.author}</span>
                          </div>
                          <span className="text-xs text-zinc-500">{selectedPost.time}</span>
                        </div>
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-white leading-tight">
                          {selectedPost.title}
                        </h3>
                        <p className="mt-3 text-zinc-300 text-sm leading-relaxed bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/40">
                          {selectedPost.content}
                        </p>
                      </div>

                      {/* AI Diagnostics Panel */}
                      <div className="bg-zinc-950 border border-zinc-800/60 p-4 rounded-xl space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                          <Sparkles className="w-4 h-4 text-amber-500" /> RedShip AI Analysis
                        </div>
                        <div className="grid grid-cols-3 gap-4 border-b border-zinc-800/60 pb-3">
                          <div>
                            <span className="text-[10px] text-zinc-500 block uppercase font-semibold">Match Score</span>
                            <span className={`text-xl font-black ${selectedPost.score >= 90 ? 'text-green-500' : 'text-amber-500'}`}>
                              {selectedPost.score}/100
                            </span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-[10px] text-zinc-500 block uppercase font-semibold">Keyword Hit</span>
                            <span className="text-xs font-mono text-zinc-300 font-semibold bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded inline-block mt-0.5">
                              {keywords[selectedPost.id - 1] || keywords[0]}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-[10px] text-zinc-500 block uppercase font-semibold mb-1">Scoring Rationale</span>
                          <p className="text-xs text-zinc-400 leading-relaxed flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                            {selectedPost.reason}
                          </p>
                        </div>
                      </div>

                      {/* AI Generated Draft Box */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-red-500" /> AI-Generated Outreach Draft
                          </label>
                          <span className="text-[10px] text-zinc-500 italic">Review before posting to keep it genuine</span>
                        </div>
                        <textarea
                          rows="4"
                          value={draftContent}
                          onChange={(e) => setDraftContent(e.target.value)}
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-red-500/50 rounded-xl px-4 py-3 text-zinc-200 text-sm leading-relaxed focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* CTA to copy / write */}
                    <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3 justify-between items-center mt-6">
                      <span className="text-xs text-zinc-500">Edit the draft to add your unique voice & flavor!</span>
                      <button
                        onClick={() => copyToClipboard(draftContent, selectedPost.id)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-lg text-sm transition-all shadow-md active:translate-y-0"
                      >
                        {copiedIndex === selectedPost.id ? (
                          <>
                            Copied! <Check className="w-4 h-4 text-green-600" />
                          </>
                        ) : (
                          <>
                            Copy Response Draft <MessageSquare className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <Sparkles className="w-8 h-8 text-zinc-700 animate-pulse mb-2" />
                    <p className="text-sm text-zinc-500">Select a Reddit post on the left to see details and suggestions.</p>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

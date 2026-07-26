import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RedditSimulator from './components/RedditSimulator';
import Features from './components/Features';
import Process from './components/Process';
import FounderNote from './components/FounderNote';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen selection:bg-red-500/30 selection:text-red-300">
      <Navbar />
      <main>
        {/* Core sections */}
        <Hero />
        <RedditSimulator />
        <Features />
        <Process />
        <FounderNote />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              RedShip<span className="text-red-500">.io</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#simulator" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
              Live Demo <span className="px-1.5 py-0.5 text-[10px] bg-red-500/10 text-red-500 rounded border border-red-500/20 font-bold">New</span>
            </a>
            <a href="#pricing" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              FAQ
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#signin" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Log in
            </a>
            <a 
              href="#signin" 
              className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-300 shadow-md shadow-red-600/20 hover:shadow-red-600/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-72 border-b border-zinc-800' : 'max-h-0'
        } bg-zinc-950/95`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <a 
            href="#features" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-zinc-400 hover:text-white"
          >
            Features
          </a>
          <a 
            href="#simulator" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-zinc-400 hover:text-white"
          >
            Live Demo
          </a>
          <a 
            href="#pricing" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-zinc-400 hover:text-white"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-zinc-400 hover:text-white"
          >
            FAQ
          </a>
          <div className="h-[1px] bg-zinc-800 my-2"></div>
          <div className="flex flex-col gap-3 pt-2">
            <a 
              href="#signin" 
              onClick={() => setIsOpen(false)}
              className="text-center text-zinc-400 hover:text-white py-2 font-medium"
            >
              Log in
            </a>
            <a 
              href="#signin" 
              onClick={() => setIsOpen(false)}
              className="inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-500 font-medium transition-colors"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

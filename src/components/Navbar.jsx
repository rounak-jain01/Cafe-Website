import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Coffee, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Yeh code scroll detect karta hai premium glass effect ke liye
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Dynamic classes: Scroll karne par bg, padding aur shadow change hogi
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-tr from-orange-600 to-orange-400 p-2.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-black text-2xl tracking-tighter">
              LOCAL<span className="text-orange-500">CAFE</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Animated Links */}
            <Link to="/" className="text-slate-300 hover:text-white font-medium text-sm uppercase tracking-widest transition-colors relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            <a href="#about" className="text-slate-300 hover:text-white font-medium text-sm uppercase tracking-widest transition-colors relative group">
              About
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#location" className="text-slate-300 hover:text-white font-medium text-sm uppercase tracking-widest transition-colors relative group">
              Location
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            
            {/* Glowing Order Button */}
            <Link to="/menu" className="relative group">
              <span className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300"></span>
              <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white px-7 py-2.5 rounded-full font-bold flex items-center gap-2 border border-orange-400/50">
                <span>Order Now</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay (Smooth Slide-in) */}
      <div className={`md:hidden fixed inset-0 top-[76px] bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 space-y-6 h-full">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-white text-2xl font-semibold border-b border-white/5 pb-4 transition-colors">
            Home
          </Link>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-white text-2xl font-semibold border-b border-white/5 pb-4 transition-colors">
            About
          </a>
          <a href="#location" onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-white text-2xl font-semibold border-b border-white/5 pb-4 transition-colors">
            Location
          </a>
          
          <Link to="/menu" onClick={() => setIsOpen(false)} className="mt-8 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-4 rounded-2xl font-bold text-lg text-center shadow-[0_0_20px_rgba(234,88,12,0.3)] flex justify-center items-center gap-2">
            <span>View Digital Menu</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
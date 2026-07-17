import React from 'react';
import { Coffee, Heart, Star } from 'lucide-react';

export default function AboutSection() {
  return (
    // Background Hero section se match karne ke liye slate-900 rakha hai
    <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Images Grid (Premium Layout) */}
          <div className="relative">
            {/* Main Big Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative z-10 w-[85%]">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlapping Small Image */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 w-2/3 md:w-3/5 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-900 z-20">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" 
                alt="Coffee Beans" 
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Side: Text & Story */}
          <div className="mt-16 lg:mt-0 flex flex-col justify-center">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              More than just coffee, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                it's an experience.
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
              At The Local Cafe, we believe that every cup tells a story. Founded right here in Bhopal, our goal is to create a cozy sanctuary where great conversations happen over perfectly roasted beans and freshly baked delights.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-2xl flex-shrink-0 border border-orange-500/20">
                  <Coffee className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Premium Roasts</h4>
                  <p className="text-slate-400 text-sm">Handpicked artisanal beans brewed to absolute perfection.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-2xl flex-shrink-0 border border-orange-500/20">
                  <Heart className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Cozy Ambience</h4>
                  <p className="text-slate-400 text-sm">Aesthetic interiors designed for your comfort and peace.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-2xl flex-shrink-0 border border-orange-500/20">
                  <Star className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Baked Fresh</h4>
                  <p className="text-slate-400 text-sm">Delicious pastries and fast food made with love every day.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
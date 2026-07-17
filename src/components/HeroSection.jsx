import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Phone } from 'lucide-react'; // Phone icon add kiya hai

export default function HeroSection() {
  return (
    // min-h-screen se yeh puri screen cover karega. relative se hum image piche laga payenge.
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Cafe Interior" 
          className="w-full h-full object-cover"
        />
        {/* Yeh dark gradient text ko padhne mein asaan banayega */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900"></div>
      </div>

      {/* Main Content Container (z-10 taaki image ke upar rahe) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 md:mt-0">
        
        {/* Chota sa badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-sm font-semibold tracking-widest uppercase mb-6 shadow-2xl">
          <Coffee className="w-4 h-4" />
          <span>Welcome to</span>
        </div>
        
        {/* Responsive Heading: Mobile par 5xl, Laptop (md) par 7xl */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-lg leading-tight">
          THE LOCAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">CAFE</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
          Experience the finest blends and handcrafted pastries in a cozy, aesthetic environment.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button -> Sidha Menu Par */}
          <Link 
            to="/menu" 
            className="group flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] w-full sm:w-auto justify-center"
          >
            <span>View Digital Menu</span>
            {/* Arrow icon jo hover karne par aage khiskega */}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Book A Table Button -> Seedha Call Lagayega */}
          <a 
            href="tel:+919926850762"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            <span>Book a Table</span>
          </a>
          
        </div>
      </div>
      
    </div>
  );
}
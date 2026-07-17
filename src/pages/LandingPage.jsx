import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function LandingPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Navbar ko sabse upar add kar diya */}
      <Navbar />
      
      <HeroSection />
      
      <div className="py-20 text-center text-slate-400">
        <p>More sections (About, Location) coming soon...</p>
      </div>
    </div>
  );
}
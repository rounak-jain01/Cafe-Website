import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import FeaturedSection from '../components/FeaturedSection';
import GallerySection from '../components/GallerySection';

// API imports
import { fetchMenuData, fetchGalleryData } from '../services/googleSheet';
import { Loader2 } from 'lucide-react';

export default function LandingPage() {
  const [specials, setSpecials] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ek saath dono sheets (Menu aur Gallery) ka data mangwa rahe hain
    const loadData = async () => {
      try {
        const [menuData, galleryData] = await Promise.all([
          fetchMenuData(),
          fetchGalleryData()
        ]);

        // Menu data me se Specials aur Bestsellers alag karna
        const todaysSpecials = menuData.filter(item => item.is_todays_special?.toLowerCase() === 'yes');
        const topSellers = menuData.filter(item => item.is_bestseller?.toLowerCase() === 'yes');

        setSpecials(todaysSpecials);
        setBestsellers(topSellers);
        setGallery(galleryData);
        
        setLoading(false);
      } catch (error) {
        console.error("Error loading landing page data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FCFBF8] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-amber-700 animate-spin mb-4" />
        <p className="text-stone-500 font-serif tracking-widest uppercase text-sm">Preparing your experience...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFBF8] min-h-screen overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      
      <HeroSection />
      
      {/* Naye Live Sections */}
      <FeaturedSection specials={specials} bestsellers={bestsellers} />
      
      <AboutSection />
      
      {/* Live Gallery Section */}
      <GallerySection photos={gallery} />
      
      <LocationSection />
      
      <Footer />
    </div>
  );
}
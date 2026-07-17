import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Loader2, BookmarkCheck } from 'lucide-react';
import { fetchMenuData } from '../services/googleSheet';
import MenuCard from '../components/MenuCard';

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selection, setSelection] = useState({});
  const [activeTab, setActiveTab] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMenuData();
        setMenuItems(data);
        const uniqueCats = [...new Set(data.map(item => item.category))];
        setCategories(['All', ...uniqueCats]);
        setLoading(false);
      } catch (error) {
        console.error("Error loading menu:", error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setActiveTab('All');
        return;
      }
      let current = 'All';
      categories.filter(c => c !== 'All').forEach(cat => {
        const element = document.getElementById(`section-${cat}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) current = cat;
        }
      });
      setActiveTab(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  const scrollToCategory = (category) => {
    setActiveTab(category);
    if (category === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(`section-${category}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelect = (id) => setSelection(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const handleDeselect = (id) => {
    setSelection(prev => {
      const newSel = { ...prev };
      if (newSel[id] > 1) newSel[id] -= 1;
      else {
        delete newSel[id];
        if (Object.keys(newSel).length === 0) setIsCartOpen(false);
      }
      return newSel;
    });
  };

  const totalSelectedItems = Object.values(selection).reduce((a, b) => a + b, 0);
  
  const groupedMenu = categories.filter(c => c !== 'All').reduce((acc, category) => {
    acc[category] = menuItems.filter(item => item.category === category);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950">
        <Loader2 className="w-8 h-8 text-orange-500 animate-spin mb-4" />
        <p className="text-neutral-400 font-sans tracking-widest uppercase text-sm">Loading Menu...</p>
      </div>
    );
  }

  return (
    // Single, clean dark background
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200 pb-32">
      
      {/* Top Nav - Dark Glassmorphism */}
      <div className="bg-neutral-950/80 backdrop-blur-xl pt-6 pb-4 px-6 md:px-12 sticky top-0 z-30 border-b border-neutral-800 flex items-center justify-between">
        <Link to="/" className="p-2 -ml-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
          <ChevronLeft className="w-6 h-6 stroke-[2]" />
        </Link>
        <div className="text-center flex-1">
          <h1 className="text-xl font-sans font-bold text-white tracking-[0.2em] uppercase">
            Local Cafe
          </h1>
        </div>
        <div className="w-8"></div>
      </div>

      {/* Tabs / Categories Slider */}
      <div className="sticky top-[72px] md:top-[76px] z-20 bg-neutral-950/90 backdrop-blur-md py-4 px-6 md:px-12 border-b border-neutral-900 shadow-xl">
        <div className="flex space-x-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => scrollToCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]' 
                  : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Menu Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-10 space-y-16">
        {Object.entries(groupedMenu).map(([category, items]) => (
          <div key={category} id={`section-${category}`} className="scroll-mt-40">
            
            {/* Highly Visible Category Heading */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide">
                {category}
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <MenuCard 
                  key={index} 
                  item={item} 
                  cartQty={selection[item.id]} 
                  onAdd={handleSelect}
                  onRemove={handleDeselect}
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>

      {/* Bottom Floating Bar */}
      {totalSelectedItems > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-0 w-full px-4 z-40 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="max-w-3xl mx-auto bg-neutral-900 text-white rounded-2xl p-4 flex justify-between items-center border border-neutral-700 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500/20 p-2.5 rounded-xl text-orange-500">
                <BookmarkCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-sans font-bold text-lg">{totalSelectedItems} Item{totalSelectedItems > 1 ? 's' : ''} Added</p>
                <p className="text-[11px] text-neutral-400 uppercase tracking-widest mt-0.5">Ready for order</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm tracking-wider font-bold px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
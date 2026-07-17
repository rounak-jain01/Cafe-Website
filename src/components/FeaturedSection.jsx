import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FeaturedSection({ specials, bestsellers }) {
  if (!specials?.length && !bestsellers?.length) return null;

  return (
    // Background ab dark slate hai
    <section className="py-24 bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Today's Special Spotlight */}
        {specials?.length > 0 && (
          <div className="mb-24">
            <div className="flex flex-col items-center mb-12">
              <span className="text-orange-500 mb-2">❖</span>
              <h2 className="text-sm tracking-[0.3em] text-orange-500 font-bold uppercase mb-2">Exclusive</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white tracking-wider">Today's Special</h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-900/50 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/10">
              <div className="w-full md:w-1/2 h-72 md:h-96 rounded-2xl overflow-hidden relative shadow-lg">
                <img 
                  src={specials[0].image} 
                  alt={specials[0].name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h4 className="text-3xl md:text-4xl font-serif text-white mb-4">{specials[0].name}</h4>
                <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                  {specials[0].description}
                </p>
                <div className="flex items-center gap-8">
                  {/* PRICE KO BADA AUR HIGHLIGHT KIYA HAI */}
                  <span className="text-4xl font-black text-orange-500">₹{specials[0].price}</span>
                  
                  <Link to="/menu" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bestsellers Grid */}
        {bestsellers?.length > 0 && (
          <div>
            <div className="flex flex-col items-center mb-12">
              <span className="text-slate-500 mb-2">❖</span>
              <h2 className="text-sm tracking-[0.3em] text-slate-400 font-bold uppercase mb-2">Crowd Favorites</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-white tracking-wider">Our Best Sellers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bestsellers.slice(0, 3).map((item, index) => (
                <div key={index} className="group cursor-pointer bg-slate-900/30 p-4 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors">
                  <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col mb-2">
                    <h4 className="text-xl font-serif text-white mb-2">{item.name}</h4>
                    {/* Bestseller Price Highlight */}
                    <span className="text-2xl font-black text-orange-500">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-slate-400 font-light line-clamp-2 mt-2">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/menu" className="inline-flex items-center gap-3 bg-white hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-lg">
                View Full Menu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}
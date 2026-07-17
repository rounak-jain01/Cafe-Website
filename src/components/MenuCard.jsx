import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function MenuCard({ item, cartQty = 0, onAdd, onRemove }) {
  const isVeg = item.type?.toLowerCase() === 'veg';
  const isBestseller = item.is_bestseller?.toLowerCase() === 'yes';

  return (
    // Dark transparent card
    <div className="py-6 border-b border-white/10 flex flex-col md:flex-row gap-6 group hover:bg-white/5 transition-colors duration-300 px-4 rounded-2xl">
      
      {/* Dish Image */}
      <div className="relative w-full md:w-40 h-56 md:h-32 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border border-white/10">
        <img 
          src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500"} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-2 left-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-md border border-white/10">
          <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </div>
      </div>

      {/* Dish Details */}
      <div className="flex flex-col flex-1 justify-center">
        
        <div className="flex justify-between items-start mb-2 gap-4">
          <div className="flex flex-col">
            <h3 className="text-xl md:text-2xl font-serif text-white font-bold tracking-wide">
              {item.name}
            </h3>
            {isBestseller && (
              <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500 uppercase mt-1">
                ★ Signature
              </span>
            )}
          </div>
          {/* PRICE - BADA AUR BRIGHT ORANGE */}
          <span className="text-2xl font-black text-orange-500 tracking-tight">₹{item.price}</span>
        </div>

        <p className="text-slate-400 text-sm font-light leading-relaxed mb-5 line-clamp-2 pr-4">
          {item.description}
        </p>
        
        <div className="mt-auto">
          {cartQty > 0 ? (
            <div className="inline-flex items-center gap-4 bg-orange-600 rounded-lg px-4 py-1.5 shadow-lg">
              <button onClick={() => onRemove(item.id)} className="text-white hover:text-slate-200 p-1">
                <Minus className="w-4 h-4" strokeWidth={3} />
              </button>
              <span className="font-bold text-lg text-white w-6 text-center">{cartQty}</span>
              <button onClick={() => onAdd(item.id)} className="text-white hover:text-slate-200 p-1">
                <Plus className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => onAdd(item.id)} 
              className="text-xs tracking-widest uppercase font-bold text-white bg-slate-800 hover:bg-orange-600 border border-slate-700 hover:border-orange-500 transition-all duration-300 rounded-lg px-6 py-2.5 inline-flex items-center gap-2 shadow-md"
            >
              <Plus className="w-4 h-4" /> Add Item
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
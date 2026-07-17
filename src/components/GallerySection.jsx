import React from 'react';

export default function GallerySection({ photos }) {
  if (!photos || photos.length === 0) return null;

  return (
    <section className="py-24 bg-stone-900 text-[#FCFBF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm tracking-[0.3em] text-amber-500 font-bold uppercase mb-2">The Vibe</h2>
            <h3 className="text-4xl md:text-5xl font-serif tracking-wider">Step Inside</h3>
          </div>
          <p className="text-stone-400 max-w-sm text-sm leading-relaxed font-light">
            Experience the warmth, the aroma, and the perfect ambiance designed for your comfort.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <div className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {photos.map((photo, index) => (
          <div key={index} className="relative shrink-0 w-[80vw] md:w-[400px] h-[500px] snap-center group rounded-2xl overflow-hidden">
            <img 
              src={photo.image_url} 
              alt={photo.caption || 'Cafe Image'} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Elegant Gradient & Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-xl font-serif text-white tracking-wide">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
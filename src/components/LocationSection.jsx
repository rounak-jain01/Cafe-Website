import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function LocationSection() {
  // Yahan apna exact address daal sakte hain
  const mapEmbedUrl = "https://maps.google.com/maps?q=MP%20Nagar,%20Bhopal&t=&z=14&ie=UTF8&iwloc=&output=embed";
  
  // Yeh link customer ke phone mein seedha Google Map App khol dega route ke sath
  const mapDirectUrl = "https://www.google.com/maps/dir/?api=1&destination=MP+Nagar,+Bhopal";

  return (
    <section id="location" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-orange-500 uppercase mb-3">Visit Us</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">Where to find us</h3>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Details */}
          <div className="space-y-6">
            
            {/* Address Card */}
            <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors flex items-start gap-6">
              <div className="bg-orange-500/10 w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                <MapPin className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Our Address</h4>
                <p className="text-neutral-400 leading-relaxed">
                  123 Brew Street, Coffee District<br />MP Nagar, Bhopal, MP 462011
                </p>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors flex items-start gap-6">
              <div className="bg-orange-500/10 w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                <Clock className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Opening Hours</h4>
                <p className="text-neutral-400 leading-relaxed">
                  Mon - Fri: 8:00 AM - 10:00 PM<br />Sat - Sun: 9:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors flex items-start gap-6">
              <div className="bg-orange-500/10 w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center">
                <Phone className="text-orange-500 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Contact</h4>
                <p className="text-neutral-400 leading-relaxed">
                  +91 98765 43210<br />hello@localcafe.com
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Google Map */}
          <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group">
            
            {/* Embedded Map */}
            <iframe 
              src={mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
            
            {/* Dark Gradient Overlay for better UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Floating 'Get Directions' Button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto z-10">
              <a 
                href={mapDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold tracking-widest shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:shadow-[0_10px_40px_rgba(234,88,12,0.5)] transition-all uppercase text-sm"
              >
                <Navigation className="w-5 h-5 fill-white" />
                Get Directions
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, RectangleCircle } from 'lucide-react';

export default function Footer() {
  return (
    // Ekdam dark base (slate-950) taaki page ka end solid lage
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Top Section: 3 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Brand & Bio (Takes up 2 columns space) */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 text-2xl font-black text-white tracking-widest mb-6">
              THE LOCAL <span className="text-orange-500">CAFE</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-6">
              Brewing moments and baking memories in the heart of Bhopal. Experience the perfect blend of taste, aesthetics, and comfort.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white hover:scale-110 transition-all">
                <RectangleCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white hover:scale-110 transition-all">
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-orange-500 hover:text-white hover:scale-110 transition-all">
                <RectangleCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4 font-medium">
              <li>
                <Link to="/" className="hover:text-orange-500 hover:translate-x-1 inline-block transition-all">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-orange-500 hover:translate-x-1 inline-block transition-all">Digital Menu</Link>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500 hover:translate-x-1 inline-block transition-all">Our Story</a>
              </li>
              <li>
                <a href="#location" className="hover:text-orange-500 hover:translate-x-1 inline-block transition-all">Find Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">123 Brew Street, MP Nagar,<br />Bhopal, MP 462011</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                {/* Click to call feature */}
                <a href="tel:+919926850762" className="hover:text-orange-500 transition-colors text-sm">
                  +91 9926850762
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:hello@localcafe.com" className="hover:text-orange-500 transition-colors text-sm">
                  hello@localcafe.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} The Local Cafe. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 font-medium">
            Crafted with <span className="text-orange-500 text-lg leading-none">♥</span> for Cafe Lovers
          </p>
        </div>

      </div>
    </footer>
  );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages import kar rahe hain
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';

export default function App() {
  return (
    <BrowserRouter>
      {/* Global wrapper: bg color set kiya aur text select karne par orange highlight aayega */}
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white antialiased">
        
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Menu Page Route */}
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}
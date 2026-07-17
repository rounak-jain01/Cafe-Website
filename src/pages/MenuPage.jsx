import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-4xl font-black tracking-tight text-slate-900">Menu Page Setup</h1>
      <Link to="/" className="mt-6 px-8 py-3 bg-slate-900 text-white font-bold rounded-full shadow-lg hover:shadow-slate-900/30 transition-all hover:-translate-y-0.5">
        ⬅ Back to Home
      </Link>
    </div>
  );
}
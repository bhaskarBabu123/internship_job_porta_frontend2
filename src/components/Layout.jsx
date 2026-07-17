import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export function Layout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex font-[IBM_Plex_Sans]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
      `}</style>

      {/* Branded panel */}
      <div className="hidden lg:flex lg:w-[45%] relative overflow-hidden">
        <img src="https://images.huffingtonpost.com/2015-02-05-shutterstock_4855602111024x675.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1B2D]/90 via-[#0F1B2D]/80 to-[#0F1B2D]/95" />s

        <div className="relative flex flex-col justify-between p-12 text-white w-full">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <span className="w-9 h-9 rounded-lg bg-[#F5A623] flex items-center justify-center rotate-[-8deg]">
              <Rocket size={18} className="text-[#0F1B2D]" strokeWidth={2.5} />
            </span>
            <span className="font-[Outfit] font-bold text-lg tracking-tight">
              Quick <span className="text-[#F5A623]">Find</span>
            </span>
          </Link>

          <div>
            <span className="font-[JetBrains_Mono] text-[11px] tracking-widest uppercase text-[#F5A623]">Median time to offer</span>
            <p className="font-[Outfit] font-extrabold text-6xl mt-2 mb-4">9 days</p>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              From first application to signed offer — across every role posted on the board this quarter.
            </p>
          </div>

          <div className="flex gap-8 font-[JetBrains_Mono] text-xs text-white/50">
            <span><span className="text-white font-semibold">10K+</span> roles live</span>
            <span><span className="text-white font-semibold">5K+</span> companies</span>
            <span><span className="text-white font-semibold">50K+</span> placed</span>
          </div>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex items-center justify-center bg-[#EEF2F6] px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2 w-fit mb-10">
            <span className="w-8 h-8 rounded-lg bg-[#0F1B2D] flex items-center justify-center rotate-[-8deg]">
              <Rocket size={16} className="text-[#F5A623]" strokeWidth={2.5} />
            </span>
            <span className="font-[Outfit] font-bold text-base tracking-tight text-[#0F1B2D]">
              Launch<span className="text-[#2C5AA0]">pad</span>
            </span>
          </Link>

          <h1 className="font-[Outfit] font-bold text-2xl sm:text-3xl text-[#0F1B2D] mb-2">{title}</h1>
          {subtitle && <p className="text-[#0F1B2D]/50 text-sm mb-8">{subtitle}</p>}

          <div className="bg-white rounded-2xl border border-[#0F1B2D]/8 shadow-xl shadow-[#0F1B2D]/5 p-6 sm:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
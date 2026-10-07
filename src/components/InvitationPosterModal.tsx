import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';

interface InvitationPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvitationPosterModal: React.FC<InvitationPosterModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B2332]/80 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Click Backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Poster Container Card */}
      <div
        className={`relative z-10 w-full max-w-lg bg-[#FAF8F4] border-2 border-[#C9A96E]/50 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 ease-out transform ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Prominent Top-Right Cross Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 rounded-full bg-[#432C4D] text-[#FAF8F4] hover:bg-[#6F557D] active:scale-90 transition-all shadow-xl border border-[#C9A96E]/50 flex items-center justify-center group"
          aria-label="Close invitation poster and enter website"
          title="Close Invitation"
        >
          <X className="w-6 h-6 text-[#C9A96E] group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Poster Visual Canvas */}
        <div className="relative p-6 sm:p-10 text-center space-y-6 overflow-hidden min-h-[560px] flex flex-col justify-between select-none">
          
          {/* Top Translucent Purple Drape & Gold Particles Decorative Canvas */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-bl from-[#6F557D]/30 via-[#DCD2E3]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-tr from-[#6F557D]/25 via-[#EEE8F1]/40 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Top Botanical Flowers Visual Motif */}
          <svg className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-40 text-[#6F557D]" viewBox="0 0 200 200" fill="none">
            <path d="M200,0 C150,40 120,100 130,160 C150,140 180,100 200,0 Z" fill="#DCD2E3" />
            <circle cx="160" cy="50" r="25" fill="#6F557D" fillOpacity="0.25" />
            <circle cx="140" cy="70" r="18" fill="#C9A96E" fillOpacity="0.2" />
          </svg>

          <svg className="absolute bottom-0 left-0 w-44 h-44 pointer-events-none opacity-35 text-[#6F557D]" viewBox="0 0 200 200" fill="none">
            <path d="M0,200 C50,160 80,100 70,40 C50,60 20,100 0,200 Z" fill="#DCD2E3" />
            <circle cx="40" cy="150" r="28" fill="#6F557D" fillOpacity="0.3" />
            <circle cx="60" cy="130" r="20" fill="#C9A96E" fillOpacity="0.25" />
          </svg>

          {/* Header Department Tag */}
          <div className="pt-2">
            <div className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#432C4D] uppercase border-b border-[#C9A96E]/40 pb-1">
              . DEPT. OF MATHEMATICS .
            </div>
          </div>

          {/* Large Poster Typography */}
          <div className="space-y-1 relative z-10 py-2">
            <div className="font-script text-6xl sm:text-7xl md:text-8xl text-[#432C4D] drop-shadow-sm font-normal tracking-wide leading-none">
              Integral
            </div>
            <div className="font-script text-5xl sm:text-6xl md:text-7xl text-[#6F557D] font-normal tracking-wide leading-none -mt-3">
              Festa
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#71806B] pt-2">
              FRESHERS WELCOME
            </div>
          </div>

          {/* Theme Quote */}
          <div className="font-serif italic text-lg sm:text-xl text-[#432C4D] tracking-wider font-semibold">
            " AN INFINITY FUSION "
          </div>

          {/* Event Details Card */}
          <div className="bg-[#EEE8F1]/70 backdrop-blur-md p-4 rounded-2xl border border-[#C9A96E]/40 max-w-xs mx-auto space-y-1 text-center shadow-sm">
            <div className="font-serif text-lg sm:text-xl font-bold text-[#432C4D]">
              14TH OCT 2026
            </div>
            <div className="text-xs font-semibold text-[#6F557D]">
              AT — 10.00 AM
            </div>
            <div className="text-xs font-bold text-[#432C4D] pt-1 uppercase tracking-wide">
              {EVENT_DETAILS.venue}
            </div>
            <div className="text-[11px] text-[#71806B] uppercase tracking-widest font-medium">
              ADASPUR, CUTTACK
            </div>
          </div>

          {/* Bottom Action Button to Enter Website */}
          <div className="pt-2 relative z-10">
            <button
              onClick={onClose}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#432C4D] to-[#6F557D] text-[#FAF8F4] font-medium text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 shimmer-btn group"
            >
              <Sparkles className="w-4 h-4 text-[#C9A96E]" />
              <span>Enter Festa Website</span>
              <ArrowRight className="w-4 h-4 text-[#C9A96E] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

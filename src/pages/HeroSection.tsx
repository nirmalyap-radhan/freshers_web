import React from 'react';
import type { PageId } from '../types';
import { EVENT_DETAILS } from '../data/mockData';
import { CountdownTimer } from '../components/CountdownTimer';
import { Sparkles, ArrowRight, Calendar, MapPin, Clock, Ticket } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenRSVP: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenRSVP }) => {
  return (
    <section className="relative min-h-[calc(100vh-65px)] flex flex-col justify-between p-4 md:p-8 overflow-hidden text-center">
      {/* Central Hero Content Box */}
      <div className="my-auto py-6 max-w-2xl mx-auto space-y-6 relative z-10">
        
        {/* Department Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEE8F1]/80 border border-[#C9A96E]/40 text-[#432C4D] text-[11px] md:text-xs tracking-[0.2em] font-medium uppercase shadow-sm animate-fadeIn">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
          {EVENT_DETAILS.department}
        </div>

        {/* Main Title Block */}
        <div className="space-y-1">
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#432C4D] drop-shadow-sm font-normal tracking-wide">
            Integral Festa
          </h1>
          <div className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-[#6F557D]">
            "{EVENT_DETAILS.subtitle}"
          </div>
          <div className="text-xs sm:text-sm font-semibold text-[#71806B] tracking-widest uppercase mt-1">
            {EVENT_DETAILS.tagline}
          </div>
        </div>

        {/* Live Countdown Timer */}
        <CountdownTimer />

        {/* Event Information Pill Card */}
        <div className="glass-card p-4 rounded-3xl border border-[#DCD2E3] max-w-xl mx-auto shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="flex items-start gap-3 p-2 rounded-2xl bg-[#FAF8F4]/80">
              <div className="p-2.5 rounded-xl bg-[#EEE8F1] text-[#6F557D]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#71806B] uppercase tracking-wider">Date & Time</div>
                <div className="font-serif font-bold text-sm text-[#432C4D]">14th October 2026</div>
                <div className="text-xs text-[#35283A]/70 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C9A96E]" /> 10:00 AM Onwards
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2 rounded-2xl bg-[#FAF8F4]/80">
              <div className="p-2.5 rounded-xl bg-[#EEE8F1] text-[#6F557D]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-semibold text-[#71806B] uppercase tracking-wider">Venue</div>
                <div className="font-serif font-bold text-sm text-[#432C4D]">IQAC Hall</div>
                <div className="text-xs text-[#35283A]/70 truncate">
                  Science PG Block, Adaspur
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('about')}
            className="w-full sm:w-auto py-3.5 px-7 rounded-2xl bg-[#432C4D] hover:bg-[#6F557D] text-[#FAF8F4] font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 shimmer-btn"
          >
            Explore Festa <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('events')}
            className="w-full sm:w-auto py-3.5 px-7 rounded-2xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] border border-[#DCD2E3] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            View Schedule
          </button>

          <button
            onClick={onOpenRSVP}
            className="w-full sm:w-auto py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#C9A96E] to-[#EAD5A8] text-[#432C4D] font-bold text-sm transition-all duration-300 shadow-md hover:shadow-gold-glow hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4" /> Get Fresher Pass
          </button>
        </div>

      </div>

      {/* Footer Motif Banner */}
      <div className="pt-4 border-t border-[#DCD2E3]/40 text-center text-xs text-[#71806B] font-light flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
        <span>Celebration of Infinity, Logic, and Creative Genius</span>
      </div>
    </section>
  );
};

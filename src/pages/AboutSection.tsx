import React from 'react';
import type { PageId } from '../types';
import { Compass, Brain, Award, Music, Heart, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenRSVP: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenRSVP }) => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6 text-[#6F557D]" />,
      title: "Infinity Fusion",
      desc: "Merging mathematical rigour with artistic celebration, creating a harmonious bridge between logic and creativity."
    },
    {
      icon: <Music className="w-6 h-6 text-[#6F557D]" />,
      title: "Cultural Extravaganza",
      desc: "Featuring acoustic music, fusion dance performances, stage plays, and talent showcases by senior scholars and freshers."
    },
    {
      icon: <Award className="w-6 h-6 text-[#6F557D]" />,
      title: "Crowning Titles",
      desc: "The traditional crowning of Mr. & Ms. Integral Festa 2026 alongside exciting puzzle competition awards."
    },
    {
      icon: <Heart className="w-6 h-6 text-[#6F557D]" />,
      title: "Warm Departmental Bond",
      desc: "Creating lifelong memories, mentorship relationships, and a vibrant community in the Department of Mathematics."
    }
  ];

  return (
    <section className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <Compass className="w-3.5 h-3.5" /> Department Tradition
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D] leading-tight">
          Where Mathematics <br />
          <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">Meets Celebration</span>
        </h2>

        <p className="text-sm md:text-base text-[#35283A]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Integral Festa is the premier annual freshers welcome event organized by the Department of Mathematics. It is designed as a grand celebration where abstract theorems, infinite series, and geometric beauty converge with youthful energy, music, and camaraderie.
        </p>
      </div>

      {/* Quote Banner Card */}
      <div className="glass-card p-6 md:p-8 rounded-3xl border border-[#C9A96E]/40 relative overflow-hidden text-center shadow-lg">
        <div className="absolute -top-6 -left-6 font-serif text-8xl text-[#6F557D]/10 pointer-events-none">
          ∫
        </div>
        <div className="relative z-10 space-y-2">
          <p className="font-serif italic text-lg md:text-xl text-[#432C4D]">
            "Mathematics is the music of reason, and Integral Festa is the symphony where every mind finds its infinite expression."
          </p>
          <div className="text-xs font-semibold text-[#71806B] uppercase tracking-wider">
            — Department of Mathematics, Science PG Block
          </div>
        </div>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="glass-card p-5 rounded-3xl border border-[#DCD2E3] hover:border-[#6F557D]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg space-y-3"
          >
            <div className="p-3 rounded-2xl bg-[#EEE8F1] w-fit border border-[#DCD2E3]/60">
              {item.icon}
            </div>
            <h3 className="font-serif text-xl font-bold text-[#432C4D]">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-[#35283A]/75 leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Bottom CTA Box */}
      <div className="bg-gradient-to-r from-[#432C4D] to-[#6F557D] p-6 md:p-8 rounded-3xl text-[#FAF8F4] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-[#C9A96E]/30">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs text-[#C9A96E] font-medium tracking-widest uppercase">
            Be Part of The Infinite Fusion
          </div>
          <div className="font-serif text-xl md:text-2xl font-bold">
            Are you ready to join us on 14th Oct?
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate('events')}
            className="py-3 px-5 rounded-2xl bg-[#FAF8F4] text-[#432C4D] text-xs font-bold hover:bg-[#EEE8F1] transition-colors"
          >
            View Timeline
          </button>
          <button
            onClick={onOpenRSVP}
            className="py-3 px-5 rounded-2xl bg-[#C9A96E] text-[#432C4D] text-xs font-bold hover:bg-[#EAD5A8] transition-colors flex items-center gap-1.5 shadow-md"
          >
            Register Pass <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

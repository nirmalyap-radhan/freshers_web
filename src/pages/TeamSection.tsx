import React from 'react';
import { GraduationCap, Quote, Mail, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <GraduationCap className="w-4 h-4 text-[#C9A96E]" /> HOD's Welcome Desk
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D]">
          Message from the <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">Head of Department</span>
        </h2>

        <p className="text-xs md:text-sm text-[#35283A]/70 font-light max-w-lg mx-auto">
          Inspiring words of welcome from Dr. Ajit Kumar Patra to the freshers batch of 2026.
        </p>
      </div>

      {/* Main HOD Spotlight Card */}
      <div className="glass-card p-6 md:p-10 rounded-[36px] border-2 border-[#C9A96E]/40 shadow-2xl relative overflow-hidden space-y-6">
        {/* Background Decorative Element */}
        <div className="absolute -top-12 -right-12 font-serif text-9xl text-[#6F557D]/10 pointer-events-none select-none">
          ∫
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* HOD Photo & Badge Container */}
          <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-[3px] bg-gradient-to-tr from-[#6F557D] via-[#C9A96E] to-[#FAF8F4] shadow-xl group">
              <img
                src="/gallery/HOD.JPG"
                alt="Dr. Ajit Kumar Patra - Head of Department"
                onError={(e) => {
                  // Fallback if image path case differs
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
                }}
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute bottom-1 right-2 p-2.5 rounded-full bg-[#432C4D] text-[#C9A96E] border-2 border-[#FAF8F4] shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#432C4D]">
                Dr. Ajit Kumar Patra
              </h3>
              <div className="text-xs font-semibold text-[#6F557D] mt-0.5">
                Head of Department (Mathematics)
              </div>
              <div className="text-[11px] text-[#71806B] font-medium mt-1">
                Science PG Block, Adaspur, Cuttack
              </div>
            </div>

            <div className="pt-1 flex items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#EEE8F1] text-[10px] font-bold text-[#432C4D] border border-[#DCD2E3] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C9A96E]" /> HOD & Patron
              </span>
            </div>
          </div>

          {/* HOD Welcome Message Content */}
          <div className="md:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-2 text-[#C9A96E]">
              <Quote className="w-8 h-8 text-[#C9A96E] opacity-60" />
            </div>

            <blockquote className="font-serif italic text-base sm:text-lg md:text-xl text-[#35283A] leading-relaxed font-light">
              "On behalf of the Department of Mathematics, I extend my warmest welcome to the incoming batch of 2026. Mathematics is not merely an academic discipline; it is an art of critical thinking, logical elegance, and infinite possibilities. Integral Festa: <span className="font-semibold text-[#6F557D]">'An Infinity Fusion'</span> symbolizes our commitment to nurturing both intellectual excellence and creative expression. May your journey with us be filled with curiosity, discovery, and lifelong achievements."
            </blockquote>

            <div className="pt-4 border-t border-[#C9A96E]/30 flex flex-wrap items-center justify-between gap-3 text-xs text-[#71806B]">
              <div className="font-serif font-bold text-[#432C4D] text-sm">
                — Dr. Ajit Kumar Patra
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="mailto:hod.math@sciencepg.edu.in"
                  className="px-3 py-1.5 rounded-xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] text-xs font-semibold transition-colors flex items-center gap-1.5 border border-[#DCD2E3]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#6F557D]" /> Contact HOD Desk
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

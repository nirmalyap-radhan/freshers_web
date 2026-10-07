import React from 'react';
import { MapPin, Calendar, Clock, Navigation, Mail, Share2, Ticket, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenRSVP: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenRSVP }) => {
  return (
    <section className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <MapPin className="w-3.5 h-3.5" /> Venue & Registration
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D]">
          Join Us at <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">IQAC Hall</span>
        </h2>

        <p className="text-xs md:text-sm text-[#35283A]/70 font-light max-w-lg mx-auto">
          We look forward to welcoming you to an enchanting day of mathematics, music, and memories.
        </p>
      </div>

      {/* Main Venue & Event Card */}
      <div className="glass-card p-6 md:p-8 rounded-3xl border border-[#C9A96E]/40 shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-[#71806B] uppercase tracking-widest block">
                ORGANIZED BY
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#432C4D]">
                Department of Mathematics
              </h3>
              <p className="text-xs text-[#6F557D] font-medium">
                Science PG Block, Adaspur, Cuttack
              </p>
            </div>

            <div className="space-y-2 text-xs md:text-sm text-[#35283A]/80 font-light">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#C9A96E]" />
                <span className="font-semibold text-[#432C4D]">14th October 2026 (Wednesday)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A96E]" />
                <span>10:00 AM Onwards</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>IQAC Hall, Science PG Block Campus, Adaspur, Cuttack, Odisha - 754011</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={onOpenRSVP}
                className="py-3 px-6 rounded-2xl bg-[#432C4D] hover:bg-[#6F557D] text-[#FAF8F4] font-medium text-xs transition-all duration-300 shadow-md flex items-center gap-2 shimmer-btn"
              >
                <Ticket className="w-4 h-4 text-[#C9A96E]" /> Claim Fresher Pass
              </button>

              <a
                href="https://maps.google.com/?q=Adaspur+Cuttack+Odisha"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 rounded-2xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] text-xs font-semibold border border-[#DCD2E3] transition-colors flex items-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#6F557D]" /> Get Directions
              </a>
            </div>
          </div>

          {/* Styled Map Graphic Card */}
          <div className="h-60 rounded-2xl bg-gradient-to-br from-[#EEE8F1] via-[#FAF8F4] to-[#DCD2E3] border border-[#DCD2E3] p-4 flex flex-col justify-between relative overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-15 pointer-events-none font-serif text-9xl text-[#432C4D] flex items-center justify-center">
              ∫
            </div>

            <div className="flex justify-between items-start relative z-10">
              <div className="px-2.5 py-1 rounded-full bg-[#FAF8F4] text-[10px] font-bold text-[#432C4D] shadow-sm border border-[#C9A96E]/30">
                📍 Adaspur Campus
              </div>
              <Sparkles className="w-4 h-4 text-[#C9A96E]" />
            </div>

            <div className="relative z-10 space-y-1 text-center py-4 bg-[#FAF8F4]/80 backdrop-blur-md p-3 rounded-xl border border-[#DCD2E3]">
              <div className="font-serif font-bold text-sm text-[#432C4D]">
                IQAC Conference Hall
              </div>
              <div className="text-[11px] text-[#71806B]">
                2nd Floor, Science PG Block Building
              </div>
            </div>

            <div className="text-[10px] text-[#71806B] text-center font-light relative z-10">
              Adaspur, Cuttack • 25 km from Cuttack Junction
            </div>
          </div>

        </div>
      </div>

      {/* Direct Contact & Social Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass-card p-5 rounded-3xl border border-[#DCD2E3] space-y-3">
          <h4 className="font-serif text-base font-bold text-[#432C4D] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#C9A96E]" /> Helpdesk & Inquiries
          </h4>
          <div className="text-xs text-[#35283A]/80 space-y-1.5 font-light">
            <div><strong>Email:</strong> festa.maths@sciencepg.edu.in</div>
            <div><strong>Phone:</strong> +91 94370 12345 / +91 98610 67890</div>
            <div><strong>Timing:</strong> 09:00 AM - 05:00 PM IST</div>
          </div>
        </div>

        <div className="glass-card p-5 rounded-3xl border border-[#DCD2E3] space-y-3">
          <h4 className="font-serif text-base font-bold text-[#432C4D] flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#C9A96E]" /> Connect with Us
          </h4>
          <p className="text-xs text-[#35283A]/70 font-light">
            Follow the Department of Mathematics for updates and fest live streams.
          </p>
          <div className="flex gap-2 pt-1">
            {['Instagram', 'WhatsApp Group', 'Department Portal'].map((link, i) => (
              <button
                key={i}
                onClick={() => alert(`Redirecting to official ${link}...`)}
                className="px-3 py-1.5 rounded-xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] text-[11px] font-semibold transition-colors border border-[#DCD2E3]"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

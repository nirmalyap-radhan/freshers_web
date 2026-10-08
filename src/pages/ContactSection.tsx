import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Navigation, Mail, Ticket, Sparkles, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { EVENT_DETAILS } from '../data/mockData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface ContactSectionProps {
  onOpenRSVP: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenRSVP }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyPhone = (num: string, index: number) => {
    navigator.clipboard.writeText(num);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <MapPin className="w-3.5 h-3.5" /> Venue & Contact
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D]">
          Get in Touch & <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">Join Us</span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contact Numbers Card */}
        <div className="glass-card p-6 rounded-3xl border border-[#DCD2E3] space-y-4 shadow-sm flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#EEE8F1] text-[#6F557D]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#432C4D]">
                  Department Helplines
                </h4>
                <p className="text-[11px] text-[#35283A]/70">
                  Reach out to the organizing team for assistance
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              {EVENT_DETAILS.contacts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F4]/80 border border-[#DCD2E3] hover:border-[#C9A96E]/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EEE8F1] text-[#432C4D] flex items-center justify-center font-semibold text-xs group-hover:bg-[#432C4D] group-hover:text-[#C9A96E] transition-colors">
                      {index + 1}
                    </div>
                    <div>
                      <a
                        href={`tel:+91${item.number}`}
                        className="font-mono text-sm font-semibold text-[#432C4D] hover:text-[#6F557D] transition-colors block"
                      >
                        {item.formatted}
                      </a>
                      <span className="text-[10px] text-[#71806B] block">
                        Tap to call directly
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={`tel:+91${item.number}`}
                      className="p-2 rounded-xl bg-[#432C4D] hover:bg-[#6F557D] text-[#FAF8F4] transition-colors text-xs flex items-center gap-1 shadow-sm"
                      title="Call Helpline"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyPhone(item.number, index)}
                      className="p-2 rounded-xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] transition-colors text-xs flex items-center"
                      title="Copy Number"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-[#6F557D]" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#35283A]/70 flex items-center gap-2 border-t border-[#DCD2E3]/40">
            <Mail className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>Email: <strong>festa.maths@sciencepg.edu.in</strong></span>
          </div>
        </div>

        {/* Instagram & Social Media Card */}
        <div className="glass-card p-6 rounded-3xl border border-[#DCD2E3] space-y-4 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-md">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#432C4D]">
                  Official Instagram
                </h4>
                <p className="text-[11px] text-[#35283A]/70">
                  Department of Mathematics Official Handle
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FAF8F4] to-[#EEE8F1] border border-[#DCD2E3] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#FAF8F4] flex items-center justify-center font-serif text-xs font-bold text-[#432C4D]">
                      UNC
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#432C4D]">
                      unc_mathematics
                    </div>
                    <div className="text-[10px] text-[#71806B]">
                      Dept. of Mathematics • Adaspur
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#E83E8C]/10 text-[#E83E8C] border border-[#E83E8C]/20">
                  Official
                </span>
              </div>

              <p className="text-xs text-[#35283A]/80 font-light leading-relaxed">
                Follow our official Instagram page for event stories, fest announcements, live updates, and student achievements.
              </p>

              <a
                href={EVENT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-medium text-xs transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Visit Instagram (@unc_mathematics)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#71806B] font-light flex items-center justify-between border-t border-[#DCD2E3]/40 relative z-10">
            <span>Tag us on Instagram: <strong>#UNCMaths #IntegralFesta2026</strong></span>
          </div>

          {/* Decorative background watermark */}
          <InstagramIcon className="absolute -bottom-6 -right-6 w-32 h-32 opacity-5 text-[#833ab4] pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

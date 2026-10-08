import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

interface InvitationPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  posterImagePath?: string;
}

export const InvitationPosterModal: React.FC<InvitationPosterModalProps> = ({
  isOpen,
  onClose,
  posterImagePath = '/invitation-poster.jpg',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setImgError(false); // Reset error state on open
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B2332]/85 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Click Backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Poster Container Card */}
      <div
        className={`relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#FAF8F4] border-2 border-[#C9A96E]/50 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 ease-out transform ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Prominent Floating Top-Right Cross Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 rounded-full bg-[#432C4D]/90 hover:bg-[#6F557D] text-[#FAF8F4] active:scale-90 transition-all shadow-2xl border-2 border-[#C9A96E] flex items-center justify-center group"
          aria-label="Close invitation poster"
          title="Close Invitation (X)"
        >
          <X className="w-6 h-6 text-[#C9A96E] group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Poster Content Area */}
        <div className="relative w-full overflow-hidden bg-[#FAF8F4] flex flex-col items-center justify-center">
          {!imgError ? (
            <div className="relative w-full flex flex-col items-center">
              <div className="max-h-[72vh] sm:max-h-[78vh] overflow-y-auto w-full flex justify-center bg-[#FAF8F4] scrollbar-thin">
                <img
                  src={posterImagePath}
                  alt="Integral Festa 2026 Official Invitation Poster"
                  onError={() => setImgError(true)}
                  className="w-full h-auto object-contain block rounded-t-[30px]"
                />
              </div>

              {/* Bottom CTA Button */}
              <div className="p-3.5 sm:p-4 bg-[#FAF8F4] border-t border-[#DCD2E3]/60 w-full">
                <button
                  onClick={onClose}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#432C4D] to-[#6F557D] text-[#FAF8F4] font-medium text-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 shimmer-btn group"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A96E]" />
                  <span>Enter Festa Website</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A96E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ) : (
            // Styled Fallback Poster Card if image URL fails
            <div className="p-6 sm:p-8 text-center space-y-5 min-h-[480px] flex flex-col justify-between w-full relative overflow-hidden bg-gradient-to-b from-[#FAF8F4] to-[#EEE8F1]">
              <div className="pt-2 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#432C4D] text-[#FAF8F4] text-[10px] font-semibold tracking-[0.2em] uppercase shadow-sm border border-[#C9A96E]/50">
                  <Sparkles className="w-3 h-3 text-[#C9A96E]" />
                  <span>OFFICIAL INVITATION</span>
                </div>
                <div className="text-[11px] font-serif font-bold text-[#71806B] tracking-widest uppercase pt-1">
                  DEPARTMENT OF MATHEMATICS
                </div>
              </div>

              <div className="space-y-1 relative z-10 py-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#432C4D]">
                  Where Equations Meet Celebration —
                </h3>
                <div className="font-script text-4xl sm:text-5xl animated-gradient-text font-normal leading-tight">
                  You Are Cordially Invited!
                </div>
                <p className="text-xs text-[#35283A]/80 font-light italic max-w-xs mx-auto pt-1">
                  "Join us to integrate laughter, derive infinite memories & welcome the Freshers Batch of 2026!"
                </p>
              </div>

              <div className="bg-[#FAF8F4] p-4 rounded-2xl border-2 border-[#C9A96E]/40 max-w-xs mx-auto space-y-1 text-center shadow-md">
                <div className="font-script text-2xl text-[#6F557D]">Integral Festa 2026</div>
                <div className="font-serif text-sm font-bold text-[#432C4D]">14TH OCTOBER 2026 • 10.00 AM</div>
                <div className="text-[11px] font-bold text-[#6F557D] uppercase">IQAC HALL, SCIENCE PG BLOCK</div>
                <div className="text-[10px] text-[#71806B] uppercase">ADASPUR, CUTTACK</div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#432C4D] to-[#6F557D] text-[#FAF8F4] font-medium text-sm shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 shimmer-btn"
              >
                <Sparkles className="w-4 h-4 text-[#C9A96E]" /> Enter Festa Website
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

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
        className={`relative z-10 w-full max-w-md sm:max-w-lg bg-[#FAF8F4] border-2 border-[#C9A96E]/50 rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 ease-out transform ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Prominent Top-Right Cross Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 rounded-full bg-[#432C4D] text-[#FAF8F4] hover:bg-[#6F557D] active:scale-90 transition-all shadow-2xl border-2 border-[#C9A96E] flex items-center justify-center group"
          aria-label="Close invitation poster and enter website"
          title="Close Invitation (X)"
        >
          <X className="w-6 h-6 text-[#C9A96E] group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Poster Image or Rendered Fallback */}
        <div className="relative w-full overflow-hidden bg-[#FAF8F4] flex flex-col items-center justify-center">
          {!imgError ? (
            <div className="relative w-full">
              <img
                src={posterImagePath}
                alt="Integral Festa 2026 Invitation Poster"
                onError={() => setImgError(true)}
                className="w-full h-auto max-h-[75vh] object-contain block mx-auto rounded-t-[30px]"
              />
              {/* Bottom CTA Button below Image */}
              <div className="p-4 bg-[#FAF8F4] border-t border-[#DCD2E3]/60 w-full">
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
            // Code Component Fallback if image file is not found
            <div className="p-6 sm:p-10 text-center space-y-6 min-h-[520px] flex flex-col justify-between w-full">
              <div className="pt-2">
                <div className="inline-block text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#432C4D] uppercase border-b border-[#C9A96E]/40 pb-1">
                  . DEPT. OF MATHEMATICS .
                </div>
              </div>

              <div className="space-y-1 relative z-10 py-2">
                <div className="font-script text-6xl sm:text-7xl text-[#432C4D] font-normal leading-none">
                  Integral
                </div>
                <div className="font-script text-5xl sm:text-6xl text-[#6F557D] font-normal leading-none -mt-3">
                  Festa
                </div>
                <div className="text-xs font-semibold tracking-[0.3em] uppercase text-[#71806B] pt-2">
                  FRESHERS WELCOME
                </div>
              </div>

              <div className="font-serif italic text-lg text-[#432C4D] font-semibold">
                " AN INFINITY FUSION "
              </div>

              <div className="bg-[#EEE8F1]/70 p-4 rounded-2xl border border-[#C9A96E]/40 max-w-xs mx-auto space-y-1 text-center">
                <div className="font-serif text-lg font-bold text-[#432C4D]">14TH OCT 2026</div>
                <div className="text-xs font-semibold text-[#6F557D]">AT — 10.00 AM</div>
                <div className="text-xs font-bold text-[#432C4D] uppercase pt-1">IQAC HALL, SCIENCE PG BLOCK</div>
                <div className="text-[11px] text-[#71806B] uppercase">ADASPUR, CUTTACK</div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#432C4D] to-[#6F557D] text-[#FAF8F4] font-medium text-sm shadow-xl flex items-center justify-center gap-2"
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

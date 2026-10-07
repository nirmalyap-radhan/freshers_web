import React from 'react';
import { X, ChevronLeft, ChevronRight, Tag, Calendar } from 'lucide-react';
import type { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#35283A]/90 backdrop-blur-xl animate-fadeIn">
      {/* Overlay Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Lightbox Content Box */}
      <div className="relative z-10 max-w-4xl w-full bg-[#432C4D] border border-[#C9A96E]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#35283A]/80 text-[#FAF8F4] hover:bg-[#6F557D] transition-colors border border-[#C9A96E]/30"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left/Prev Control */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#35283A]/80 text-[#FAF8F4] hover:bg-[#6F557D] transition-colors border border-[#C9A96E]/30"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right/Next Control */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#35283A]/80 text-[#FAF8F4] hover:bg-[#6F557D] transition-colors border border-[#C9A96E]/30"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Image Container */}
        <div className="md:w-3/5 bg-black/40 min-h-[300px] max-h-[500px] md:max-h-[600px] flex items-center justify-center p-2 overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain rounded-xl max-h-[550px]"
          />
        </div>

        {/* Details Sidebar */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between text-[#FAF8F4] bg-[#432C4D]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A96E] uppercase tracking-widest">
              <Tag className="w-3.5 h-3.5" /> {item.category}
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold leading-snug text-[#FAF8F4]">
              {item.title}
            </h3>

            <p className="text-sm text-[#DCD2E3]/90 leading-relaxed font-light">
              {item.caption}
            </p>
          </div>

          <div className="pt-6 border-t border-[#C9A96E]/20 flex items-center justify-between text-xs text-[#DCD2E3]/70">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C9A96E]" /> {item.date}
            </div>
            <div className="font-serif italic text-[#C9A96E]">
              Integral Festa 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

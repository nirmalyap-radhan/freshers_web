import React, { useState } from 'react';
import type { PageId } from '../types';
import { Menu, X, Sparkles, Calendar, Compass, Image, GraduationCap, Mail, Home, Ticket, FileText } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRSVP?: () => void;
  onOpenPoster?: () => void;
  isInsidePhone?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenRSVP,
  onOpenPoster,
  isInsidePhone = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { id: PageId; label: string; sub: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', sub: 'Main Invitation & Entrance', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About Festa', sub: 'Where Math Meets Celebration', icon: <Compass className="w-4 h-4" /> },
    { id: 'events', label: 'Schedule', sub: 'Timeline & Activities', icon: <Calendar className="w-4 h-4" /> },
    { id: 'gallery', label: 'Gallery', sub: 'Visual Memories & Moments', icon: <Image className="w-4 h-4" /> },
    { id: 'team', label: "HOD's Message", sub: 'Dr. Ajit Kumar Patra', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'contact', label: 'Venue & Contact', sub: 'IQAC Hall & Directions', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md bg-[#FAF8F4]/85 border-b border-[#DCD2E3]/50 transition-all duration-300 ${
        isInsidePhone ? 'py-2 px-3' : 'py-3 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Department */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#6F557D] to-[#C9A96E] p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#FAF8F4] rounded-full flex items-center justify-center font-serif text-[#432C4D] text-lg font-bold">
              ∫
            </div>
          </div>
          <div>
            <div className="font-script text-2xl md:text-3xl text-[#432C4D] leading-none group-hover:text-[#6F557D] transition-colors">
              Integral Festa
            </div>
            <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#71806B] font-semibold leading-tight mt-0.5">
              Department of Mathematics
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        {!isInsidePhone && (
          <nav className="hidden lg:flex items-center gap-1 bg-[#EEE8F1]/60 p-1.5 rounded-full border border-[#DCD2E3]/70 shadow-inner">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#432C4D] text-[#FAF8F4] shadow-md scale-105'
                      : 'text-[#35283A]/80 hover:text-[#432C4D] hover:bg-[#FAF8F4]/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          {onOpenPoster && (
            <button
              onClick={onOpenPoster}
              className="hidden sm:flex py-2 px-3 rounded-2xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] text-xs font-semibold border border-[#DCD2E3] transition-colors items-center gap-1.5"
              title="View Official Invitation Poster"
            >
              <FileText className="w-3.5 h-3.5 text-[#6F557D]" />
              <span>Poster</span>
            </button>
          )}

          {onOpenRSVP && (
            <button
              onClick={onOpenRSVP}
              className="py-2 px-3.5 sm:px-4 rounded-2xl bg-gradient-to-r from-[#C9A96E] to-[#EAD5A8] text-[#432C4D] font-bold text-xs shadow-md hover:shadow-gold-glow hover:-translate-y-0.5 transition-all flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" /> Get Pass
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-[#EEE8F1] text-[#432C4D] hover:bg-[#DCD2E3] active:scale-95 transition-all shadow-sm border border-[#DCD2E3]/70 flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Fullscreen / Drawer Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#432C4D]/96 text-[#FAF8F4] backdrop-blur-2xl animate-fadeIn duration-300 overflow-y-auto">
          {/* Header inside overlay */}
          <div className="flex items-center justify-between p-5 border-b border-[#C9A96E]/20">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl text-[#C9A96E]">∫</span>
              <div>
                <span className="font-script text-2xl text-[#FAF8F4] block leading-none">Integral Festa</span>
                <span className="text-[10px] text-[#C9A96E] uppercase tracking-widest">Dept. of Mathematics</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-full bg-[#6F557D]/50 text-[#FAF8F4] hover:bg-[#6F557D] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items List */}
          <div className="flex-1 flex flex-col justify-center px-6 py-8 max-w-md mx-auto w-full space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-2 border-b border-[#C9A96E]/20 pb-2">
              Menu Navigation
            </div>
            {menuItems.map((item, index) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`w-full text-left p-4 rounded-2xl flex items-center justify-between group transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6F557D] to-[#432C4D] text-[#FAF8F4] border border-[#C9A96E]/40 shadow-lg translate-x-1'
                      : 'hover:bg-[#6F557D]/30 text-[#FAF8F4]/85 hover:text-[#FAF8F4] hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isActive ? 'bg-[#C9A96E] text-[#432C4D]' : 'bg-[#6F557D]/40 text-[#C9A96E]'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-serif text-xl font-semibold tracking-wide flex items-center gap-2">
                        {item.label}
                        {isActive && <Sparkles className="w-4 h-4 text-[#C9A96E] inline" />}
                      </div>
                      <div className="text-xs text-[#FAF8F4]/60 font-light">{item.sub}</div>
                    </div>
                  </div>
                  <div className="text-xs font-serif text-[#C9A96E] opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </div>
                </button>
              );
            })}

            <div className="pt-4 space-y-2">
              {onOpenPoster && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenPoster();
                  }}
                  className="w-full py-3 rounded-2xl bg-[#6F557D]/60 text-[#FAF8F4] font-medium text-xs border border-[#C9A96E]/30 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#C9A96E]" /> View Invitation Poster
                </button>
              )}

              {onOpenRSVP && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenRSVP();
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#C9A96E] to-[#EAD5A8] text-[#432C4D] font-bold text-sm shadow-xl flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" /> Get Fresher Pass
                </button>
              )}
            </div>
          </div>

          {/* Footer Info inside Overlay */}
          <div className="p-6 border-t border-[#C9A96E]/20 text-center text-xs text-[#FAF8F4]/70 space-y-1 bg-[#35283A]/70">
            <div className="font-serif italic text-[#C9A96E]">"AN INFINITY FUSION"</div>
            <div>Department of Mathematics • Science PG Block, Adaspur, Cuttack</div>
            <div className="text-[10px] text-[#DCD2E3]/50">14th October 2026 | 10:00 AM</div>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import type { PageId } from '../types';
import { Menu, X, Sparkles, Calendar, Compass, Image, Users, Mail, Home } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isInsidePhone?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isInsidePhone = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { id: PageId; label: string; sub: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', sub: 'Main Invitation & Entrance', icon: <Home className="w-5 h-5" /> },
    { id: 'about', label: 'About Festa', sub: 'Where Math Meets Celebration', icon: <Compass className="w-5 h-5" /> },
    { id: 'events', label: 'Schedule', sub: 'Timeline & Activities', icon: <Calendar className="w-5 h-5" /> },
    { id: 'gallery', label: 'Gallery', sub: 'Visual Memories & Moments', icon: <Image className="w-5 h-5" /> },
    { id: 'team', label: 'Department Team', sub: 'Faculty & Coordinators', icon: <Users className="w-5 h-5" /> },
    { id: 'contact', label: 'Venue & Contact', sub: 'IQAC Hall & Directions', icon: <Mail className="w-5 h-5" /> },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`sticky top-0 z-40 backdrop-blur-md bg-[#FAF8F4]/80 border-b border-[#DCD2E3]/40 transition-all duration-300 ${isInsidePhone ? 'py-2 px-3' : 'py-3.5 px-4 md:px-8'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6F557D] to-[#C9A96E] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#FAF8F4] rounded-full flex items-center justify-center font-serif text-[#432C4D] text-lg font-bold">
                ∫
              </div>
            </div>
            <div>
              <div className="font-script text-xl md:text-2xl text-[#432C4D] leading-none group-hover:text-[#6F557D] transition-colors">
                Integral Festa
              </div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-[#71806B] font-medium leading-tight">
                Dept. of Mathematics
              </div>
            </div>
          </button>

          {/* Desktop Nav Links (when in expanded mode) */}
          {!isInsidePhone && (
            <div className="hidden lg:flex items-center gap-1 bg-[#EEE8F1]/50 p-1.5 rounded-full border border-[#DCD2E3]/60 shadow-inner">
              {menuItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'bg-[#432C4D] text-[#FAF8F4] shadow-md scale-105'
                        : 'text-[#35283A]/80 hover:text-[#432C4D] hover:bg-[#FAF8F4]/80'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Action & Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-[#EEE8F1] text-[#432C4D] hover:bg-[#DCD2E3] active:scale-95 transition-all shadow-sm border border-[#DCD2E3]/70 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#432C4D]/95 text-[#FAF8F4] backdrop-blur-xl animate-fadeIn duration-300 overflow-y-auto">
          {/* Header inside overlay */}
          <div className="flex items-center justify-between p-4 border-b border-[#C9A96E]/20">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl text-[#C9A96E]">∫</span>
              <span className="font-script text-2xl text-[#FAF8F4]">Integral Festa 2026</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-[#6F557D]/50 text-[#FAF8F4] hover:bg-[#6F557D] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items List */}
          <div className="flex-1 flex flex-col justify-center px-6 py-8 max-w-lg mx-auto w-full space-y-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium mb-2 border-b border-[#C9A96E]/20 pb-2">
              Navigation Index
            </div>
            {menuItems.map((item, index) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`w-full text-left p-3.5 rounded-2xl flex items-center justify-between group transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6F557D] to-[#432C4D] text-[#FAF8F4] border border-[#C9A96E]/40 shadow-lg translate-x-1'
                      : 'hover:bg-[#6F557D]/30 text-[#FAF8F4]/80 hover:text-[#FAF8F4] hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-[#C9A96E] text-[#432C4D]' : 'bg-[#6F557D]/40 text-[#C9A96E]'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-serif text-lg font-semibold tracking-wide flex items-center gap-2">
                        {item.label}
                        {isActive && <Sparkles className="w-4 h-4 text-[#C9A96E] inline" />}
                      </div>
                      <div className="text-xs text-[#FAF8F4]/60 font-light">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-serif text-[#C9A96E] opacity-50 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Info inside Overlay */}
          <div className="p-6 border-t border-[#C9A96E]/20 text-center text-xs text-[#FAF8F4]/70 space-y-1 bg-[#35283A]/60">
            <div className="font-serif italic text-[#C9A96E]">"AN INFINITY FUSION"</div>
            <div>Department of Mathematics • Science PG Block, Adaspur</div>
            <div className="text-[10px] text-[#DCD2E3]/50">14th October 2026 | 10:00 AM</div>
          </div>
        </div>
      )}
    </>
  );
};

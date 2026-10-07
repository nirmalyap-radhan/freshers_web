import React, { useState } from 'react';
import type { PageId } from './types';
import { EVENT_DETAILS } from './data/mockData';
import { PhoneMockup } from './components/PhoneMockup';
import { RSVPModal } from './components/RSVPModal';
import { FloralBackground } from './components/FloralBackground';
import { MathDecorations } from './components/MathDecorations';
import { Sparkles, Maximize2, Calendar, Ticket, Compass, Image, Users, Mail, Home } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const navigationList: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About Festa', icon: <Compass className="w-4 h-4" /> },
    { id: 'events', label: 'Schedule', icon: <Calendar className="w-4 h-4" /> },
    { id: 'gallery', label: 'Gallery', icon: <Image className="w-4 h-4" /> },
    { id: 'team', label: 'Department Team', icon: <Users className="w-4 h-4" /> },
    { id: 'contact', label: 'Venue & Pass', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#35283A] font-sans antialiased relative overflow-x-hidden selection:bg-[#DCD2E3]">
      
      {/* Background Floral & Math Canvas when in Desktop Presentation Mode */}
      {!isFullscreen && (
        <>
          <FloralBackground opacity={0.5} />
          <MathDecorations />
        </>
      )}

      {/* Primary Container Layout */}
      {isFullscreen ? (
        // Fullscreen viewport view mode
        <PhoneMockup
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onOpenRSVP={() => setIsRSVPModalOpen(true)}
          isFullscreen={true}
          onToggleFullscreen={() => setIsFullscreen(false)}
        />
      ) : (
        // Desktop Dual Showcase Presentation (Reference Screenshot 1 style)
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-between py-6">
          
          {/* Outer Header Bar */}
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DCD2E3]/50 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#6F557D] to-[#C9A96E] p-[2px] shadow-sm">
                <div className="w-full h-full bg-[#FAF8F4] rounded-full flex items-center justify-center font-serif text-[#432C4D] text-xl font-bold">
                  ∫
                </div>
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-[#432C4D] leading-none">
                  Integral Festa 2026
                </h1>
                <p className="text-[11px] font-medium text-[#71806B] tracking-widest uppercase mt-0.5">
                  {EVENT_DETAILS.department} • Science PG Block
                </p>
              </div>
            </div>

            {/* Top Viewport Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRSVPModalOpen(true)}
                className="py-2 px-4 rounded-xl bg-gradient-to-r from-[#C9A96E] to-[#EAD5A8] text-[#432C4D] font-bold text-xs shadow-md hover:shadow-gold-glow transition-all flex items-center gap-1.5"
              >
                <Ticket className="w-3.5 h-3.5" /> Claim Pass
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="py-2 px-3 rounded-xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] text-xs font-semibold border border-[#DCD2E3] transition-colors flex items-center gap-1.5"
                title="Expand to Fullscreen Viewport"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
              </button>
            </div>
          </header>

          {/* Desktop Showcase Main Grid */}
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8">
            
            {/* Left Side Content & Interactive Navigation Panel */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE8F1] border border-[#C9A96E]/40 text-[#432C4D] text-xs tracking-widest font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
                Interactive Event Portal
              </div>

              <div className="space-y-2">
                <h2 className="font-script text-5xl lg:text-7xl text-[#432C4D] leading-tight">
                  Integral Festa
                </h2>
                <div className="font-serif text-xl lg:text-2xl font-bold tracking-[0.2em] text-[#6F557D] uppercase">
                  "{EVENT_DETAILS.subtitle}"
                </div>
                <p className="text-sm text-[#35283A]/80 font-light max-w-md leading-relaxed pt-1">
                  Interact with the phone mockup on the right to navigate screens, inspect the event timeline, browse photo gallery, meet the department team, and generate your custom fresher badge pass.
                </p>
              </div>

              {/* Event Info Highlights */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="glass-card p-3.5 rounded-2xl border border-[#DCD2E3]">
                  <div className="text-[10px] text-[#71806B] font-semibold uppercase tracking-wider">Date & Time</div>
                  <div className="font-serif font-bold text-sm text-[#432C4D]">14 Oct 2026</div>
                  <div className="text-xs text-[#6F557D]">10:00 AM Onwards</div>
                </div>

                <div className="glass-card p-3.5 rounded-2xl border border-[#DCD2E3]">
                  <div className="text-[10px] text-[#71806B] font-semibold uppercase tracking-wider">Venue</div>
                  <div className="font-serif font-bold text-sm text-[#432C4D]">IQAC Hall</div>
                  <div className="text-xs text-[#6F557D] truncate">Science PG Block</div>
                </div>
              </div>

              {/* Quick Screen Selector Buttons */}
              <div className="space-y-2 max-w-md pt-2">
                <div className="text-xs font-semibold text-[#71806B] uppercase tracking-wider">
                  Jump to Phone Screen
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {navigationList.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`p-2.5 rounded-2xl text-xs font-semibold flex items-center gap-2 border transition-all duration-300 ${
                          isActive
                            ? 'bg-[#432C4D] text-[#FAF8F4] border-[#C9A96E]/50 shadow-md scale-105'
                            : 'bg-[#FAF8F4] hover:bg-[#EEE8F1] text-[#432C4D] border-[#DCD2E3]'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Side Phone Showcase Mockup */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <PhoneMockup
                currentPage={currentPage}
                onNavigate={setCurrentPage}
                onOpenRSVP={() => setIsRSVPModalOpen(true)}
                isFullscreen={false}
                onToggleFullscreen={() => setIsFullscreen(true)}
              />
            </div>

          </main>

          {/* Outer Footer */}
          <footer className="border-t border-[#DCD2E3]/50 pt-4 text-center text-xs text-[#71806B] font-light flex flex-wrap items-center justify-between gap-2">
            <div>
              © 2026 Department of Mathematics • Science PG Block, Adaspur, Cuttack
            </div>
            <div className="font-serif italic text-[#6F557D]">
              "AN INFINITY FUSION"
            </div>
          </footer>

        </div>
      )}

      {/* Interactive Badge Pass Modal */}
      <RSVPModal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
      />

    </div>
  );
}

export default App;

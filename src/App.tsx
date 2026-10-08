import { useState } from 'react';
import type { PageId } from './types';
import { Navbar } from './components/Navbar';
import { CollegeGlitchHeader } from './components/CollegeGlitchHeader';
import { FloralBackground } from './components/FloralBackground';
import { MathDecorations } from './components/MathDecorations';
import { HeroSection } from './pages/HeroSection';
import { AboutSection } from './pages/AboutSection';
import { ScheduleSection } from './pages/ScheduleSection';
import { GallerySection } from './pages/GallerySection';
import { TeamSection } from './pages/TeamSection';
import { ContactSection } from './pages/ContactSection';
import { RSVPModal } from './components/RSVPModal';
import { InvitationPosterModal } from './components/InvitationPosterModal';
import { EVENT_DETAILS } from './data/mockData';
import { Sparkles, Heart, Phone } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
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

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState<boolean>(false);
  const [isPosterOpen, setIsPosterOpen] = useState<boolean>(true); // Opens by default on page load!
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [displayedPage, setDisplayedPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setCurrentPage(page);
    setTimeout(() => {
      setDisplayedPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250);
  };

  const renderContent = () => {
    switch (displayedPage) {
      case 'home':
        return (
          <div className="space-y-16 py-4">
            <HeroSection onNavigate={handleNavigate} onOpenRSVP={() => setIsRSVPModalOpen(true)} />
            <div className="max-w-7xl mx-auto px-4"><div className="border-t border-[#DCD2E3]/60" /></div>
            <AboutSection onNavigate={handleNavigate} onOpenRSVP={() => setIsRSVPModalOpen(true)} />
            <div className="max-w-7xl mx-auto px-4"><div className="border-t border-[#DCD2E3]/60" /></div>
            <ScheduleSection />
            <div className="max-w-7xl mx-auto px-4"><div className="border-t border-[#DCD2E3]/60" /></div>
            <GallerySection />
            <div className="max-w-7xl mx-auto px-4"><div className="border-t border-[#DCD2E3]/60" /></div>
            <TeamSection />
            <div className="max-w-7xl mx-auto px-4"><div className="border-t border-[#DCD2E3]/60" /></div>
            <ContactSection onOpenRSVP={() => setIsRSVPModalOpen(true)} />
          </div>
        );
      case 'about':
        return <AboutSection onNavigate={handleNavigate} onOpenRSVP={() => setIsRSVPModalOpen(true)} />;
      case 'events':
        return <ScheduleSection />;
      case 'gallery':
        return <GallerySection />;
      case 'team':
        return <TeamSection />;
      case 'contact':
        return <ContactSection onOpenRSVP={() => setIsRSVPModalOpen(true)} />;
      default:
        return <HeroSection onNavigate={handleNavigate} onOpenRSVP={() => setIsRSVPModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#35283A] font-sans antialiased relative overflow-x-hidden selection:bg-[#DCD2E3]">
      
      {/* Background Decorative Floral & Math Canvas */}
      <FloralBackground opacity={0.5} />
      <MathDecorations />

      {/* Top Multilingual College Header Banner with Glitch Transition */}
      <CollegeGlitchHeader />

      {/* Main Full-Width Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRSVP={() => setIsRSVPModalOpen(true)}
        onOpenPoster={() => setIsPosterOpen(true)}
      />

      {/* Main Full Viewport Website Content Container */}
      <main
        className={`relative z-10 min-h-[calc(100vh-140px)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isTransitioning
            ? 'opacity-0 translate-y-3 scale-[0.99]'
            : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#DCD2E3]/60 bg-[#FAF8F4]/90 backdrop-blur-md py-8 px-4 sm:px-6 lg:px-8 mt-12 text-center text-xs text-[#71806B]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#432C4D] text-[#C9A96E] font-serif text-lg font-bold flex items-center justify-center shadow-sm">
                ∫
              </div>
              <div className="text-left">
                <div className="font-serif text-base font-bold text-[#432C4D]">
                  Integral Festa 2026
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#71806B]">
                  {EVENT_DETAILS.department}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <a
                href={EVENT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] font-semibold border border-[#DCD2E3] transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E83E8C]" />
                <span>Instagram: {EVENT_DETAILS.instagramHandle}</span>
              </a>

              <div className="inline-flex items-center gap-2 text-[#432C4D] font-medium">
                <Phone className="w-3.5 h-3.5 text-[#6F557D]" />
                <span className="font-mono">{EVENT_DETAILS.contacts.map(c => c.number).join(' • ')}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#432C4D]">
              <Sparkles className="w-4 h-4 text-[#C9A96E]" />
              <span>14th October 2026 • IQAC Hall</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#DCD2E3]/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#35283A]/70 font-light">
            <div>
              © 2026 Department of Mathematics, Science PG Block, Adaspur, Cuttack, Odisha - 754011
            </div>
            <div className="flex items-center gap-1">
              <span>Crafted with mathematical elegance</span> <Heart className="w-3 h-3 text-[#6F557D] fill-[#6F557D] inline" />
            </div>
          </div>
        </div>
      </footer>

      {/* Starting Invitation Poster Modal (With X Cross Button) */}
      <InvitationPosterModal
        isOpen={isPosterOpen}
        onClose={() => setIsPosterOpen(false)}
      />

      {/* Interactive Badge Pass Modal */}
      <RSVPModal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
      />

    </div>
  );
}

export default App;

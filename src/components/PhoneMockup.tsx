import React, { useState } from 'react';
import type { PageId } from '../types';
import { Navbar } from './Navbar';
import { FloralBackground } from './FloralBackground';
import { MathDecorations } from './MathDecorations';
import { HeroSection } from '../pages/HeroSection';
import { AboutSection } from '../pages/AboutSection';
import { ScheduleSection } from '../pages/ScheduleSection';
import { GallerySection } from '../pages/GallerySection';
import { TeamSection } from '../pages/TeamSection';
import { ContactSection } from '../pages/ContactSection';
import { Wifi, Battery } from 'lucide-react';

interface PhoneMockupProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRSVP: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  currentPage,
  onNavigate,
  onOpenRSVP,
  isFullscreen,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedPage, setDisplayedPage] = useState<PageId>(currentPage);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Handle smooth page transitions
  React.useEffect(() => {
    if (currentPage !== displayedPage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayedPage(currentPage);
        setIsTransitioning(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentPage, displayedPage]);

  // Handle 3D Parallax tilt effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFullscreen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // max 4 deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const renderCurrentPageContent = () => {
    switch (displayedPage) {
      case 'home':
        return <HeroSection onNavigate={onNavigate} onOpenRSVP={onOpenRSVP} />;
      case 'about':
        return <AboutSection onNavigate={onNavigate} onOpenRSVP={onOpenRSVP} />;
      case 'events':
        return <ScheduleSection />;
      case 'gallery':
        return <GallerySection />;
      case 'team':
        return <TeamSection />;
      case 'contact':
        return <ContactSection onOpenRSVP={onOpenRSVP} />;
      default:
        return <HeroSection onNavigate={onNavigate} onOpenRSVP={onOpenRSVP} />;
    }
  };

  // If in fullscreen viewport mode (for small devices or toggled desktop viewport)
  if (isFullscreen) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] relative flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={onNavigate} isInsidePhone={false} />
        <div className="relative flex-1">
          <FloralBackground opacity={0.6} />
          <MathDecorations />
          <main className={`relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isTransitioning ? 'opacity-0 translate-y-3 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'
          }`}>
            {renderCurrentPageContent()}
          </main>
        </div>
      </div>
    );
  }

  // Interactive Smartphone Frame Container Mode
  return (
    <div className="flex flex-col items-center justify-center w-full my-4">
      
      {/* Smartphone Hardware Frame */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'none',
        }}
        className="relative w-[340px] sm:w-[380px] md:w-[410px] h-[720px] sm:h-[760px] md:h-[810px] bg-[#2B2332] rounded-[50px] p-[10px] md:p-[12px] shadow-phone-glow border-[3px] border-[#432C4D]/60 ring-1 ring-[#C9A96E]/30 animate-float-slow group"
      >
        {/* Metallic Bezel Layer */}
        <div className="relative w-full h-full bg-[#FAF8F4] rounded-[40px] overflow-hidden flex flex-col shadow-inner border border-[#DCD2E3]">
          
          {/* Dynamic Phone Status Bar at Top */}
          <div className="h-9 px-6 pt-2 bg-[#FAF8F4]/90 backdrop-blur-md flex items-center justify-between z-30 select-none border-b border-[#DCD2E3]/20">
            {/* Clock */}
            <span className="text-[11px] font-semibold tracking-tight text-[#432C4D]">
              10:00 AM
            </span>

            {/* Dynamic Island / Punchhole Camera */}
            <div className="w-20 h-4 bg-[#2B2332] rounded-full flex items-center justify-end px-2 gap-1.5 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6F557D] animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-[#1A1320]" />
            </div>

            {/* Status Icons */}
            <div className="flex items-center gap-1.5 text-[#432C4D]">
              <span className="text-[9px] font-bold tracking-tighter">5G</span>
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5 text-[#432C4D]" />
            </div>
          </div>

          {/* Top Navbar inside Phone */}
          <Navbar currentPage={currentPage} onNavigate={onNavigate} isInsidePhone={true} />

          {/* Interactive Screen Viewport */}
          <div className="relative flex-1 overflow-y-auto scrollbar-thin overflow-x-hidden bg-[#FAF8F4]">
            {/* Ambient Backgrounds inside Phone */}
            <FloralBackground opacity={0.7} />
            <MathDecorations />

            {/* Dynamic Page Screen with Smooth Transitions */}
            <main
              className={`relative z-10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isTransitioning
                  ? 'opacity-0 translate-y-3 scale-[0.98]'
                  : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
              {renderCurrentPageContent()}
            </main>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="h-6 bg-[#FAF8F4]/90 backdrop-blur-md flex items-center justify-center z-30 select-none border-t border-[#DCD2E3]/20">
            <div className="w-32 h-1 bg-[#432C4D]/30 rounded-full" />
          </div>

          {/* Specular Screen Reflection overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/15 via-transparent to-transparent pointer-events-none z-40 rounded-[40px]" />
        </div>

        {/* Side Hardware Buttons */}
        <div className="absolute -left-[5px] top-28 w-[3px] h-10 bg-[#432C4D] rounded-l-md" />
        <div className="absolute -left-[5px] top-42 w-[3px] h-12 bg-[#432C4D] rounded-l-md" />
        <div className="absolute -right-[5px] top-32 w-[3px] h-14 bg-[#432C4D] rounded-r-md" />
      </div>

    </div>
  );
};

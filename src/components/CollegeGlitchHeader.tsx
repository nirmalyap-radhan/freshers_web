import React, { useState, useEffect } from 'react';

export interface LanguageOption {
  code: 'en' | 'hi' | 'or';
  name: string;
  nativeName: string;
  collegeName: string;
  location: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    collegeName: 'UDAYANATH AUTONOMOUS COLLEGE OF SCIENCE & TECHNOLOGY',
    location: 'ADASPUR, CUTTACK - 754011',
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    collegeName: 'उदयनाथ स्वायत्तशासित विज्ञान एवं प्रौद्योगिकी महाविद्यालय',
    location: 'अड़सपुर, कटक - ७५४०११',
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    collegeName: 'ଉଦୟନାଥ ସ୍ୱୟଂଶାସିତ ବିଜ୍ଞାନ ଏବଂ ବୈଷୟିକ ମହାବିଦ୍ୟାଳୟ',
    location: 'ଅଡଶପୁର, କଟକ - ୭୫୪୦୧୧',
  },
];

interface CollegeGlitchHeaderProps {
  className?: string;
}

export const CollegeGlitchHeader: React.FC<CollegeGlitchHeaderProps> = ({
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const currentLang = LANGUAGES[currentIndex];

  useEffect(() => {
    // Automatic glitch transition interval every 3 seconds
    const timer = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LANGUAGES.length);
      }, 180);

      setTimeout(() => {
        setIsGlitching(false);
      }, 450);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`w-full bg-[#1A1221]/95 text-[#FAF8F4] border-b border-[#C9A96E]/30 relative overflow-hidden backdrop-blur-md z-40 transition-all py-2.5 px-4 ${className}`}
    >
      {/* Cyber Glitch Visual Slice Overlay */}
      {isGlitching && (
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          <div className="w-full h-full bg-[#00F0FF]/15 mix-blend-screen animate-pulse" />
          <div
            className="absolute inset-0 bg-[#FF0055]/15 mix-blend-screen"
            style={{ transform: 'translateX(4px) translateY(-2px)' }}
          />
          <div className="absolute top-1/3 left-0 w-full h-[2px] bg-[#C9A96E] opacity-80 shadow-[0_0_10px_#C9A96E]" />
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-[#00F0FF] opacity-90 shadow-[0_0_8px_#00F0FF]" />
        </div>
      )}

      {/* Subtle Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B36] via-[#1A1221] to-[#3B2548] opacity-90" />

      {/* Centered Multilingual College Logo & Name Container */}
      <div className="max-w-5xl mx-auto relative z-10 flex items-center justify-center text-center gap-3">
        
        {/* Official College Crest Logo */}
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#C9A96E] via-[#EAD5A8] to-[#9B783E] shadow-md">
            <img
              src="/college-header/college-logo.png"
              alt="Udayanath Autonomous College Crest"
              className={`w-full h-full rounded-full object-cover bg-white ${
                isGlitching ? 'filter invert contrast-125' : ''
              }`}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          {/* Subtle Live Pulse Indicator */}
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C9A96E] border-2 border-[#1A1221] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-[#1A1221] animate-ping" />
          </span>
        </div>

        {/* Centered Multilingual College Name & Location */}
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className={`font-serif font-extrabold text-xs sm:text-sm md:text-base tracking-wide text-[#FAF8F4] transition-colors leading-tight ${
              isGlitching ? 'glitch-text-active text-[#00F0FF]' : ''
            }`}
          >
            {currentLang.collegeName}
          </div>

          <div
            className={`text-[10px] sm:text-xs font-semibold tracking-widest text-[#C9A96E] uppercase flex items-center justify-center mt-0.5 ${
              isGlitching ? 'glitch-text-active text-[#FF0055]' : ''
            }`}
          >
            <span>{currentLang.location}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

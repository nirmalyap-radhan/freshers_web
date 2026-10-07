import React from 'react';

export const FloralBackground: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ opacity }}>
      {/* Top Left Delicate Floral Corner */}
      <svg
        className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 text-[#6F557D] opacity-25 animate-floral-breath"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30,120 Q80,50 160,80 T260,30"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {/* Lilac Blossom 1 */}
        <circle cx="80" cy="70" r="18" fill="#DCD2E3" fillOpacity="0.5" />
        <circle cx="95" cy="60" r="14" fill="#EEE8F1" fillOpacity="0.7" />
        <circle cx="65" cy="80" r="14" fill="#EEE8F1" fillOpacity="0.7" />
        <circle cx="75" cy="90" r="14" fill="#DCD2E3" fillOpacity="0.6" />
        <circle cx="80" cy="70" r="5" fill="#C9A96E" />
        
        {/* Botanical Leaves */}
        <path
          d="M120,70 Q140,40 165,55 Q145,85 120,70 Z"
          fill="#71806B"
          fillOpacity="0.25"
          stroke="#71806B"
          strokeWidth="1"
        />
        <path
          d="M150,90 Q180,75 195,100 Q165,115 150,90 Z"
          fill="#71806B"
          fillOpacity="0.2"
          stroke="#71806B"
          strokeWidth="1"
        />
        {/* Secondary Flower */}
        <circle cx="170" cy="55" r="12" fill="#6F557D" fillOpacity="0.2" />
        <circle cx="170" cy="55" r="3" fill="#C9A96E" />
      </svg>

      {/* Top Right Botanical Vignette */}
      <svg
        className="absolute -top-12 -right-12 w-64 h-64 md:w-96 md:h-96 text-[#432C4D] opacity-20 animate-floral-breath"
        style={{ animationDelay: '-3.5s' }}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M270,140 Q220,60 140,80 T40,20"
          stroke="#6F557D"
          strokeWidth="1.2"
        />
        {/* Blossom */}
        <circle cx="210" cy="80" r="22" fill="#EEE8F1" fillOpacity="0.6" />
        <circle cx="225" cy="95" r="16" fill="#DCD2E3" fillOpacity="0.6" />
        <circle cx="195" cy="95" r="16" fill="#DCD2E3" fillOpacity="0.6" />
        <circle cx="210" cy="110" r="14" fill="#EEE8F1" fillOpacity="0.8" />
        <circle cx="210" cy="80" r="6" fill="#C9A96E" />

        <path
          d="M140,80 Q110,50 95,75 Q125,100 140,80 Z"
          fill="#71806B"
          fillOpacity="0.3"
        />
      </svg>

      {/* Bottom Left Subtle Botanical Petals */}
      <svg
        className="absolute -bottom-16 -left-12 w-72 h-72 md:w-80 md:h-80 text-[#6F557D] opacity-20 animate-floral-breath"
        style={{ animationDelay: '-1.8s' }}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20,200 C80,240 180,250 260,200" stroke="#C9A96E" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="120" cy="220" r="20" fill="#DCD2E3" fillOpacity="0.5" />
        <circle cx="120" cy="220" r="5" fill="#6F557D" />
        <path d="M160,220 Q200,190 210,220 Q180,240 160,220 Z" fill="#71806B" fillOpacity="0.25" />
      </svg>

      {/* Bottom Right Golden Sparkle Floral */}
      <svg
        className="absolute -bottom-10 -right-10 w-60 h-60 md:w-80 md:h-80 text-[#C9A96E] opacity-25 animate-floral-breath"
        style={{ animationDelay: '-4.8s' }}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="220" cy="220" r="30" fill="url(#goldGradient)" fillOpacity="0.15" />
        <circle cx="220" cy="220" r="8" fill="#C9A96E" />
        <defs>
          <radialGradient id="goldGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 220) scale(40)">
            <stop stopColor="#C9A96E" />
            <stop offset="1" stopColor="#FAF8F4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

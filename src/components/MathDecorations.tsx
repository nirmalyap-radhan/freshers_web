import React from 'react';

const MATH_SYMBOLS = [
  { symbol: '∫', top: '12%', left: '8%', size: 'text-3xl md:text-5xl', delay: '0s', duration: '9s' },
  { symbol: '∞', top: '22%', right: '10%', size: 'text-4xl md:text-6xl', delay: '2s', duration: '11s' },
  { symbol: 'π', top: '45%', left: '5%', size: 'text-2xl md:text-4xl', delay: '1s', duration: '8s' },
  { symbol: 'Σ', top: '65%', right: '7%', size: 'text-3xl md:text-5xl', delay: '3s', duration: '10s' },
  { symbol: 'dx', top: '78%', left: '12%', size: 'text-xl md:text-2xl', delay: '4s', duration: '7s' },
  { symbol: 'f(x)', top: '35%', right: '15%', size: 'text-lg md:text-2xl', delay: '1.5s', duration: '9.5s' },
  { symbol: '√x', top: '85%', right: '20%', size: 'text-xl md:text-3xl', delay: '2.5s', duration: '10.5s' },
  { symbol: 'e^{iπ} + 1 = 0', top: '15%', left: '35%', size: 'text-sm md:text-base font-serif italic', delay: '3.5s', duration: '12s' },
  { symbol: '∬_V ∇ · F dV', top: '55%', left: '18%', size: 'text-xs md:text-sm font-serif italic', delay: '0.8s', duration: '13s' },
];

export const MathDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Golden Ratio Fibonacci Spiral background SVG line art */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-[0.04] text-[#432C4D]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M250,250 A10,10 0 0,1 250,260 A20,20 0 0,1 230,250 A40,40 0 0,1 250,210 A80,80 0 0,1 330,250 A160,160 0 0,1 250,410 A320,320 0 0,1 -70,250"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Polar coordinate grid concentric circles */}
        <circle cx="250" cy="250" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
        <line x1="10" y1="250" x2="490" y2="250" stroke="currentColor" strokeWidth="0.5" />
        <line x1="250" y1="10" x2="250" y2="490" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Floating Mathematical Symbols */}
      {MATH_SYMBOLS.map((item, idx) => (
        <div
          key={idx}
          className={`absolute font-serif text-[#432C4D] opacity-[0.14] hover:opacity-40 transition-opacity duration-500 animate-math-float ${item.size}`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: item.duration,
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  );
};

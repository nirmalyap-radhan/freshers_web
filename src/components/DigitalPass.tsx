import React from 'react';

export interface DigitalPassProps {
  name: string;
  rollNumber: string;
  program: string;
  batch: string;
  id?: string;
}

export const DigitalPass: React.FC<DigitalPassProps> = ({
  name,
  rollNumber,
  program,
  batch,
  id = 'digital-pass-card',
}) => {
  return (
    <div
      id={id}
      className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[1024/1536] rounded-3xl overflow-hidden shadow-2xl select-none bg-[#FAF8F4]"
    >
      {/* Official Template Image Background */}
      <img
        src="/image.png"
        alt="Integral Festa Official Fresher Pass Template"
        className="w-full h-full object-cover block pointer-events-none"
      />

      {/* Dynamic Overlays Positioned Exactly Inside The Template Pill Boxes */}

      {/* 1. NAME FIELD */}
      <div
        style={{
          top: '49.28%',
          left: '40.5%',
          width: '45.5%',
          height: '2.86%',
        }}
        className="absolute flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(11px,2.7vw,16px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full text-left">{name}</span>
      </div>

      {/* 2. ROLL NO FIELD */}
      <div
        style={{
          top: '53.91%',
          left: '40.5%',
          width: '45.5%',
          height: '2.80%',
        }}
        className="absolute flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(11px,2.7vw,16px)] leading-none px-2 tracking-wider overflow-hidden"
      >
        <span className="truncate w-full text-left">{rollNumber}</span>
      </div>

      {/* 3. PROGRAM FIELD */}
      <div
        style={{
          top: '58.33%',
          left: '40.5%',
          width: '45.5%',
          height: '2.86%',
        }}
        className="absolute flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(10px,2.4vw,15px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full text-left">{program}</span>
      </div>

      {/* 4. BATCH FIELD */}
      <div
        style={{
          top: '63.02%',
          left: '40.5%',
          width: '45.5%',
          height: '2.80%',
        }}
        className="absolute flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(11px,2.7vw,16px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full text-left">{batch}</span>
      </div>
    </div>
  );
};

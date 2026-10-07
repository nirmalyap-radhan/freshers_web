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
      className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[1136/1600] rounded-3xl overflow-hidden shadow-2xl select-none bg-[#FAF8F4]"
    >
      {/* Official Template Image Background */}
      <img
        src="/image.png"
        alt="Integral Festa Official Fresher Pass Template"
        className="w-full h-full object-cover block pointer-events-none"
      />

      {/* Dynamic Overlays Positioned Precisely on Template Fields */}

      {/* NAME FIELD */}
      <div
        style={{
          top: '50.75%',
          left: '39.6%',
          width: '44.5%',
          height: '4.2%',
        }}
        className="absolute flex items-center justify-start text-[#35203F] font-serif font-bold text-[clamp(11px,2.8vw,16px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full">{name}</span>
      </div>

      {/* ROLL NO FIELD */}
      <div
        style={{
          top: '56.0%',
          left: '39.6%',
          width: '44.5%',
          height: '4.2%',
        }}
        className="absolute flex items-center justify-start text-[#35203F] font-serif font-bold text-[clamp(11px,2.8vw,16px)] leading-none px-2 tracking-wider overflow-hidden"
      >
        <span className="truncate w-full">{rollNumber}</span>
      </div>

      {/* PROGRAM FIELD */}
      <div
        style={{
          top: '61.25%',
          left: '39.6%',
          width: '44.5%',
          height: '4.2%',
        }}
        className="absolute flex items-center justify-start text-[#35203F] font-serif font-bold text-[clamp(10px,2.5vw,15px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full">{program}</span>
      </div>

      {/* BATCH FIELD */}
      <div
        style={{
          top: '66.5%',
          left: '39.6%',
          width: '44.5%',
          height: '4.2%',
        }}
        className="absolute flex items-center justify-start text-[#35203F] font-serif font-bold text-[clamp(11px,2.8vw,16px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full">{batch}</span>
      </div>
    </div>
  );
};

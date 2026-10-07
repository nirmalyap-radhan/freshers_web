import React from 'react';

export interface DigitalPassProps {
  name: string;
  rollNumber: string;
  program: string;
  batch: string;
  photoUrl?: string;
  id?: string;
}

export const DigitalPass: React.FC<DigitalPassProps> = ({
  name,
  rollNumber,
  program,
  batch,
  photoUrl,
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

      {/* DYNAMIC USER PHOTO OVERLAY INSIDE THE CIRCULAR GOLD RING */}
      {photoUrl && (
        <div
          style={{
            top: '36.1%',
            left: '40.25%',
            width: '19.5%',
            height: '13.0%',
          }}
          className="absolute rounded-full overflow-hidden flex items-center justify-center bg-[#FAF8F4] z-10 shadow-inner"
        >
          <img
            src={photoUrl}
            alt={`${name}'s Pass Profile Photo`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      )}

      {/* Dynamic Text Overlays Positioned Exactly Inside The Template Pill Boxes */}

      {/* 1. NAME FIELD */}
      <div
        style={{
          top: '49.28%',
          left: '40.5%',
          width: '45.5%',
          height: '2.86%',
        }}
        className="absolute z-10 flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(11px,2.7vw,16px)] leading-none px-2 tracking-wide overflow-hidden"
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
        className="absolute z-10 flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(11px,2.7vw,16px)] leading-none px-2 tracking-wider overflow-hidden"
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
        className="absolute z-10 flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(10px,2.4vw,15px)] leading-none px-2 tracking-wide overflow-hidden"
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
        className="absolute z-10 flex items-center justify-start text-[#3A1F45] font-serif font-bold text-[clamp(11px,2.7vw,16px)] leading-none px-2 tracking-wide overflow-hidden"
      >
        <span className="truncate w-full text-left">{batch}</span>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { EVENT_DETAILS } from '../data/mockData';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(EVENT_DETAILS.targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 my-4">
      {units.map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-card flex items-center justify-center shadow-sm border border-[#C9A96E]/30 bg-gradient-to-b from-[#FAF8F4] to-[#EEE8F1]/60">
            <span className="font-serif text-lg md:text-2xl font-bold text-[#432C4D]">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#71806B] font-medium mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

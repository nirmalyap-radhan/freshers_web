import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../data/mockData';
import { Calendar, Clock, MapPin, Sparkles, UserCheck, Brain, Music, Utensils, Trophy, Flame, Crown } from 'lucide-react';

export const ScheduleSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Full Schedule' },
    { id: 'ceremony', label: 'Ceremonials' },
    { id: 'academic', label: 'Math Fusion' },
    { id: 'games', label: 'Games & Titles' },
    { id: 'cultural', label: 'Performances' },
    { id: 'food', label: 'Feast' },
  ];

  const filteredItems = activeFilter === 'all'
    ? SCHEDULE_DATA
    : SCHEDULE_DATA.filter(item => item.category === activeFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-4 h-4 text-[#6F557D]" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-[#C9A96E]" />;
      case 'Brain': return <Brain className="w-4 h-4 text-[#6F557D]" />;
      case 'Music': return <Music className="w-4 h-4 text-[#6F557D]" />;
      case 'Utensils': return <Utensils className="w-4 h-4 text-[#71806B]" />;
      case 'Trophy': return <Trophy className="w-4 h-4 text-[#C9A96E]" />;
      case 'Flame': return <Flame className="w-4 h-4 text-[#6F557D]" />;
      case 'Crown': return <Crown className="w-4 h-4 text-[#C9A96E]" />;
      default: return <Clock className="w-4 h-4 text-[#6F557D]" />;
    }
  };

  return (
    <section className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <Calendar className="w-3.5 h-3.5" /> Event Itinerary
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D]">
          Timeline of <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">Celebration</span>
        </h2>

        <p className="text-xs md:text-sm text-[#35283A]/70 font-light max-w-lg mx-auto">
          14th October 2026 • IQAC Hall, Science PG Block, Adaspur
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
              activeFilter === cat.id
                ? 'bg-[#432C4D] text-[#FAF8F4] shadow-md scale-105 border border-[#C9A96E]/40'
                : 'bg-[#EEE8F1]/60 text-[#35283A]/80 hover:bg-[#DCD2E3]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Timeline Vertical Container */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-[#DCD2E3] space-y-6 my-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className="relative group animate-fadeIn"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#FAF8F4] border-2 border-[#6F557D] flex items-center justify-center group-hover:scale-125 group-hover:border-[#C9A96E] transition-transform duration-300 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#6F557D] group-hover:bg-[#C9A96E]" />
            </div>

            {/* Timeline Item Card */}
            <div className="glass-card p-5 rounded-3xl border border-[#DCD2E3] hover:border-[#6F557D]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#EEE8F1] border border-[#DCD2E3]">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-serif font-bold text-[#6F557D] text-sm md:text-base">
                    {item.time}
                  </span>
                </div>

                <div className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EEE8F1]/70 text-[#71806B] font-semibold border border-[#DCD2E3]">
                  {item.category}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#432C4D]">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#6F557D] font-serif italic">
                  {item.subtitle}
                </div>
              </div>

              <p className="text-xs md:text-sm text-[#35283A]/80 leading-relaxed font-light">
                {item.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#71806B] border-t border-[#DCD2E3]/50">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" /> {item.location}
                </div>
                {item.speaker && (
                  <div className="font-medium text-[#432C4D]">
                    🎙️ {item.speaker}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

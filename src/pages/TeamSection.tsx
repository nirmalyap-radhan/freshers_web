import React, { useState } from 'react';
import { TEAM_DATA } from '../data/mockData';
import { Users, Mail, Sparkles, GraduationCap, Heart } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Team Members' },
    { id: 'faculty', label: 'Faculty Mentors' },
    { id: 'coordinator', label: 'Student Conveners' },
    { id: 'volunteer', label: 'Volunteers' },
  ];

  const filteredMembers = activeTab === 'all'
    ? TEAM_DATA
    : TEAM_DATA.filter(m => m.category === activeTab);

  return (
    <section className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8F1] text-[#6F557D] text-xs font-semibold uppercase tracking-widest border border-[#DCD2E3]">
          <Users className="w-3.5 h-3.5" /> Department Leadership
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#432C4D]">
          Behind Integral <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#6F557D] font-normal">Festa</span>
        </h2>

        <p className="text-xs md:text-sm text-[#35283A]/70 font-light max-w-lg mx-auto">
          Faculty mentors, student leads, and enthusiastic volunteers dedicated to organizing an unforgettable welcome party.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-[#432C4D] text-[#FAF8F4] shadow-md scale-105 border border-[#C9A96E]/40'
                : 'bg-[#EEE8F1]/60 text-[#35283A]/80 hover:bg-[#DCD2E3]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Team Profile Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredMembers.map((member, idx) => (
          <div
            key={member.id}
            className="glass-card p-5 rounded-3xl border border-[#DCD2E3] hover:border-[#6F557D]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl space-y-4 flex flex-col justify-between group"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="space-y-3 text-center">
              {/* Profile Image with Gold Ring */}
              <div className="relative mx-auto w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#6F557D] via-[#C9A96E] to-[#FAF8F4] group-hover:scale-105 transition-transform duration-300 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-[#432C4D] text-[#C9A96E] border border-[#FAF8F4]">
                  {member.category === 'faculty' ? <GraduationCap className="w-3.5 h-3.5" /> : member.category === 'coordinator' ? <Sparkles className="w-3.5 h-3.5" /> : <Heart className="w-3.5 h-3.5" />}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-base font-bold text-[#432C4D] group-hover:text-[#6F557D] transition-colors">
                  {member.name}
                </h3>
                <div className="text-[11px] font-semibold text-[#6F557D] mt-0.5">
                  {member.role}
                </div>
              </div>

              {member.bio && (
                <p className="text-xs text-[#35283A]/70 font-light line-clamp-3 leading-relaxed">
                  {member.bio}
                </p>
              )}
            </div>

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="pt-3 border-t border-[#DCD2E3]/50 flex items-center justify-center gap-1.5 text-[11px] text-[#71806B] hover:text-[#432C4D] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#C9A96E]" /> {member.email}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

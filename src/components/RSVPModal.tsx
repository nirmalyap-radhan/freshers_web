import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Ticket, Download, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS } from '../data/mockData';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [stream, setStream] = useState('M.Sc. Mathematics (Fresher)');
  const [foodPref, setFoodPref] = useState<'veg' | 'non-veg'>('veg');
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) setStep(2);
  };

  const handleStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNo.trim()) {
      const generatedId = 'MATH-' + Math.floor(1000 + Math.random() * 9000);
      setTicketId(generatedId);
      setStep(3);
      // Trigger elegant gold/purple confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6F557D', '#C9A96E', '#EEE8F1', '#432C4D']
      });
    }
  };

  const resetModal = () => {
    setStep(1);
    setName('');
    setRollNo('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#35283A]/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FAF8F4] border border-[#C9A96E]/40 rounded-3xl p-6 shadow-2xl overflow-hidden">
        {/* Decorative Gold Corner Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C9A96E]/20 to-transparent rounded-bl-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#EEE8F1] text-[#432C4D] hover:bg-[#DCD2E3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Name Input */}
        {step === 1 && (
          <form onSubmit={handleStep1} className="space-y-5 pt-2">
            <div className="flex items-center gap-2 text-[#C9A96E] font-medium text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Question 01 of 02
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-[#432C4D] font-bold leading-tight">
              First things first... <br />
              <span className="font-script text-3xl text-[#6F557D]">What should we call you?</span>
            </h3>

            <p className="text-xs text-[#35283A]/70">
              Enter your full name as you would like it printed on your official Integral Festa fresher pass.
            </p>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#432C4D] block">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Priyadarshini Sahoo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] placeholder-[#6F557D]/50 focus:outline-none focus:border-[#6F557D] focus:ring-2 focus:ring-[#6F557D]/20 transition-all font-medium text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#432C4D] hover:bg-[#6F557D] disabled:opacity-50 text-[#FAF8F4] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shimmer-btn"
            >
              That's Me <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 2: Roll Number / ID */}
        {step === 2 && (
          <form onSubmit={handleStep2} className="space-y-5 pt-2">
            <div className="flex items-center gap-2 text-[#C9A96E] font-medium text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Question 02 of 02
            </div>

            <h3 className="font-serif text-2xl text-[#432C4D] font-bold leading-tight">
              Awesome, {name.split(' ')[0]}! <br />
              <span className="font-script text-3xl text-[#6F557D]">Okay, YOUR ID / Roll No?</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#432C4D] block mb-1">Roll Number / Student ID</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 26MATH042"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] placeholder-[#6F557D]/50 focus:outline-none focus:border-[#6F557D] transition-all font-medium text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#432C4D] block mb-1">Batch / Program</label>
                <select
                  value={stream}
                  onChange={(e) => setStream(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] focus:outline-none focus:border-[#6F557D] transition-all text-sm font-medium"
                >
                  <option value="M.Sc. Mathematics (Fresher 1st Yr)">M.Sc. Mathematics (Fresher 1st Yr)</option>
                  <option value="M.Sc. Mathematics (Senior 2nd Yr)">M.Sc. Mathematics (Senior 2nd Yr)</option>
                  <option value="B.Sc. Mathematics Scholar">B.Sc. Mathematics Scholar</option>
                  <option value="Faculty / Invited Guest">Faculty / Invited Guest</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#432C4D] block mb-1">Lunch Preference</label>
                <div className="flex gap-3">
                  {(['veg', 'non-veg'] as const).map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setFoodPref(pref)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize border transition-all ${
                        foodPref === pref
                          ? 'bg-[#6F557D] text-[#FAF8F4] border-[#6F557D]'
                          : 'bg-[#EEE8F1]/40 text-[#432C4D] border-[#DCD2E3]'
                      }`}
                    >
                      {pref === 'veg' ? '🥗 Vegetarian' : '🍗 Non-Vegetarian'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!rollNo.trim()}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#432C4D] hover:bg-[#6F557D] text-[#FAF8F4] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shimmer-btn"
            >
              Generate My Entry Pass <Ticket className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* STEP 3: Pass Ticket Confirmation Badge */}
        {step === 3 && (
          <div className="text-center space-y-4 py-2 animate-scaleUp">
            <div className="inline-flex p-3 rounded-full bg-[#EEE8F1] text-[#C9A96E] border border-[#C9A96E]/40 mb-1">
              <CheckCircle2 className="w-8 h-8 text-[#6F557D]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#432C4D]">
              YOU'RE IN! 🎉
            </h3>
            <p className="font-script text-2xl text-[#6F557D] -mt-2">
              Welcome to Integral Festa 2026
            </p>

            {/* Digital Pass Ticket Card */}
            <div className="glass-card-dark p-4 rounded-2xl border border-[#C9A96E]/50 text-left space-y-3 shadow-xl relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xs font-serif text-[#C9A96E] opacity-70">
                ∫ ∞
              </div>

              <div className="border-b border-[#C9A96E]/30 pb-2">
                <div className="text-[10px] uppercase tracking-widest text-[#C9A96E] font-medium">
                  {EVENT_DETAILS.department}
                </div>
                <div className="font-serif text-lg font-bold text-[#FAF8F4]">
                  {name}
                </div>
                <div className="text-xs text-[#DCD2E3]/80">
                  {stream} • Roll: {rollNo}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#FAF8F4]/90">
                <div>
                  <span className="text-[10px] text-[#C9A96E] block">DATE & TIME</span>
                  14 Oct 2026 | 10:00 AM
                </div>
                <div>
                  <span className="text-[10px] text-[#C9A96E] block">PASS CODE</span>
                  <span className="font-mono text-[#C9A96E] font-bold">{ticketId}</span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-[10px] text-[#DCD2E3]/70">
                <span>📍 IQAC Hall, Science PG Block</span>
                <span className="capitalize">🍱 {foodPref}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={resetModal}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#EEE8F1] text-[#432C4D] text-xs font-semibold hover:bg-[#DCD2E3] transition-colors"
              >
                Close & Return
              </button>
              <button
                onClick={() => alert(`Pass ${ticketId} saved to your device!`)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#C9A96E] text-[#432C4D] text-xs font-bold hover:bg-[#EAD5A8] transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <Download className="w-3.5 h-3.5" /> Save Pass
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

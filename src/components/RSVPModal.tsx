import React, { useState } from 'react';
import { X, Sparkles, Download, Ticket, RotateCcw, AlertCircle, Upload, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DigitalPass } from './DigitalPass';
import { generatePassPdf } from '../utils/generatePassPdf';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'pass'>('form');
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [program, setProgram] = useState('M.Sc. Mathematics');
  const [batch, setBatch] = useState('2026-2028');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [validationError, setValidationError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setValidationError('Photo size should be less than 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Validation
    if (!name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!rollNo.trim()) {
      setValidationError('Please enter your roll number.');
      return;
    }
    if (!program.trim()) {
      setValidationError('Please enter your program/course.');
      return;
    }
    if (!batch.trim()) {
      setValidationError('Please enter your batch.');
      return;
    }

    // Switch to Pass Preview step
    setStep('pass');

    // Trigger celebration confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#6F557D', '#C9A96E', '#EEE8F1', '#432C4D'],
    });
  };

  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);
      await generatePassPdf('digital-pass-card', name);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      alert('Could not download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const resetModal = () => {
    setStep('form');
    setValidationError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B2332]/85 backdrop-blur-md animate-fadeIn transition-opacity duration-300">
      {/* Click Backdrop to close */}
      <div className="absolute inset-0" onClick={resetModal} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg bg-[#FAF8F4] border-2 border-[#C9A96E]/50 rounded-[32px] p-5 sm:p-7 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col justify-between">
        
        {/* Close Cross Button */}
        <button
          onClick={resetModal}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#EEE8F1] text-[#432C4D] hover:bg-[#DCD2E3] active:scale-95 transition-all shadow-sm border border-[#DCD2E3]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: FORM INPUT */}
        {step === 'form' && (
          <form onSubmit={handleGeneratePass} className="space-y-4 pt-1 overflow-y-auto pr-1">
            <div className="flex items-center gap-2 text-[#C9A96E] font-semibold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Fresher Pass Registration
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#432C4D] font-bold leading-tight">
                Generate Your Official <br />
                <span className="font-script text-3xl sm:text-4xl text-[#6F557D]">Fresher Pass</span>
              </h3>
              <p className="text-xs text-[#35283A]/75 mt-1 font-light">
                Enter your details & upload your photo to generate your personalized entry pass.
              </p>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{validationError}</span>
              </div>
            )}

            {/* PHOTO UPLOAD FIELD */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#EEE8F1]/50 border border-[#DCD2E3]">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#FAF8F4] border-2 border-[#C9A96E] flex items-center justify-center shrink-0 shadow-sm">
                {photoUrl ? (
                  <img src={photoUrl} alt="Uploaded Avatar Preview" className="w-full h-full object-cover" />
                ) : (
                  <Camera className="w-6 h-6 text-[#6F557D]/60" />
                )}
              </div>

              <div className="flex-1 space-y-1">
                <label className="text-xs font-semibold text-[#432C4D] block">
                  Student Photo <span className="text-xs font-normal text-[#71806B]">(Recommended)</span>
                </label>
                <div className="flex gap-2">
                  <label className="py-1.5 px-3 rounded-xl bg-[#432C4D] hover:bg-[#6F557D] text-[#FAF8F4] text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 shadow-sm">
                    <Upload className="w-3.5 h-3.5 text-[#C9A96E]" />
                    <span>{photoUrl ? 'Change Photo' : 'Upload Photo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                  {photoUrl && (
                    <button
                      type="button"
                      onClick={() => setPhotoUrl('')}
                      className="py-1.5 px-2.5 rounded-xl bg-[#FAF8F4] text-[#432C4D] text-xs border border-[#DCD2E3] hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="text-xs font-semibold text-[#432C4D] block mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nirmalya Pradhan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] placeholder-[#6F557D]/50 focus:outline-none focus:border-[#6F557D] focus:ring-2 focus:ring-[#6F557D]/20 transition-all font-medium text-sm"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#432C4D] block mb-1">
                  Roll Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 234567890"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] placeholder-[#6F557D]/50 focus:outline-none focus:border-[#6F557D] transition-all font-medium text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#432C4D] block mb-1">
                    Program / Course <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M.Sc. Mathematics"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] placeholder-[#6F557D]/50 focus:outline-none focus:border-[#6F557D] transition-all font-medium text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#432C4D] block mb-1">
                    Batch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2026-2028"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#EEE8F1]/60 border border-[#DCD2E3] text-[#432C4D] placeholder-[#6F557D]/50 focus:outline-none focus:border-[#6F557D] transition-all font-medium text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-[#432C4D] hover:bg-[#6F557D] text-[#FAF8F4] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shimmer-btn"
              >
                <Ticket className="w-4 h-4 text-[#C9A96E]" /> Generate Pass
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: DIGITAL PASS PREVIEW */}
        {step === 'pass' && (
          <div className="space-y-4 text-center overflow-y-auto animate-scaleUp">
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#432C4D]">
                Your Official Fresher Pass
              </h3>
              <p className="text-xs text-[#71806B] font-light">
                Integral Festa 2026 • Department of Mathematics
              </p>
            </div>

            {/* Exact Template Digital Pass Display */}
            <div className="py-1">
              <DigitalPass
                name={name}
                rollNumber={rollNo}
                program={program}
                batch={batch}
                photoUrl={photoUrl}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full sm:w-1/2 py-3 px-4 rounded-2xl bg-[#EEE8F1] hover:bg-[#DCD2E3] text-[#432C4D] text-xs font-semibold border border-[#DCD2E3] transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Return to Form
              </button>

              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="w-full sm:w-1/2 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#C9A96E] to-[#EAD5A8] text-[#432C4D] text-xs font-bold shadow-md hover:shadow-gold-glow disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                {isDownloading ? 'Exporting PDF...' : 'Save Pass (PDF)'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

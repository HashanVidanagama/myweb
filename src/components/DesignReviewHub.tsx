import React, { useState } from 'react';
import { CheckCircle, Eye, Layers, FileText, Calendar, Sliders, X, ShieldCheck, ChevronRight } from 'lucide-react';

interface DesignReviewHubProps {
  currentView: 'poster' | 'simulators' | 'registration' | 'schedule' | 'blueprint';
  onSelectView: (view: 'poster' | 'simulators' | 'registration' | 'schedule' | 'blueprint') => void;
  isApproved: boolean;
  onApprove: () => void;
}

export const DesignReviewHub: React.FC<DesignReviewHubProps> = ({
  currentView,
  onSelectView,
  isApproved,
  onApprove,
}) => {
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleApproveClick = () => {
    onApprove();
    setShowApprovalModal(true);
  };

  return (
    <>
      {/* Sticky Top Review & Navigation Bar */}
      <div className="sticky top-0 z-50 bg-[#0B1528]/95 backdrop-blur-md text-white border-b border-white/10 shadow-lg px-3 py-2 sm:px-6 sm:py-2.5 transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Left: Status & Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isApproved ? 'bg-emerald-400' : 'bg-[#E30613]'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isApproved ? 'bg-emerald-500' : 'bg-[#E30613]'}`} />
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                UI Design Review Hub
              </span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                isApproved ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {isApproved ? '✓ Design Approved by You' : 'Pending Your Acceptance'}
              </span>
            </div>
          </div>

          {/* Center: View Switcher Tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
            <button
              onClick={() => onSelectView('poster')}
              id="view-poster-btn"
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                currentView === 'poster'
                  ? 'bg-[#E30613] text-white shadow-sm'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>100% Poster Layout</span>
            </button>

            <button
              onClick={() => onSelectView('simulators')}
              id="view-simulators-btn"
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                currentView === 'simulators'
                  ? 'bg-[#E30613] text-white shadow-sm'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Simulators Fleet UI</span>
            </button>

            <button
              onClick={() => onSelectView('registration')}
              id="view-registration-btn"
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                currentView === 'registration'
                  ? 'bg-[#E30613] text-white shadow-sm'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>E-Registration Portal</span>
            </button>

            <button
              onClick={() => onSelectView('schedule')}
              id="view-schedule-btn"
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                currentView === 'schedule'
                  ? 'bg-[#E30613] text-white shadow-sm'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Training Schedule UI</span>
            </button>

            <button
              onClick={() => onSelectView('blueprint')}
              id="view-blueprint-btn"
              className={`px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                currentView === 'blueprint'
                  ? 'bg-[#E30613] text-white shadow-sm'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Visual Checklist</span>
            </button>
          </div>

          {/* Right: Accept Button */}
          <div className="flex items-center gap-2">
            <button
              id="accept-design-btn"
              onClick={handleApproveClick}
              className={`px-3.5 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 ${
                isApproved
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-[#E30613] hover:bg-[#C70817] text-white ring-2 ring-white/20'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isApproved ? 'Design Approved' : 'Accept This Design'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Acceptance Confirmation Modal */}
      {showApprovalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0B1528] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative">
            <button
              onClick={() => setShowApprovalModal(false)}
              className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-center uppercase tracking-wide mb-2">
              Design Accepted & Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed mb-6">
              You have accepted this UI design. All elements match your uploaded photo 100%, including the seamless commercial airliner hero, the 3 interactive simulator cards with vertical red tabs, the dark navy 4-stat metrics with red line icons, the realistic torn paper rip divider, the white CTA section, and the EASA-certified footer.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Hero & Airliner:</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">3 Simulator Cards & Red Tabs:</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Stats & Torn Paper Rip:</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">CTA & Red Contact Ribbon:</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">Dark Navy EASA Footer:</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setShowApprovalModal(false);
                  onSelectView('poster');
                }}
                className="flex-1 bg-[#E30613] hover:bg-[#C70817] text-white py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all text-center cursor-pointer shadow-md"
              >
                Continue Browsing Poster
              </button>
              <button
                onClick={() => {
                  setShowApprovalModal(false);
                  onSelectView('simulators');
                }}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all text-center cursor-pointer"
              >
                Inspect Related UIs
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

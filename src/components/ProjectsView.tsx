import React, { useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ProjectsViewProps {
  onBackToHome: () => void;
  onStartProject?: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onBackToHome }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full min-h-[85vh] flex flex-col justify-start px-4 sm:px-6 lg:px-12 py-10 sm:py-14 bg-white select-none">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        
        {/* Project Card Aligned to the Left */}
        <div className="w-full max-w-lg mr-auto mb-14 text-left">
          <div className="w-full bg-white rounded-2xl border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            
            {/* Flippable Photo / Backside Description */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="relative w-full aspect-[16/9] cursor-pointer group select-none"
              style={{ perspective: '1000px' }}
              title={isFlipped ? 'Click to see photo' : 'Click to see description'}
            >
              <div
                className="w-full h-full relative transition-transform duration-500 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT SIDE: Photo */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <img
                    src="/projects/samantha-tours-desktop.png"
                    alt="Bentota Samantha Tours & Travels"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* BACK SIDE: ONLY Description, No other elements */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden bg-[#0B1528] text-white p-6 sm:p-7 flex items-center justify-center text-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                    Bentota Samantha Tours &amp; Travels is a dedicated tourism and travel web platform created for international visitors exploring Sri Lanka. The website showcases private multi-day round tours, popular day excursions from Bentota, direct WhatsApp booking inquiry funnels, and personalized chauffeur-guide travel services.
                  </p>
                </div>
              </div>
            </div>

            {/* Card Footer: Project Name & Link Button */}
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
              <h2
                className="text-sm sm:text-base font-black text-[#0B1528] tracking-tight uppercase leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                title="Bentota Samantha Tours & Travels"
              >
                Bentota Samantha Tours &amp; Travels
              </h2>

              {/* Direct Link to Website */}
              <a
                href="https://bentotasamanthatours.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 bg-[#E30613] hover:bg-[#C70817] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm shrink-0 active:scale-95 cursor-pointer"
              >
                <span>Visit</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* Moved Down: UPDATING SOON Section */}
        <div className="w-full flex flex-col items-center justify-center text-center pt-8 border-t border-gray-100">
          {/* Accent Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E30613] text-xs font-extrabold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E30613] animate-pulse" />
            <span>UPDATING SOON</span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1528] tracking-tight uppercase mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            UPDATING SOON
          </h2>

          {/* Short Subtext */}
          <p className="text-sm text-gray-500 font-medium mb-8 max-w-sm">
            Our projects portfolio is currently being updated.
          </p>

          {/* Back to Home Button */}
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 bg-[#0B1528] hover:bg-[#182238] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

      </div>
    </div>
  );
};

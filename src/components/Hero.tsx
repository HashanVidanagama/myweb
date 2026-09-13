import React from 'react';
import heroMockupImg from './ChatGPT Image Sep 13, 2026, 11_46_11 AM.png';

interface HeroProps {
  onLearnMore: () => void;
  onOpenRegistration: () => void;
}

const HERO_SLIDES = [
  {
    id: '01',
    category: 'SOFTWARE ENGINEERING',
    headingLine1: 'WE BUILD',
    headingLine2: "WHAT'S NEXT",
    headingLine3: 'IN SOFTWARE',
    subline1: 'Specialized in Web & Mobile Apps, StandAlone Software, AI & Business Automation.',
    aircraftImg: heroMockupImg,
    altText: 'Software engineering company hero showcase',
  }
];

export const Hero: React.FC<HeroProps> = ({ onLearnMore, onOpenRegistration }) => {
  const currentSlide = HERO_SLIDES[0];

  return (
    <section
      id="hero-section"
      className="relative w-full bg-white overflow-hidden pt-6 pb-12 md:pt-14 md:pb-24 select-none"
    >
      {/* Background Seamless Composition - Desktop */}
      <div className="hidden lg:block absolute top-0 right-0 w-full lg:w-3/5 h-full pointer-events-none overflow-hidden z-0">
        <div className="relative w-full h-full">
          <img
            src={currentSlide.aircraftImg}
            alt={currentSlide.altText}
            className="w-full h-full object-cover object-center filter contrast-105 saturate-115"
          />
          {/* Gentle, subtle transition into white on the left */}
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/30 to-transparent" />
          
          {/* Seamless pure white sync on the circled bottom part (chair & desk frame) */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-5 bg-white pointer-events-none" />
        </div>
      </div>

      {/* Mobile-Only Top Visual Showcase: Clean & Balanced */}
      <div className="block lg:hidden relative w-full h-[300px] xs:h-[320px] sm:h-[350px] overflow-hidden -mt-6 select-none">
        <img
          src={currentSlide.aircraftImg}
          alt={currentSlide.altText}
          className="w-full h-full object-cover object-center filter contrast-105 saturate-115"
          referrerPolicy="no-referrer"
        />
        {/* Subtle text contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-transparent pointer-events-none" />

        {/* Clean, moderate white fade into bottom content space */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />
        <div className="absolute inset-x-0 -bottom-1 h-3 bg-white pointer-events-none" />

        {/* Mobile Headline Centered in Image Middle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-2 pb-6">
          <h1
            className="text-[36px] xs:text-[40px] sm:text-[46px] font-black text-white uppercase leading-[0.92] tracking-tight drop-shadow-2xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {currentSlide.headingLine1}
            <br />
            {currentSlide.headingLine2}
            <br />
            <span className="text-white">{currentSlide.headingLine3}</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mt-1 sm:mt-3 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-0 md:min-h-[520px]">
          
          {/* Left Hero Typography & Actions */}
          <div className="lg:col-span-7 xl:col-span-6 relative">
            
            {/* Desktop Only: Main Bold Headline */}
            <h1
              className="hidden lg:block text-5xl md:text-6xl lg:text-[68px] font-black text-[#0B1528] uppercase leading-[0.92] tracking-tighter mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {currentSlide.headingLine1}
              <br />
              {currentSlide.headingLine2}
              <br />
              <span className="text-[#0B1528]">{currentSlide.headingLine3}</span>
            </h1>

            {/* Subtitle in White Space */}
            <div className="text-[13.5px] sm:text-[15px] text-gray-600 font-medium leading-relaxed mb-5 sm:mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              <p>{currentSlide.subline1}</p>
            </div>

            {/* Action Buttons in White Space */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button
                id="hero-learn-more-btn"
                onClick={onLearnMore}
                className="w-full sm:w-auto text-center justify-center bg-[#E30613] hover:bg-[#C70817] text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                EXPLORE SERVICES
              </button>
              <button
                id="hero-registration-btn"
                onClick={onOpenRegistration}
                className="w-full sm:w-auto text-center justify-center border-2 border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer bg-white shadow-sm"
              >
                START A PROJECT
              </button>
            </div>
          </div>

          {/* Right Spacer */}
          <div className="lg:col-span-5 xl:col-span-6 relative h-full pointer-events-none" />

        </div>
      </div>
    </section>
  );
};

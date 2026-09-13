import React, { useState } from 'react';
import { SimulatorItem } from '../types';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface SimulatorsSectionProps {
  onSelectSimulator: (sim: SimulatorItem) => void;
  onViewAllSimulators: () => void;
}

interface ServiceBox {
  id: string;
  ribbon: string;
  titleLines: string[];
  subtitle: string;
  badgeTag: string;
  highlights: string[];
  image: string;
}

const SERVICES_LIST: ServiceBox[] = [
  {
    id: 'web-dev',
    ribbon: 'WEB DEVELOPMENT',
    titleLines: ['WEBSITE', 'DEVELOPMENT'],
    subtitle: 'Modern, responsive cloud web platforms, custom enterprise portals, and progressive web apps engineered for ultra-fast speed and hyper-scale.',
    badgeTag: 'Full-Stack Web',
    highlights: ['Cloud-Native Architecture', 'React, Next.js, Vue, TS', 'SEO & Speed Optimized'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'mobile-dev',
    ribbon: 'MOBILE APPS',
    titleLines: ['MOBILE APP', 'DEVELOPMENT'],
    subtitle: 'Cross-platform and native iOS & Android applications delivering fluid 60fps animations, intuitive ergonomics, and reliable offline data sync.',
    badgeTag: 'iOS & Android',
    highlights: ['Flutter & React Native', 'Offline-First SQLite Sync', 'Push & Biometric Engine'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'standalone-dev',
    ribbon: 'STANDALONE',
    titleLines: ['STANDALONE', 'SOFTWARE'],
    subtitle: 'High-throughput standalone desktop applications, custom POS/ERP suites, and offline-first software built with deep hardware integrations.',
    badgeTag: 'Desktop Systems',
    highlights: ['Enterprise POS & ERP', '100% Offline Capability', 'Industrial Hardware I/O'],
    image: '/pos-system.jpg'
  },
  {
    id: 'process-automation',
    ribbon: 'AUTOMATION',
    titleLines: ['PROCESS', 'AUTOMATION'],
    subtitle: 'Robotic process automation, automated data pipelines, and workflow orchestration eliminating human friction and operational bottlenecks.',
    badgeTag: 'BPA & RPA',
    highlights: ['Autonomous Workflow Bots', 'Legacy API Connectors', '10x Operational Speedup'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'ai-applications',
    ribbon: 'AI APPLICATIONS',
    titleLines: ['AI SUPPORTED', 'APPLICATIONS'],
    subtitle: 'Production-grade machine learning models, custom generative copilots, predictive intelligence, and cognitive business assistants.',
    badgeTag: 'Cognitive AI',
    highlights: ['Predictive ML Models', 'Custom AI Copilots', 'Private Vector Retrieval'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
  }
];

export const SimulatorsSection: React.FC<SimulatorsSectionProps> = ({
  onSelectSimulator,
  onViewAllSimulators,
}) => {
  // Default active card is the first one or center one
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Touch Swipe Gesture State for Mobile View
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Mouse Drag Gesture State (for testing on desktop/emulators)
  const [mouseStartX, setMouseStartX] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      // Swiped Left -> Next Card
      setActiveCardIndex((prev) => (prev < SERVICES_LIST.length - 1 ? prev + 1 : 0));
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Previous Card
      setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : SERVICES_LIST.length - 1));
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setMouseStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown || mouseStartX === null) return;
    setIsMouseDown(false);
    const distance = mouseStartX - e.clientX;
    if (distance > minSwipeDistance) {
      setActiveCardIndex((prev) => (prev < SERVICES_LIST.length - 1 ? prev + 1 : 0));
    } else if (distance < -minSwipeDistance) {
      setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : SERVICES_LIST.length - 1));
    }
    setMouseStartX(null);
  };

  return (
    <section
      id="services-section"
      className="w-full bg-[#0B1528] relative pt-14 pb-14 select-none overflow-hidden"
    >
      <div id="simulators-section" className="sr-only" />
      
      {/* Ambient background glow */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#E30613]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading Above Items */}
        <div className="text-center mb-8 sm:mb-11">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30613] block mb-2">
            What We Engineer
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Software Services
          </h2>
          {/* Subtitle - Desktop */}
          <p className="hidden lg:block text-gray-400 text-xs sm:text-sm mt-2.5 max-w-2xl mx-auto leading-relaxed">
            Hover over any service box to expand its architectural details, core technologies, and deliverables.
          </p>

          {/* Subtitle - Mobile with Swipe Indication */}
          <p className="block lg:hidden text-gray-400 text-xs mt-2 max-w-sm mx-auto leading-relaxed">
            Swipe horizontally to browse through our specialized software engineering services.
          </p>
        </div>

        {/* Dynamic Interactive Accordion / Expandable Cards Container */}
        <div className="hidden lg:flex items-stretch gap-3.5 h-[440px] w-full">
          {SERVICES_LIST.map((service, idx) => {
            const isActive = activeCardIndex === idx;

            if (isActive) {
              return (
                /* Enlarged Active Center-Style Box */
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveCardIndex(idx)}
                  className="flex-[3.5] relative rounded-none overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-out border border-white/20 ring-2 ring-[#E30613] h-full"
                >
                  <div className="relative h-full w-full bg-slate-950 flex">
                    {/* Left Visual Area */}
                    <div className="w-[45%] h-full relative overflow-hidden shrink-0">
                      <img
                        src={service.image}
                        alt={service.ribbon}
                        className="w-full h-full object-cover object-center filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                      
                      {/* Ceynova Brand Emblem Badge on Bottom-Left */}
                      <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white/50">
                        <div className="w-5 h-5 rounded-full bg-[#E30613] flex items-center justify-center shadow-inner">
                          <span className="text-white font-black text-[9px]">C</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-[#E30613] leading-none uppercase">CEYNOVA</span>
                          <span className="text-[8px] font-bold text-[#0B1528] leading-none uppercase mt-0.5">TECHNOLOGIES</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Red Detail Overlay Panel */}
                    <div
                      className="w-[55%] h-full bg-[#E30613] p-6 sm:p-7 text-white shadow-2xl flex flex-col justify-between"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded bg-black/20 text-[10px] font-extrabold uppercase tracking-widest text-white mb-3">
                          {service.badgeTag}
                        </div>
                        <h3
                          className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-[0.94] mb-3 text-white"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {service.titleLines.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </h3>
                        <p className="text-[11.5px] leading-relaxed font-medium text-white/95 mb-4">
                          {service.subtitle}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="flex flex-col gap-1.5">
                          {service.highlights.map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-[10.5px] font-semibold text-white/90 uppercase tracking-wide">
                              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            /* Compact Inactive Box with Vertical Ribbon */
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardIndex(idx)}
                onClick={() => setActiveCardIndex(idx)}
                className="flex-1 relative rounded-none overflow-hidden shadow-xl cursor-pointer transition-all duration-500 ease-out border border-white/10 hover:border-red-500/60 group h-[395px] my-auto opacity-80 hover:opacity-100"
              >
                {/* Vertical Left Red Ribbon with Service Name */}
                <div className="absolute left-0 top-0 bottom-0 w-11 bg-[#E30613] z-20 flex items-center justify-center shadow-lg group-hover:bg-[#c70817] transition-colors">
                  <span
                    className="text-white font-black text-xs tracking-widest uppercase whitespace-nowrap select-none"
                    style={{
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      letterSpacing: '0.22em'
                    }}
                  >
                    {service.ribbon}
                  </span>
                </div>

                {/* Card Background Image */}
                <div className="relative h-full w-full pl-11 bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.ribbon}
                    className="w-full h-full object-cover object-center filter brightness-75 group-hover:brightness-95 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 pl-11 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3">
                    <span className="text-white font-bold text-[10px] uppercase tracking-wider text-gray-300 line-clamp-1">
                      {service.badgeTag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet View (< lg): Swipeable Carousel with Clean White Card Aesthetic */}
        <div className="block lg:hidden">
          {/* Swipeable Cards Window */}
          <div
            className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsMouseDown(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${SERVICES_LIST.length * 100}%`,
                transform: `translateX(-${(activeCardIndex * 100) / SERVICES_LIST.length}%)`,
              }}
            >
              {SERVICES_LIST.map((service, idx) => (
                <div
                  key={service.id}
                  className="shrink-0 px-1"
                  style={{ width: `${100 / SERVICES_LIST.length}%` }}
                >
                  <div className="rounded-xl overflow-hidden bg-white shadow-2xl border border-gray-100">
                    
                    {/* Top Discipline Tag Bar - Clean White */}
                    <div className="flex items-center justify-between p-3.5 bg-white border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 bg-[#E30613] text-white font-black text-xs flex items-center justify-center rounded">
                          0{idx + 1}
                        </span>
                        <span
                          className="text-xs font-black text-[#0B1528] uppercase tracking-wider"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {service.ribbon}
                        </span>
                      </div>
                      <span className="text-[9.5px] font-extrabold text-[#E30613] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {service.badgeTag}
                      </span>
                    </div>

                    {/* Visual Area with Image & Ceynova Emblem */}
                    <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.ribbon}
                        className="w-full h-full object-cover object-center filter brightness-95 pointer-events-none select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                      {/* Ceynova Brand Emblem Badge */}
                      <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-2 border border-white/80">
                        <div className="w-4 h-4 rounded-full bg-[#E30613] flex items-center justify-center shadow-inner">
                          <span className="text-white font-black text-[8px]">C</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black text-[#E30613] leading-none uppercase">CEYNOVA</span>
                          <span className="text-[7px] font-bold text-[#0B1528] leading-none uppercase mt-0.5">TECHNOLOGIES</span>
                        </div>
                      </div>

                      {/* Floating Indicator Cue on Right */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/25 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span>Swipe</span>
                        <span className="text-[#E30613]">↔</span>
                      </div>
                    </div>

                    {/* Detail Panel - Clean White Background with Dark Typography */}
                    <div className="p-5 sm:p-6 bg-white text-[#0B1528]">
                      <h3
                        className="text-2xl font-black uppercase tracking-tight leading-tight mb-2 text-[#0B1528]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {service.titleLines.join(' ')}
                      </h3>

                      <p className="text-xs leading-relaxed text-gray-600 font-medium mb-4">
                        {service.subtitle}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5">
                        {service.highlights.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase bg-gray-100 text-gray-800 px-2.5 py-1 rounded border border-gray-200/80"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] shrink-0" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Controls & Pagination Indicators */}
          <div className="flex items-center justify-between mt-4 px-2">
            {/* Prev Arrow */}
            <button
              type="button"
              onClick={() => setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : SERVICES_LIST.length - 1))}
              className="w-10 h-10 rounded-full bg-white text-[#0B1528] hover:bg-[#E30613] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/50 active:scale-95 shadow-lg"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 5 Dots / Pill Indicators */}
            <div className="flex items-center gap-2">
              {SERVICES_LIST.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                    activeCardIndex === idx
                      ? 'w-7 bg-white shadow-md shadow-white/40'
                      : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to ${srv.ribbon}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={() => setActiveCardIndex((prev) => (prev < SERVICES_LIST.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full bg-white text-[#0B1528] hover:bg-[#E30613] hover:text-white flex items-center justify-center transition-all cursor-pointer border border-white/50 active:scale-95 shadow-lg"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Subtle Secondary Hint */}
          <div className="text-center mt-2.5 text-[11px] font-semibold text-gray-300 flex items-center justify-center gap-1.5 tracking-wider uppercase">
            <span className="text-[#E30613]">←</span>
            <span>Swipe horizontally or tap arrows</span>
            <span className="text-[#E30613]">→</span>
          </div>

        </div>

      </div>
    </section>
  );
};

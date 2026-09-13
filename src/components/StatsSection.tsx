import React from 'react';
import {
  CloudServerIcon,
  CodeTerminalIcon,
  AutomationGearIcon,
  AiCognitiveIcon,
} from './StatsIcons';

export const StatsSection: React.FC = () => {
  return (
    <section
      id="stats-section"
      className="w-full bg-[#0B1528] text-white pt-16 pb-20 md:pt-20 md:pb-28 relative select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* 4 Columns with Thin Red Vertical Line Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          
          {/* Column 1: 99.9% */}
          <div className="flex flex-col items-center text-center relative px-4 lg:px-6 lg:border-r border-[#E30613]/30 group">
            {/* Ghost background watermark number */}
            <div className="select-none pointer-events-none mb-3">
              <span
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1a2c4b] group-hover:text-[#223961] transition-colors duration-300 block leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                99.9%
              </span>
            </div>

            {/* Red Line Icon */}
            <div className="my-3 transform group-hover:scale-110 transition-transform duration-300">
              <CloudServerIcon className="w-14 h-14 sm:w-16 sm:h-16" color="#E30613" />
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-[13px] text-gray-300 font-normal leading-relaxed max-w-[220px]">
              Mission-critical cloud infrastructure & distributed systems delivering{' '}
              <strong className="text-white font-black block mt-1 tracking-wider uppercase">
                99.9% SYSTEM UPTIME.
              </strong>
            </p>
          </div>

          {/* Column 2: 5 */}
          <div className="flex flex-col items-center text-center relative px-4 lg:px-6 lg:border-r border-[#E30613]/30 group">
            {/* Ghost background watermark number */}
            <div className="select-none pointer-events-none mb-3">
              <span
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1a2c4b] group-hover:text-[#223961] transition-colors duration-300 block leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                5
              </span>
            </div>

            {/* Red Line Icon */}
            <div className="my-3 transform group-hover:scale-110 transition-transform duration-300">
              <CodeTerminalIcon className="w-14 h-14 sm:w-16 sm:h-16" color="#E30613" />
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-[13px] text-gray-300 font-normal leading-relaxed max-w-[220px]">
              Full-cycle bespoke engineering spanning web, mobile, standalone & AI across{' '}
              <strong className="text-white font-black block mt-1 tracking-wider uppercase">
                5 CORE DISCIPLINES.
              </strong>
            </p>
          </div>

          {/* Column 3: 10X */}
          <div className="flex flex-col items-center text-center relative px-4 lg:px-6 lg:border-r border-[#E30613]/30 group">
            {/* Ghost background watermark number */}
            <div className="select-none pointer-events-none mb-3">
              <span
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1a2c4b] group-hover:text-[#223961] transition-colors duration-300 block leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                10X
              </span>
            </div>

            {/* Red Line Icon */}
            <div className="my-3 transform group-hover:scale-110 transition-transform duration-300">
              <AutomationGearIcon className="w-14 h-14 sm:w-16 sm:h-16" color="#E30613" />
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-[13px] text-gray-300 font-normal leading-relaxed max-w-[220px]">
              Accelerating enterprise throughput and eliminating manual friction with{' '}
              <strong className="text-white font-black block my-1 tracking-wider uppercase">
                10X PROCESS VELOCITY
              </strong>
              via smart automation.
            </p>
          </div>

          {/* Column 4: 24/7 */}
          <div className="flex flex-col items-center text-center relative px-4 lg:px-6 group">
            {/* Ghost background watermark number */}
            <div className="select-none pointer-events-none mb-3">
              <span
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1a2c4b] group-hover:text-[#223961] transition-colors duration-300 block leading-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                24/7
              </span>
            </div>

            {/* Red Line Icon */}
            <div className="my-3 transform group-hover:scale-110 transition-transform duration-300">
              <AiCognitiveIcon className="w-14 h-14 sm:w-16 sm:h-16" color="#E30613" />
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-[13px] text-gray-300 font-normal leading-relaxed max-w-[220px]">
              Autonomous neural models and cognitive decision workflows executing{' '}
              <strong className="text-white font-black block mt-1 tracking-wider uppercase">
                24/7 INTELLIGENT OPS.
              </strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

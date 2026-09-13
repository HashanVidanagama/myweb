import React, { useEffect, useState } from 'react';

interface LogoLoaderProps {
  onComplete: () => void;
  duration?: number; // total duration in ms, default 3200ms
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({
  onComplete,
  duration = 3200,
}) => {
  const [animStage, setAnimStage] = useState<'arc' | 'reveal' | 'orbit' | 'sheen' | 'exit'>('arc');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Stage 1: Arc tracing (0ms - 750ms)
    const t1 = setTimeout(() => setAnimStage('reveal'), 750);

    // Stage 2: Logo reveal & subtle neon pulse (750ms - 1400ms)
    const t2 = setTimeout(() => setAnimStage('orbit'), 1400);

    // Stage 3: Two sleek orbital glowing rings swirl around logo (1400ms - 2300ms)
    const t3 = setTimeout(() => setAnimStage('sheen'), 2300);

    // Stage 4: Specular gloss sheen sweep across logo (2300ms - 2800ms)
    const t4 = setTimeout(() => {
      setAnimStage('exit');
      setIsExiting(true);
    }, duration - 450);

    // Stage 5: Final fade out and notify parent
    const t5 = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [duration, onComplete]);

  return (
    <div
      id="ceynova-logo-loader"
      className={`fixed inset-0 z-[9999] bg-[#03050a] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-600 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 50%, #0c101a 0%, #05070d 55%, #020306 100%)',
      }}
    >
      {/* Background Ambient Glow - Soft and subtle, NOT blown out */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className={`w-72 h-72 rounded-full bg-[#E30613]/12 blur-[60px] transition-all duration-1000 ${
            animStage === 'arc'
              ? 'opacity-20 scale-75'
              : animStage === 'orbit'
              ? 'opacity-40 scale-100'
              : 'opacity-25 scale-90'
          }`}
        />
      </div>

      {/* Main Animation Stage Center - Reduced size */}
      <div className="relative w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center">
        
        {/* ========================================================================= */}
        {/* 1. INITIAL NEON LASER ARC TRACING (0s - 0.9s)                             */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 160 160"
          className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500 ${
            animStage === 'exit' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <defs>
            <filter id="neon-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur1" />
              <feGaussianBlur stdDeviation="4" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing red-white linear gradient for laser arc */}
            <linearGradient id="laser-stroke-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#FF3847" />
              <stop offset="100%" stopColor="#E30613" />
            </linearGradient>
          </defs>

          {/* Neon Arc Circle Path */}
          <circle
            cx="80"
            cy="80"
            r="66"
            fill="none"
            stroke="url(#laser-stroke-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#neon-glow-filter)"
            className="loader-laser-circle"
          />
        </svg>

        {/* ========================================================================= */}
        {/* 2. CENTRAL EMBLEM WITH LOGO - Sharp, Clear, Balanced Brightness           */}
        {/* ========================================================================= */}
        <div
          className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex items-center justify-center transition-all duration-700 z-20 ${
            animStage === 'arc'
              ? 'opacity-0 scale-85'
              : 'opacity-100 scale-100'
          }`}
          style={{
            boxShadow:
              animStage === 'orbit' || animStage === 'sheen'
                ? '0 0 20px rgba(227,6,19,0.55), 0 0 45px rgba(227,6,19,0.2)'
                : '0 0 14px rgba(227,6,19,0.35)',
          }}
        >
          {/* Subtle Outer Neon Rim */}
          <div
            className={`absolute -inset-[2px] rounded-full border border-[#ff3b47]/80 pointer-events-none transition-opacity duration-500 ${
              animStage === 'arc' ? 'opacity-0' : 'opacity-100'
            }`}
            style={{
              boxShadow: '0 0 8px rgba(255, 46, 59, 0.6)',
            }}
          />

          {/* Logo Container - Clean, Crisp and 100% visible */}
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-black/40 backdrop-blur-sm p-1">
            <img
              src="/ceynova-logo.png"
              alt="Ceynova Logo"
              className={`w-full h-full object-contain relative z-10 transition-transform duration-500 ${
                animStage === 'orbit' ? 'scale-102' : 'scale-100'
              }`}
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
              }}
            />

            {/* Specular Gloss Sheen Sweep (Stage 4, 2.3s+) */}
            <div
              className={`absolute inset-0 z-20 pointer-events-none ${
                animStage === 'sheen' || animStage === 'exit'
                  ? 'loader-specular-sweep'
                  : 'opacity-0'
              }`}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. TWO LUMINOUS 3D ORBITAL RINGS (Stage 3, 1.4s+)                          */}
        {/* ========================================================================= */}
        {(animStage === 'orbit' || animStage === 'sheen' || animStage === 'exit') && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            {/* Orbital Ring 1: Tilted Top-Left to Bottom-Right */}
            <div
              className="absolute w-52 h-52 sm:w-56 sm:h-56 pointer-events-none"
              style={{
                transform: 'rotate(-35deg) scaleY(0.40)',
              }}
            >
              <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible">
                <defs>
                  <filter id="orbit-glow-1" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="orbit-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#FF3847" stopOpacity="0.8" />
                    <stop offset="85%" stopColor="#E30613" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="120"
                  cy="120"
                  r="105"
                  fill="none"
                  stroke="url(#orbit-grad-1)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  filter="url(#orbit-glow-1)"
                  className="loader-orbital-spin-1"
                />
              </svg>
            </div>

            {/* Orbital Ring 2: Tilted Bottom-Left to Top-Right */}
            <div
              className="absolute w-52 h-52 sm:w-56 sm:h-56 pointer-events-none"
              style={{
                transform: 'rotate(38deg) scaleY(0.40)',
              }}
            >
              <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible">
                <defs>
                  <filter id="orbit-glow-2" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="orbit-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#FF3847" stopOpacity="0.8" />
                    <stop offset="85%" stopColor="#E30613" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="120"
                  cy="120"
                  r="105"
                  fill="none"
                  stroke="url(#orbit-grad-2)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  filter="url(#orbit-glow-2)"
                  className="loader-orbital-spin-2"
                />
              </svg>
            </div>

            {/* Subtle Horizon Glow Streak (NO blinding center blob) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none loader-flare-streak">
              <div className="w-56 sm:w-64 h-[1.5px] bg-gradient-to-r from-transparent via-white/60 to-transparent blur-[0.4px]" />
            </div>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* 4. BRAND TYPOGRAPHY                                                        */}
      {/* ========================================================================= */}
      <div
        className={`mt-8 text-center transition-all duration-700 flex flex-col items-center ${
          animStage === 'sheen' || animStage === 'exit'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2'
        }`}
      >
        <span
          className="text-white text-lg sm:text-xl font-black uppercase tracking-[0.35em] block leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FF2E3B]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          CEYNOVA
        </span>
        <span
          className="text-slate-400 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.45em] mt-2 block"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          TECHNOLOGIES
        </span>
      </div>


      {/* Embedded Component Keyframes Styling */}
      <style>{`
        /* Laser Arc Trace Animation (Circumference of r=66 is ~415px) */
        .loader-laser-circle {
          stroke-dasharray: 415;
          stroke-dashoffset: 415;
          animation: laserArcTrace 0.85s cubic-bezier(0.25, 0.9, 0.35, 1) forwards;
          transform-origin: center;
          transform: rotate(-90deg);
        }

        @keyframes laserArcTrace {
          0% {
            stroke-dashoffset: 415;
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        /* 3D Orbital Light Ring 1 Spin (Circumference of r=105 is ~660px) */
        .loader-orbital-spin-1 {
          stroke-dasharray: 300 360;
          animation: orbitSpin1 1.35s ease-in-out infinite;
          transform-origin: 120px 120px;
        }

        @keyframes orbitSpin1 {
          0% {
            stroke-dashoffset: 660;
            opacity: 0.2;
          }
          40% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.85;
          }
        }

        /* 3D Orbital Light Ring 2 Spin */
        .loader-orbital-spin-2 {
          stroke-dasharray: 300 360;
          animation: orbitSpin2 1.35s ease-in-out infinite;
          transform-origin: 120px 120px;
        }

        @keyframes orbitSpin2 {
          0% {
            stroke-dashoffset: -660;
            opacity: 0.2;
          }
          40% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.85;
          }
        }

        /* Horizon Flare Streak (Subtle and clean, fades in & out) */
        .loader-flare-streak {
          animation: flareStreakAnim 0.75s ease-out forwards;
        }

        @keyframes flareStreakAnim {
          0% {
            opacity: 0;
            transform: scaleX(0.2);
          }
          40% {
            opacity: 0.8;
            transform: scaleX(1);
          }
          100% {
            opacity: 0;
            transform: scaleX(1.15);
          }
        }

        /* Specular Gloss Sweep across Logo */
        .loader-specular-sweep {
          background: linear-gradient(
            115deg,
            transparent 35%,
            rgba(255, 255, 255, 0.15) 45%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.15) 55%,
            transparent 65%
          );
          animation: specularSweep 0.8s ease-out forwards;
        }

        @keyframes specularSweep {
          0% {
            transform: translateX(-120%) translateY(-120%);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(120%) translateY(120%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};


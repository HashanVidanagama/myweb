import React from 'react';

interface TurkishLogoProps {
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TurkishLogo: React.FC<TurkishLogoProps> = ({
  variant = 'light',
  showSubtitle = true,
  className = '',
  size = 'md',
}) => {
  const isWhite = variant === 'white';
  const circleSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-[15px]';
  const subtitleSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[11px]' : 'text-[9.5px]';

  return (
    <div className={`flex items-center gap-2.5 select-none cursor-pointer ${className}`} id="brand-logo">
      {/* Official Ceynova Logo Emblem Image */}
      <div className={`${circleSize} shrink-0 relative transition-transform hover:scale-105 duration-200 flex items-center justify-center`}>
        <img
          src="/ceynova-logo.png"
          alt="Ceynova Technologies"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`${titleSize} font-extrabold tracking-wider uppercase ${
            isWhite ? 'text-white' : 'text-[#E30613]'
          }`}
          style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
        >
          CEYNOVA
        </span>
        {showSubtitle && (
          <span
            className={`${subtitleSize} font-bold tracking-tight uppercase ${
              isWhite ? 'text-slate-300' : 'text-[#182238]'
            }`}
            style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.08em' }}
          >
            TECHNOLOGIES
          </span>
        )}
      </div>
    </div>
  );
};

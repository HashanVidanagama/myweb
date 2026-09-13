import React from 'react';
import { TurkishLogo } from './TurkishLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-[#070D18] text-white pt-14 pb-10 relative select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Navigation Columns tailored for Ceynova Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 text-left pl-6 sm:pl-0">
          {/* Col 1: ABOUT US */}
          <div>
            <h4
              onClick={() => onNavigate('about-section')}
              className="text-xs font-black tracking-wider uppercase text-white hover:text-[#E30613] cursor-pointer transition-colors mb-3"
            >
              ABOUT US
            </h4>
            <ul className="space-y-2 text-[11px] text-gray-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Company Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Core Disciplines
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('vision-section')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Strategic Vision
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: SERVICES */}
          <div>
            <h4
              onClick={() => onNavigate('services')}
              className="text-xs font-black tracking-wider uppercase text-white hover:text-[#E30613] cursor-pointer transition-colors mb-3"
            >
              SERVICES
            </h4>
            <ul className="space-y-2 text-[11px] text-gray-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Website Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  StandAlone Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Process Automation (BPA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Cognitive AI Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: CONNECT */}
          <div>
            <h4 className="text-xs font-black tracking-wider uppercase text-white mb-3">
              CONNECT
            </h4>
            <ul className="space-y-2 text-[11px] text-gray-400 font-medium">
              <li>
                <a
                  href={`https://wa.me/94710497858?text=${encodeURIComponent('Hello Ceynova Technologies! I would like to get started with your team.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +94 71 049 7858
                </a>
              </li>
              <li>
                <a
                  href="mailto:ceynovatechnologies@gmail.com"
                  className="hover:text-red-400 transition-colors break-all"
                >
                  ceynovatechnologies@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Spacer on desktop / empty column */}
          <div className="hidden lg:block" />

          {/* Col 4: CONTACT US (Social Icons: Strictly Facebook, WhatsApp, Gmail) */}
          <div className="flex flex-col items-start">
            <div className="inline-flex flex-col items-center">
              <h4 className="text-xs font-black tracking-wider uppercase text-white mb-3 text-center">
                CONTACT US
              </h4>
              {/* Social Icons: Strictly Facebook, WhatsApp, Gmail */}
              <div className="flex items-center justify-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1877F2]/20 hover:text-[#1877F2] text-gray-300 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#1877F2]/40"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/94710497858?text=${encodeURIComponent('Hello Ceynova Technologies! I would like to start a project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-600/20 hover:text-emerald-400 text-gray-300 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-emerald-500/40"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.538 1.898.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.806-5.768-5.766zm0 10.428c-.808 0-1.636-.232-2.368-.667l-.17-.101-1.751.459.467-1.706-.111-.177a4.673 4.673 0 0 1-.72-2.471c.001-2.58 2.098-4.677 4.653-4.677 2.554 0 4.653 2.097 4.653 4.677 0 2.58-2.099 4.663-4.653 4.663zm2.55-3.489c-.14-.07-.828-.409-.956-.456-.129-.047-.222-.07-.316.07s-.363.456-.445.55-.164.105-.304.035c-.14-.07-.591-.218-1.126-.694-.416-.37-.697-.827-.779-.967-.082-.14-.009-.216.061-.285.063-.063.14-.164.21-.246.07-.082.094-.14.14-.234.047-.094.023-.175-.012-.246-.035-.07-.316-.761-.433-1.042-.114-.274-.23-.237-.316-.241l-.27-.005c-.094 0-.246.035-.375.175s-.492.48-.492 1.17.504 1.357.574 1.451c.07.094.992 1.514 2.404 2.123.336.145.598.232.802.297.337.107.644.092.887.056.271-.041.828-.339.945-.666.117-.327.117-.607.082-.666-.035-.059-.129-.094-.269-.164z" />
                  </svg>
                </a>

                {/* Gmail */}
                <a
                  href="mailto:ceynovatechnologies@gmail.com"
                  aria-label="Gmail"
                  title="Email Us (Gmail)"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#EA4335]/20 hover:text-[#EA4335] text-gray-300 flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#EA4335]/40"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.5l8.073-6.007c1.618-1.214 3.927-.059 3.927 1.964z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Logos and Copyright */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand Logos */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-300">
            {/* Ceynova Logo (Click to scroll up to Home) */}
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer hover:opacity-85 active:scale-95 transition-all inline-flex items-center"
              title="Back to Top of Home"
              aria-label="Back to Top of Home"
            >
              <TurkishLogo variant="white" showSubtitle={false} size="sm" />
            </button>

            <span className="text-gray-600 font-light">|</span>

            {/* Enterprise Software Badge */}
            <span className="text-xs text-gray-400 font-medium tracking-wide">
              High-Impact Software Engineering
            </span>
          </div>

          {/* Right Copyright */}
          <div className="text-[11px] text-gray-500 font-medium">
            © {new Date().getFullYear()} Ceynova Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

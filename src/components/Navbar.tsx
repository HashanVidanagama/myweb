import React, { useState, useEffect } from 'react';
import { TurkishLogo } from './TurkishLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenContact: () => void;
  onOpenRegistration: () => void;
  onNavigate: (sectionId: string) => void;
  activeView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenRegistration,
  onNavigate,
  activeView = 'poster',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ABOUT US', target: 'about-section', view: 'about' },
    { label: 'VISION', target: 'vision-section', view: 'vision' },
    { label: 'SERVICES', target: 'services', view: 'services' },
    { label: 'PROJECTS', target: 'projects-section', view: 'projects' },
  ];

  return (
    <header
      id="main-header"
      className={`w-full z-40 bg-white sticky top-0 transition-all duration-200 border-b border-gray-100 ${
        isScrolled ? 'shadow-md py-3' : 'py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <div onClick={() => onNavigate('home')} className="cursor-pointer">
          <TurkishLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.label}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  if (item.target) {
                    onNavigate(item.target);
                  }
                }}
                className={`text-[12.5px] font-bold tracking-wider transition-all duration-200 cursor-pointer uppercase select-none relative ${
                  isActive
                    ? 'text-[#E30613] font-black'
                    : 'text-[#182238] hover:text-[#E30613]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#E30613] rounded-full" />
                )}
              </button>
            );
          })}

          {/* Distinctive 'Get Started' CTA Button */}
          <button
            id="nav-get-started-button"
            onClick={onOpenRegistration}
            className="group ml-2 bg-gradient-to-r from-[#E30613] to-[#c70817] hover:from-[#c70817] hover:to-[#9f0612] text-white px-5 py-2 rounded-full text-[12px] font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-red-500/20 active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-[#E30613] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.target) {
                    onNavigate(item.target);
                  }
                }}
                className="text-left text-sm font-bold text-[#182238] hover:text-[#E30613] py-1 tracking-wider uppercase"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegistration();
                }}
                className="w-full bg-gradient-to-r from-[#E30613] to-[#c70817] text-white py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

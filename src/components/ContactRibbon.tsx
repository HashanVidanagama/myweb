import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const ContactRibbon: React.FC = () => {
  return (
    <div
      id="contact-ribbon"
      className="w-full bg-[#E30613] text-white py-3.5 px-4 select-none relative z-20 shadow-md"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 md:gap-16 text-xs sm:text-sm font-bold tracking-wider">
        {/* Telephone / WhatsApp */}
        <a
          href={`https://wa.me/94710497858?text=${encodeURIComponent('Hello Ceynova Technologies! I would like to get started with your team.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all group"
          id="contact-phone-link"
          title="Chat with us on WhatsApp"
        >
          <span className="font-extrabold tracking-widest text-sm sm:text-base">+94 71 049 7858</span>
          <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current transform group-hover:rotate-12 transition-transform" />
        </a>

        {/* Vertical divider */}
        <span className="text-white/50 font-light hidden sm:inline text-lg">|</span>

        {/* Email */}
        <a
          href="mailto:ceynovatechnologies@gmail.com"
          className="flex items-center gap-2.5 hover:opacity-90 active:scale-95 transition-all group"
          id="contact-email-link"
        >
          <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 transform group-hover:-translate-y-0.5 transition-transform" />
          <span className="font-extrabold tracking-wider text-sm sm:text-base lowercase">ceynovatechnologies@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

import React from 'react';

interface ContactCtaSectionProps {
  onOpenContact: () => void;
  onOpenRegistration: () => void;
}

export const ContactCtaSection: React.FC<ContactCtaSectionProps> = ({
  onOpenContact,
  onOpenRegistration,
}) => {
  return (
    <section
      id="training-section"
      className="w-full bg-white relative py-16 sm:py-20 md:py-24 select-none overflow-hidden"
    >
      {/* Giant faint background watermark: "CONTACT US" exactly matching the photo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span
          className="text-7xl sm:text-9xl md:text-[130px] lg:text-[160px] font-black text-gray-100/90 tracking-widest whitespace-nowrap transform -translate-y-2 uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          CONTACT US
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1528] uppercase tracking-tight mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          READY TO BUILD WITH CEYNOVA?
        </h2>

        {/* Subtitle description tailored for Ceynova software engineering */}
        <p className="text-xs sm:text-[13px] text-gray-500 font-semibold leading-relaxed tracking-wider uppercase max-w-2xl mb-9">
          ARE YOU READY TO TRANSFORM YOUR BUSINESS WITH HIGH-IMPACT SOFTWARE SOLUTIONS? CONNECT WITH
          OUR SENIOR ARCHITECTS TO DISCUSS YOUR PROJECT REQUIREMENTS, TECHNICAL SCOPE, AND DELIVERY SCHEDULE.
        </p>

        {/* Action Buttons: CONTACT US & START A PROJECT */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="cta-contact-us-btn"
            onClick={onOpenContact}
            className="bg-[#E30613] hover:bg-[#C70817] text-white px-9 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            CONTACT US
          </button>
          <button
            id="cta-registration-btn"
            onClick={onOpenRegistration}
            className="border-2 border-[#E30613] text-[#E30613] hover:bg-[#E30613] hover:text-white px-9 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer bg-white shadow-sm"
          >
            START A PROJECT
          </button>
        </div>
      </div>
    </section>
  );
};

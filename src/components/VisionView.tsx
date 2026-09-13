import React from 'react';
import {
  Target,
  Compass,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

interface VisionViewProps {
  onBackToHome: () => void;
  onStartProject: () => void;
  onContact: () => void;
}

export const VisionView: React.FC<VisionViewProps> = ({
  onBackToHome,
  onStartProject,
  onContact,
}) => {

  const CORE_VALUES = [
    {
      title: 'Uncompromising Precision',
      desc: 'We treat code as an engineering craft. Zero technical debt shortcuts, rigorous testing, and rock-solid architectural standards.',
      icon: <ShieldCheck className="w-5 h-5 text-[#E30613]" />
    },
    {
      title: 'Radical Innovation',
      desc: 'We don’t just follow trends—we build with the tools and paradigms that will define the software landscape over the next decade.',
      icon: <Zap className="w-5 h-5 text-[#E30613]" />
    },
    {
      title: 'True Client Partnership',
      desc: 'Transparent sprints, open architectural dialogue, and full alignment with your bottom-line commercial goals.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#E30613]" />
    },
    {
      title: 'Global Scalability',
      desc: 'Systems engineered from day one to serve thousands of concurrent transactions across distributed international users.',
      icon: <TrendingUp className="w-5 h-5 text-[#E30613]" />
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-[#182238] select-none">
      {/* Hero Banner with Futuristic Tech Glow */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] via-[#111E38] to-[#0B1528] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-12">
        {/* Subtle geometric grid ambient background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        
        {/* Soft atmospheric red glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#E30613]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Empowering The Future <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#E30613]">
              Through Intelligent Software
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            At <strong className="text-white font-semibold">Ceynova Technologies</strong>, we believe software is not just lines of code—it is the strategic engine that propels businesses forward. We engineer resilient, beautiful, and hyper-scalable digital ecosystems built to thrive in tomorrow's landscape.
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={onStartProject}
              className="bg-[#E30613] hover:bg-[#C70817] text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-red-600/30 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>Build With Ceynova</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-10 relative z-20 pb-20">
        
        {/* Two Grand Pillars: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Vision Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E30613] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#E30613] group-hover:text-white transition-colors duration-300">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30613]">
              The Horizon
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black text-[#0B1528] uppercase tracking-tight mt-1 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
              To be recognized as a premier global software engineering catalyst, redefining the way modern enterprises operate by pioneering intelligent web, mobile, standalone, and automated systems that bridge bold human ambition with flawless execution.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#E30613]" />
              Long-Term Industry Leadership
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B1528] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#0B1528] group-hover:text-white transition-colors duration-300">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              The Journey
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black text-[#0B1528] uppercase tracking-tight mt-1 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px]">
              To deliver elite technological solutions through disciplined engineering, human-centered UI/UX, and bleeding-edge automation—empowering startups and enterprise partners alike to outpace competition and scale fearlessly.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-500 font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Uncompromising Quality & Execution
            </div>
          </div>
        </div>

        {/* Values & Principles */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xs mb-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30613] block mb-2">
              Foundational Values
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black text-[#0B1528] uppercase tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              How We Work & What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/70 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1528] mb-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {val.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action Banner */}
        <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E30613]/20 via-transparent to-blue-600/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ready To Bring Your Vision To Life?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Partner with Ceynova Technologies to architect software that defines the future of your industry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto bg-[#E30613] hover:bg-[#C70817] text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                Start A Project
              </button>
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Back To Main Overview
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

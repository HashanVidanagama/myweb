import React from 'react';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  Terminal,
  Clock
} from 'lucide-react';

interface AboutViewProps {
  onBackToHome: () => void;
  onStartProject: () => void;
  onExploreVision: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBackToHome,
  onStartProject,
  onExploreVision,
}) => {
  const DIFFERENTIATORS = [
    {
      title: 'Full-Cycle Engineering',
      desc: 'From initial concept and architectural design to full-scale deployment and 24/7 cloud support, we manage the complete software lifecycle.',
      icon: <Layers className="w-5 h-5 text-[#E30613]" />
    },
    {
      title: 'Performance & Scalability',
      desc: 'We write lean, modular, and optimized code designed to effortlessly support thousands of concurrent users and transactions.',
      icon: <Zap className="w-5 h-5 text-[#E30613]" />
    },
    {
      title: 'Security-First Mindset',
      desc: 'Enterprise-grade encryption, secure data persistence, and rigorous code audits built into every layer of our applications.',
      icon: <ShieldCheck className="w-5 h-5 text-[#E30613]" />
    },
    {
      title: 'Agile & Transparent',
      desc: 'Direct communication with dedicated engineers, sprint demos, and iterative deliverables to ensure zero surprises.',
      icon: <Clock className="w-5 h-5 text-[#E30613]" />
    }
  ];

  const PROCESS_STEPS = [
    {
      number: '01',
      title: 'Discovery & Blueprint',
      desc: 'We analyze your business model, target audience, and operational bottlenecks to formulate an exact technical roadmap.'
    },
    {
      number: '02',
      title: 'Architecture & UI/UX',
      desc: 'We craft human-centric interactive prototypes alongside robust, scalable database and API specifications.'
    },
    {
      number: '03',
      title: 'Iterative Engineering',
      desc: 'Our team builds clean, test-driven code in structured sprints, providing continuous testable builds for review.'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      desc: 'Seamless zero-downtime deployment, cloud optimization, user onboarding, and ongoing feature evolution.'
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-[#182238] select-none">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] via-[#111E38] to-[#0B1528] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-12">
        {/* Subtle geometric grid ambient background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        
        {/* Ambient glow */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#E30613]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Pioneering Software <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#E30613]">
              Built For Scale & Performance
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            <strong className="text-white font-semibold">Ceynova Technologies</strong> is an agile software engineering company dedicated to transforming ambitious ideas into rock-solid digital realities. We specialize in bespoke web platforms, cross-platform mobile apps, standalone desktop suites, process automation, and cognitive AI systems.
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

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-8 relative z-20 pb-20">

        {/* Company Overview & Engineering Philosophy */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30613] block mb-2">
                About Ceynova Technologies
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1528] uppercase tracking-tight mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We Craft Solutions That Fuel Business Growth
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-5">
                At Ceynova Technologies, we combine deep technical rigor with modern user experience design. We don’t believe in one-size-fits-all templates—every system we build is architected from the ground up to solve concrete operational hurdles and deliver measurable competitive advantages.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                Whether you need a high-frequency trading platform, an automated internal pipeline, a consumer mobile application, or an intelligent standalone desktop system, our team brings the architectural expertise required to execute with velocity and precision.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-black text-[#0B1528]" style={{ fontFamily: "'Montserrat', sans-serif" }}>100%</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Clean Architecture</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-black text-[#E30613]" style={{ fontFamily: "'Montserrat', sans-serif" }}>5+</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Core Disciplines</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-[#0B1528]" style={{ fontFamily: "'Montserrat', sans-serif" }}>24/7</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">Reliability Focus</div>
                </div>
              </div>
            </div>

            {/* Right Highlight Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1528] to-[#16274a] text-white rounded-2xl p-8 sm:p-10 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white">
                  <Terminal className="w-6 h-6 text-[#ff4b58]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-4 uppercase tracking-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Our Core Commitment
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  "Deliver software that is not only visually stunning and intuitive to use, but engineered with robust foundation, zero hidden compromises, and infinite readiness for future growth."
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Engineering Team
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#ff4b58]">
                  Ceynova Technologies
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Why Partner with Ceynova Technologies */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-xs mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30613] block mb-2">
              Why Ceynova
            </span>
            <h2
              className="text-2xl sm:text-3xl font-black text-[#0B1528] uppercase tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              The Advantages of Our Engineering Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {DIFFERENTIATORS.map((diff, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50/70 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  {diff.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1528] mb-1.5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {diff.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our 4-Step Engineering Process */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E30613] block mb-2">
              How We Work
            </span>
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0B1528] uppercase tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Engineering Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-gray-200 relative overflow-hidden shadow-xs hover:border-[#E30613]/50 transition-colors"
              >
                <div className="text-2xl font-black text-[#E30613] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {step.number}
                </div>
                <h4 className="text-base font-bold text-[#0B1528] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="bg-[#0B1528] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E30613]/20 via-transparent to-blue-600/10 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 text-white"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ready To Build With Ceynova Technologies?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Let’s discuss your software architecture, timeline, and goals. We turn complex requirements into robust, high-performing systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto bg-[#E30613] hover:bg-[#C70817] text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                Build With Ceynova
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

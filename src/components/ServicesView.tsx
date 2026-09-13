import React from 'react';
import {
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Workflow,
  Sparkles
} from 'lucide-react';

interface ServicesViewProps {
  onBackToHome: () => void;
  onStartProject: () => void;
  onContact: () => void;
}

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: 'website-development',
    icon: <Globe className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#1E293B]',
    title: 'Website Development',
    description: 'Creating stunning, responsive, and user-centric websites that establish a powerful digital presence.',
  },
  {
    id: 'mobile-development',
    icon: <Smartphone className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#2563EB]',
    title: 'Mobile App Development',
    description: 'Crafting fluid, intuitive native and cross-platform mobile apps for iOS and Android devices.',
  },
  {
    id: 'standalone-development',
    icon: <Monitor className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#E30613]',
    title: 'StandAlone Application Development',
    description: 'Building high-throughput desktop applications, custom POS suites, and hardware-linked enterprise software.',
  },
  {
    id: 'process-automation',
    icon: <Workflow className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#7C3AED]',
    title: 'Business Process Automation',
    description: 'Automating repetitive workflows, data pipelines, and legacy systems to accelerate organizational velocity.',
  },
  {
    id: 'ai-applications',
    icon: <Sparkles className="w-5 h-5 text-white" />,
    iconBg: 'bg-[#D97706]',
    title: 'AI Supported Applications',
    description: 'Integrating production-grade machine learning models, custom generative AI copilots, and intelligent analytics.',
  },
];

export const ServicesView: React.FC<ServicesViewProps> = ({
  onBackToHome,
  onStartProject,
}) => {
  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-[#182238] select-none">
      
      {/* Top Hero Banner with Grid & Atmospheric Tech Glow */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1528] via-[#111E38] to-[#0B1528] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-12">
        {/* Subtle geometric grid ambient background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        
        {/* Soft atmospheric red & blue glows */}
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
            At <strong className="text-white font-semibold">Ceynova Technologies</strong>, we deliver comprehensive, full-cycle software engineering services tailored to your business goals. From high-availability web platforms and intuitive mobile apps to offline-first standalone desktop systems, intelligent workflow automation, and cognitive AI applications, we build scalable digital solutions engineered for measurable commercial impact.
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

      {/* Main Content Area with Clean Simple Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-10 relative z-20 pb-20">
        
        {/* Clean, Simple 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rounded Square Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg} mb-6 shadow-sm`}
                >
                  {service.icon}
                </div>

                {/* Service Title */}
                <h2
                  className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {service.title}
                </h2>

                {/* Service Short Description */}
                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call To Action Banner */}
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

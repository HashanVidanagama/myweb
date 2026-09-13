import React, { useState } from 'react';
import { ArrowLeft, Check, Compass, Cpu, Layers, ShieldCheck, Gauge, Calendar, ExternalLink, Globe, Smartphone, Monitor, Workflow, Sparkles } from 'lucide-react';

interface SimulatorsFleetViewProps {
  onBackToPoster: () => void;
  onBookSimulator: (serviceName: string) => void;
}

const SERVICE_CATEGORIES = ['All Services', 'Web & Cloud', 'Mobile Engineering', 'StandAlone Software', 'Automation & AI'];

const SOFTWARE_SERVICES = [
  {
    id: 'svc-web-dev',
    name: 'Website & Web Application Development',
    category: 'Web & Cloud',
    type: 'Full-Stack Web Engineering',
    architecture: 'Micro-Frontends & Cloud-Native Serverless',
    frontend: 'React, Next.js, Vue, TypeScript, TailwindCSS',
    backend: 'Node.js, Go, Python, PostgreSQL, Redis, GraphQL',
    sla: '99.9% Uptime & Sub-Second Latency',
    delivery: 'Interactive Agile Sprints & CI/CD Pipelines',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Enterprise Web Portals', 'Cloud SaaS Architectures', 'Progressive Web Apps (PWA)', 'Zero-Downtime Deployment']
  },
  {
    id: 'svc-mobile-dev',
    name: 'Mobile App Development (iOS & Android)',
    category: 'Mobile Engineering',
    type: 'Native & Cross-Platform Mobile Apps',
    architecture: 'Offline-First SQLite Sync & Reactive State',
    frontend: 'Flutter, React Native, Swift (iOS), Kotlin (Android)',
    backend: 'Secure Rest APIs, WebSockets, Firebase, Cloud Pub/Sub',
    sla: '60 FPS Fluid UI & Encrypted Local Storage',
    delivery: 'App Store & Google Play Automated Submissions',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Cross-Platform Unified Codebase', 'Biometric Authentication', 'Push Notifications Engine', 'Offline Data Sync']
  },
  {
    id: 'svc-standalone-dev',
    name: 'StandAlone Software Development',
    category: 'StandAlone Software',
    type: 'High-Throughput Desktop Applications',
    architecture: 'Multi-Threaded Hardware Integration & Local RDBMS',
    frontend: 'Electron, C# .NET Core, C++ Qt, WPF',
    backend: 'Embedded SQLite, Local Microservices, Native OS APIs',
    sla: 'Zero-Network Independence & Hardware Level Speed',
    delivery: 'Automated Multi-OS Installers & Silent Auto-Updates',
    image: '/pos-system.jpg',
    tags: ['Enterprise POS & ERP Systems', 'Industrial Hardware Interfacing', 'High-Speed Local Processing', 'Complete Offline Independence']
  },
  {
    id: 'svc-automation',
    name: 'Business Process Automation (BPA & RPA)',
    category: 'Automation & AI',
    type: 'Intelligent Workflow Orchestration',
    architecture: 'Event-Driven Micro-Pipelines & Autonomous Bots',
    frontend: 'Executive Telemetry & Real-Time Dashboards',
    backend: 'Python, Celery, Apache Airflow, REST / Webhook Connectors',
    sla: '10x Speedup in Data Entry & Zero Human Bottlenecks',
    delivery: 'Comprehensive Process Audit & Turnkey Deployment',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Robotic Process Automation', 'Automated Invoicing & ERP Sync', 'Legacy API Modernization', 'Error-Free Compliance Tracking']
  },
  {
    id: 'svc-ai-solutions',
    name: 'AI Supported Applications & Cognitive Systems',
    category: 'Automation & AI',
    type: 'Production-Grade Machine Learning & LLM Integration',
    architecture: 'Retrieval-Augmented Generation (RAG) & Vector Databases',
    frontend: 'Conversational UI & Intelligent Assistant Interfaces',
    backend: 'Python, PyTorch, LangChain, Pinecone, OpenAI & Local Models',
    sla: 'Real-Time Inference & Secure Private Data Isolation',
    delivery: 'End-to-End Fine-Tuning & Model Monitoring',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['Predictive Analytics Engines', 'Bespoke AI Copilots', 'Intelligent Document Parsing', 'Private On-Premise LLMs']
  }
];

export const SimulatorsFleetView: React.FC<SimulatorsFleetViewProps> = ({
  onBackToPoster,
  onBookSimulator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [activeService, setActiveService] = useState(SOFTWARE_SERVICES[0]);

  const filteredServices = selectedCategory === 'All Services'
    ? SOFTWARE_SERVICES
    : SOFTWARE_SERVICES.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full bg-[#070D18] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation / Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div>
            <button
              onClick={onBackToPoster}
              className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#E30613] transition-colors flex items-center gap-1.5 mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="bg-[#E30613] text-white text-[11px] font-black uppercase px-2.5 py-0.5 rounded">
                5 Core Disciplines
              </span>
              <span className="text-gray-400 text-xs font-medium">
                Ceynova Technologies Software Engineering Services
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Our Software Engineering Services
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onBookSimulator(activeService.name)}
              className="bg-[#E30613] hover:bg-[#C70817] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer active:scale-95"
            >
              Inquire This Service
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#E30613] text-white shadow-md'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Service Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Large Showcase View */}
          <div className="lg:col-span-8 bg-[#0B1528] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-72 sm:h-96 w-full">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-black/40" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff4b58]">
                    {activeService.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {activeService.name}
                  </h2>
                </div>
                <button
                  onClick={() => onBookSimulator(activeService.name)}
                  className="bg-[#E30613] hover:bg-[#C70817] text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                Engineering Blueprint & Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-gray-400 font-medium block mb-1">Architecture</span>
                  <span className="text-white font-bold text-sm">{activeService.architecture}</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-gray-400 font-medium block mb-1">Frontend Ecosystem</span>
                  <span className="text-white font-bold text-sm">{activeService.frontend}</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-gray-400 font-medium block mb-1">Backend & Persistence</span>
                  <span className="text-white font-bold text-sm">{activeService.backend}</span>
                </div>
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-gray-400 font-medium block mb-1">Service SLA & Delivery</span>
                  <span className="text-white font-bold text-sm">{activeService.sla}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {activeService.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] font-bold uppercase tracking-wider bg-white/10 text-slate-200 px-3 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-1">
              Select A Discipline ({filteredServices.length})
            </h3>
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                onClick={() => setActiveService(svc)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  activeService.id === svc.id
                    ? 'bg-[#E30613]/10 border-[#E30613] ring-1 ring-[#E30613]'
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ff4b58]">
                    {svc.category}
                  </span>
                  {activeService.id === svc.id && (
                    <span className="w-2 h-2 rounded-full bg-[#E30613]" />
                  )}
                </div>
                <h4 className="text-sm font-bold text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {svc.name}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-1">
                  {svc.type}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

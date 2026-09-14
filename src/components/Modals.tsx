import React, { useState } from 'react';
import { X, Search, CheckCircle, ShieldCheck, Cpu, Sliders, Layers } from 'lucide-react';
import { SimulatorItem, TrainingProgram } from '../types';
import { SIMULATORS_DATA, TRAINING_PROGRAMS } from '../data';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Search Modal
export const SearchModal: React.FC<ModalProps & { onSelectSimulator: (sim: SimulatorItem) => void }> = ({
  isOpen,
  onClose,
  onSelectSimulator,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredSims = SIMULATORS_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPrograms = TRAINING_PROGRAMS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search simulators, pilot courses, schedules..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full text-base outline-hidden text-gray-900 placeholder:text-gray-400 font-medium"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 max-h-[65vh] overflow-y-auto space-y-4">
          <div>
            <h4 className="text-xs font-bold text-[#E30613] uppercase tracking-wider mb-2">Simulators</h4>
            <div className="space-y-2">
              {filteredSims.map((sim) => (
                <div
                  key={sim.id}
                  onClick={() => {
                    onSelectSimulator(sim);
                    onClose();
                  }}
                  className="p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors flex items-center justify-between group border border-transparent hover:border-slate-200"
                >
                  <div>
                    <div className="font-bold text-sm text-gray-900 group-hover:text-[#E30613]">{sim.title}</div>
                    <div className="text-xs text-gray-500">{sim.subtitle}</div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-[#E30613]">View Specs →</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 text-slate-700">
              Training Programs
            </h4>
            <div className="space-y-2">
              {filteredPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="p-3 rounded-lg bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">{prog.title}</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-red-100 text-[#E30613] rounded-full">
                      {prog.duration}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{prog.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Project Inquiry Modal
export const RegistrationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'web-dev',
    experience: 'immediate',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#0B1528] px-6 py-4 flex items-center justify-between text-white">
          <div>
            <span className="text-[10px] font-bold text-[#E30613] tracking-widest uppercase block">
              CEYNOVA TECHNOLOGIES
            </span>
            <h3 className="text-lg font-black uppercase tracking-wide">Start A New Project</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Project Brief Received</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{formData.fullName || 'Valued Partner'}</span>.
              Our team will analyze your project scope and contact you at{' '}
              <span className="font-semibold text-gray-900">{formData.email || 'your email'}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#E30613] text-white px-8 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#C70817]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Full Name / Organization *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Alexander Wright / Apex Global"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+94 71 049 7858"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Primary Service Discipline *
              </label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] bg-white"
              >
                <option value="web-dev">Website & Web Application Development</option>
                <option value="mobile-dev">Mobile App Development (iOS & Android)</option>
                <option value="standalone-dev">StandAlone Desktop Application Development</option>
                <option value="bpa-rpa">Business Process Automation (BPA & RPA)</option>
                <option value="ai-cognitive">AI Supported Applications & Cognitive Systems</option>
                <option value="enterprise-arch">Custom Enterprise Digital Architecture</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Estimated Project Timeline
              </label>
              <select
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613] bg-white"
              >
                <option value="immediate">Urgent / Within 1 Month</option>
                <option value="1-3-months">1 to 3 Months</option>
                <option value="3-6-months">3 to 6 Months</option>
                <option value="strategic">Strategic Long-Term Enterprise Retainer</option>
              </select>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-gray-600 hover:bg-gray-100 uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#E30613] hover:bg-[#C70817] text-white px-7 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Submit Project Brief
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 3. Contact Modal
export const ContactModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${name} - Ceynova Technologies`;
    const body = `Full Name: ${name}\nClient Email: ${email}\n\nProject Scope / Inquiry:\n${message}\n\nSent via Ceynova Technologies Website`;

    // Automatically trigger mailto link directly to ceynovatechnologies@gmail.com
    window.location.href = `mailto:ceynovatechnologies@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-[#0B1528] px-6 py-4 flex items-center justify-between text-white">
          <div>
            <span className="text-[10px] font-bold text-[#E30613] tracking-widest uppercase block">
              CEYNOVA TECHNOLOGIES
            </span>
            <h3 className="text-lg font-black uppercase tracking-wide">Contact Us</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {sent ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-gray-900">Email Draft Created</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-gray-900">{name || 'there'}</span>. Your email to{' '}
              <strong className="text-gray-900">ceynovatechnologies@gmail.com</strong> has been initiated.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 max-w-xs mx-auto">
              {/* Option to open directly in Gmail Web */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=ceynovatechnologies@gmail.com&su=${encodeURIComponent(
                  `Project Inquiry from ${name} - Ceynova Technologies`
                )}&body=${encodeURIComponent(
                  `Full Name: ${name}\nClient Email: ${email}\n\nProject Scope / Inquiry:\n${message}\n\nSent via Ceynova Technologies Website`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#EA4335] hover:bg-[#d33828] text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Send via Gmail Web</span>
              </a>

              {/* Also can send via WhatsApp */}
              <a
                href={`https://wa.me/94710497858?text=${encodeURIComponent(
                  `Hello Ceynova Technologies! My name is ${name} (${email}). Inquiry: ${message}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Also Send via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSent(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                  onClose();
                }}
                className="text-xs font-semibold text-gray-500 hover:text-gray-800 py-1 cursor-pointer"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input
                required
                type="text"
                placeholder="First and Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Your Email
              </label>
              <input
                required
                type="email"
                placeholder="client@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                Project Scope / Inquiry
              </label>
              <textarea
                required
                rows={3}
                placeholder="Briefly describe your software project, technology stack, or business goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm outline-hidden focus:border-[#E30613]"
              />
            </div>
            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-[#E30613] text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#C70817] cursor-pointer shadow-md active:scale-95 transition-all"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 4. Simulator Details & Specs Modal
export const SimulatorDetailsModal: React.FC<ModalProps & { simulator: SimulatorItem | null }> = ({
  isOpen,
  onClose,
  simulator,
}) => {
  if (!isOpen || !simulator) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative h-60 w-full bg-slate-900">
          <img
            src={simulator.image}
            alt={simulator.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
            <div>
              <span className="bg-[#E30613] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                {simulator.badge}
              </span>
              <h3 className="text-2xl font-black text-white mt-2 leading-tight uppercase">
                {simulator.title}
              </h3>
              <p className="text-xs text-gray-300 font-medium">{simulator.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{simulator.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
              Technical Specifications
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Certification</div>
                  <div className="text-xs font-bold text-gray-900">{simulator.specs.level}</div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-start gap-2.5">
                <Cpu className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Aircraft Type</div>
                  <div className="text-xs font-bold text-gray-900">{simulator.specs.type}</div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-start gap-2.5">
                <Sliders className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Motion Base</div>
                  <div className="text-xs font-bold text-gray-900">{simulator.specs.motion}</div>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-[#E30613] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase">Visual System</div>
                  <div className="text-xs font-bold text-gray-900">{simulator.specs.visual}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#E30613] hover:bg-[#C70817] text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all"
            >
              Close Specifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

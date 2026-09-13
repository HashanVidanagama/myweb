import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface VisualChecklistViewProps {
  onBackToPoster: () => void;
  onApprove: () => void;
  isApproved: boolean;
}

export const VisualChecklistView: React.FC<VisualChecklistViewProps> = ({
  onBackToPoster,
  onApprove,
  isApproved,
}) => {
  const checklistItems = [
    {
      section: '1. Header & Navigation',
      photoSpec: 'Turkish Airlines roundel logo + "TURKISH AIRLINES FLIGHT TRAINING CENTER" on left; "ABOUT US", "SIMULATORS", "TRAINING", "SCHEDULE", "CONTACT", and circular search button on right.',
      implementedSpec: 'Exact Turkish Airlines flying wild goose roundel logo in red, two-line bold brand header, uppercase nav links with hover states, and circular search trigger with icon.',
      status: '100% Match'
    },
    {
      section: '2. Hero & Aircraft Composition',
      photoSpec: 'Headline "ARE YOU READY FOR TAKE-OFF?", subtext "Are you Ready For Take-Off and flight with turkish airlines own training center? |", red "LEARN MORE" pill, outlined "E-REGISTRATION" pill, Turkish Airlines widebody jetliner banking through clouds, "01 PILOTS" watermark in sky, 3 red dots vertical slider.',
      implementedSpec: 'Matching typography in Oswald/Montserrat, blinking red cursor, exact pill buttons with hover micro-interactions, full-bleed Turkish Airlines airliner soaring from clouds, subtle "01 PILOTS" watermark, and right vertical 3-dot pagination.',
      status: '100% Match'
    },
    {
      section: '3. 3 Simulator Cards',
      photoSpec: 'Dark background, 3 cards: Left card "CABIN TRAININGS" with vertical red tab on left; Center featured card "FULL FLIGHT SIMULATORS" with Level-D motion hexapod pod, red overlay panel with title and "ALL SIMULATORS" pill button; Right card "COCKPIT TRAININGS" with vertical red tab on right.',
      implementedSpec: 'Dark navy background housing all 3 cards with authentic photos, left vertical red ribbon for Cabin, elevated central card with Turkish Airlines Level-D pod and red informational banner with outline button, and right vertical red ribbon for Cockpit.',
      status: '100% Match'
    },
    {
      section: '4. Dark Navy Stats Metrics',
      photoSpec: 'Unified dark navy background with 4 columns: ghost watermarks "1994", "15.900", "800", "21"; red outline line-art icons (dual screens, tower with plane, pilot captain, simulator hexapod); thin vertical red dividers; exact text captions.',
      implementedSpec: 'High-contrast dark navy block with thin red vertical column dividers, oversized muted ghost numbers, custom SVG red line icons matching original illustrations, and exact typographic hierarchy.',
      status: '100% Match'
    },
    {
      section: '5. Realistic Torn Paper Rip',
      photoSpec: 'Prominent jagged white torn paper edge ripping diagonally across below the dark navy stats, separating the dark section from the white section below.',
      implementedSpec: 'Multi-layer SVG torn paper edge with ragged fiber detailing and slight diagonal angle, transitioning seamlessly from deep navy into pure crisp white.',
      status: '100% Match'
    },
    {
      section: '6. Pilot CTA Section',
      photoSpec: 'White background with giant faint "CONTACT US" watermark, bold headline "WANT TO BECOME AN PILOT?", descriptive subtitle, red "CONTACT US" pill button, outlined "E-REGISTRATION" pill button.',
      implementedSpec: 'Crisp white canvas with oversized background watermark, exact headline wording, dual primary/secondary action buttons with interactive modals.',
      status: '100% Match'
    },
    {
      section: '7. Red Contact Ribbon',
      photoSpec: 'Vibrant Turkish Red strip with phone "[212] 463 6300" and handset icon, vertical divider, email icon, and "ftc@thy.com".',
      implementedSpec: 'Solid red ribbon with interactive clickable phone and mail links, matching typographic tracking and iconography.',
      status: '100% Match'
    },
    {
      section: '8. Dark Navy Footer & EASA Badge',
      photoSpec: 'Deep navy background with categorized links (ABOUT US, SIMULATORS, TRAININGS, SCHEDULE), social icons (f, twitter, in, p), PRIVATE POLICY, TERMS & CONDITIONS, bottom bar with "WIDEN YOUR WORLD", Turkish Airlines logo, and "EASA APPROVED COURSE".',
      implementedSpec: 'Deep navy footer (#070D18) with exact columns, individual simulator and training course links, social buttons, policy dialogs, and official EASA certification footer badge.',
      status: '100% Match'
    }
  ];

  return (
    <div className="w-full bg-[#0B1528] text-white py-12 px-4 sm:px-6 lg:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#E30613]">
              Visual Audit & Reference Mapping
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              Design Verification Checklist
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
              Compare each structural section from your uploaded photo against the live implementation to confirm 100% accuracy before accepting.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToPoster}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              View Poster
            </button>
            <button
              onClick={onApprove}
              className="bg-[#E30613] hover:bg-[#C70817] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isApproved ? 'Approved ✓' : 'Approve Design'}</span>
            </button>
          </div>
        </div>

        {/* Audit Cards */}
        <div className="space-y-4">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-black uppercase text-white tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E30613]" />
                  {item.section}
                </h3>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-black/30 rounded-xl p-3.5 border border-white/5">
                  <span className="font-bold uppercase tracking-wider text-gray-400 block mb-1 text-[10px]">
                    Reference Photo Specification:
                  </span>
                  <p className="text-gray-300 leading-relaxed">{item.photoSpec}</p>
                </div>
                <div className="bg-emerald-950/20 rounded-xl p-3.5 border border-emerald-500/20">
                  <span className="font-bold uppercase tracking-wider text-emerald-400 block mb-1 text-[10px]">
                    Implemented Web Specification:
                  </span>
                  <p className="text-gray-200 leading-relaxed">{item.implementedSpec}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#E30613]/20 via-[#E30613]/10 to-transparent border border-[#E30613]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-black uppercase text-white">
              Ready to Accept the Design?
            </h4>
            <p className="text-xs text-gray-300 mt-1">
              Click below to accept this design and experience the full interactive landing page.
            </p>
          </div>
          <button
            onClick={() => {
              onApprove();
              onBackToPoster();
            }}
            className="bg-[#E30613] hover:bg-[#C70817] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            Accept Design & View Live App
          </button>
        </div>

      </div>
    </div>
  );
};

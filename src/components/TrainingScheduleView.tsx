import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Users, CheckCircle2, Download, Filter } from 'lucide-react';

interface TrainingScheduleViewProps {
  onBackToPoster: () => void;
  onRegisterCourse: (courseName: string) => void;
}

const SCHEDULE_ITEMS = [
  {
    id: 'sch-1',
    code: 'TR-A320-26A',
    title: 'Airbus A320 Type Rating Course (Initial)',
    category: 'Cockpit Crew',
    duration: '6 Weeks (Ground + Level-D FFS)',
    dates: 'October 15, 2026 – November 28, 2026',
    location: 'Istanbul FTC Campus – Bay B3',
    seatsLeft: 4,
    status: 'Open for Registration',
    prerequisites: 'Valid CPL/IR with ME & ATPL Theory, MCC'
  },
  {
    id: 'sch-2',
    code: 'TR-B737-26B',
    title: 'Boeing 737 Next Generation / MAX Type Rating',
    category: 'Cockpit Crew',
    duration: '5 Weeks (Full Flight Simulator ZFTT)',
    dates: 'November 02, 2026 – December 12, 2026',
    location: 'Istanbul FTC Campus – Bay A2',
    seatsLeft: 2,
    status: 'Filling Fast',
    prerequisites: 'CPL(A) / IR(A), 70 Hours PIC, MCC Certificate'
  },
  {
    id: 'sch-3',
    code: 'CC-SEP-26',
    title: 'Cabin Crew Safety & Emergency Procedures (SEP)',
    category: 'Cabin Crew',
    duration: '3 Weeks (Mockup & Slide Raft Drills)',
    dates: 'October 20, 2026 – November 10, 2026',
    location: 'Cabin Safety Mockup Facility (CEET)',
    seatsLeft: 8,
    status: 'Open for Registration',
    prerequisites: 'High School Diploma, EASA Medical Attestation'
  },
  {
    id: 'sch-4',
    code: 'MCC-JOT-26',
    title: 'Multi-Crew Cooperation & Jet Orientation (MCC/JOC)',
    category: 'Cadet Programs',
    duration: '2 Weeks (FNPT II MCC B737 Device)',
    dates: 'November 15, 2026 – November 30, 2026',
    location: 'FTD Training Center – Level 2',
    seatsLeft: 6,
    status: 'Open for Registration',
    prerequisites: 'Frozen ATPL / CPL Holder'
  },
  {
    id: 'sch-5',
    code: 'TR-B777-26C',
    title: 'Boeing 777-300ER / B787 Difference Training',
    category: 'Cockpit Crew',
    duration: '4 Weeks (Level-D Motion Simulation)',
    dates: 'December 01, 2026 – January 05, 2027',
    location: 'Istanbul FTC Campus – Bay C1',
    seatsLeft: 3,
    status: 'Waitlist Available',
    prerequisites: 'Current Multi-Pilot Heavy Jet Experience'
  },
  {
    id: 'sch-6',
    code: 'REC-LVO-26',
    title: 'All-Weather Operations & Low Visibility CAT IIIb',
    category: 'Recurrent Training',
    duration: '3 Days (Simulator Recurrent + Oral)',
    dates: 'Weekly Sessions Available (Mon-Wed / Thu-Sat)',
    location: 'All Certified Level-D Simulators',
    seatsLeft: 12,
    status: 'Continuous Intake',
    prerequisites: 'Type Rated Captains & First Officers'
  }
];

export const TrainingScheduleView: React.FC<TrainingScheduleViewProps> = ({
  onBackToPoster,
  onRegisterCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [downloadNotice, setDownloadNotice] = useState(false);

  const filteredSchedule = selectedCategory === 'All'
    ? SCHEDULE_ITEMS
    : SCHEDULE_ITEMS.filter(item => item.category === selectedCategory);

  const handleDownloadSyllabus = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div className="w-full bg-[#070D18] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div>
            <button
              onClick={onBackToPoster}
              className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#E30613] transition-colors flex items-center gap-1.5 mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Poster View</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="bg-[#E30613] text-white text-[11px] font-black uppercase px-2.5 py-0.5 rounded">
                2026 / 2027 Academic Schedule
              </span>
              <span className="text-gray-400 text-xs font-medium">
                EASA CS-FSTDA Approved Syllabi
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
              Flight Training Programs & Simulator Schedule
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadSyllabus}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Full 2026/2027 Schedule</span>
            </button>
          </div>
        </div>

        {downloadNotice && (
          <div className="mb-6 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs p-3 rounded-xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>2026/2027 Official FTC Course Catalog PDF downloaded successfully!</span>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {['All', 'Cockpit Crew', 'Cabin Crew', 'Cadet Programs', 'Recurrent Training'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#E30613] text-white shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-4 mb-12">
          {filteredSchedule.map((course) => (
            <div
              key={course.id}
              className="bg-white/5 border border-white/10 hover:border-red-500/30 rounded-2xl p-5 sm:p-6 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#E30613]/20 text-red-400 border border-[#E30613]/30 px-2 py-0.5 rounded">
                    {course.code}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                    {course.category}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    course.seatsLeft <= 2
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {course.status} ({course.seatsLeft} slots left)
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-wide mb-3">
                  {course.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>{course.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E30613]" />
                    <span>{course.location}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 text-[11px] text-gray-400">
                  <span className="text-gray-300 font-semibold">Prerequisites: </span>
                  {course.prerequisites}
                </div>
              </div>

              <div className="flex flex-row lg:flex-col items-center gap-3 shrink-0">
                <button
                  onClick={() => onRegisterCourse(course.title)}
                  className="w-full sm:w-auto bg-[#E30613] hover:bg-[#C70817] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer active:scale-95 text-center"
                >
                  Register Now
                </button>
                <button
                  onClick={onBackToPoster}
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  Poster View
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

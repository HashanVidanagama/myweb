import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProjectsViewProps {
  onBackToHome: () => void;
  onStartProject?: () => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onBackToHome }) => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-white select-none">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Accent Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-[#E30613] text-xs font-extrabold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E30613] animate-pulse" />
          <span>PROJECTS</span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0B1528] tracking-tight uppercase mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          UPDATING SOON
        </h1>

        {/* Short Subtext */}
        <p className="text-sm text-gray-500 font-medium mb-8">
          Our projects portfolio is currently being updated.
        </p>

        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 bg-[#0B1528] hover:bg-[#182238] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

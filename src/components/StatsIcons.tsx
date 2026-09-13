import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
}

// 1. Cloud Server Stack / High Availability & Uptime
export const CloudServerIcon: React.FC<IconProps> = ({
  className = 'w-14 h-14',
  color = '#E30613',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Server Unit 1 */}
    <rect x="12" y="12" width="40" height="11" rx="2.5" stroke={color} strokeWidth="2" />
    <circle cx="19" cy="17.5" r="1.5" fill={color} />
    <circle cx="25" cy="17.5" r="1.5" fill={color} />
    <line x1="33" y1="17.5" x2="45" y2="17.5" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Server Unit 2 */}
    <rect x="12" y="26" width="40" height="11" rx="2.5" stroke={color} strokeWidth="2" />
    <circle cx="19" cy="31.5" r="1.5" fill={color} />
    <circle cx="25" cy="31.5" r="1.5" fill={color} />
    <line x1="33" y1="31.5" x2="45" y2="31.5" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Server Unit 3 */}
    <rect x="12" y="40" width="40" height="11" rx="2.5" stroke={color} strokeWidth="2" />
    <circle cx="19" cy="45.5" r="1.5" fill={color} />
    <circle cx="25" cy="45.5" r="1.5" fill={color} />
    <line x1="33" y1="45.5" x2="45" y2="45.5" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Data connection pulses & base feet */}
    <path d="M22 51 V56 M42 51 V56" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="56" x2="48" y2="56" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="53" cy="17.5" r="2" stroke={color} strokeWidth="1.5" />
    <path d="M53 13 V9 M57 17.5 H61" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 2. Full-Stack Code Terminal / Multi-Platform Software
export const CodeTerminalIcon: React.FC<IconProps> = ({
  className = 'w-14 h-14',
  color = '#E30613',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Terminal Window Frame */}
    <rect x="10" y="12" width="44" height="34" rx="3.5" stroke={color} strokeWidth="2" />
    <line x1="10" y1="21" x2="54" y2="21" stroke={color} strokeWidth="1.8" />
    {/* Window dots */}
    <circle cx="16" cy="16.5" r="1.5" fill={color} />
    <circle cx="21" cy="16.5" r="1.5" fill={color} />
    <circle cx="26" cy="16.5" r="1.5" fill={color} />

    {/* Code Brackets / Prompt */}
    <path d="M18 28 L23 33 L18 38" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="26" y1="38" x2="35" y2="38" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    
    {/* Code lines */}
    <line x1="38" y1="28" x2="46" y2="28" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38" y1="33" x2="44" y2="33" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

    {/* Monitor Stand */}
    <path d="M28 46 L26 53 H38 L36 46" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    <line x1="22" y1="53" x2="42" y2="53" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 3. Automation Flow / High-Speed Gear & Pipeline
export const AutomationGearIcon: React.FC<IconProps> = ({
  className = 'w-14 h-14',
  color = '#E30613',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Central Gear */}
    <circle cx="29" cy="29" r="8" stroke={color} strokeWidth="2" />
    <circle cx="29" cy="29" r="3" stroke={color} strokeWidth="1.8" />
    {/* Gear teeth */}
    <path
      d="M29 17 V21 M29 37 V41 M17 29 H21 M37 29 H41 M20.5 20.5 L23.5 23.5 M34.5 34.5 L37.5 37.5 M20.5 37.5 L23.5 34.5 M34.5 20.5 L37.5 23.5"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Automation pipeline loop arrows */}
    <path
      d="M44 19 C48 23 49 29 48 35 C47 41 42 46 36 48"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="3 2"
    />
    <path d="M42 16 L45 20 L40 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Lightning speed bolt */}
    <path
      d="M45 35 L40 44 H46 L43 54 L52 42 H46 L49 35 Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// 4. Cognitive AI / Neural Network Intelligence
export const AiCognitiveIcon: React.FC<IconProps> = ({
  className = 'w-14 h-14',
  color = '#E30613',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Central Microprocessor Core */}
    <rect x="22" y="22" width="20" height="20" rx="3" stroke={color} strokeWidth="2" />
    {/* Brain / Synapse wave inside chip */}
    <path
      d="M27 32 C27 28 32 28 32 32 C32 36 37 36 37 32"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="32" cy="32" r="1.5" fill={color} />

    {/* Neural Bus Pins */}
    <line x1="26" y1="16" x2="26" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="14" x2="32" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38" y1="16" x2="38" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

    <line x1="26" y1="42" x2="26" y2="48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="42" x2="32" y2="50" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38" y1="42" x2="38" y2="48" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

    <line x1="16" y1="26" x2="22" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="14" y1="32" x2="22" y2="32" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="38" x2="22" y2="38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

    <line x1="42" y1="26" x2="48" y2="26" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="42" y1="32" x2="50" y2="32" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="42" y1="38" x2="48" y2="38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

    {/* Neural Nodes */}
    <circle cx="32" cy="11" r="2.5" stroke={color} strokeWidth="1.5" />
    <circle cx="32" cy="53" r="2.5" stroke={color} strokeWidth="1.5" />
    <circle cx="11" cy="32" r="2.5" stroke={color} strokeWidth="1.5" />
    <circle cx="53" cy="32" r="2.5" stroke={color} strokeWidth="1.5" />
    <circle cx="13" cy="14" r="2" stroke={color} strokeWidth="1.4" />
    <circle cx="51" cy="14" r="2" stroke={color} strokeWidth="1.4" />
    <path d="M15 16 L22 23 M49 16 L42 23" stroke={color} strokeWidth="1.2" strokeDasharray="2 2" />
  </svg>
);

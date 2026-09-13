import React from 'react';

interface TornDividerProps {
  type?: 'to-light' | 'to-dark';
  darkColor?: string;
  lightColor?: string;
}

export const TornDivider: React.FC<TornDividerProps> = ({
  type = 'to-light',
  darkColor = '#0B1528',
  lightColor = '#ffffff',
}) => {
  if (type === 'to-dark') {
    return (
      <div className="w-full relative select-none overflow-hidden leading-none z-10" style={{ backgroundColor: lightColor }}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-14 sm:h-20 md:h-28 block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main jagged dark silhouette */}
          <path
            d="M0,55 
               L35,58 L60,50 L85,62 L120,52 L160,65 L200,54 L240,68 L290,52 L340,70 
               L400,58 L460,74 L520,56 L580,76 L640,60 L710,80 L780,62 L850,82 L920,68 
               L990,85 L1060,70 L1130,88 L1200,74 L1270,92 L1340,78 L1400,92 L1440,84
               L1440,100 L0,100 Z"
            fill={darkColor}
          />
          {/* Secondary torn paper fiber edge */}
          <path
            d="M0,60 
               L45,56 L90,66 L140,58 L190,72 L250,60 L310,75 L370,64 L430,80 L500,68 
               L570,82 L640,70 L710,86 L780,74 L850,90 L920,78 L990,92 L1070,80 L1150,94 
               L1230,82 L1310,96 L1380,86 L1440,92
               L1440,100 L0,100 Z"
            fill={darkColor}
            opacity="0.9"
          />
        </svg>
      </div>
    );
  }

  // to-light (from dark navy into pure crisp white below stats, exactly matching the photo!)
  return (
    <div className="w-full relative select-none overflow-hidden leading-none z-20" style={{ backgroundColor: darkColor }}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-24 md:h-32 block -mb-[1px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle shadow beneath torn edge */}
        <path
          d="M0,45 
             L40,49 L80,41 L125,54 L170,43 L220,58 L270,45 L325,62 L380,48 L440,66 
             L500,52 L565,72 L630,56 L700,76 L770,60 L840,82 L910,65 L985,86 L1060,70 
             L1135,92 L1210,76 L1285,96 L1360,82 L1410,95 L1440,88
             L1440,120 L0,120 Z"
          fill="rgba(0,0,0,0.35)"
        />
        {/* Main realistic torn paper jagged edge in white */}
        <path
          d="M0,48 
             L35,52 L75,44 L115,57 L160,46 L210,61 L260,48 L315,65 L370,51 L430,69 
             L490,55 L555,75 L620,59 L690,79 L760,63 L830,85 L900,68 L975,89 L1050,73 
             L1125,95 L1200,79 L1275,99 L1350,85 L1405,98 L1440,91
             L1440,120 L0,120 Z"
          fill={lightColor}
        />
        {/* Fine ragged brush fibers */}
        <path
          d="M0,52 
             L30,48 L65,55 L100,47 L145,60 L195,50 L245,64 L300,53 L355,68 L415,56 
             L475,73 L540,60 L605,78 L675,64 L745,84 L815,69 L885,88 L960,74 L1035,93 
             L1110,79 L1185,98 L1260,84 L1335,102 L1395,89 L1440,94
             L1440,120 L0,120 Z"
          fill={lightColor}
          opacity="0.95"
        />
        {/* Realistic tiny torn paper specks */}
        <polygon points="120,40 126,43 121,46" fill={lightColor} />
        <polygon points="340,46 348,50 342,53" fill={lightColor} />
        <polygon points="620,53 628,57 622,60" fill={lightColor} />
        <polygon points="980,62 989,66 983,69" fill={lightColor} />
        <polygon points="1260,72 1269,76 1263,79" fill={lightColor} />
      </svg>
    </div>
  );
};

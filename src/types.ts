export interface SimulatorItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  image: string;
  description: string;
  specs: {
    level: string;
    type: string;
    motion: string;
    visual: string;
  };
}

export interface StatItem {
  id: string;
  ghostNumber: string;
  highlightText: string;
  fullText: string;
  iconName: 'screens' | 'tower' | 'pilot' | 'simulator';
}

export interface TrainingProgram {
  id: string;
  title: string;
  category: 'cockpit' | 'cabin' | 'type-rating';
  duration: string;
  description: string;
}

export interface GuideStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  category: 'infrastructure' | 'academic' | 'administrative';
  steps: GuideStep[];
  estimatedDuration: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  level: 'basic' | 'intermediate' | 'advanced';
  completionRate?: number;
}

export interface CaseStudy {
  id: string;
  schoolName: string;
  location: string;
  challenge: string;
  solution: string;
  impact: string;
  timeline: string;
  imageUrl: string;
}
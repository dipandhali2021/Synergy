export interface TransitionProgress {
  state: string;
  totalSchools: number;
  standardizedSchools: number;
  inTransition: number;
  percentageComplete: number;
}

export interface MonthlyProgress {
  month: string;
  standardized: number;
  inTransition: number;
  pending: number;
}

export interface RegionalData {
  district: string;
  state: string;
  totalSchools: number;
  standardizedPercentage: number;
  inTransitionPercentage: number;
}

export interface KPIMetric {
  label: string;
  value: number;
  trend: number;
  status: 'positive' | 'negative' | 'neutral';
}
import { TransitionProgress, MonthlyProgress, RegionalData, KPIMetric } from '../types/progress';

export const getStateProgress = async (): Promise<TransitionProgress[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { state: 'Kerala', totalSchools: 12500, standardizedSchools: 8750, inTransition: 2500, percentageComplete: 70 },
        { state: 'West Bengal', totalSchools: 15000, standardizedSchools: 9000, inTransition: 3000, percentageComplete: 60 },
        { state: 'Mizoram', totalSchools: 3000, standardizedSchools: 1500, inTransition: 900, percentageComplete: 50 },
        { state: 'Goa', totalSchools: 2000, standardizedSchools: 1200, inTransition: 400, percentageComplete: 60 }
      ]);
    }, 1000);
  });
};

export const getMonthlyProgress = async (): Promise<MonthlyProgress[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { month: 'Jan', standardized: 100, inTransition: 50, pending: 850 },
        { month: 'Feb', standardized: 200, inTransition: 100, pending: 700 },
        { month: 'Mar', standardized: 350, inTransition: 150, pending: 500 },
        { month: 'Apr', standardized: 500, inTransition: 200, pending: 300 },
        { month: 'May', standardized: 700, inTransition: 150, pending: 150 },
        { month: 'Jun', standardized: 850, inTransition: 100, pending: 50 }
      ]);
    }, 1000);
  });
};

export const getRegionalData = async (): Promise<RegionalData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { district: 'Thiruvananthapuram', state: 'Kerala', totalSchools: 500, standardizedPercentage: 75, inTransitionPercentage: 15 },
        { district: 'Kolkata', state: 'West Bengal', totalSchools: 600, standardizedPercentage: 65, inTransitionPercentage: 20 },
        { district: 'Aizawl', state: 'Mizoram', totalSchools: 200, standardizedPercentage: 55, inTransitionPercentage: 25 },
        { district: 'North Goa', state: 'Goa', totalSchools: 150, standardizedPercentage: 70, inTransitionPercentage: 20 }
      ]);
    }, 1000);
  });
};

export const getKPIMetrics = async (): Promise<KPIMetric[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: 'Standardization Rate', value: 68, trend: 5.2, status: 'positive' },
        { label: 'Resource Utilization', value: 82, trend: 3.1, status: 'positive' },
        { label: 'Transition Speed', value: 75, trend: -2.4, status: 'negative' },
        { label: 'Compliance Score', value: 92, trend: 1.5, status: 'positive' }
      ]);
    }, 1000);
  });
};
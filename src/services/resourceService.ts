import { ResourceRequirement, ResourceAlert, ResourceMetrics } from '../types/resource';

export const analyzeResourceRequirements = async (schoolId: string): Promise<ResourceRequirement[]> => {
  // Simulated API call to analyze resource requirements
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          schoolId,
          type: 'teacher',
          currentAmount: 15,
          requiredAmount: 20,
          priority: 'high',
          status: 'pending',
          lastUpdated: new Date().toISOString()
        },
        {
          id: '2',
          schoolId,
          type: 'infrastructure',
          currentAmount: 8,
          requiredAmount: 10,
          priority: 'medium',
          status: 'pending',
          lastUpdated: new Date().toISOString()
        }
      ]);
    }, 1000);
  });
};

export const getResourceMetrics = async (schoolId: string): Promise<ResourceMetrics> => {
  // Simulated API call to get resource metrics
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        teacherUtilization: 0.85,
        infrastructureUtilization: 0.75,
        fundUtilization: 0.60,
        studentTeacherRatio: 25,
        infrastructureCapacity: 500,
        budgetAllocation: 1000000
      });
    }, 1000);
  });
};

export const getResourceAlerts = async (schoolId: string): Promise<ResourceAlert[]> => {
  // Simulated API call to get resource alerts
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          schoolId,
          type: 'shortage',
          resourceType: 'teacher',
          severity: 'high',
          message: 'Critical teacher shortage in mathematics department',
          timestamp: new Date().toISOString(),
          acknowledged: false
        },
        {
          id: '2',
          schoolId,
          type: 'excess',
          resourceType: 'infrastructure',
          severity: 'low',
          message: 'Underutilized computer lab facilities',
          timestamp: new Date().toISOString(),
          acknowledged: false
        }
      ]);
    }, 1000);
  });
};
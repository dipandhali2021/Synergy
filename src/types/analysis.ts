export type SubmissionMode = 'form' | 'pdf';

export interface AnalysisFormData {
  // General Information
  schoolName: string;
  udiseCode: string;
  state: string;
  district: string;
  pinCode: string;
  category: 'odd' | 'standard';
  
  // Infrastructure
  classrooms: number;
  laboratories: number;
  libraries: number;
  playgrounds: number;
  computerLabs: number;
  
  // Academic
  gradeLevels: string[];
  studentCount: number;
  teacherCount: number;
  
  // Performance
  academicPerformance: number;
  attendanceRate: number;
  teacherRetentionRate: number;
  infrastructureScore: number;
}

// ... (keep existing interfaces)
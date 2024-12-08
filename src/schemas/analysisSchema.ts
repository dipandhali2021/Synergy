import { z } from 'zod';

export const analysisFormSchema = z.object({
  // Basic Information
  udiseCode: z.string().min(1, 'UDISE code is required'),
  schoolName: z.string().min(1, 'School name is required'),
  state: z.string().min(1, 'State is required'),
  district: z.string().min(1, 'District is required'),
  block: z.string().min(1, 'Block is required'),
  ruralUrban: z.enum(['rural', 'urban']),
  cluster: z.string().min(1, 'Cluster is required'),
  village: z.string().min(1, 'Village is required'),
  pincode: z.string().length(6, 'PIN code must be 6 digits'),

  // School Details
  schoolCategory: z.string().min(1, 'School category is required'),
  schoolManagement: z.string().min(1, 'School management is required'),
  schoolType: z.string().min(1, 'School type is required'),
  yearEstablished: z.number().min(1800).max(new Date().getFullYear()),
  isShiftSchool: z.boolean(),
  hasAnganwadi: z.boolean(),
  isSpecialSchool: z.boolean(),
  isMinoritySchool: z.boolean(),

  // Infrastructure Details
  buildingStatus: z.string().min(1, 'Building status is required'),
  hasBoundaryWall: z.boolean(),
  hasRamps: z.boolean(),
  hasPlayground: z.boolean(),
  hasDrinkingWater: z.boolean(),

  // Teachers
  totalTeachers: z.number().min(0),
  maleTeachers: z.number().min(0),
  femaleTeachers: z.number().min(0),
  academicQualification: z.enum(['Below Graduate', 'Graduate', 'Post Graduate']),
  professionalQualification: z.enum(['Diploma', 'B.Ed.', 'M.Ed.']),

  // Students Enrollment
  generalCategoryTotal: z.number().min(0),
  scCategoryTotal: z.number().min(0),
  stCategoryTotal: z.number().min(0),
  obcCategoryTotal: z.number().min(0),
});

export type AnalysisFormData = z.infer<typeof analysisFormSchema>;
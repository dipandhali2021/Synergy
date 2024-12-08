import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  School,
  Building2,
  MapPin,
  Users,
  BookOpen,
  Shield,
  Heart,
  Briefcase,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

// Import all form section components
import { IdentificationSection } from './form-sections/IdentificationSection';
import { SchoolCharacteristicsSection } from './form-sections/SchoolCharacteristicsSection';
import { InfrastructureSection } from './form-sections/InfrastructureSection';
import { SustainabilitySection } from './form-sections/SustainabilitySection';
import { EducationalSupportSection } from './form-sections/EducationalSupportSection';
import { SpecialNeedsSection } from './form-sections/SpecialNeedsSection';
import { CurriculumGovernanceSection } from './form-sections/CurriculumGovernanceSection';
import { TeacherStudentSection } from './form-sections/TeacherStudentSection';
import { PerformanceSection } from './form-sections/PerformanceSection';
import { GrantsComplianceSection } from './form-sections/GrantsComplianceSection';

const sections = [
  {
    id: 'identification',
    title: 'Identification & Location',
    icon: MapPin,
    component: IdentificationSection,
  },
  {
    id: 'characteristics',
    title: 'School Characteristics',
    icon: School,
    component: SchoolCharacteristicsSection,
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: Building2,
    component: InfrastructureSection,
  },
  {
    id: 'teacher-student',
    title: 'Teacher & Student Data',
    icon: Users,
    component: TeacherStudentSection,
  },
  {
    id: 'performance',
    title: 'Performance Overview',
    icon: BookOpen,
    component: PerformanceSection,
  },
  {
    id: 'compliance',
    title: 'Grants Compliance',
    icon: CheckCircle,
    component: GrantsComplianceSection,
  },
  {
    id: 'sustainability',
    title: 'Sustainability & Safety',
    icon: Shield,
    component: SustainabilitySection,
  },
  {
    id: 'educational',
    title: 'Educational Support',
    icon: BookOpen,
    component: EducationalSupportSection,
  },
  {
    id: 'special-needs',
    title: 'Special Needs & Inclusion',
    icon: Heart,
    component: SpecialNeedsSection,
  },
  {
    id: 'curriculum',
    title: 'Curriculum & Governance',
    icon: Briefcase,
    component: CurriculumGovernanceSection,
  },
];

const initialFormState = {
  // Identification
  schoolId: '',
  schoolName: '',
  state: '',
  district: '',
  block: '',
  ruralUrban: '',
  cluster: '',
  villageCity: '',
  pincode: '',

  // School Characteristics
  schoolCategory: '',
  schoolManagement: '',
  mediumOfInstruction: '',
  schoolType: '',

  // Infrastructure
  totalClassrooms: 0,
  lowestClass: 0,
  highestClass: 0,
  separateRoomForHM: false,
  boysWashrooms: false,
  girlsWashrooms: false,
  boundaryWall: false,
  playgroundAvailable: false,
  libraryAvailable: false,
  computerLabAvailable: false,
  drinkingWaterAvailable: false,
  electricityAvailability: false,
  internetAvailability: false,
  scienceLabAvailable: false,
  smartClassroomAvailable: false,
  auditoriumAvailable: false,
  digitalLibraryAvailable: false,
  kitchensForMidDayMeal: false,
  ecoFriendlyConstruction: false,
  safetyStandardsCompliance: false,
  universalAccess: false,
  inclusiveEnvironment: false,
  transportationForRemoteAreas: false,
  communityParticipation: false,
  qualifiedTeachersRTEAct: false,
  ICTIntegration: false,
  vocationalTrainingAvailability: false,
  activeSchoolManagementCommittee: false,
  annualMaintenance: false,
  schoolMapping: false,
  studentTracking: false,
  freeAndCompulsoryEducation: false,
  nonDiscrimination: false,
  noPunitivePractices: false,
  timelyFundUtilization: false,
  fundsAuditedAnnually: false,
  resourceUtilizationEfficiency: false,
  provisionOfStipendsForCWSNGirls: false,
  KGBVUpgraded: false,
  integrationWithAnganwadiCenters: false,
  curriculumStandardsAdherence: false,
  adequateFacilities: false,
  safetyStandards: false,
  supportForCWSN: false,
  communityEngagement: false,
  coLocationWithAnganwadiCenters: false,
  childProtectionPolicies: false,
  curriculumImplementation: false,
  qualifiedAndTrainedTeachers: false,
  supportiveLearningEnvironment: false,
  governanceAndManagement: false,
  monitoringAndEvaluationPractices: false,
  managementStructure: false,
  infrastructureQuality: false,
  supportSystems: false,
  financialManagement: false,
  positiveEducationalOutcomes: false,
  researchAndDevelopmentEngagement: false,
  studentLearningOutcomes: false,
  dataManagementAndReporting: false,

  // Classroom Condition
  classroomCondition: {
    goodCondition: 0,
    minorRepair: 0,
    majorRepair: 0,
  },

  // Available Facilities
  availableFacilities: {
    library: false,
    computerLab: false,
    drinkingWater: false,
    electricity: false,
    internet: false,
    scienceLab: false,
    smartClassroom: false,
    playground: false,
    auditorium: false,
    digitalLibrary: false,
  },

  // Resource Distribution
  resourceDistribution: {
    teachingStaff: { current: 0, required: 0 },
    classrooms: { current: 0, required: 0 },
    labs: { current: 0, required: 0 },
  },

  // Digital Equipment
  digitalEquipment: {
    desktops: 0,
    laptops: 0,
    projectors: 0,
    smartBoards: 0,
    printers: 0,
  },

  // Teacher Student Data
  totalTeachers: 0,
  totalStudents: 0,
  studentDemographics: {
    general: 0,
    SC: 0,
    ST: 0,
    OBC: 0,
  },

  // Teacher Qualifications
  teacherQualifications: {
    PhD: 0,
    postGraduate: 0,
    graduate: 0,
    other: 0,
  },

  // Performance
  performanceOverview: {
    academicAchievement: 0,
    teacherStudentRatio: 0,
    infrastructure: 0,
    resourceAvailability: 0,
  },
  performanceTrends: [],

  // Grants & Compliance
  grantUtilization: [],
  complianceVisits: [],
  upcomingComplianceRequirements: [],
};

export function AnalysisForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  // Load saved form data from localStorage on mount
  React.useEffect(() => {
    const savedData = localStorage.getItem('analysisFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('analysisFormData', JSON.stringify(formData));
  }, [formData]);

  const validateSection = (sectionId: string) => {
    const newErrors: Record<string, string> = {};

    switch (sectionId) {
      case 'identification':
        if (!formData.schoolId) newErrors.schoolId = 'School ID is required';
        if (!formData.schoolName) newErrors.schoolName = 'School name is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.district) newErrors.district = 'District is required';
        break;
      case 'characteristics':
        if (!formData.schoolCategory) newErrors.schoolCategory = 'School category is required';
        if (!formData.schoolManagement) newErrors.schoolManagement = 'School management is required';
        if (!formData.mediumOfInstruction) newErrors.mediumOfInstruction = 'Medium of instruction is required';
        if (!formData.schoolType) newErrors.schoolType = 'School type is required';
        break;
      case 'infrastructure':
        if (formData.totalClassrooms <= 0) newErrors.totalClassrooms = 'Total classrooms must be greater than 0';
        if (formData.lowestClass <= 0) newErrors.lowestClass = 'Lowest class must be greater than 0';
        if (formData.highestClass <= 0) newErrors.highestClass = 'Highest class must be greater than 0';
        break;
      case 'teacher-student':
        if (formData.totalTeachers <= 0) newErrors.totalTeachers = 'Total teachers must be greater than 0';
        if (formData.totalStudents <= 0) newErrors.totalStudents = 'Total students must be greater than 0';
        break;
      case 'performance':
        if (formData.performanceOverview.academicAchievement <= 0) newErrors.academicAchievement = 'Academic achievement must be greater than 0';
        if (formData.performanceOverview.teacherStudentRatio <= 0) newErrors.teacherStudentRatio = 'Teacher-student ratio must be greater than 0';
        break;
      case 'compliance':
        if (formData.grantUtilization.length === 0) newErrors.grantUtilization = 'Grant utilization data is required';
        if (formData.complianceVisits.length === 0) newErrors.complianceVisits = 'Compliance visits data is required';
        break;
      case 'sustainability':
        if (!formData.safetyStandardsCompliance) newErrors.safetyStandardsCompliance = 'Safety standards compliance is required';
        if (!formData.ecoFriendlyConstruction) newErrors.ecoFriendlyConstruction = 'Eco-friendly construction is required';
        break;
      case 'educational':
        if (!formData.supportiveLearningEnvironment) newErrors.supportiveLearningEnvironment = 'Supportive learning environment is required';
        if (!formData.qualifiedAndTrainedTeachers) newErrors.qualifiedAndTrainedTeachers = 'Qualified and trained teachers are required';
        break;
      case 'special-needs':
        if (!formData.supportForCWSN) newErrors.supportForCWSN = 'Support for CWSN is required';
        if (!formData.inclusiveEnvironment) newErrors.inclusiveEnvironment = 'Inclusive environment is required';
        break;
      case 'curriculum':
        if (!formData.curriculumStandardsAdherence) newErrors.curriculumStandardsAdherence = 'Curriculum standards adherence is required';
        if (!formData.curriculumImplementation) newErrors.curriculumImplementation = 'Curriculum implementation is required';
        break;

    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: string,
    value: string | number | boolean | object
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for the field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Validate all sections before submission
    let isValid = true;
    sections.forEach((section) => {
      if (!validateSection(section.id)) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Navigate to report page with form data
      navigate('/report', { state: { formData } });
    } catch (error) {
      console.error('Analysis failed:', error);
      // Handle error appropriately
    } finally {
      setIsAnalyzing(false);
    }
  };

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <form onSubmit={handleSubmit} className="flex gap-8">
      {/* Left Sidebar Navigation */}
      <div className="w-64 flex-shrink-0">
        <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
          <nav className="space-y-1">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setCurrentSection(index)}
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors ${
                    currentSection === index
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{section.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {sections[currentSection].title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Please fill in the following information
            </p>
          </div>

          <CurrentSectionComponent
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
          />

          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={() => setCurrentSection((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800"
              disabled={currentSection === 0}
            >
              Previous
            </button>

            {currentSection === sections.length - 1 ? (
              <button
                type="submit"
                disabled={isAnalyzing}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    Submit Analysis
                    <CheckCircle className="h-5 w-5" />
                  </>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  setCurrentSection((prev) =>
                    Math.min(sections.length - 1, prev + 1)
                  )
                }
                className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
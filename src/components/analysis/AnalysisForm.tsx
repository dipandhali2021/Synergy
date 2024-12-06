import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { analysisFormSchema } from '../../schemas/analysisSchema';
import { AnalysisFormData } from '../../types/analysis';
import { FormStep } from './FormStep';
import { useAutoSave } from '../../hooks/useAutoSave';
import { useNavigate } from 'react-router-dom';

// Import all form section components
import { IdentificationSection } from './form-sections/IdentificationSection';
import { SchoolCharacteristicsSection } from './form-sections/SchoolCharacteristicsSection';
import { InfrastructureSection } from './form-sections/InfrastructureSection';
import { SustainabilitySection } from './form-sections/SustainabilitySection';
import { EducationalSupportSection } from './form-sections/EducationalSupportSection';
import { SpecialNeedsSection } from './form-sections/SpecialNeedsSection';
import { CurriculumGovernanceSection } from './form-sections/CurriculumGovernanceSection';
import { AdditionalFeaturesSection } from './form-sections/AdditionalFeaturesSection';

const sections = [
  { id: 'identification', title: 'Identification & Location', icon: MapPin, component: IdentificationSection },
  { id: 'characteristics', title: 'School Characteristics', icon: School, component: SchoolCharacteristicsSection },
  { id: 'infrastructure', title: 'Infrastructure', icon: Building2, component: InfrastructureSection },
  { id: 'sustainability', title: 'Sustainability & Safety', icon: Shield, component: SustainabilitySection },
  { id: 'educational', title: 'Educational Support', icon: BookOpen, component: EducationalSupportSection },
  { id: 'special-needs', title: 'Special Needs & Inclusion', icon: Heart, component: SpecialNeedsSection },
  { id: 'curriculum', title: 'Curriculum & Governance', icon: Briefcase, component: CurriculumGovernanceSection },
  { id: 'additional', title: 'Additional Features', icon: Users, component: AdditionalFeaturesSection },
];

export function AnalysisForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();
  
  const methods = useForm<AnalysisFormData>({
    resolver: zodResolver(analysisFormSchema),
    defaultValues: JSON.parse(localStorage.getItem('analysisFormData') || '{}'),
  });

  const { handleSubmit, watch } = methods;

  useAutoSave(watch, 'analysisFormData');

  const onSubmit = async (data: AnalysisFormData) => {
    setIsAnalyzing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    navigate('/report');
  };

  const CurrentSectionComponent = sections[currentSection].component;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-8">
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

            <CurrentSectionComponent />

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
                    setCurrentSection((prev) => Math.min(sections.length - 1, prev + 1))
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
    </FormProvider>
  );
}
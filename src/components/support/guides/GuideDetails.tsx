import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Guide, GuideStep } from '../../../types/support';

interface GuideDetailsProps {
  guide: Guide;
  onBack: () => void;
}

export function GuideDetails({ guide, onBack }: GuideDetailsProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Guides
      </button>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">{guide.title}</h2>
        <p className="text-gray-600 mb-6">{guide.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Duration: {guide.estimatedDuration}</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            <span>Category: {guide.category}</span>
          </div>
        </div>

        <div className="space-y-4">
          {guide.steps.map((step, index) => (
            <div
              key={step.id}
              className={`border rounded-lg p-4 ${
                activeStep === step.id ? 'border-indigo-500 bg-indigo-50' : ''
              }`}
            >
              <button
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-sm">
                      {index + 1}
                    </span>
                    <h3 className="font-medium">{step.title}</h3>
                  </div>
                  <StepStatus status={step.status} />
                </div>
              </button>

              {activeStep === step.id && (
                <div className="mt-4 pl-9">
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <p className="text-sm text-gray-500">Estimated time: {step.duration}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepStatus({ status }: { status: GuideStep['status'] }) {
  switch (status) {
    case 'completed':
      return (
        <span className="flex items-center gap-1 text-green-600 text-sm">
          <CheckCircle className="h-4 w-4" />
          Completed
        </span>
      );
    case 'in-progress':
      return (
        <span className="flex items-center gap-1 text-yellow-600 text-sm">
          <Clock className="h-4 w-4" />
          In Progress
        </span>
      );
    default:
      return (
        <span className="text-sm text-gray-500">
          Not Started
        </span>
      );
  }
}
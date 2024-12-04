import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { GuideDetails } from './GuideDetails';
import { standardizationGuides } from '../../../data/guides';

interface GuidesListProps {
  onBack: () => void;
}

export function GuidesList() {
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const selectedGuide = standardizationGuides.find(
    (g) => g.id === selectedGuideId
  );

  if (selectedGuide) {
    return (
      <GuideDetails
        guide={selectedGuide}
        onBack={() => setSelectedGuideId(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {standardizationGuides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setSelectedGuideId(guide.id)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{guide.title}</h3>
              <ChevronRight className="h-5 w-5 text-indigo-600" />
            </div>
            <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-indigo-600">{guide.estimatedDuration}</span>
              <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">
                {guide.steps.length} steps
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

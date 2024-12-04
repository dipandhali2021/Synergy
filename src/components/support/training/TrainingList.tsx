import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { TrainingDetails } from './TrainingDetails';
import { trainingModules } from '../../../data/training';

interface TrainingListProps {
  onBack: () => void;
}

export function TrainingList() {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const selectedModule = trainingModules.find((m) => m.id === selectedModuleId);

  if (selectedModule) {
    return (
      <TrainingDetails
        module={selectedModule}
        onBack={() => setSelectedModuleId(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainingModules.map((module) => (
          <button
            key={module.id}
            onClick={() => setSelectedModuleId(module.id)}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-left"
          >
            <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{module.description}</p>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{module.duration}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Level</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    module.level === 'basic'
                      ? 'bg-green-100 text-green-800'
                      : module.level === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {module.level}
                </span>
              </div>

              {module.completionRate !== undefined && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span>{module.completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${module.completionRate}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

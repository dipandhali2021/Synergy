import React from 'react';
import { ArrowLeft, Play, CheckCircle, Clock } from 'lucide-react';
import { TrainingModule } from '../../../types/support';

interface TrainingDetailsProps {
  module: TrainingModule;
  onBack: () => void;
}

export function TrainingDetails({ module, onBack }: TrainingDetailsProps) {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Training Modules
      </button>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">{module.title}</h2>
            <p className="text-gray-600">{module.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            module.level === 'basic' ? 'bg-green-100 text-green-800' :
            module.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {module.level}
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Duration: {module.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4" />
            <span>{module.topics.length} Topics</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Course Content</h3>
            <div className="space-y-4">
              {module.topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <Play className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Topic {index + 1}</h4>
                    <p className="text-gray-600 text-sm">{topic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Start Training
          </button>
        </div>
      </div>
    </div>
  );
}
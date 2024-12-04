import React from 'react';
import { ClipboardList, Users, Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface SurveyCardProps {
  survey: {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    totalResponses: number;
    status: 'active' | 'completed' | 'upcoming';
    completionRate?: number;
  };
  onTakeSurvey: (id: string) => void;
}

export function SurveyCard({ survey, onTakeSurvey }: SurveyCardProps) {
  const endDate = new Date(survey.endDate);
  const daysRemaining = Math.ceil((endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">{survey.title}</h3>
          <p className="text-gray-600 text-sm">{survey.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          survey.status === 'active' ? 'bg-green-100 text-green-800' :
          survey.status === 'completed' ? 'bg-gray-100 text-gray-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {survey.status}
        </span>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4" />
          <span>{survey.totalResponses} responses</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{daysRemaining > 0 ? `${daysRemaining} days remaining` : 'Ended'}</span>
        </div>
      </div>

      {survey.completionRate !== undefined && (
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Your Progress</span>
            <span className="font-medium">{survey.completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all"
              style={{ width: `${survey.completionRate}%` }}
            />
          </div>
        </div>
      )}

      <button
        onClick={() => onTakeSurvey(survey.id)}
        disabled={survey.status !== 'active'}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ClipboardList className="h-5 w-5" />
        {survey.status === 'active' ? 'Take Survey' : 
         survey.status === 'completed' ? 'View Results' : 
         'Coming Soon'}
      </button>
    </div>
  );
}
import React from 'react';
import { AlertCircle, Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface PolicyCardProps {
  policy: {
    id: string;
    title: string;
    summary: string;
    category: string;
    publishedAt: string;
    effectiveDate: string;
    importance: 'high' | 'medium' | 'low';
  };
  onViewDetails: (id: string) => void;
}

export function PolicyCard({ policy, onViewDetails }: PolicyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${
          policy.importance === 'high' ? 'bg-red-100' :
          policy.importance === 'medium' ? 'bg-yellow-100' :
          'bg-blue-100'
        }`}>
          <AlertCircle className={`h-6 w-6 ${
            policy.importance === 'high' ? 'text-red-600' :
            policy.importance === 'medium' ? 'text-yellow-600' :
            'text-blue-600'
          }`} />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold">{policy.title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs ${
              policy.category === 'infrastructure' ? 'bg-purple-100 text-purple-800' :
              policy.category === 'academic' ? 'bg-green-100 text-green-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {policy.category}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4">{policy.summary}</p>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Published: {format(new Date(policy.publishedAt), 'MMM d, yyyy')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Effective: {format(new Date(policy.effectiveDate), 'MMM d, yyyy')}</span>
            </div>
          </div>

          <button
            onClick={() => onViewDetails(policy.id)}
            className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export function ProgressOverview() {
  const progress = {
    completed: 3,
    inProgress: 2,
    pending: 4
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-6">Your Progress Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-50 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Completed</p>
            <p className="text-2xl font-bold">{progress.completed}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">In Progress</p>
            <p className="text-2xl font-bold">{progress.inProgress}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold">{progress.pending}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full"
            style={{ 
              width: `${(progress.completed / (progress.completed + progress.inProgress + progress.pending)) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
}
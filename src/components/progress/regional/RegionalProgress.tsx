import React, { useState } from 'react';
import { RegionalMetrics } from './RegionalMetrics';
import { RegionalChallenges } from './RegionalChallenges';
import { ResourceAllocation } from './ResourceAllocation';
import { UpcomingGoals } from './UpcomingGoals';
import { Map } from 'lucide-react';

export function RegionalProgress() {
  const [selectedState, setSelectedState] = useState('Kerala');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Map className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl font-semibold">Regional Progress Dashboard</h2>
        </div>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          {['Kerala', 'West Bengal', 'Mizoram', 'Goa'].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <RegionalMetrics state={selectedState} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RegionalChallenges state={selectedState} />
        <ResourceAllocation state={selectedState} />
      </div>

      <UpcomingGoals state={selectedState} />
    </div>
  );
}
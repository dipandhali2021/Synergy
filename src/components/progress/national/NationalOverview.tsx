import React from 'react';
import { ProgressMap } from './ProgressMap';
import { KeyMetrics } from './KeyMetrics';
import { TrendsAnalysis } from './TrendsAnalysis';
import { AIInsights } from '../shared/AIInsights';

export function NationalOverview() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">National Progress Map</h2>
          <ProgressMap />
        </div>
        <div>
          <KeyMetrics />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendsAnalysis />
        <AIInsights />
      </div>
    </div>
  );
}
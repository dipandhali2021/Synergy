import React, { useState } from 'react';
import { RegionalComparison } from './RegionalComparison';
import { ArrowUpRight, ArrowDownRight, Medal } from 'lucide-react';

const mockData = {
  stateComparison: [
    { name: 'Kerala', standardized: 85, inProgress: 10, pending: 5 },
    { name: 'West Bengal', standardized: 70, inProgress: 20, pending: 10 },
    { name: 'Mizoram', standardized: 60, inProgress: 25, pending: 15 },
    { name: 'Goa', standardized: 75, inProgress: 15, pending: 10 }
  ],
  metrics: [
    {
      label: 'Standardization Rate',
      value: 78,
      previousValue: 72,
      unit: '%'
    },
    {
      label: 'Schools Transitioned',
      value: 450,
      previousValue: 380,
      unit: ''
    },
    {
      label: 'Resource Utilization',
      value: 92,
      previousValue: 88,
      unit: '%'
    },
    {
      label: 'Completion Time',
      value: 4.5,
      previousValue: 5.2,
      unit: ' months'
    }
  ],
  topPerformers: [
    { name: 'Government High School, Kerala', score: 98, trend: 5 },
    { name: 'St. Mary\'s School, West Bengal', score: 95, trend: 3 },
    { name: 'Central School, Mizoram', score: 92, trend: -2 }
  ]
};

export function ComparativeAnalysis() {
  const [selectedRegion, setSelectedRegion] = useState('Kerala');
  const [comparisonType, setComparisonType] = useState<'state' | 'district' | 'school'>('state');

  return (
    <div className="space-y-8 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Comparative Analysis</h2>
          <p className="text-gray-600">Compare progress across different regions and schools</p>
        </div>
        <div className="flex gap-4">
          <select
            value={comparisonType}
            onChange={(e) => setComparisonType(e.target.value as typeof comparisonType)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="state">State Level</option>
            <option value="district">District Level</option>
            <option value="school">School Level</option>
          </select>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="Kerala">Kerala</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Goa">Goa</option>
          </select>
        </div>
      </div>

      <RegionalComparison
        region={selectedRegion}
        comparisonData={mockData.stateComparison}
        metrics={mockData.metrics}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Top Performers</h3>
          <div className="space-y-4">
            {mockData.topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    index === 0 ? 'bg-yellow-100 text-yellow-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <Medal className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{performer.name}</h4>
                    <p className="text-sm text-gray-600">Score: {performer.score}%</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${
                  performer.trend > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {performer.trend > 0 ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  <span>{Math.abs(performer.trend)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 text-green-800 rounded-lg">
              <h4 className="font-medium mb-2">Strong Performance</h4>
              <p className="text-sm">Kerala shows consistently high standardization rates across all metrics</p>
            </div>
            <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg">
              <h4 className="font-medium mb-2">Areas for Improvement</h4>
              <p className="text-sm">Mizoram requires additional support to accelerate standardization process</p>
            </div>
            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg">
              <h4 className="font-medium mb-2">Trending Upward</h4>
              <p className="text-sm">West Bengal shows significant improvement in the last quarter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
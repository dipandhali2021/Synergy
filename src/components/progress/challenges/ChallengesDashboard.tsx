import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Filter, ArrowRight } from 'lucide-react';

const mockChallenges = [
  {
    id: '1',
    title: 'Infrastructure Gap',
    description: 'Schools reporting insufficient classrooms for standard structure',
    severity: 'high',
    affectedSchools: 156,
    trend: 'increasing',
    region: 'Kerala',
    status: 'open'
  },
  {
    id: '2',
    title: 'Teacher Shortage',
    description: 'Lack of qualified teachers for additional grades',
    severity: 'medium',
    affectedSchools: 89,
    trend: 'stable',
    region: 'West Bengal',
    status: 'in-progress'
  },
  {
    id: '3',
    title: 'Resource Distribution',
    description: 'Delays in distributing learning materials',
    severity: 'low',
    affectedSchools: 45,
    trend: 'decreasing',
    region: 'Mizoram',
    status: 'resolved'
  }
];

export function ChallengesDashboard() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Challenges & Interventions</h2>
          <p className="text-gray-600">Monitor and address implementation challenges</p>
        </div>
        <div className="flex gap-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <select
            value={filterSeverity}
            onChange={(e) => setFilterSeverity(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Severity</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h3 className="font-semibold text-red-800">Critical Issues</h3>
          </div>
          <p className="text-2xl font-bold text-red-600">23</p>
          <p className="text-sm text-red-800 mt-1">Requires immediate attention</p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h3 className="font-semibold text-yellow-800">Open Challenges</h3>
          </div>
          <p className="text-2xl font-bold text-yellow-600">45</p>
          <p className="text-sm text-yellow-800 mt-1">Being monitored</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
            <h3 className="font-semibold text-green-800">Resolved This Month</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">12</p>
          <p className="text-sm text-green-800 mt-1">Successfully addressed</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Active Challenges</h3>
        </div>
        <div className="divide-y">
          {mockChallenges.map((challenge) => (
            <div key={challenge.id} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      challenge.severity === 'high' ? 'bg-red-100 text-red-800' :
                      challenge.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {challenge.severity} severity
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      challenge.status === 'open' ? 'bg-red-100 text-red-800' :
                      challenge.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {challenge.status}
                    </span>
                  </div>
                  <h4 className="font-medium">{challenge.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{challenge.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>{challenge.affectedSchools} schools affected</span>
                    <span>Region: {challenge.region}</span>
                  </div>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
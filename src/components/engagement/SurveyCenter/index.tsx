import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { SurveyCard } from './SurveyCard';

const mockSurveys = [
  {
    id: '1',
    title: 'School Infrastructure Assessment',
    description: 'Help us understand your current infrastructure needs and challenges',
    startDate: '2024-03-01T00:00:00Z',
    endDate: '2024-03-31T23:59:59Z',
    totalResponses: 145,
    status: 'active' as const,
    completionRate: 75
  },
  {
    id: '2',
    title: 'Teacher Training Needs',
    description: 'Assessment of training requirements for standardization',
    startDate: '2024-03-15T00:00:00Z',
    endDate: '2024-04-15T23:59:59Z',
    totalResponses: 89,
    status: 'active' as const
  },
  {
    id: '3',
    title: 'Parent Feedback Survey',
    description: 'Gathering parent perspectives on school transition',
    startDate: '2024-02-01T00:00:00Z',
    endDate: '2024-02-28T23:59:59Z',
    totalResponses: 256,
    status: 'completed' as const,
    completionRate: 100
  }
];

export function SurveyCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const handleTakeSurvey = (id: string) => {
    console.log('Taking survey:', id);
  };

  const filteredSurveys = mockSurveys.filter(survey => 
    (statusFilter === 'all' || survey.status === statusFilter) &&
    (survey.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     survey.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Survey Center</h2>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search surveys..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSurveys.map((survey) => (
          <SurveyCard
            key={survey.id}
            survey={survey}
            onTakeSurvey={handleTakeSurvey}
          />
        ))}
      </div>
    </div>
  );
}
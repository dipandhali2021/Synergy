import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { SurveyCard } from './SurveyCard';
import { surveyService } from '../../../services/surveyService';
import { LoadingSpinner } from '../../common/LoadingSpinner';

export function SurveyCenter() {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSurveys();
  }, [searchTerm, statusFilter, currentPage]);

  const fetchSurveys = async () => {
    try {
      setLoading(true);
      const response = await surveyService.getSurveys({
        page: currentPage,
        status: statusFilter !== 'all' ? statusFilter : undefined
      });
      setSurveys(response.surveys);
    } catch (error) {
      setError('Failed to fetch surveys');
      console.error('Error fetching surveys:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTakeSurvey = (id: string) => {
    // This will be handled by the SurveyCard component internally now
    console.log('Viewing survey details:', id);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-600 p-4">{error}</div>;
  }

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
        {surveys.map((survey) => (
          <SurveyCard
            key={survey._id}
            survey={survey}
            onTakeSurvey={handleTakeSurvey}
          />
        ))}
      </div>
    </div>
  );
}
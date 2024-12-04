import React, { useState } from 'react';
import { Search, Filter, Bell } from 'lucide-react';
import { PolicyCard } from './PolicyCard';

const mockPolicies = [
  {
    id: '1',
    title: 'Updated Infrastructure Requirements',
    summary: 'New guidelines for classroom capacity and essential facilities',
    category: 'infrastructure',
    publishedAt: '2024-03-01T00:00:00Z',
    effectiveDate: '2024-04-01T00:00:00Z',
    importance: 'high' as const
  },
  {
    id: '2',
    title: 'Teacher Qualification Standards',
    summary: 'Revised requirements for teaching staff qualifications',
    category: 'academic',
    publishedAt: '2024-03-10T00:00:00Z',
    effectiveDate: '2024-05-01T00:00:00Z',
    importance: 'medium' as const
  },
  {
    id: '3',
    title: 'Administrative Process Updates',
    summary: 'Streamlined procedures for documentation and reporting',
    category: 'administrative',
    publishedAt: '2024-03-15T00:00:00Z',
    effectiveDate: '2024-04-15T00:00:00Z',
    importance: 'low' as const
  }
];

export function PolicyCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [importanceFilter, setImportanceFilter] = useState<string>('all');

  const handleViewDetails = (id: string) => {
    console.log('Viewing policy:', id);
  };

  const filteredPolicies = mockPolicies.filter(policy =>
    (categoryFilter === 'all' || policy.category === categoryFilter) &&
    (importanceFilter === 'all' || policy.importance === importanceFilter) &&
    (policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     policy.summary.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Policy Updates</h2>
        <button className="relative p-2 text-gray-600 hover:text-gray-800">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search policies..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="academic">Academic</option>
          <option value="administrative">Administrative</option>
        </select>
        <select
          value={importanceFilter}
          onChange={(e) => setImportanceFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Importance</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="space-y-6">
        {filteredPolicies.map((policy) => (
          <PolicyCard
            key={policy.id}
            policy={policy}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
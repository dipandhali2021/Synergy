import React from 'react';
import { SchoolFilters } from '../../types/school';
import {
  Building2,
  GraduationCap,
  MapPin,
  Users,
  BarChart3,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

interface FilterPanelProps {
  filters: SchoolFilters;
  onFilterChange: (filters: SchoolFilters) => void;
}

export function FilterPanel({ filters, onFilterChange }: FilterPanelProps) {
  const handleFilterChange = (
    key: keyof SchoolFilters,
    value: string | string[]
  ) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
        <p className="text-sm text-gray-500 mt-1">Refine your search results</p>
      </div>

      <div className="divide-y divide-gray-200">
        <div className="p-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-3">
            <Building2 className="h-4 w-4 text-indigo-500" />
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full rounded-lg border-gray-200 text-gray-700 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="odd">Odd Structure</option>
            <option value="standard">Standard Structure</option>
          </select>
        </div>

        <div className="p-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-3">
            <MapPin className="h-4 w-4 text-indigo-500" />
            State
          </label>
          <select
            value={filters.state}
            onChange={(e) => handleFilterChange('state', e.target.value)}
            className="w-full rounded-lg border-gray-200 text-gray-700 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All States</option>
            <option value="kerala">Kerala</option>
            <option value="west-bengal">West Bengal</option>
            <option value="mizoram">Mizoram</option>
            <option value="goa">Goa</option>
          </select>
        </div>

        <div className="p-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-3">
            <GraduationCap className="h-4 w-4 text-indigo-500" />
            Grade Levels
          </label>
          <div className="space-y-3">
            {['Primary', 'Middle', 'Secondary', 'Senior Secondary'].map(
              (level) => (
                <label key={level} className="flex items-center gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.gradeLevels.includes(
                        level.toLowerCase()
                      )}
                      onChange={(e) => {
                        const newLevels = e.target.checked
                          ? [...filters.gradeLevels, level.toLowerCase()]
                          : filters.gradeLevels.filter(
                              (l) => l !== level.toLowerCase()
                            );
                        handleFilterChange('gradeLevels', newLevels);
                      }}
                      className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    {filters.gradeLevels.includes(level.toLowerCase()) && (
                      <CheckCircle2 className="absolute right-0 top-0 h-3 w-3 text-indigo-600" />
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{level}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="p-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-3">
            <Users className="h-4 w-4 text-indigo-500" />
            School Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
            className="w-full rounded-lg border-gray-200 text-gray-700 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All Types</option>
            <option value="government">Government</option>
            <option value="private">Private</option>
            <option value="aided">Aided</option>
            <option value="unaided">Unaided</option>
          </select>
        </div>

        <div className="p-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-3">
            <BarChart3 className="h-4 w-4 text-indigo-500" />
            Performance Band
          </label>
          <select
            value={filters.performanceBand}
            onChange={(e) =>
              handleFilterChange('performanceBand', e.target.value)
            }
            className="w-full rounded-lg border-gray-200 text-gray-700 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All Performance Levels</option>
            <option value="excellent">Excellent</option>
            <option value="satisfactory">Satisfactory</option>
            <option value="needs-improvement">Needs Improvement</option>
          </select>
        </div>

        <div className="p-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-900 mb-3">
            <BookOpen className="h-4 w-4 text-indigo-500" />
            Facilities
          </label>
          <div className="space-y-3">
            {['Library', 'Sports', 'Computer Lab', 'Science Lab'].map(
              (facility) => (
                <label key={facility} className="flex items-center gap-3">
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.facilities.includes(
                        facility.toLowerCase()
                      )}
                      onChange={(e) => {
                        const newFacilities = e.target.checked
                          ? [...filters.facilities, facility.toLowerCase()]
                          : filters.facilities.filter(
                              (f) => f !== facility.toLowerCase()
                            );
                        handleFilterChange('facilities', newFacilities);
                      }}
                      className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    {filters.facilities.includes(facility.toLowerCase()) && (
                      <CheckCircle2 className="absolute right-0 top-0 h-3 w-3 text-indigo-600" />
                    )}
                  </div>
                  <span className="text-sm text-gray-700">{facility}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-50">
        <button
          onClick={() =>
            onFilterChange({
              category: '',
              state: '',
              gradeLevels: [],
              type: '',
              performanceBand: '',
              facilities: [],
            })
          }
          className="w-full px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { AlertTriangle, Clock, MapPin, ArrowRight } from 'lucide-react';

interface EmergencyRequest {
  id: string;
  schoolName: string;
  location: string;
  type: 'natural_disaster' | 'infrastructure_failure' | 'health_emergency';
  resourcesNeeded: string[];
  priority: 'critical' | 'high' | 'medium';
  requestedAt: string;
  status: 'pending' | 'approved' | 'dispatched';
}

const mockEmergencyRequests: EmergencyRequest[] = [
  {
    id: '1',
    schoolName: 'Government High School, Kerala',
    location: 'Wayanad, Kerala',
    type: 'natural_disaster',
    resourcesNeeded: ['Temporary Classrooms', 'Basic Supplies', 'First Aid'],
    priority: 'critical',
    requestedAt: '2024-03-15T10:00:00Z',
    status: 'pending',
  },
  {
    id: '2',
    schoolName: 'City Public School',
    location: 'Mumbai, Maharashtra',
    type: 'infrastructure_failure',
    resourcesNeeded: ['Structural Assessment', 'Temporary Facilities'],
    priority: 'high',
    requestedAt: '2024-03-14T15:30:00Z',
    status: 'approved',
  },
];

export function EmergencyResourceCenter() {
  const [activeFilter, setActiveFilter] = useState<
    'all' | 'critical' | 'high' | 'medium'
  >('all');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Emergency Resource Center</h2>
          <p className="text-gray-600 mt-1">
            Rapid response resource allocation for emergencies
          </p>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          New Emergency Request
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        {(['all', 'critical', 'high', 'medium'] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === filter
                ? 'bg-red-50 text-red-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {mockEmergencyRequests
          .filter(
            (request) =>
              activeFilter === 'all' || request.priority === activeFilter
          )
          .map((request) => (
            <div key={request.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        request.priority === 'critical'
                          ? 'bg-red-100 text-red-800'
                          : request.priority === 'high'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {request.priority}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        request.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : request.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>

                  <h3 className="font-medium mb-2">{request.schoolName}</h3>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{request.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>
                        Requested:{' '}
                        {new Date(request.requestedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {request.resourcesNeeded.map((resource, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800">
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

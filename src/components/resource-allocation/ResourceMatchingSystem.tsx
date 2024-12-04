import React, { useState } from 'react';
import {
  ArrowRight,
  School,
  Package,
  Share2,
  CheckCircle,
  MapPin,
} from 'lucide-react';

interface ResourceMatch {
  id: string;
  schoolName: string;
  location: string;
  resourceType: string;
  quantity: number;
  matchScore: number;
  distance: number;
  status: 'pending' | 'matched' | 'transferred';
}

interface SharedResource {
  id: string;
  schoolName: string;
  resourceType: string;
  quantity: number;
  availableFrom: string;
  availableTo: string;
  distance: number;
}

const mockMatches: ResourceMatch[] = [
  {
    id: '1',
    schoolName: 'Delhi Public School',
    location: 'New Delhi',
    resourceType: 'Laboratory Equipment',
    quantity: 5,
    matchScore: 95,
    distance: 3.2,
    status: 'pending',
  },
  {
    id: '2',
    schoolName: "St. Mary's School",
    location: 'Mumbai',
    resourceType: 'Sports Equipment',
    quantity: 10,
    matchScore: 88,
    distance: 2.5,
    status: 'matched',
  },
];

const mockSharedResources: SharedResource[] = [
  {
    id: '1',
    schoolName: 'City International School',
    resourceType: 'Computer Lab',
    quantity: 1,
    availableFrom: '2024-04-01',
    availableTo: '2024-06-30',
    distance: 4.5,
  },
  {
    id: '2',
    schoolName: 'Modern High School',
    resourceType: 'Science Equipment',
    quantity: 3,
    availableFrom: '2024-03-20',
    availableTo: '2024-05-31',
    distance: 2.8,
  },
];

export function ResourceMatchingSystem() {
  const [activeTab, setActiveTab] = useState<'matches' | 'shared'>('matches');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            Intelligent Resource Matching
          </h2>
          <p className="text-gray-600">
            Optimize resource distribution through smart matching
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('matches')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'matches'
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Resource Matches
        </button>
        <button
          onClick={() => setActiveTab('shared')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'shared'
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Shared Resources
        </button>
      </div>

      {activeTab === 'matches' ? (
        <div className="space-y-4">
          {mockMatches.map((match) => (
            <div key={match.id} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <School className="h-5 w-5 text-indigo-600" />
                    <h3 className="font-medium">{match.schoolName}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        match.status === 'matched'
                          ? 'bg-green-100 text-green-800'
                          : match.status === 'transferred'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {match.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      <span>
                        {match.resourceType} (Qty: {match.quantity})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {match.location} ({match.distance} km)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">
                        Match Score
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${match.matchScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">
                          {match.matchScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                  Process Match
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {mockSharedResources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Share2 className="h-5 w-5 text-indigo-600" />
                    <h3 className="font-medium">{resource.schoolName}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      <span>
                        {resource.resourceType} (Qty: {resource.quantity})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{resource.distance} km away</span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    Available:{' '}
                    {new Date(resource.availableFrom).toLocaleDateString()} to{' '}
                    {new Date(resource.availableTo).toLocaleDateString()}
                  </div>
                </div>

                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
                  Request Access
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

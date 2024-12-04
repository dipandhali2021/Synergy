import React, { useState } from 'react';
import { Share2, Users, Clock, CheckCircle } from 'lucide-react';

interface SharedResource {
  id: string;
  resourceType: string;
  sharedBy: string;
  sharedWith: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'completed';
  utilization: number;
}

const mockSharedResources: SharedResource[] = [
  {
    id: '1',
    resourceType: 'Sports Equipment',
    sharedBy: 'Delhi Public School',
    sharedWith: 'Government High School',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    status: 'active',
    utilization: 75,
  },
  {
    id: '2',
    resourceType: 'Laboratory Equipment',
    sharedBy: 'St. Marys School',
    sharedWith: 'Model School',
    startDate: '2024-04-01',
    endDate: '2024-06-30',
    status: 'pending',
    utilization: 0,
  },
];

export function ResourceSharingHub() {
  const [activeTab, setActiveTab] = useState<'shared' | 'available'>('shared');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Resource Sharing Hub</h2>
          <p className="text-gray-600 mt-1">
            Optimize resource utilization through sharing
          </p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Share New Resource
        </button>
      </div>

      <div className="flex gap-4 mb-6">
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
        <button
          onClick={() => setActiveTab('available')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'available'
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          Available for Sharing
        </button>
      </div>

      <div className="space-y-4">
        {mockSharedResources.map((resource) => (
          <div key={resource.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Share2 className="h-5 w-5 text-indigo-600" />
                  <h3 className="font-medium">{resource.resourceType}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      resource.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : resource.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {resource.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Shared by: {resource.sharedBy}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Shared with: {resource.sharedWith}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      Start: {new Date(resource.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      End: {new Date(resource.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {resource.status === 'active' && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Utilization</span>
                      <span>{resource.utilization}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${resource.utilization}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <button className="px-3 py-1 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

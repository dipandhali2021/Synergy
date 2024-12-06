import React from 'react';
import { School } from '../../../types/school';
import {
  Library,
  Monitor,
  Droplets,
  Zap,
  Wifi,
  BookOpen,
  Activity,
  Building,
  Check,
  X,
} from 'lucide-react';

interface FacilitiesOverviewProps {
  school: School;
}

export function FacilitiesOverview({ school }: FacilitiesOverviewProps) {
  const facilities = [
    { name: 'Library', icon: Library, available: true },
    { name: 'Computer Lab', icon: Monitor, available: true },
    { name: 'Drinking Water', icon: Droplets, available: true },
    { name: 'Electricity', icon: Zap, available: true },
    { name: 'Internet', icon: Wifi, available: false },
    { name: 'Science Lab', icon: Activity, available: true },
    { name: 'Smart Classroom', icon: Monitor, available: false },
    { name: 'Playground', icon: Activity, available: true },
    { name: 'Auditorium', icon: Building, available: false },
    { name: 'Digital Library', icon: BookOpen, available: false },
  ];

  const digitalEquipment = [
    { name: 'Desktops', count: 15 },
    { name: 'Laptops', count: 5 },
    { name: 'Projectors', count: 3 },
    { name: 'Smart Boards', count: 2 },
    { name: 'Printers', count: 2 },
  ];

  return (
    <div className="space-y-6">
      {/* Facilities Grid */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6">Available Facilities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.name}
                className={`p-4 rounded-lg border ${
                  facility.available
                    ? 'border-indigo-200 bg-indigo-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${
                    facility.available ? 'text-indigo-600' : 'text-gray-400'
                  }`} />
                  {facility.available ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <X className="h-4 w-4 text-red-500" />
                  )}
                </div>
                <div className={`text-sm font-medium ${
                  facility.available ? 'text-indigo-900' : 'text-gray-500'
                }`}>
                  {facility.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Digital Equipment */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-6">Digital Equipment</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {digitalEquipment.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <span className="text-gray-700">{item.name}</span>
              <span className="text-lg font-semibold text-indigo-600">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
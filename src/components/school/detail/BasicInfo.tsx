import React from 'react';
import { School } from '../../../types/school';
import { Building2, MapPin, Calendar, Users, School as SchoolIcon } from 'lucide-react';

interface BasicInfoProps {
  school: School;
}

export function BasicInfo({ school }: BasicInfoProps) {
    console.log(school);
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <SchoolIcon className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <div className="text-sm text-gray-500">School Name</div>
              <div className="font-medium">{school.name}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <div className="text-sm text-gray-500">UDISE Code</div>
              <div className="font-medium">{school.id}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">{school.district}, {school.state}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <div className="text-sm text-gray-500">School Type</div>
              <div className="font-medium capitalize">{school.type}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <div className="text-sm text-gray-500">Current Structure</div>
              <div className="font-medium">{school.currentStructure}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-gray-400 mt-1" />
            <div>
              <div className="text-sm text-gray-500">Recommended Structure</div>
              <div className="font-medium">{school.recommendedStructure}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
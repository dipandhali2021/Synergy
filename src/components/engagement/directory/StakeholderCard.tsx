import React from 'react';
import { Building2, MapPin, Mail, Phone } from 'lucide-react';

interface StakeholderCardProps {
  stakeholder: {
    id: string;
    name: string;
    role: string;
    organization: string;
    location: string;
    email: string;
    phone: string;
    expertise: string[];
    imageUrl?: string;
  };
  onConnect: (id: string) => void;
}

export function StakeholderCard({ stakeholder, onConnect }: StakeholderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
          {stakeholder.imageUrl ? (
            <img
              src={stakeholder.imageUrl}
              alt={stakeholder.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600 text-xl font-semibold">
              {stakeholder.name.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{stakeholder.name}</h3>
              <p className="text-gray-600 text-sm">{stakeholder.role}</p>
            </div>
            <button
              onClick={() => onConnect(stakeholder.id)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm"
            >
              Connect
            </button>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Building2 className="h-4 w-4" />
              <span>{stakeholder.organization}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{stakeholder.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${stakeholder.email}`} className="text-indigo-600 hover:text-indigo-800">
                {stakeholder.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>{stakeholder.phone}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {stakeholder.expertise.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
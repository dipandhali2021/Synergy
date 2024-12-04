import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { StakeholderCard } from './StakeholderCard';

const mockStakeholders = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'School Administrator',
    organization: 'Central High School',
    location: 'Kerala',
    email: 'sarah.johnson@school.edu',
    phone: '+91 98765 43210',
    expertise: ['Infrastructure Planning', 'Grade Reconfiguration', 'Teacher Training'],
  },
  {
    id: '2',
    name: 'Prof. Rajesh Kumar',
    role: 'Education Policy Expert',
    organization: 'State Education Board',
    location: 'West Bengal',
    email: 'rajesh.kumar@edu.gov.in',
    phone: '+91 98765 43211',
    expertise: ['Policy Implementation', 'Standardization', 'Resource Management'],
  }
];

export function StakeholderDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const handleConnect = (id: string) => {
    console.log('Connecting with stakeholder:', id);
  };

  const filteredStakeholders = mockStakeholders.filter(stakeholder => {
    const matchesSearch = 
      stakeholder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stakeholder.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stakeholder.expertise.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesRole = roleFilter === 'all' || stakeholder.role === roleFilter;
    const matchesLocation = locationFilter === 'all' || stakeholder.location === locationFilter;

    return matchesSearch && matchesRole && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Stakeholder Directory</h2>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, organization, or expertise..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Roles</option>
          <option value="School Administrator">School Administrators</option>
          <option value="Education Policy Expert">Policy Experts</option>
          <option value="Teacher">Teachers</option>
        </select>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Locations</option>
          <option value="Kerala">Kerala</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Mizoram">Mizoram</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredStakeholders.map((stakeholder) => (
          <StakeholderCard
            key={stakeholder.id}
            stakeholder={stakeholder}
            onConnect={handleConnect}
          />
        ))}
      </div>
    </div>
  );
}
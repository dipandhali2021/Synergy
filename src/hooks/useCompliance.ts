import { useState, useEffect } from 'react';
import { ComplianceData } from '../types/compliance';
import { Building2, Users, BookOpen, Wifi } from 'lucide-react';

const initialCompliance: ComplianceData = {
  infrastructure: {
    title: 'Infrastructure Requirements',
    icon: Building2,
    colorClass: 'bg-blue-100 text-blue-600',
    items: [
      {
        id: 'inf1',
        title: 'Classroom Size Standards',
        description: 'Minimum 400 sq ft per classroom with proper ventilation',
        status: false,
        severity: 'high',
        recommendation: 'Plan renovation to expand classrooms',
      },
      {
        id: 'inf2',
        title: 'Laboratory Facilities',
        description: 'Separate labs for Physics, Chemistry, and Biology',
        status: false,
        severity: 'medium',
        recommendation: 'Convert unused spaces into laboratories',
      },
      // Add more items
    ],
  },
  staffing: {
    title: 'Staffing Requirements',
    icon: Users,
    colorClass: 'bg-green-100 text-green-600',
    items: [
      {
        id: 'staff1',
        title: 'Teacher Qualifications',
        description: 'All teachers must have required certifications',
        status: false,
        severity: 'high',
        recommendation: 'Organize training programs',
      },
      // Add more items
    ],
  },
  curriculum: {
    title: 'Curriculum Standards',
    icon: BookOpen,
    colorClass: 'bg-purple-100 text-purple-600',
    items: [
      {
        id: 'curr1',
        title: 'Subject Coverage',
        description: 'Implementation of standardized curriculum',
        status: false,
        severity: 'high',
        recommendation: 'Review and align current curriculum',
      },
      // Add more items
    ],
  },
  digital: {
    title: 'Digital Infrastructure',
    icon: Wifi,
    colorClass: 'bg-yellow-100 text-yellow-600',
    items: [
      {
        id: 'dig1',
        title: 'Internet Connectivity',
        description: 'Minimum 100 Mbps broadband connection',
        status: false,
        severity: 'medium',
        recommendation: 'Upgrade internet infrastructure',
      },
      // Add more items
    ],
  },
};

export function useCompliance() {
  const [compliance, setCompliance] = useState<ComplianceData>(initialCompliance);

  const updateCompliance = (categoryId: string, itemId: string, value: boolean) => {
    setCompliance(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        items: prev[categoryId].items.map(item =>
          item.id === itemId ? { ...item, status: value } : item
        ),
      },
    }));
  };

  const generateReport = () => {
    // Implementation for generating and downloading PDF report
    console.log('Generating report...');
  };

  return {
    compliance,
    updateCompliance,
    generateReport,
  };
}
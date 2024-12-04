import React from 'react';
import {
  ArrowLeft,
  FileSpreadsheet,
  FileText,
  BarChart2,
  Calculator,
} from 'lucide-react';

interface ToolsListProps {
  onBack: () => void;
}

const implementationTools = [
  {
    id: 'resource-calculator',
    title: 'Resource Planning Calculator',
    description:
      'Calculate required resources based on student population and grade structure',
    icon: Calculator,
    link: 'https://docs.google.com/spreadsheets/create',
    category: 'planning',
  },
  {
    id: 'transition-template',
    title: 'Transition Plan Template',
    description:
      'Customizable template for planning and tracking your standardization journey',
    icon: FileSpreadsheet,
    link: 'https://docs.google.com/spreadsheets/create',
    category: 'planning',
  },
  {
    id: 'compliance-checklist',
    title: 'Compliance Checklist',
    description:
      'Comprehensive checklist to ensure alignment with standardization requirements',
    icon: FileText,
    link: 'https://docs.google.com/document/create',
    category: 'compliance',
  },
  {
    id: 'progress-tracker',
    title: 'Progress Tracking Dashboard',
    description: 'Interactive dashboard to monitor implementation progress',
    icon: BarChart2,
    link: '/progress',
    category: 'monitoring',
  },
];

export function ToolsList() {
  return (
    <div className="space-y-6">
      <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
        <ArrowLeft className="h-4 w-4" />
        Back to Overview
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {implementationTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <a
              key={tool.id}
              href={tool.link}
              target={tool.link.startsWith('http') ? '_blank' : '_self'}
              rel={tool.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-800 mb-2">Note</h3>
        <p className="text-yellow-700 text-sm">
          Some tools will open in external applications (like Google
          Docs/Sheets) where you can make a copy for your use. Progress tracking
          tools are integrated within this platform.
        </p>
      </div>
    </div>
  );
}
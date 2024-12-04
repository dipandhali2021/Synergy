import React, { useState } from 'react';
import { Search, Filter, Upload } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

const mockResources = [
  {
    id: '1',
    title: 'Grade Reconfiguration Template',
    description: 'Comprehensive template for planning grade structure changes',
    type: 'excel',
    category: 'template',
    fileUrl: '/templates/grade-reconfig.xlsx',
    uploadedBy: 'Education Board',
    uploadDate: '2024-03-01',
    downloads: 245,
    views: 890,
    likes: 156,
    fileSize: '2.3 MB'
  },
  {
    id: '2',
    title: 'Infrastructure Planning Guide',
    description: 'Step-by-step guide for school infrastructure development',
    type: 'pdf',
    category: 'guide',
    fileUrl: '/guides/infrastructure.pdf',
    uploadedBy: 'Ministry of Education',
    uploadDate: '2024-03-15',
    downloads: 189,
    views: 567,
    likes: 98,
    fileSize: '4.1 MB'
  }
];

export function ResourceHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const handleDownload = (id: string) => {
    console.log('Downloading resource:', id);
  };

  const filteredResources = mockResources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
    const matchesType = typeFilter === 'all' || resource.type === typeFilter;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Resource Hub</h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          <Upload className="h-5 w-5" />
          Share Resource
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>
          <option value="template">Templates</option>
          <option value="guide">Guides</option>
          <option value="case-study">Case Studies</option>
          <option value="report">Reports</option>
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Types</option>
          <option value="pdf">PDF</option>
          <option value="excel">Excel</option>
          <option value="word">Word</option>
          <option value="presentation">Presentation</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
}
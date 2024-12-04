import React, { useState } from 'react';
import { FileText, Download, Filter, Calendar } from 'lucide-react';

const mockReports = [
  {
    id: '1',
    title: 'Monthly Progress Summary',
    description: 'Comprehensive overview of standardization progress across all regions',
    type: 'progress',
    format: 'PDF',
    generatedAt: '2024-03-15T10:00:00Z',
    size: '2.5 MB'
  },
  {
    id: '2',
    title: 'Resource Allocation Report',
    description: 'Detailed breakdown of resource distribution and utilization',
    type: 'resource',
    format: 'Excel',
    generatedAt: '2024-03-14T15:30:00Z',
    size: '1.8 MB'
  },
  {
    id: '3',
    title: 'Challenges Analysis',
    description: 'Analysis of common challenges and intervention effectiveness',
    type: 'analysis',
    format: 'PDF',
    generatedAt: '2024-03-13T09:15:00Z',
    size: '3.2 MB'
  }
];

export function ReportsDashboard() {
  const [reportType, setReportType] = useState('all');
  const [dateRange, setDateRange] = useState('week');

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Reports & Exports</h2>
          <p className="text-gray-600">Generate and download detailed reports</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Generate New Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Report Generator</h3>
          <div className="flex gap-4">
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="progress">Progress Reports</option>
              <option value="resource">Resource Reports</option>
              <option value="analysis">Analysis Reports</option>
            </select>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-indigo-600" />
              <h4 className="font-medium">Progress Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Generate comprehensive progress reports with customizable metrics
            </p>
            <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Generate
            </button>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-green-600" />
              <h4 className="font-medium">Resource Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Track resource allocation and utilization across schools
            </p>
            <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Generate
            </button>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-purple-600" />
              <h4 className="font-medium">Analysis Report</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              In-depth analysis of challenges and interventions
            </p>
            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Generate
            </button>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>
          <div className="space-y-4">
            {mockReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{report.title}</h4>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span>{new Date(report.generatedAt).toLocaleDateString()}</span>
                    <span>{report.format}</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                  <Download className="h-5 w-5" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
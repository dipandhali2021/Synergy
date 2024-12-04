import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Globe, Users, MessageSquare, AlertTriangle } from 'lucide-react';

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];

const allocationData = [
  { category: 'Infrastructure', allocated: 4500000, utilized: 3800000 },
  { category: 'Technology', allocated: 2800000, utilized: 2200000 },
  { category: 'Teaching Staff', allocated: 3200000, utilized: 3000000 },
  { category: 'Learning Materials', allocated: 1500000, utilized: 1200000 },
];

const distributionData = [
  { name: 'Urban Schools', value: 45 },
  { name: 'Rural Schools', value: 35 },
  { name: 'Remote Areas', value: 20 },
];

interface CommunityFeedback {
  id: string;
  schoolName: string;
  type: 'improvement' | 'concern';
  message: string;
  date: string;
  status: 'pending' | 'addressed' | 'investigating';
}

const mockFeedback: CommunityFeedback[] = [
  {
    id: '1',
    schoolName: 'City Public School',
    type: 'improvement',
    message: 'New computer lab has significantly improved digital literacy',
    date: '2024-03-15',
    status: 'addressed',
  },
  {
    id: '2',
    schoolName: 'Rural High School',
    type: 'concern',
    message: 'Delay in receiving promised sports equipment',
    date: '2024-03-14',
    status: 'investigating',
  },
];

export function PublicResourceDashboard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Public Resource Dashboard</h2>
          <p className="text-gray-600 mt-1">
            Transparency in resource allocation and utilization
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-indigo-600" />
          <span className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">
            Resource Allocation vs Utilization
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={allocationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="allocated" name="Allocated" fill="#4f46e5" />
                <Bar dataKey="utilized" name="Utilized" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Distribution by Region</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Community Feedback</h3>
          <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
            <MessageSquare className="h-5 w-5" />
            Submit Feedback
          </button>
        </div>

        <div className="space-y-4">
          {mockFeedback.map((feedback) => (
            <div key={feedback.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{feedback.schoolName}</h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        feedback.type === 'improvement'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {feedback.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{feedback.message}</p>
                  <div className="text-sm text-gray-500">
                    Submitted: {new Date(feedback.date).toLocaleDateString()}
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    feedback.status === 'addressed'
                      ? 'bg-green-100 text-green-800'
                      : feedback.status === 'investigating'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {feedback.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

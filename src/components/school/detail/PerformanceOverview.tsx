import React from 'react';
import { School } from '../../../types/school';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface PerformanceOverviewProps {
  school: School;
}

export function PerformanceOverview({ school }: PerformanceOverviewProps) {
  const performanceData = [
    { metric: 'Academic Achievement', value: 85 },
    { metric: 'Teacher-Student Ratio', value: 75 },
    { metric: 'Infrastructure', value: 90 },
    { metric: 'Resource Availability', value: 70 },
    { metric: 'Special Education', value: 65 },
  ];

  const trendData = [
    { month: 'Jan', performance: 82, attendance: 88 },
    { month: 'Feb', performance: 84, attendance: 85 },
    { month: 'Mar', performance: 86, attendance: 87 },
    { month: 'Apr', performance: 83, attendance: 89 },
    { month: 'May', performance: 88, attendance: 86 },
    { month: 'Jun', performance: 85, attendance: 88 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Performance Radar Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={performanceData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar
                name="Performance"
                dataKey="value"
                stroke="#4f46e5"
                fill="#4f46e5"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Trend */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#4f46e5"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#06b6d4"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
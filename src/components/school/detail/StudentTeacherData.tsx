import React from 'react';
import { School } from '../../../types/school';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Users, GraduationCap } from 'lucide-react';

interface StudentTeacherDataProps {
  school: School;
}

export function StudentTeacherData({ school }: StudentTeacherDataProps) {
  const studentDemographics = [
    { name: 'General', value: 60 },
    { name: 'SC', value: 15 },
    { name: 'ST', value: 10 },
    { name: 'OBC', value: 15 },
  ];

  const teacherQualifications = [
    { qualification: 'Ph.D', count: 2 },
    { qualification: 'Post Graduate', count: 15 },
    { qualification: 'Graduate', count: 20 },
    { qualification: 'Other', count: 3 },
  ];

  const COLORS = ['#4f46e5', '#06b6d4', '#8b5cf6', '#f59e0b'];

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Students</div>
              <div className="text-2xl font-bold">{school.studentCount}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-700 mb-2">Gender Ratio</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: '45%' }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Male: 45%</span>
              <span>Female: 55%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Teachers</div>
              <div className="text-2xl font-bold">{school.teacherCount}</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-medium text-gray-700 mb-2">
              Student-Teacher Ratio
            </div>
            <div className="text-3xl font-bold text-indigo-600">
              {Math.round(school.studentCount / school.teacherCount)}:1
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Demographics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Student Demographics</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={studentDemographics}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {studentDemographics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Teacher Qualifications */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Teacher Qualifications</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={teacherQualifications}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="qualification" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
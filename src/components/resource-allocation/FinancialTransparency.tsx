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
import { DollarSign, TrendingUp, AlertTriangle, FileText } from 'lucide-react';

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];

const allocationData = [
  { category: 'Infrastructure', allocated: 4500000, utilized: 3800000 },
  { category: 'Technology', allocated: 2800000, utilized: 2200000 },
  { category: 'Teaching Staff', allocated: 3200000, utilized: 3000000 },
  { category: 'Learning Materials', allocated: 1500000, utilized: 1200000 },
];

const fundingSourceData = [
  { name: 'Government Funds', value: 45 },
  { name: 'CSR Initiatives', value: 25 },
  { name: 'NGO Support', value: 20 },
  { name: 'Other Sources', value: 10 },
];

export function FinancialTransparency() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Financial Transparency</h2>
          <p className="text-gray-600 mt-1">
            Track resource allocation and utilization
          </p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium">Total Budget</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">₹12M</p>
          <p className="text-sm text-gray-600 mt-1">FY 2024-25</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium">Utilization Rate</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600">85%</p>
          <p className="text-sm text-gray-600 mt-1">Current fiscal year</p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="font-medium">Cost Savings</h3>
          </div>
          <p className="text-2xl font-bold text-yellow-600">₹1.5M</p>
          <p className="text-sm text-gray-600 mt-1">Through optimizations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">
            Budget Allocation vs Utilization
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={allocationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="allocated"
                  name="Allocated Budget"
                  fill="#4f46e5"
                />
                <Bar dataKey="utilized" name="Utilized Amount" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Funding Sources</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fundingSourceData}
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
                  {fundingSourceData.map((entry, index) => (
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
    </div>
  );
}

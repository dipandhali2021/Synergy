import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Users, GraduationCap, DollarSign } from 'lucide-react';

interface SimulationParams {
  resourceAmount: number;
  timeframe: number;
  resourceType: string;
}

interface SimulationResult {
  enrollmentImpact: number;
  academicImpact: number;
  costEfficiency: number;
  timeline: Array<{
    month: string;
    enrollment: number;
    performance: number;
    utilization: number;
  }>;
}

export function ResourceImpactSimulator() {
  const [params, setParams] = useState<SimulationParams>({
    resourceAmount: 1000000,
    timeframe: 12,
    resourceType: 'infrastructure',
  });

  const [results, setResults] = useState<SimulationResult>({
    enrollmentImpact: 15,
    academicImpact: 12,
    costEfficiency: 85,
    timeline: [
      { month: 'Jan', enrollment: 100, performance: 70, utilization: 60 },
      { month: 'Feb', enrollment: 105, performance: 72, utilization: 65 },
      { month: 'Mar', enrollment: 110, performance: 75, utilization: 70 },
      { month: 'Apr', enrollment: 115, performance: 78, utilization: 75 },
      { month: 'May', enrollment: 120, performance: 80, utilization: 80 },
      { month: 'Jun', enrollment: 125, performance: 82, utilization: 85 },
    ],
  });

  const handleSimulate = () => {
    // In a real implementation, this would call an API to run the simulation
    console.log('Running simulation with params:', params);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Resource Impact Simulator</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resource Amount (₹)
          </label>
          <input
            type="number"
            value={params.resourceAmount}
            onChange={(e) =>
              setParams({ ...params, resourceAmount: Number(e.target.value) })
            }
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timeframe (months)
          </label>
          <input
            type="number"
            value={params.timeframe}
            onChange={(e) =>
              setParams({ ...params, timeframe: Number(e.target.value) })
            }
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resource Type
          </label>
          <select
            value={params.resourceType}
            onChange={(e) =>
              setParams({ ...params, resourceType: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="infrastructure">Infrastructure</option>
            <option value="teaching">Teaching Staff</option>
            <option value="technology">Technology</option>
            <option value="learning">Learning Materials</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSimulate}
        className="w-full mb-8 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Run Simulation
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-green-600" />
            <h3 className="font-medium">Enrollment Impact</h3>
          </div>
          <p className="text-2xl font-bold text-green-600">
            +{results.enrollmentImpact}%
          </p>
          <p className="text-sm text-gray-600 mt-1">Projected increase</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium">Academic Impact</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600">
            +{results.academicImpact}%
          </p>
          <p className="text-sm text-gray-600 mt-1">Performance improvement</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-5 w-5 text-purple-600" />
            <h3 className="font-medium">Cost Efficiency</h3>
          </div>
          <p className="text-2xl font-bold text-purple-600">
            {results.costEfficiency}%
          </p>
          <p className="text-sm text-gray-600 mt-1">Resource utilization</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4">Projected Impact Timeline</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={results.timeline}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="enrollment"
                name="Enrollment"
                stroke="#10b981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="performance"
                name="Academic Performance"
                stroke="#3b82f6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="utilization"
                name="Resource Utilization"
                stroke="#8b5cf6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

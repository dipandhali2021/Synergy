import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function TrendsAnalysis() {
  const data = [
    { month: 'Jan', completed: 150, inProgress: 300 },
    { month: 'Feb', completed: 200, inProgress: 280 },
    { month: 'Mar', completed: 280, inProgress: 250 },
    { month: 'Apr', completed: 350, inProgress: 220 },
    { month: 'May', completed: 400, inProgress: 200 },
    { month: 'Jun', completed: 500, inProgress: 180 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Transition Trends</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="completed" 
              name="Completed" 
              stroke="#4f46e5" 
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="inProgress" 
              name="In Progress" 
              stroke="#f59e0b" 
              strokeWidth={2} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
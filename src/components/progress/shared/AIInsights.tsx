import React from 'react';
import { Brain, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      type: 'success',
      message: 'Kerala shows 15% higher transition rate than average',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50'
    },
    {
      type: 'warning',
      message: 'Resource shortages detected in North-East region',
      icon: AlertTriangle,
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      type: 'recommendation',
      message: 'Consider implementing successful West Bengal model in similar regions',
      icon: CheckCircle,
      color: 'text-blue-600 bg-blue-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">AI-Generated Insights</h2>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
          >
            <div className={`p-2 rounded-lg ${insight.color}`}>
              <insight.icon className="h-4 w-4" />
            </div>
            <p className="text-gray-700">{insight.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
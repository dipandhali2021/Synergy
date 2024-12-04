import React from 'react';
import { School, TrendingUp, Clock, AlertTriangle } from 'lucide-react';

export function KeyMetrics() {
  const metrics = [
    {
      label: 'Schools Transitioned',
      value: '68%',
      trend: '+5.2%',
      icon: School,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      label: 'Transition Rate',
      value: '250/month',
      trend: '+2.8%',
      icon: TrendingUp,
      color: 'text-green-600 bg-green-50'
    },
    {
      label: 'Avg. Time',
      value: '4.5 months',
      trend: '-0.5 months',
      icon: Clock,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      label: 'Critical Cases',
      value: '156',
      trend: '-12',
      icon: AlertTriangle,
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map(({ label, value, trend, icon: Icon, color }) => (
        <div key={label} className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-gray-700">{label}</h3>
          </div>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-sm mt-1 ${
            trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend} from last month
          </p>
        </div>
      ))}
    </div>
  );
}
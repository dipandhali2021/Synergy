import React from 'react';
import { 
  MessageSquare, 
  ClipboardList, 
  Calendar, 
  FileText,
  TrendingUp,
  Users,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function EngagementDashboard() {
  const quickActions = [
    {
      title: 'Start a Discussion',
      description: 'Share your experiences or ask questions',
      icon: MessageSquare,
      link: '#discussions',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Take Active Surveys',
      description: 'Participate in ongoing surveys',
      icon: ClipboardList,
      link: '#surveys',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Upcoming Events',
      description: 'View and register for events',
      icon: Calendar,
      link: '#events',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Share Resources',
      description: 'Contribute to the resource library',
      icon: FileText,
      link: '#resources',
      color: 'bg-yellow-50 text-yellow-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-6">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.link}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${action.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <Link 
            to="#activity" 
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          <ActivityItem
            icon={MessageSquare}
            color="text-blue-600 bg-blue-50"
            title="New Discussion"
            description="Infrastructure Planning Best Practices"
            time="2 hours ago"
          />
          <ActivityItem
            icon={Users}
            color="text-green-600 bg-green-50"
            title="New Connection"
            description="Connected with Government High School, Kerala"
            time="4 hours ago"
          />
          <ActivityItem
            icon={TrendingUp}
            color="text-purple-600 bg-purple-50"
            title="Progress Update"
            description="Completed 75% of standardization goals"
            time="1 day ago"
          />
        </div>
      </div>

      {/* Engagement Stats */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard
          title="Active Discussions"
          value="28"
          trend="+12%"
          description="from last month"
        />
        <StatCard
          title="Survey Responses"
          value="156"
          trend="+8%"
          description="this week"
        />
        <StatCard
          title="Resource Downloads"
          value="432"
          trend="+15%"
          description="this month"
        />
      </div>
    </div>
  );
}

function ActivityItem({ 
  icon: Icon, 
  color, 
  title, 
  description, 
  time 
}: { 
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
}

function StatCard({ 
  title, 
  value, 
  trend, 
  description 
}: {
  title: string;
  value: string;
  trend: string;
  description: string;
}) {
  const isPositive = trend.startsWith('+');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend}
        </span>
      </div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
  );
}
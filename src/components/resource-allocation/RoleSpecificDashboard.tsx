import React from 'react';
import {
  User,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function RoleSpecificDashboard() {
  const { user } = useAuth();

  const renderSchoolAdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Resource Status</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Pending Requests</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                5
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Approved Resources</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                12
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Resource Utilization</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Infrastructure</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Teaching Resources</span>
                <span>88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: '88%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <Settings className="h-5 w-5 text-gray-500" />
              Submit New Request
            </button>
            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-gray-500" />
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRegionalManagerDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Regional Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Schools</span>
              <span className="font-semibold">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Resource Requests</span>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Critical Cases</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">
                7
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Resource Distribution</h3>
          <div className="space-y-4">
            {[
              'Infrastructure',
              'Teaching Staff',
              'Technology',
              'Learning Materials',
            ].map((category) => (
              <div key={category} className="flex items-center justify-between">
                <span>{category}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{
                        width: `${Math.floor(Math.random() * 40) + 60}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderNationalAdminDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">National Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Regions</span>
              <span className="font-semibold">28</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Schools</span>
              <span className="font-semibold">145,012</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Resource Budget Utilized</span>
              <span className="font-semibold">₹2.5B</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Critical Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-medium">Resource Shortage</p>
                <p className="text-gray-600">Critical shortage in 3 regions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <p className="font-medium">Distribution Target</p>
                <p className="text-gray-600">
                  Monthly target achieved in 18 regions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Policy Compliance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Resource Distribution</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: '92%' }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Equity Measures</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardByRole = () => {
    switch (user?.role) {
      case 'SCHOOL_ADMIN':
        return renderSchoolAdminDashboard();
      case 'POLICY_MAKER':
        return renderRegionalManagerDashboard();
      case 'SUPER_ADMIN':
        return renderNationalAdminDashboard();
      default:
        // return <div>Access Denied</div>;
        return renderSchoolAdminDashboard();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <User className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl font-semibold">
          {user?.role ? user.role.replace('_', ' ') : 'User'} Dashboard
        </h2>
      </div>
      {renderDashboardByRole()}
    </div>
  );
}

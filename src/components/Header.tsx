import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { School, LogOut, User as UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-white'
      : 'text-indigo-200 hover:text-white';
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <School className="h-8 w-8" />
          <h1 className="text-2xl font-bold">School Structure Analysis</h1>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <Link to="/schools" className={isActive('/schools')}>
              Schools
            </Link>
            <Link to="/analysis" className={isActive('/analysis')}>
              Analysis
            </Link>
            <Link
              to="/standardization"
              className={isActive('/standardization')}
            >
              Standardization
            </Link>
            <Link to="/resources" className={isActive('/resources')}>
              Resources
            </Link>
            <Link to="/progress" className={isActive('/progress')}>
              Progress
            </Link>
            <Link
              to="/resources/allocation"
              // className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {/* <Package className="h-5 w-5" /> */}
              Resource Allocation
            </Link>

            <Link to="/engagement" className={isActive('/engagement')}>
              Engagement
            </Link>
          </nav>

          <div className="border-l border-indigo-500 pl-6 flex items-center gap-4">
            {user ? (
              <>
              <Link to="/profile" className="text-indigo-200 hover:text-white">
                <div className="flex items-center gap-2" >
                  <UserIcon className="h-5 w-5" />
                  <span className="text-sm">{user.name}</span>
                  <span className="text-xs bg-indigo-700 px-2 py-1 rounded">
                    {user.role.replace('_', ' ')}
                  </span>
                </div>
              </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-indigo-200 hover:text-white"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm">Logout</span>
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  to="/login"
                  className="text-indigo-200 hover:text-white text-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm hover:bg-indigo-50"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/auth/LoginForm';
import { LoginCredentials } from '../types/auth';
import { School } from 'lucide-react';
import { mockAuth } from '../services/mockAuth';
import { useAuth } from '../contexts/AuthContext';

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (data: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);
      const { token } = await mockAuth.login(data);
      login(token);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <School className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link
            to="/register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            create a new account
          </Link>
        </p>
        
        <div className="mt-4 text-center">
          <details className="text-sm text-gray-600">
            <summary className="cursor-pointer hover:text-indigo-600">
              View sample login credentials
            </summary>
            <div className="mt-2 text-left bg-white p-4 rounded-md shadow-sm">
              <p className="font-medium mb-2">All accounts use password: password123</p>
              <ul className="space-y-1">
                <li>Normal User: normal@example.com</li>
                <li>School Admin: school@example.com</li>
                <li>Super Admin: super@example.com</li>
                <li>Policy Maker: policy@example.com</li>
                <li>Support Staff: support@example.com</li>
                <li>Auditor: auditor@example.com</li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
}
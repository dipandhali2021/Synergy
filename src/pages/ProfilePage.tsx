import React from 'react';
import { ProfileForm } from '../components/profile/ProfileForm';
import { PasswordChangeForm } from '../components/profile/PasswordChangeForm';
import { User, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
        <p className="mt-2 text-gray-600">
          Manage your account settings and change your password
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Information */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Profile Information
              </h2>
            </div>
          </div>
          <div className="px-6 py-4">
            <ProfileForm />
          </div>
        </div>

        {/* Password Change */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-900">
                Change Password
              </h2>
            </div>
          </div>
          <div className="px-6 py-4">
            <PasswordChangeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
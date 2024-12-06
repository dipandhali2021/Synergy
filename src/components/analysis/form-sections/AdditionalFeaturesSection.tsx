import React from 'react';
import { useFormContext } from 'react-hook-form';

export function AdditionalFeaturesSection() {
  const { register } = useFormContext();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Additional Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('boysWashrooms')}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>Boys Washrooms</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('girlsWashrooms')}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>Girls Washrooms</span>
        </label>
      </div>
    </div>
  );
}
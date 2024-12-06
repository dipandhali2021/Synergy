import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Heart } from 'lucide-react';

export function SpecialNeedsSection() {
  const { register } = useFormContext();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Special Needs and Inclusive Education</h3>
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('stipendsCWSNGirls')}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>Provision of Stipends for CWSN Girls</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('kgbvUpgraded')}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>KGBV Upgraded</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register('anganwadiIntegration')}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>Integration with Anganwadi Centers</span>
        </label>
      </div>
    </div>
  );
}
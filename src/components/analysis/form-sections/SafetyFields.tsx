import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Shield, Droplets, Sun, AlertTriangle } from 'lucide-react';
import { FormField } from '../FormField';

export function SafetyFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Safety Standards</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('earthquakeCompliant')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Earthquake Safety Compliant</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('fireCompliant')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Fire Safety Compliant</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('emergencyExits')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Emergency Exits Available</span>
          </label>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Sustainability Features</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('rainwaterHarvesting')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>Rainwater Harvesting System</span>
            </div>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('solarPower')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-yellow-500" />
              <span>Solar Power System</span>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Distance from Nearest Habitation (km)"
          icon={Shield}
          error={errors?.distanceFromHabitation?.message as string}
        >
          <input
            type="number"
            step="0.1"
            {...register('distanceFromHabitation', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Emergency Response Time (minutes)"
          icon={AlertTriangle}
          error={errors?.emergencyResponseTime?.message as string}
        >
          <input
            type="number"
            {...register('emergencyResponseTime', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>
    </div>
  );
}
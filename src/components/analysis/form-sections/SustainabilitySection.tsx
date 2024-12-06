import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Droplets, Sun, Shield, MapPin, Heart } from 'lucide-react';
import { FormField } from '../FormField';

export function SustainabilitySection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Eco-Friendly Features</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('rainwaterHarvesting')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>Rainwater Harvesting</span>
            </div>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('solarEnergy')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-yellow-500" />
              <span>Solar Energy</span>
            </div>
          </label>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Safety Standards</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('earthquakeCompliance')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-red-500" />
              <span>Earthquake Safety Compliance</span>
            </div>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('fireCompliance')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-500" />
              <span>Fire Safety Compliance</span>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Distance from Habitation (km)"
          icon={MapPin}
          error={errors?.distanceFromHabitation?.message as string}
        >
          <input
            type="number"
            step="0.1"
            {...register('distanceFromHabitation', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('barrierFreeAccess')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-pink-500" />
              <span>Barrier-Free Access (Ramps)</span>
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('transportationForRemoteAreas')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Transportation for Remote Areas</span>
          </label>
        </div>

        <FormField
          label="Community Participation Score"
          icon={Shield}
          error={errors?.communityParticipationScore?.message as string}
        >
          <input
            type="number"
            min="0"
            max="100"
            {...register('communityParticipationScore', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Score out of 100"
          />
        </FormField>
      </div>
    </div>
  );
}
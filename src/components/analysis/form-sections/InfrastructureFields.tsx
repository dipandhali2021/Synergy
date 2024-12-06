import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Building2 } from 'lucide-react';
import { FormField } from '../FormField';

export function InfrastructureFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <FormField
        label="Building Status"
        icon={Building2}
        error={errors?.buildingStatus?.message as string}
      >
        <select
          {...register('buildingStatus')}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Building Status</option>
          <option value="1-Private">Private</option>
          <option value="2-Rented">Rented</option>
          <option value="3-Government">Government</option>
          <option value="4-Government school in a rent free building">
            Government school in a rent free building
          </option>
        </select>
      </FormField>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('hasBoundaryWall')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Boundary Wall Available?</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('hasRamps')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Availability of Ramps?</span>
          </label>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('hasPlayground')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Playground Available?</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('hasDrinkingWater')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Drinking Water Functional?</span>
          </label>
        </div>
      </div>
    </div>
  );
}

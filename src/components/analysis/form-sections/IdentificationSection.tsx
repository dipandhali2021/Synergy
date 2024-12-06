import React from 'react';
import { useFormContext } from 'react-hook-form';
import { MapPin, Hash, Building2 } from 'lucide-react';
import { FormField } from '../FormField';
import { states } from '../../../data/states';

export function IdentificationSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="School ID"
          icon={Hash}
          error={errors?.schoolId?.message as string}
        >
          <input
            {...register('schoolId')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter school ID"
          />
        </FormField>

        <FormField
          label="School Name"
          icon={Building2}
          error={errors?.schoolName?.message as string}
        >
          <input
            {...register('schoolName')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter school name"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FormField
          label="State"
          icon={MapPin}
          error={errors?.state?.message as string}
        >
          <select
            {...register('state')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.code} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="District"
          icon={MapPin}
          error={errors?.district?.message as string}
        >
          <input
            {...register('district')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter district"
          />
        </FormField>

        <FormField
          label="Block"
          icon={MapPin}
          error={errors?.block?.message as string}
        >
          <input
            {...register('block')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter block"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          label="Rural/Urban"
          icon={MapPin}
          error={errors?.ruralUrban?.message as string}
        >
          <select
            {...register('ruralUrban')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select area type</option>
            <option value="rural">Rural</option>
            <option value="urban">Urban</option>
          </select>
        </FormField>

        <FormField
          label="Cluster"
          icon={MapPin}
          error={errors?.cluster?.message as string}
        >
          <input
            {...register('cluster')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter cluster"
          />
        </FormField>

        <FormField
          label="Village/City"
          icon={MapPin}
          error={errors?.villageCity?.message as string}
        >
          <input
            {...register('villageCity')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter village/city"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Pincode"
          icon={MapPin}
          error={errors?.pincode?.message as string}
        >
          <input
            {...register('pincode')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter pincode"
            maxLength={6}
          />
        </FormField>
      </div>
    </div>
  );
}
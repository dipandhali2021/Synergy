import React from 'react';
import { useFormContext } from 'react-hook-form';
import { School, MapPin, Hash } from 'lucide-react';
import { FormField } from '../FormField';
import { states } from '../../../data/states';

export function BasicInfoFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="UDISE Code"
          icon={Hash}
          error={errors?.udiseCode?.message as string}
        >
          <input
            {...register('udiseCode')}
            placeholder="e.g., 19110908502"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="School Name"
          icon={School}
          error={errors?.schoolName?.message as string}
        >
          <input
            {...register('schoolName')}
            placeholder="e.g., Jabalpur Public School"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
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
            placeholder="e.g., Jabalpur"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Block"
          icon={MapPin}
          error={errors?.block?.message as string}
        >
          <input
            {...register('block')}
            placeholder="e.g., Mohali"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FormField
          label="Rural/Urban"
          icon={MapPin}
          error={errors?.ruralUrban?.message as string}
        >
          <select
            {...register('ruralUrban')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Area Type</option>
            <option value="1-Rural">Rural</option>
            <option value="2-Urban">Urban</option>
          </select>
        </FormField>

        <FormField
          label="Cluster"
          icon={MapPin}
          error={errors?.cluster?.message as string}
        >
          <input
            {...register('cluster')}
            placeholder="e.g., Jalebi"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Village"
          icon={MapPin}
          error={errors?.village?.message as string}
        >
          <input
            {...register('village')}
            placeholder="e.g., Samosa"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Pincode"
          icon={MapPin}
          error={errors?.pincode?.message as string}
        >
          <input
            {...register('pincode')}
            placeholder="e.g., 400111"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>
    </div>
  );
}

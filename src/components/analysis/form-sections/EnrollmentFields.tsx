import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Users } from 'lucide-react';
import { FormField } from '../FormField';

export function EnrollmentFields() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="OBC Category Total"
          icon={Users}
          error={errors?.obcCategoryTotal?.message as string}
        >
          <input
            type="number"
            {...register('obcCategoryTotal', { valueAsNumber: true })}
            placeholder="e.g., 6"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>
    </div>
  );
}
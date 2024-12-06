import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Building2, BookOpen, Users } from 'lucide-react';
import { FormField } from '../FormField';

export function SchoolCharacteristicsSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="School Category"
          icon={Building2}
          error={errors?.schoolCategory?.message as string}
        >
          <select
            {...register('schoolCategory')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select category</option>
            <option value="government">Government</option>
            <option value="private">Private</option>
          </select>
        </FormField>

        <FormField
          label="School Management"
          icon={Building2}
          error={errors?.schoolManagement?.message as string}
        >
          <select
            {...register('schoolManagement')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select management type</option>
            <option value="private">Private</option>
            <option value="government">Government</option>
          </select>
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Medium of Instruction"
          icon={BookOpen}
          error={errors?.mediumOfInstruction?.message as string}
        >
          <input
            {...register('mediumOfInstruction')}
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter medium of instruction"
          />
        </FormField>

        <FormField
          label="School Type"
          icon={Building2}
          error={errors?.schoolType?.message as string}
        >
          <select
            {...register('schoolType')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select school type</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="higher_secondary">Higher Secondary</option>
          </select>
        </FormField>
      </div>
    </div>
  );
}
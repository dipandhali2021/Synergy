import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Users, GraduationCap } from 'lucide-react';
import { FormField } from '../FormField';

export function TeacherFields() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormField
          label="Total Teachers"
          icon={Users}
          error={errors?.totalTeachers?.message as string}
        >
          <input
            type="number"
            {...register('totalTeachers', { valueAsNumber: true })}
            placeholder="e.g., 17"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Male Teachers"
          icon={Users}
          error={errors?.maleTeachers?.message as string}
        >
          <input
            type="number"
            {...register('maleTeachers', { valueAsNumber: true })}
            placeholder="e.g., 9"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Female Teachers"
          icon={Users}
          error={errors?.femaleTeachers?.message as string}
        >
          <input
            type="number"
            {...register('femaleTeachers', { valueAsNumber: true })}
            placeholder="e.g., 8"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Academic Qualification"
          icon={GraduationCap}
          error={errors?.academicQualification?.message as string}
        >
          <select
            {...register('academicQualification')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Qualification</option>
            <option value="Below Graduate">Below Graduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
          </select>
        </FormField>

        <FormField
          label="Professional Qualification"
          icon={GraduationCap}
          error={errors?.professionalQualification?.message as string}
        >
          <select
            {...register('professionalQualification')}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Qualification</option>
            <option value="Diploma">Diploma</option>
            <option value="B.Ed.">B.Ed.</option>
            <option value="M.Ed.">M.Ed.</option>
          </select>
        </FormField>
      </div>
    </div>
  );
}
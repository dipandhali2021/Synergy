import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Building2, Users, BookOpen } from 'lucide-react';
import { FormField } from '../FormField';

export function InfrastructureSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Total Classrooms"
          icon={Building2}
          error={errors?.totalClassrooms?.message as string}
        >
          <input
            type="number"
            {...register('totalClassrooms', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Total Students"
          icon={Users}
          error={errors?.totalStudents?.message as string}
        >
          <input
            type="number"
            {...register('totalStudents', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Lowest Class"
          icon={BookOpen}
          error={errors?.lowestClass?.message as string}
        >
          <input
            type="number"
            {...register('lowestClass', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>

        <FormField
          label="Highest Class"
          icon={BookOpen}
          error={errors?.highestClass?.message as string}
        >
          <input
            type="number"
            {...register('highestClass', { valueAsNumber: true })}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('separateRoomForHM')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Separate Room for HM</span>
          </label>

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

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('boundaryWall')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Boundary Wall</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('libraryAvailable')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Library Available</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('drinkingWaterAvailable')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Drinking Water Available</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('playgroundAvailable')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Playground Available</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('electricityAvailability')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Electricity Availability</span>
          </label>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('kitchensForMidDayMeal')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Kitchens for Mid-Day Meal</span>
          </label>
        </div>
      </div>
    </div>
  );
}
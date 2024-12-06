import React from 'react';
import { useFormContext } from 'react-hook-form';
import { BookOpen, DollarSign } from 'lucide-react';
import { FormField } from '../FormField';

export function EducationalSupportSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Educational Support</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('qualifiedTeachersRTE')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Qualified Teachers (RTE Act)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('ictIntegration')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>ICT Integration (Computer Labs)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('vocationalTraining')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Vocational Training Availability</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('activeSMC')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Active School Management Committee (SMC)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('annualMaintenance')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Annual Maintenance (School Grants)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('schoolMapping')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>School Mapping (Geographic/Community Planning)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('studentTracking')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Student Tracking (SDMIS)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('freeCompulsoryEducation')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Free and Compulsory Education</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('nonDiscrimination')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Non-Discrimination</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('noPunitivePractices')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>No Punitive Practices</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('timelyFundUtilization')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Timely Fund Utilization</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('fundsAuditedAnnually')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Funds Audited Annually</span>
          </label>

          <FormField
            label="Resource Utilization Efficiency (%)"
            icon={DollarSign}
            error={errors?.resourceUtilizationEfficiency?.message as string}
          >
            <input
              type="number"
              {...register('resourceUtilizationEfficiency', { valueAsNumber: true })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              min="0"
              max="100"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}
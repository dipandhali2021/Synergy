import React from 'react';
import { useFormContext } from 'react-hook-form';
import { BookOpen, Shield } from 'lucide-react';

export function CurriculumGovernanceSection() {
  const { register } = useFormContext();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Curriculum and Governance Challenges</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('lackCurriculumStandards')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Lack of Adherence to Curriculum Standards</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('inadequateFacilities')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Inadequate Facilities</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('safetyConcerns')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Safety Concerns</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('limitedCWSNSupport')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Limited Support for CWSN</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('minimalCommunityEngagement')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Minimal Community Engagement</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('noAnganwadiColocation')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Absence of Co-location with Anganwadi Centers</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('neglectChildProtection')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Neglect of Child Protection Policies</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('inadequateCurriculum')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Inadequate Curriculum Implementation</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('unqualifiedTeachers')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Unqualified or Undertrained Teachers</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('unsupportiveLearning')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Unsupportive Learning Environment</span>
          </label>
        </div>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('weakGovernance')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Weak Governance and Management</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('weakMonitoring')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Weak Monitoring and Evaluation Practices</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('fragmentedManagement')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Fragmented Management Structure</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('poorInfrastructure')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Poor Infrastructure</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('inadequateSupport')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Inadequate Support Systems</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('financialMismanagement')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Financial Mismanagement</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('negativeOutcomes')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Negative Educational Outcomes</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('lackResearch')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Lack of Research Engagement</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('poorLearningOutcomes')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Poor Student Learning Outcomes</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('inadequateDataManagement')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span>Inadequate Data Management and Reporting</span>
          </label>
        </div>
      </div>
    </div>
  );
}
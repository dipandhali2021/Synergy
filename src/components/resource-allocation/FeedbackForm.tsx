import React from 'react';
import { useForm } from 'react-hook-form';
import { ResourceFeedback } from '../../types/resourceAllocation';
import { Star, Send } from 'lucide-react';

interface FeedbackFormProps {
  resourcePlanId: string;
  onSubmit: (feedback: Omit<ResourceFeedback, 'id' | 'submittedAt'>) => void;
}

export function FeedbackForm({ resourcePlanId, onSubmit }: FeedbackFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<ResourceFeedback, 'id' | 'submittedAt'>>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="text-lg font-semibold mb-4">Resource Feedback</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resource Quality
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className="cursor-pointer">
                <input
                  type="radio"
                  {...register('quality', {
                    required: 'Please rate the quality',
                  })}
                  value={rating}
                  className="sr-only"
                />
                <Star
                  className={`h-8 w-8 ${
                    rating <= (register('quality').value || 0)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              </label>
            ))}
          </div>
          {errors.quality && (
            <p className="mt-1 text-sm text-red-600">
              {errors.quality.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...register('timelyDelivery')}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Resources were delivered on time
            </span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Suggestions for Improvement
          </label>
          <textarea
            {...register('suggestions', {
              required: 'Please provide your suggestions',
            })}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Share your thoughts on how we can improve..."
          />
          {errors.suggestions && (
            <p className="mt-1 text-sm text-red-600">
              {errors.suggestions.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <Send className="h-4 w-4" />
          Submit Feedback
        </button>
      </div>
    </form>
  );
}

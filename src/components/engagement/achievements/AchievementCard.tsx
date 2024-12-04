import React from 'react';
import { Award, Calendar, Share2 } from 'lucide-react';

interface AchievementCardProps {
  achievement: {
    id: string;
    title: string;
    description: string;
    earnedDate: string;
    points: number;
    category: string;
    icon: string;
  };
  onShare: (id: string) => void;
}

export function AchievementCard({ achievement, onShare }: AchievementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-yellow-50 rounded-lg">
          <Award className="h-6 w-6 text-yellow-600" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{achievement.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
              {achievement.points} points
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="h-4 w-4" />
              <span>Earned on {new Date(achievement.earnedDate).toLocaleDateString()}</span>
            </div>
            <button
              onClick={() => onShare(achievement.id)}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
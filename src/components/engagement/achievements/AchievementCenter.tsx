import React, { useState } from 'react';
import { Search, Filter, Trophy } from 'lucide-react';
import { AchievementCard } from './AchievementCard';

const mockAchievements = [
  {
    id: '1',
    title: 'Infrastructure Pioneer',
    description: 'Successfully completed infrastructure standardization phase',
    earnedDate: '2024-03-15',
    points: 500,
    category: 'infrastructure',
    icon: 'building'
  },
  {
    id: '2',
    title: 'Community Leader',
    description: 'Actively participated in 10 community discussions',
    earnedDate: '2024-03-10',
    points: 250,
    category: 'engagement',
    icon: 'users'
  }
];

export function AchievementCenter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleShare = (id: string) => {
    console.log('Sharing achievement:', id);
  };

  const filteredAchievements = mockAchievements.filter(achievement => {
    const matchesSearch = 
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'all' || achievement.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const totalPoints = mockAchievements.reduce((sum, achievement) => sum + achievement.points, 0);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="h-8 w-8" />
          <h2 className="text-2xl font-bold">Achievement Center</h2>
        </div>
        <p className="text-lg opacity-90">Total Points: {totalPoints}</p>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search achievements..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="engagement">Community Engagement</option>
          <option value="academic">Academic Excellence</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredAchievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            onShare={handleShare}
          />
        ))}
      </div>
    </div>
  );
}
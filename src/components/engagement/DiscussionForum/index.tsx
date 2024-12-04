import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import { DiscussionList } from './DiscussionList';
import { NewDiscussionForm } from './NewDiscussionForm';

const mockDiscussions = [
  {
    id: '1',
    title: 'Best practices for grade reconfiguration',
    content: 'Looking for advice on managing the transition process...',
    category: 'discussion',
    tags: ['transition', 'grades', 'management'],
    author: 'John Smith',
    createdAt: '2024-03-15T10:00:00Z',
    likes: 12,
    views: 45,
    replies: 5
  },
  {
    id: '2',
    title: 'Infrastructure requirements clarification',
    content: 'Can someone explain the minimum requirements...',
    category: 'question',
    tags: ['infrastructure', 'requirements'],
    author: 'Mary Johnson',
    createdAt: '2024-03-14T15:30:00Z',
    likes: 8,
    views: 32,
    replies: 3
  }
];

export function DiscussionForum() {
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleDiscussionClick = (id: string) => {
    console.log('Viewing discussion:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Discussion Forum</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5" />
          New Discussion
        </button>
      </div>

      {isCreating ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-6">Create New Discussion</h3>
          <NewDiscussionForm
            onSubmit={(data) => {
              console.log('New discussion:', data);
              setIsCreating(false);
            }}
            onCancel={() => setIsCreating(false)}
          />
        </div>
      ) : (
        <>
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="question">Questions</option>
              <option value="discussion">Discussions</option>
              <option value="announcement">Announcements</option>
            </select>
          </div>

          <DiscussionList
            discussions={mockDiscussions}
            onDiscussionClick={handleDiscussionClick}
          />
        </>
      )}
    </div>
  );
}
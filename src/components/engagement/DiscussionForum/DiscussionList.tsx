import React from 'react';
import { MessageSquare, ThumbsUp, Eye, Clock } from 'lucide-react';

interface Discussion {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  likes: number;
  views: number;
  replies: number;
}

interface DiscussionListProps {
  discussions: Discussion[];
  onDiscussionClick: (id: string) => void;
}

export function DiscussionList({ discussions, onDiscussionClick }: DiscussionListProps) {
  return (
    <div className="space-y-4">
      {discussions.map((discussion) => (
        <div
          key={discussion.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => onDiscussionClick(discussion.id)}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
              <p className="text-gray-600 line-clamp-2">{discussion.content}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              discussion.category === 'question' ? 'bg-blue-100 text-blue-800' :
              discussion.category === 'discussion' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {discussion.category}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {discussion.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{discussion.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{discussion.replies}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{discussion.views}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{new Date(discussion.createdAt).toLocaleDateString()}</span>
              <span className="text-gray-400">by {discussion.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
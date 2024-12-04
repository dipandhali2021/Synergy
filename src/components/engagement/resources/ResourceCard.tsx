import React from 'react';
import { FileText, Download, Eye, ThumbsUp, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    description: string;
    type: string;
    category: string;
    fileUrl: string;
    uploadedBy: string;
    uploadDate: string;
    downloads: number;
    views: number;
    likes: number;
    fileSize: string;
  };
  onDownload: (id: string) => void;
}

export function ResourceCard({ resource, onDownload }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-indigo-50 rounded-lg">
          <FileText className="h-6 w-6 text-indigo-600" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs ${
              resource.category === 'template' ? 'bg-blue-100 text-blue-800' :
              resource.category === 'guide' ? 'bg-green-100 text-green-800' :
              resource.category === 'case-study' ? 'bg-purple-100 text-purple-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {resource.category}
            </span>
          </div>

          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span>{resource.downloads} downloads</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{resource.views} views</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{resource.likes} likes</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(resource.uploadDate), 'MMM d, yyyy')}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Uploaded by {resource.uploadedBy} • {resource.fileSize}
            </div>
            <button
              onClick={() => onDownload(resource.id)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
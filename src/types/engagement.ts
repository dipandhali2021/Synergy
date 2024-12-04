export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  category: 'discussion' | 'question' | 'announcement';
  tags: string[];
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: number;
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed';
  startDate: string;
  endDate: string;
  totalResponses: number;
  questions: SurveyQuestion[];
}

export interface SurveyQuestion {
  id: string;
  type: 'multiple-choice' | 'text' | 'rating';
  question: string;
  options?: string[];
  required: boolean;
}

export interface PolicyUpdate {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: 'infrastructure' | 'academic' | 'administrative';
  publishedAt: string;
  effectiveDate: string;
  status: 'draft' | 'published' | 'archived';
  importance: 'low' | 'medium' | 'high';
}
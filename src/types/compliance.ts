import { LucideIcon } from 'lucide-react';

export interface ComplianceItem {
  id: string;
  title: string;
  description: string;
  status: boolean;
  severity: 'high' | 'medium' | 'low';
  recommendation?: string;
}

export interface ComplianceCategoryData {
  title: string;
  icon: LucideIcon;
  colorClass: string;
  items: ComplianceItem[];
}

export interface ComplianceData {
  [key: string]: ComplianceCategoryData;
}
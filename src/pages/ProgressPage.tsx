import React, { useState } from 'react';
import { ProgressTabs } from '../components/progress/ProgressTabs';
import { NationalOverview } from '../components/progress/national/NationalOverview';
import { RegionalProgress } from '../components/progress/regional/RegionalProgress';
import { SchoolProgress } from '../components/progress/school/SchoolProgress';
import { ComparativeAnalysis } from '../components/progress/comparative/ComparativeAnalysis';
import { ChallengesDashboard } from '../components/progress/challenges/ChallengesDashboard';
import { ReportsDashboard } from '../components/progress/reports/ReportsDashboard';

type TabType = 'national' | 'regional' | 'school' | 'comparative' | 'challenges' | 'reports';

export function ProgressPage() {
  const [activeTab, setActiveTab] = useState<TabType>('national');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'national':
        return <NationalOverview />;
      case 'regional':
        return <RegionalProgress />;
      case 'school':
        return <SchoolProgress />;
      case 'comparative':
        return <ComparativeAnalysis />;
      case 'challenges':
        return <ChallengesDashboard />;
      case 'reports':
        return <ReportsDashboard />;
      default:
        return <NationalOverview />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Progress Monitoring Dashboard</h1>
        <p className="text-lg opacity-90">
          Track, analyze, and optimize school standardization progress across the nation
        </p>
      </div>

      <ProgressTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="bg-white rounded-lg shadow-md">
        {renderTabContent()}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Info, FileText, Download, Share2 } from 'lucide-react';
import { ComplianceCategory } from './ComplianceCategory';
import { ComplianceProgress } from './ComplianceProgress';
import { ComplianceResources } from './ComplianceResources';
import { ComplianceReport } from './ComplianceReport';
import { useCompliance } from '../../hooks/useCompliance';
import { ComplianceData } from '../../types/compliance';

export function ComplianceChecklist() {
  const [activeCategory, setActiveCategory] = useState<string>('infrastructure');
  const [showReport, setShowReport] = useState(false);
  const { compliance, updateCompliance, generateReport } = useCompliance();

  const handleStatusUpdate = (categoryId: string, itemId: string, value: boolean) => {
    updateCompliance(categoryId, itemId, value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Compliance Checklist</h1>
            <p className="text-indigo-100">
              Track and manage your school's standardization requirements
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowReport(true)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span>Generate Report</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <ComplianceProgress compliance={compliance} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Categories and Checklist */}
        <div className="lg:col-span-2 space-y-6">
          <ComplianceCategory
            category={compliance.infrastructure}
            onStatusUpdate={(itemId, value) => 
              handleStatusUpdate('infrastructure', itemId, value)
            }
            isActive={activeCategory === 'infrastructure'}
            onSelect={() => setActiveCategory('infrastructure')}
          />
          <ComplianceCategory
            category={compliance.staffing}
            onStatusUpdate={(itemId, value) => 
              handleStatusUpdate('staffing', itemId, value)
            }
            isActive={activeCategory === 'staffing'}
            onSelect={() => setActiveCategory('staffing')}
          />
          <ComplianceCategory
            category={compliance.curriculum}
            onStatusUpdate={(itemId, value) => 
              handleStatusUpdate('curriculum', itemId, value)
            }
            isActive={activeCategory === 'curriculum'}
            onSelect={() => setActiveCategory('curriculum')}
          />
          <ComplianceCategory
            category={compliance.digital}
            onStatusUpdate={(itemId, value) => 
              handleStatusUpdate('digital', itemId, value)
            }
            isActive={activeCategory === 'digital'}
            onSelect={() => setActiveCategory('digital')}
          />
        </div>

        {/* Resources and Guidance */}
        <div className="space-y-6">
          <ComplianceResources category={activeCategory} />
        </div>
      </div>

      {/* Report Modal */}
      {showReport && (
        <ComplianceReport
          compliance={compliance}
          onClose={() => setShowReport(false)}
          onDownload={() => generateReport()}
        />
      )}
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, Printer, Mail } from 'lucide-react';
import { ComplianceData } from '../../types/compliance';

interface ComplianceReportProps {
  compliance: ComplianceData;
  onClose: () => void;
  onDownload: () => void;
}

export function ComplianceReport({
  compliance,
  onClose,
  onDownload,
}: ComplianceReportProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Compliance Report</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {Object.entries(compliance).map(([key, category]) => (
            <div key={key} className="mb-8">
              <h3 className="text-lg font-semibold mb-4 capitalize">{key}</h3>
              <div className="space-y-4">
                {category.items.map(item => (
                  <div
                    key={item.id}
                    className="p-4 bg-gray-50 rounded-lg flex items-start gap-4"
                  >
                    <input
                      type="checkbox"
                      checked={item.status}
                      readOnly
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{item.title}</h4>
                        {item.severity === 'high' && (
                          <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded-full">
                            Critical
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Generated on {new Date().toLocaleDateString()}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={onDownload}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
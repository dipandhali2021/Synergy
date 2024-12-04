import React, { useState } from 'react';
import { SupportTicketForm } from './SupportTicketForm';
import { SupportTicketList } from './SupportTicketList';
import { FAQSection } from './FAQSection';
import { MessageSquare, FileText, HelpCircle } from 'lucide-react';

type SupportTab = 'tickets' | 'faq' | 'documentation';

export function SupportCenter() {
  const [activeTab, setActiveTab] = useState<SupportTab>('tickets');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-2">Support Center</h2>
        <p className="text-gray-600">Get help with your standardization journey</p>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b">
          <nav className="flex">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`px-6 py-4 flex items-center gap-2 border-b-2 ${
                activeTab === 'tickets'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              Support Tickets
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-4 flex items-center gap-2 border-b-2 ${
                activeTab === 'faq'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <HelpCircle className="h-5 w-5" />
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('documentation')}
              className={`px-6 py-4 flex items-center gap-2 border-b-2 ${
                activeTab === 'documentation'
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-5 w-5" />
              Documentation
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'tickets' && (
            <div className="space-y-6">
              <SupportTicketForm />
              <SupportTicketList />
            </div>
          )}
          {activeTab === 'faq' && <FAQSection />}
          {activeTab === 'documentation' && (
            <div className="prose max-w-none">
              <h3>Documentation</h3>
              <p>Comprehensive guides and documentation coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
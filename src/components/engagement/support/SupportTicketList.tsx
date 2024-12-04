import React from 'react';
import { MessageSquare, Clock, CheckCircle } from 'lucide-react';

interface SupportTicket {
  id: string;
  subject: string;
  category: string;
  priority: string;
  status: string;
  createdAt: string;
  lastUpdated: string;
}

export function SupportTicketList() {
  const tickets: SupportTicket[] = [
    {
      id: '1',
      subject: 'Infrastructure Assessment Help',
      category: 'technical',
      priority: 'high',
      status: 'open',
      createdAt: '2024-03-15T10:00:00Z',
      lastUpdated: '2024-03-15T14:30:00Z'
    },
    {
      id: '2',
      subject: 'Policy Clarification Needed',
      category: 'policy',
      priority: 'medium',
      status: 'in-progress',
      createdAt: '2024-03-14T09:00:00Z',
      lastUpdated: '2024-03-15T11:00:00Z'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Your Support Tickets</h3>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium">{ticket.subject}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>#{ticket.id}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      Updated {new Date(ticket.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.status)}`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
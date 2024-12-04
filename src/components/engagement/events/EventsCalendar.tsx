import React, { useState } from 'react';
import { Search, Filter, Calendar as CalendarIcon } from 'lucide-react';
import { EventCard } from './EventCard';

const mockEvents = [
  {
    id: '1',
    title: 'Grade Reconfiguration Workshop',
    description: 'Interactive session on implementing grade structure changes effectively',
    date: '2024-04-15',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    location: 'Zoom Virtual Meeting',
    type: 'online' as const,
    category: 'workshop',
    attendees: 45,
    maxAttendees: 100,
    registrationDeadline: '2024-04-10'
  },
  {
    id: '2',
    title: 'Infrastructure Planning Conference',
    description: 'Annual conference on school infrastructure development and management',
    date: '2024-04-20',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    location: 'Convention Center, Kerala',
    type: 'in-person' as const,
    category: 'conference',
    attendees: 120,
    maxAttendees: 150,
    registrationDeadline: '2024-04-15'
  }
];

export function EventsCalendar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleRegister = (id: string) => {
    console.log('Registering for event:', id);
  };

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = typeFilter === 'all' || event.type === typeFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Events & Webinars</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
          <CalendarIcon className="h-5 w-5" />
          View Calendar
        </button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Types</option>
          <option value="online">Online</option>
          <option value="in-person">In-Person</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Categories</option>
          <option value="workshop">Workshops</option>
          <option value="conference">Conferences</option>
          <option value="webinar">Webinars</option>
          <option value="training">Training</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onRegister={handleRegister}
          />
        ))}
      </div>
    </div>
  );
}
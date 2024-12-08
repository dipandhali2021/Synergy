import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Plus 
} from 'lucide-react';

export function PlanTimeline() {
  const milestones = [
    {
      id: 1,
      title: 'Initial Assessment',
      date: '2024-03-15',
      status: 'completed',
      description: 'Complete infrastructure and resource assessment',
      tasks: [
        { id: 1, title: 'Facility audit', completed: true },
        { id: 2, title: 'Staff survey', completed: true },
        { id: 3, title: 'Resource inventory', completed: true },
      ],
    },
    {
      id: 2,
      title: 'Planning Phase',
      date: '2024-04-01',
      status: 'in-progress',
      description: 'Develop detailed transition strategy',
      tasks: [
        { id: 4, title: 'Budget allocation', completed: true },
        { id: 5, title: 'Timeline development', completed: false },
        { id: 6, title: 'Stakeholder consultation', completed: false },
      ],
    },
    {
      id: 3,
      title: 'Implementation',
      date: '2024-05-15',
      status: 'pending',
      description: 'Execute transition plan',
      tasks: [
        { id: 7, title: 'Staff training', completed: false },
        { id: 8, title: 'Infrastructure updates', completed: false },
        { id: 9, title: 'System migration', completed: false },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Transition Timeline</h2>
        <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
          <Plus className="h-4 w-4" />
          <span>Add Milestone</span>
        </button>
      </div>

      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0">
              {milestone.status === 'completed' ? (
                <div className="w-4 h-4 rounded-full bg-green-600" />
              ) : milestone.status === 'in-progress' ? (
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-gray-300" />
              )}
            </div>

            {/* Milestone Content */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {milestone.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>{milestone.date}</span>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-2">
                {milestone.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-2 bg-white rounded-lg"
                  >
                    <CheckCircle2 
                      className={`h-4 w-4 ${
                        task.completed ? 'text-green-600' : 'text-gray-400'
                      }`} 
                    />
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-4 text-sm">
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  <Clock className="h-4 w-4" />
                  <span>Set Reminder</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  <FileText className="h-4 w-4" />
                  <span>Add Note</span>
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  <AlertCircle className="h-4 w-4" />
                  <span>Report Issue</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
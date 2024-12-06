import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  district: {
    type: String,
    required: true,
    trim: true,
  },
  currentStructure: {
    type: String,
    enum: ['Odd Structure', 'Standard Structure'],
    default: 'Odd Structure',
  },
  recommendedStructure: {
    type: String,
    enum: ['Odd Structure', 'Standard Structure'],
    default: 'Standard Structure',
  },
  transitionStatus: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  performanceBand: {
    type: String,
    enum: ['Excellent', 'Good', 'Average', 'Poor'],
    required: true,
  },
  studentCount: {
    type: Number,
    required: true,
    min: 0,
  },
  teacherCount: {
    type: Number,
    required: true,
    min: 0,
  },
  facilities: {
    type: [String],
    default: [],
  },
  type: {
    type: String,
    enum: ['government', 'private', 'aided', 'unaided'],
    required: true,
  },
  coordinates: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model('School', schoolSchema);

import Progress from '../models/Progress.js';
import { validationResult } from 'express-validator';

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({ schoolId: req.params.schoolId })
      .populate('schoolId', 'name');

    if (!progress) {
      return res.status(404).json({ message: 'Progress data not found' });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMetrics = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let progress = await Progress.findOne({ schoolId: req.params.schoolId });

    if (!progress) {
      progress = new Progress({
        schoolId: req.params.schoolId,
        metrics: req.body
      });
    } else {
      progress.metrics = { ...progress.metrics, ...req.body };
    }

    // Add to trends
    Object.entries(req.body).forEach(([metric, value]) => {
      progress.trends.push({ metric, value });
    });

    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMilestone = async (req, res) => {
  try {
    const progress = await Progress.findOne({ schoolId: req.params.schoolId });
    
    if (!progress) {
      return res.status(404).json({ message: 'Progress data not found' });
    }

    const milestone = progress.milestones.id(req.params.milestoneId);
    
    if (!milestone) {
      return res.status(404).json({ message: 'Milestone not found' });
    }

    Object.assign(milestone, req.body);
    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMilestone = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let progress = await Progress.findOne({ schoolId: req.params.schoolId });

    if (!progress) {
      progress = new Progress({
        schoolId: req.params.schoolId,
        milestones: [req.body]
      });
    } else {
      progress.milestones.push(req.body);
    }

    await progress.save();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
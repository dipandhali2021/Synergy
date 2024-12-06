import express from 'express';
import { body } from 'express-validator';
import { auth } from '../middleware/auth.js';
import {
  getProgress,
  updateMetrics,
  updateMilestone,
  addMilestone
} from '../controllers/progressController.js';

const router = express.Router();

router.get('/:schoolId', auth, getProgress);

router.patch('/:schoolId/metrics',
  auth,
  [
    body('utilizationRate').optional().isFloat({ min: 0, max: 1 }),
    body('implementationProgress').optional().isFloat({ min: 0, max: 1 }),
    body('deliveryEfficiency').optional().isFloat({ min: 0, max: 1 }),
    body('satisfactionScore').optional().isFloat({ min: 0, max: 1 })
  ],
  updateMetrics
);

router.post('/:schoolId/milestones',
  auth,
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('dueDate').isISO8601().withMessage('Valid due date is required'),
    body('status').isIn(['completed', 'in-progress', 'pending'])
      .withMessage('Invalid status'),
    body('progress').isInt({ min: 0, max: 100 }).withMessage('Progress must be between 0 and 100')
  ],
  addMilestone
);

router.patch('/:schoolId/milestones/:milestoneId',
  auth,
  [
    body('status').optional().isIn(['completed', 'in-progress', 'pending'])
      .withMessage('Invalid status'),
    body('progress').optional().isInt({ min: 0, max: 100 })
      .withMessage('Progress must be between 0 and 100')
  ],
  updateMilestone
);

export default router;
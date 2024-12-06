import express from 'express';
import { body } from 'express-validator';
import { auth } from '../middleware/auth.js';
import {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword
} from '../controllers/authController.js';

const router = express.Router();

// Register
router.post(
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters'),
    body('role')
      .isIn(['NORMAL', 'SCHOOL_ADMIN', 'SUPER_ADMIN', 'POLICY_MAKER', 'SUPPORT_STAFF', 'AUDITOR'])
      .withMessage('Invalid role')
  ],
  register
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  login
);

// Get profile
router.get('/profile', auth, getProfile);

// Update profile
router.patch(
  '/profile',
  auth,
  [
    body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
    body('profileImage').optional().isURL().withMessage('Valid image URL required')
  ],
  updateProfile
);

// Change password
router.post(
  '/change-password',
  auth,
  [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword')
      .isLength({ min: 8 })
      .withMessage('New password must be at least 8 characters')
  ],
  changePassword
);

export default router;
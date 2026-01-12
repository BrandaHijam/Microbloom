import { Router } from 'express';
import {
  listJobs,
  createJob,
  applyJob,
  getHRContact,
  upsertHRContact,
} from '../controller/career.controller';

const router = Router();

/**
 * @openapi
 * /api/careers/jobs:
 *   get:
 *     tags:
 *       - Careers
 *     summary: Get all active job listings
 *     responses:
 *       200:
 *         description: List of jobs
 */
router.get('/jobs', listJobs);

/**
 * @openapi
 * /api/careers/jobs:
 *   post:
 *     tags:
 *       - Careers
 *     summary: Create a new job (Admin only)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JobCreateInput'
 *     responses:
 *       201:
 *         description: Job created successfully
 */
router.post('/jobs', createJob);

/**
 * @openapi
 * /api/careers/apply:
 *   post:
 *     tags:
 *       - Careers
 *     summary: Apply for a job
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JobApplicationInput'
 *     responses:
 *       201:
 *         description: Job application submitted
 *       404:
 *         description: Job not found
 */
router.post('/apply', applyJob);

/**
 * @openapi
 * /api/careers/hr-contact:
 *   get:
 *     tags:
 *       - Careers
 *     summary: Get HR contact details
 *     responses:
 *       200:
 *         description: HR contact information
 */
router.get('/hr-contact', getHRContact);

/**
 * @openapi
 * /api/careers/hr-contact:
 *   post:
 *     tags:
 *       - Careers
 *     summary: Create or update HR contact (Admin only)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HRContactInput'
 *     responses:
 *       200:
 *         description: HR contact saved
 */
router.post('/hr-contact', upsertHRContact);

export default router;

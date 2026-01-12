import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';

/* ======================================================
   JOBS
====================================================== */

// GET /api/careers/jobs
export const listJobs = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const jobs = await prisma.job.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });

    res.json({ ok: true, jobs });
  }
);

// POST /api/careers/jobs  (ADMIN)
export const createJob = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { title, department, location, description, employment } = req.body;

    if (!title || !description || !employment) {
      res.status(400).json({
        ok: false,
        error: 'title, description and employment are required',
      });
      return;
    }

    const job = await prisma.job.create({
      data: {
        title,
        department,
        location,
        description,
        employment,
      },
    });

    res.status(201).json({ ok: true, job });
  }
);

/* ======================================================
   JOB APPLICATIONS
====================================================== */

// POST /api/careers/apply
export const applyJob = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { jobId, name, email, phone, resumeUrl, coverNote } = req.body;

    if (!jobId || !name || !email || !resumeUrl) {
      res.status(400).json({
        ok: false,
        error: 'jobId, name, email and resumeUrl are required',
      });
      return;
    }

    const job = await prisma.job.findFirst({
      where: {
        id: jobId,
        isActive: true,
      },
    });

    if (!job) {
      res.status(404).json({ ok: false, error: 'Job not found or inactive' });
      return;
    }

    const application = await prisma.jobApplication.create({
      data: {
        jobId,
        name,
        email,
        phone,
        resumeUrl,
        coverNote,
      },
    });

    res.status(201).json({ ok: true, application });
  }
);

/* ======================================================
   HR CONTACT
====================================================== */

// GET /api/careers/hr-contact
export const getHRContact = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const contact = await prisma.hrContact.findFirst(
        {
            select: {
                name: true,
                email: true,
                phone: true,
            },
        }
    );
    res.json({ ok: true, contact });
  }
);

// POST /api/careers/hr-contact  (ADMIN)
export const upsertHRContact = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      res.status(400).json({
        ok: false,
        error: 'name and email are required',
      });
      return;
    }

    const existing = await prisma.hrContact.findFirst();

    const contact = existing
      ? await prisma.hrContact.update({
          where: { id: existing.id },
          data: { name, email, phone },
        })
      : await prisma.hrContact.create({
          data: { name, email, phone },
        });

    res.json({ ok: true, contact });
  }
);

import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import { Request, Response } from 'express';

export const listInternships = asyncHandler(async (_req: Request, res: Response) => {
  const items = await prisma.internship.findMany({ orderBy: { createdAt: 'desc' }});
  res.json({ ok: true, data: items });
});

export const apply = asyncHandler(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const { internshipId, resumeUrl, message } = req.body;
  const application = await prisma.application.create({
    data: { internshipId, resumeUrl, message, userId: user?.id }
  });
  res.status(201).json({ ok: true, data: application });
});

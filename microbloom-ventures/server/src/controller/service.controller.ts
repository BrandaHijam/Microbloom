import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import { Request, Response } from 'express';

export const listServices = asyncHandler(async (_req: Request, res: Response) => {
  const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' }});
  res.json({ ok: true, data: services });
});

export const createService = asyncHandler(async (req: Request, res: Response) => {
  const created = await prisma.service.create({ data: req.body });
  res.status(201).json({ ok: true, data: created });
});

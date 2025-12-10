// server/src/controller/course.controller.ts
import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';

export const listCourses = asyncHandler(
  async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const courses = await prisma.course.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ ok: true, data: courses });
  }
);

export const getCourse = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const course = await prisma.course.findUnique({ where: { id } });

    if (!course) {
      res.status(404).json({ ok: false, error: 'Not found' });
      return; // 👈 ensures return type is void
    }

    res.json({ ok: true, data: course });
  }
);

export const createCourse = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const data = req.body;
    const created = await prisma.course.create({ data });
    res.status(201).json({ ok: true, data: created });
  }
);

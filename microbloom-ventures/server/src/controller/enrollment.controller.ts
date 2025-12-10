import { Request, Response , NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';

export const enroll = asyncHandler(async (req: Request, res: Response , _next : NextFunction) : Promise<void> => {
  const { courseId } = req.body;
  const user = (req as any).user;
  if (!user) 
    res.status(401).json({ ok: false, error: 'Unauthorized' })
    return ;

  const enroll = await prisma.enrollment.create({
    data: { courseId, userId: user.id }
  });
  res.status(201).json({ ok: true, data: enroll });
});

export const listEnrollments = asyncHandler(async (req: Request, res: Response) => {
  const user = (req as any).user;
  const enrollments = await prisma.enrollment.findMany({
    where: { userId: user.id },
    include: { course: true }
  });
  res.json({ ok: true, data: enrollments });
});

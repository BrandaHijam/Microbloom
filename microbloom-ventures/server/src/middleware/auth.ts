import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { verifyToken } from '../lib/jwt';
import prisma from '../lib/prisma';

export const requireAuth = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ ok: false, error: 'Unauthorized' });
  const token = auth.split(' ')[1];
  try {
    const payload: any = verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return res.status(401).json({ ok: false, error: 'Unauthorized' });
    (req as any).user = user;
    next();
  } catch (e) {
    return res.status(401).json({ ok: false, error: 'Invalid token' });
  }
});

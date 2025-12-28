import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { verifyToken } from '../lib/jwt';
import prisma from '../lib/prisma';

// AUTH
export const requireAuth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;

    if (!auth || !auth.startsWith('Bearer ')) {
      res.status(401).json({ ok: false, error: 'Unauthorized' });
      return;
    }

    try {
      const token = auth.split(' ')[1];
      const payload = verifyToken(token) as { id: string };

      const user = await prisma.user.findUnique({
        where: { id: payload.id },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
        },
      });

      if (!user) {
        res.status(401).json({ ok: false, error: 'Unauthorized' });
        return;
      }

      (req as any).user = user;
      next();
    } catch {
      res.status(401).json({ ok: false, error: 'Invalid token' });
    }
  }
);

// ADMIN
export const requireAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = (req as any).user;

  if (!user || user.role !== 'ADMIN') {
    res.status(403).json({ ok: false, error: 'Forbidden' });
    return;
  }

  next();
};

import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import { hash, compare } from '../lib/hash';
import { signToken } from '../lib/jwt';

// SIGNUP
export const signup = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { email, name, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ ok: false, error: 'email & password required' });
      return;
    }

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      res.status(400).json({ ok: false, error: 'Email already used' });
      return;
    }

    const passwordHash = await hash(password);
    const user = await prisma.user.create({
      data: { email, name, passwordHash },
    });

    const token = signToken({ id: user.id, role: user.role });

    res.status(201).json({
      ok: true,
      data: {
        user: { id: user.id, email: user.email, name: user.name },
        token,
      },
    });
  }
);

// LOGIN
export const login = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ ok: false, error: 'email & password required' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.passwordHash) {
      res.status(401).json({ ok: false, error: 'Invalid credentials' });
      return;
    }

    const ok = await compare(password, user.passwordHash);
    if (!ok) {
      res.status(401).json({ ok: false, error: 'Invalid credentials' });
      return;
    }

    const token = signToken({ id: user.id, role: user.role });

    res.json({
      ok: true,
      data: {
        user: { id: user.id, email: user.email, name: user.name },
        token,
      },
    });
  }
);

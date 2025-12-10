import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import { NextFunction, Request, Response } from 'express';

export const listProducts = asyncHandler(async (_req: Request, res: Response , _next : NextFunction) : Promise<void> => {
  const products = await prisma.product.findMany();
  res.json({ ok: true, data: products });
});

export const getProduct = asyncHandler(async (req: Request, res: Response , _next : NextFunction) : Promise<void> => {
  const p = await prisma.product.findUnique({ where: { id: req.params.id }});
  if (!p) res.status(404).json({ ok: false, error: 'Not found' });
  return ;
  res.json({ ok: true, data: p });
});

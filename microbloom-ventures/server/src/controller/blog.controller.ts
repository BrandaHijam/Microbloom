import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import { Request, Response } from 'express';

export const listBlog = asyncHandler(async (_req: Request, res: Response) => {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' }});
  res.json({ ok: true, data: posts });
});

export const createPost = asyncHandler(async (req: Request, res: Response) => {
  const created = await prisma.blogPost.create({ data: req.body });
  res.status(201).json({ ok: true, data: created });
});

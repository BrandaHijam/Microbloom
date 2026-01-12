import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import prisma from "../lib/prisma";

/**
 * GET /api/blogs
 */
export const getAllBlogs = asyncHandler(async (_req, res) => {
  const blogs = await prisma.blogPost.findMany({
    where: { published: true },
    select: {
      id : true,
      slug: true,
      title: true,
      excerpt: true,
      author: true,
      publishedAt: true,
    },
    orderBy: { publishedAt: "desc" },
  });

  res.json({ ok: true, data: blogs });
});

/**
 * GET /api/blogs/:slug
 */
export const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await prisma.blogPost.findFirst({
    where: { slug: req.params.slug, published: true },
  });

  if (!blog) {
    res.status(404).json({ ok: false, message: "Blog not found" });
    return;
  }

  res.json({ ok: true, data: blog });
});

/**
 * POST /api/admin/blogs
 */
export const createBlog = asyncHandler(async (req, res) => {
  const { published, ...rest } = req.body;

  const blog = await prisma.blogPost.create({
    data: {
      ...rest,
      published: published ?? false,
      publishedAt: published ? new Date() : null,
    },
  });

  res.status(201).json({ ok: true, data: blog });
});

/**
 * PUT /api/admin/blogs/:id
 */
export const updateBlog = asyncHandler(async (req, res) => {
  const { published, ...rest } = req.body;

  const blog = await prisma.blogPost.update({
    where: { id: req.params.id },
    data: {
      ...rest,
      published,
      publishedAt: published ? new Date() : null,
    },
  });

  res.json({ ok: true, data: blog });
});

/**
 * DELETE /api/admin/blogs/:id
 */
export const deleteBlog = asyncHandler(async (req, res) => {
  await prisma.blogPost.delete({
    where: { id: req.params.id },
  });

  res.json({ ok: true, message: "Blog deleted" });
});

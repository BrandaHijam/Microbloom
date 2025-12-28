import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import slugify from 'slugify';

/* ======================================================
   GET /courses
====================================================== */
export const listCourses = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' },
    });

    res.json({ ok: true, data: courses });
  }
);

/* ======================================================
   GET /courses/:id
====================================================== */
export const getCourse = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ ok: false, error: 'Course id is required' });
      return;
    }

    const course = await prisma.course.findUnique({
      where: { id },
    });

    if (!course) {
      res.status(404).json({ ok: false, error: 'Course not found' });
      return;
    }

    res.json({ ok: true, data: course });
  }
);

// GET /courses/slug/:slug
export const getCourseBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    res.status(400).json({ ok: false, error: 'Slug is required' });
    return;
  }

  const course = await prisma.course.findUnique({
    where: { slug },
  });

  if (!course) {
    res.status(404).json({ ok: false, error: 'Course not found' });
    return;
  }

  res.json({ ok: true, data: course });
});


/* ======================================================
   POST /courses
====================================================== */
export const createCourse = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const {
      title,
      description,
      slug,
      curriculum,
      duration,
      fees,
      eligibility,
    } = req.body;

    /* ---------- Validation ---------- */
    if (!title || !description) {
      res.status(400).json({
        ok: false,
        error: 'title and description are required',
      });
      return;
    }

    /* ---------- Slug generation ---------- */
    const baseSlug = slug
      ? slugify(slug, { lower: true, strict: true })
      : slugify(title, { lower: true, strict: true });

    let finalSlug = baseSlug;
    let counter = 1;

    // Ensure slug uniqueness
    while (
      await prisma.course.findUnique({
        where: { slug: finalSlug },
      })
    ) {
      finalSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    /* ---------- Create course ---------- */
    const created = await prisma.course.create({
      data: {
        title,
        description,
        slug: finalSlug,
        curriculum: curriculum ?? null,
        duration: duration ?? null,
        fees: fees ?? null,
        eligibility: eligibility ?? null,
      },
    });

    res.status(201).json({ ok: true, data: created });
  }
);

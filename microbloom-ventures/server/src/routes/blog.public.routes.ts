import { Router } from "express";
import {
  getAllBlogs,
  getBlogBySlug,
} from "../controller/blog.controller";

const router = Router();

/**
 * @openapi
 * /api/blogs:
 *   get:
 *     summary: Get all published blog posts
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: List of published blogs
 */
router.get("/", getAllBlogs);

/**
 * @openapi
 * /api/blogs/{slug}:
 *   get:
 *     summary: Get blog by slug
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog found
 *       404:
 *         description: Blog not found
 */
router.get("/:slug", getBlogBySlug);

export default router;

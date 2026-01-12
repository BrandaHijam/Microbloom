import { Router } from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controller/blog.controller";

const router = Router();

/**
 * @openapi
 * /api/admin/blogs:
 *   post:
 *     summary: Create a blog
 *     tags: [Blog (Admin)]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogCreate'
 *     responses:
 *       201:
 *         description: Blog created successfully
 */
router.post("/", createBlog);

/**
 * @openapi
 * /api/admin/blogs/{id}:
 *   put:
 *     summary: Update a blog
 *     tags: [Blog (Admin)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BlogUpdate'
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       404:
 *         description: Blog not found
 */
router.put("/:id", updateBlog);

/**
 * @openapi
 * /api/admin/blogs/{id}:
 *   delete:
 *     summary: Delete a blog
 *     tags: [Blog (Admin)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 */
router.delete("/:id", deleteBlog);

export default router;

import { Router } from 'express';
import { listBlog, createPost } from '../controller/blog.controller';
import { requireAuth } from '../middleware/auth';

const router = Router();
router.get('/', listBlog);
router.post('/', requireAuth, createPost);

export default router;

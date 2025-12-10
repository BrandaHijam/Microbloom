import { Router } from 'express';
import { getCourse, createCourse , listCourses } from '../controller/course.controller';

const router = Router();

router.get('/', getCourse);
router.get('/:id', getCourse);
router.post('/', createCourse);
router.get('/list', listCourses);

export default router;

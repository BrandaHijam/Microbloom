import { Router } from 'express';
import { listServices, createService } from '../controller/service.controller';

const router = Router();
router.get('/', listServices);
router.post('/', createService);

export default router;

import { Router } from 'express';
import { listProducts, getProduct } from '../controller/product.controller';
import { createOrder } from '../controller/order.controller';
import { requireAuth } from '../middleware/auth';

const router = Router();
router.get('/', listProducts);
router.get('/:id', getProduct);

// orders
router.post('/:id/order', requireAuth, createOrder); // or a separate /orders route for multi-item orders

export default router;

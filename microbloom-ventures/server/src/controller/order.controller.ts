import asyncHandler from 'express-async-handler';
import prisma from '../lib/prisma';
import { Request, Response, NextFunction } from 'express';

export const createOrder = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const user = (req as any).user;
    const { items, shipping } = req.body; // items: [{ productId, quantity }]

    if (!items || !Array.isArray(items) || items.length === 0) {
      res.status(400).json({ ok: false, error: 'Order items required' });
      return;
    }

    const productIds = items.map((i: any) => i.productId);
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } }
    });

    let total = 0;
    const orderItems = items.map((it: any) => {
      const p = products.find((pr : any) => pr.id === it.productId);
      const unit = p ? p.priceCents : 0;
      total += unit * it.quantity;
      return {
        productId: it.productId,
        quantity: it.quantity,
        unitCents: unit
      };
    });

    const order = await prisma.order.create({
      data: {
        userId: user?.id,
        totalCents: total,
        shipping,
        items: { create: orderItems }
      },
      include: { items: true }
    });

    res.status(201).json({ ok: true, data: order });
  }
);

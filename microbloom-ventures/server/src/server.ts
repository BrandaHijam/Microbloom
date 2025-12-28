import dotenv from 'dotenv';
import path from 'path';

// 👇 Load env FIRST (important for Prisma)
dotenv.config({
  path: path.resolve(process.cwd(), '../.env'),
});

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger';

import prisma from './lib/prisma';

import authRoutes from './routes/auth.routes';

import courseRoutes from './routes/course.routes';
import serviceRoutes from './routes/service.routes';
import productRoutes from './routes/product.routes';
import internshipRoutes from './routes/internship.routes';
import appointmentRoutes from './routes/appointment.routes';
import blogRoutes from './routes/blog.routes';

import { errorHandler } from './middleware/errorHandler';

const app = express();

/* ======================================================
   Global Middleware
====================================================== */
app.use(helmet());
app.use(cors());
app.use(express.json());

/* ======================================================
   Swagger Docs (MUST be before 404)
====================================================== */
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* ======================================================
   Health Check
====================================================== */
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, status: 'up' });
});

/* ======================================================
   API Routes
====================================================== */
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/blog', blogRoutes);

/* ======================================================
   404 Handler (ALWAYS after routes)
====================================================== */
app.use((_req, res) => {
  res.status(404).json({
    ok: false,
    error: 'Route not found',
  });
});

/* ======================================================
   Error Handler (ALWAYS last)
====================================================== */
app.use(errorHandler);

/* ======================================================
   Server Start
====================================================== */
const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Swagger Docs available at http://localhost:${PORT}/api/docs`);
});

export default app;

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import courseRoutes from './routes/course.routes';
import serviceRoutes from './routes/service.routes';
import productRoutes from './routes/product.routes';
import internshipRoutes from './routes/internship.routes';
import appointmentRoutes from './routes/appointment.routes';
import blogRoutes from './routes/blog.routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true, ts: new Date().toISOString() }));


// API routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/blog', blogRoutes);


// error handler (last middleware)
app.use(errorHandler);

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

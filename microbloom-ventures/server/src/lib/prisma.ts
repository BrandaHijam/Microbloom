import dotenv from 'dotenv';
import path from 'path';

// load root .env (because prisma & server are separate)
dotenv.config({
  path: path.resolve(process.cwd(), '../.env'),
});

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// 🔑 create pg pool using DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 🔑 create Prisma adapter
const adapter = new PrismaPg(pool);

// ✅ THIS is REQUIRED in Prisma 7
const prisma = new PrismaClient({
  adapter,
});

export default prisma;

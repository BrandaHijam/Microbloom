import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(process.cwd(), '../.env'),
});

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
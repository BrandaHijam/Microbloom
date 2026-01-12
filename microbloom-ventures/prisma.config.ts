import { defineConfig } from 'prisma/config'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
})

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined')
}

export default defineConfig({
  schema: 'prisma/schema.prisma',

  datasource: {
    url: process.env.DATABASE_URL,
  },

  migrations: {
    seed: 'ts-node prisma/seed.ts',
  },
})

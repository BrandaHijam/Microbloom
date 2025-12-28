import { defineConfig } from 'prisma/config'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
})

export default defineConfig({
  schema: 'prisma/schema.prisma',

  migrations: {
    seed: 'ts-node prisma/seed.ts',
  },
})

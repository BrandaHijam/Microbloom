// prisma.config.ts
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  // datasource config (v7 expects url here, not inside schema.prisma)
  datasource: {
    url: env('DATABASE_URL'),
    // if you used shadow DB, set shadowDatabaseUrl: env('SHADOW_DATABASE_URL')
  },
  // optional: configure seed command or other settings here
  // migrations: { seed: 'npx ts-node -r dotenv/config prisma/seed.ts' },
});

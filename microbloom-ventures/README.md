# Microbloom Ventures

A monorepo for the Microbloom Ventures website and API.

This repository contains:

- `apps/frontend/` — a **Next.js 14** marketing and product website built with **React 18**, **TypeScript**, and **Tailwind CSS**.
- `server/` — an **Express 5** backend API built with **TypeScript**, **Prisma ORM**, and **PostgreSQL**.
- `prisma/` — shared Prisma schema and database seed logic.

## Tech stack

- Monorepo: `npm` workspaces
- Frontend:
  - `next` 14
  - `react` 18
  - `react-dom`
  - `typescript`
  - `tailwindcss`
  - `postcss`
- Backend:
  - `express`
  - `typescript`
  - `ts-node-dev`
  - `prisma`
  - `@prisma/client`
  - `pg`
  - `bcrypt` / `bcryptjs`
  - `jsonwebtoken`
  - `cors`
  - `helmet`
  - `dotenv`
  - `swagger-jsdoc`
  - `swagger-ui-express`
- Database:
  - `PostgreSQL`
  - `Prisma` schema at `prisma/schema.prisma`
- Utility:
  - `npm-run-all`
  - `ts-node`

## What this project includes

### Frontend

- A Next.js marketing site with routes for:
  - home
  - about
  - blog
  - careers
  - contact
  - courses
  - dietician services
  - internships
  - login
  - products
  - services
- Reusable UI components such as cards, hero, CTA, navbar, footer, and product sliders.

### Backend

- API routes for:
  - authentication (`/api/auth`)
  - courses (`/api/courses`)
  - services (`/api/services`)
  - internships (`/api/internships`)
  - appointments (`/api/appointments`)
  - public blog content (`/api/blogs`)
  - admin blog management (`/api/admin/blogs`)
  - enrollments (`/api/enrollments`)
  - careers and job applications (`/api/careers`)
  - products (`/api/products`)
- Swagger API documentation available at `/api/docs`.
- Health check endpoint at `/api/health`.
- Centralized error handling and middleware for security, CORS, and JSON parsing.

### Database

- Prisma models for:
  - users and roles
  - courses and enrollments
  - blog posts
  - internships and applications
  - dietitian appointments
  - careers, jobs, and job applications
  - HR contact
  - products
- Uses PostgreSQL as the datasource provider.

## Getting started

### Prerequisites

- Node.js 20+ (or a compatible LTS release)
- npm
- PostgreSQL
- A `.env` file in the repository root with at least:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=4000
```

### Install dependencies

From the repository root:

```bash
npm install
```

### Database setup

Run migrations and seed the database:

```bash
npm run migrate
npm run seed
```

> If you only want to generate Prisma client code, run:
>
> ```bash
> npm --workspace server run prisma:generate
> ```

### Run in development

Start frontend and backend together:

```bash
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:4000`
- Swagger docs: `http://localhost:4000/api/docs`

### Build for production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Workspace scripts

- `npm run dev` — start frontend and backend in parallel
- `npm run build` — build both workspace packages
- `npm run lint` — lint both frontend and backend
- `npm run migrate` — run Prisma migrations
- `npm run seed` — seed the database

## Notes

- `server/src/server.ts` explicitly loads the root `.env` file to support the monorepo layout.
- `server/package.json` uses the shared Prisma schema at `../prisma/schema.prisma`.
- Use `npm --workspace frontend run dev` or `npm --workspace server run dev` to run individual packages if needed.

// prisma/seed.ts
import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  console.error("Missing DATABASE_URL in .env");
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding...");

  await prisma.service.upsert({
    where: { slug: "grow-lab-setup" },
    update: {},
    create: {
      slug: "grow-lab-setup",
      title: "Grow Lab & Farm Setup",
      description:
        "Turnkey grow lab installations, school labs, and commercial consultancy",
    },
  });

  await prisma.course.upsert({
    where: { slug: "microgreens-masterclass" },
    update: {},
    create: {
      slug: "microgreens-masterclass",
      title: "Microgreens Farming Masterclass",
      description: "Starter to advanced microgreens business course",
      duration: 14,
      fees: 5000,
      eligibility: "Open for all",
      curriculum: { modules: ["Intro", "Production", "Business"] },
    },
  });

  await prisma.product.createMany({
    data: [
      {
        sku: "MICRO-RADISH-001",
        title: "Radish Microgreens",
        priceCents: 20000,
        inventory: 100,
        category: "microgreens",
      },
      {
        sku: "WHEATGRASS-FRESH-001",
        title: "Wheatgrass Fresh",
        priceCents: 15000,
        inventory: 50,
        category: "wheatgrass",
      },
    ],
      skipDuplicates: true,
    });
  
    console.log("Seeding completed successfully!");
  }
  
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  /* ======================
     INTERNSHIPS
  ====================== */
   /* ======================
     INTERNSHIPS
  ====================== */
  await prisma.internship.createMany({
    data: [
      {
        title: "Microgreens Production Internship",
        description:
          "Hands-on internship covering microgreens cultivation, harvesting, and packaging.",
        location: "Gandhinagar",
        stipend: 8000,
        duration: 3, // months
      },
      {
        title: "Urban Farming Internship",
        description:
          "Learn sustainable urban farming techniques and greenhouse operations.",
        location: "Ahmedabad",
        stipend: 6000,
        duration: 2,
      },
      {
        title: "AgriTech Research Internship",
        description:
          "Assist in research projects involving sensors, data collection, and modern agriculture.",
        location: "Remote",
        stipend: null, // unpaid / stipend TBD
        duration: 4,
      },
    ],
    skipDuplicates: true,
  });

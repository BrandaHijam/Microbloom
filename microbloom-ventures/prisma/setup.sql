-- prisma/setup.sql
CREATE DATABASE microbloom_db;
CREATE DATABASE microbloom_shadow;

-- create user (if not exists)
DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'microbloom_user') THEN
      CREATE ROLE microbloom_user LOGIN PASSWORD 'BrandaHijam@11';
   END IF;
END
$do$;

GRANT ALL PRIVILEGES ON DATABASE microbloom_db TO microbloom_user;
GRANT ALL PRIVILEGES ON DATABASE microbloom_shadow TO microbloom_user;

-- Optionally allow createdb (dev only)
ALTER ROLE microbloom_user CREATEDB;

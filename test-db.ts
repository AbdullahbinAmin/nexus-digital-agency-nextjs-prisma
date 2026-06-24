import { PrismaClient } from './app/generated/prisma/client.ts';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import Database from 'better-sqlite3';
import path from 'path';

try {
  const dbPath = path.join(process.cwd(), 'dev.db');
  const connection = new Database(dbPath);
  const adapter = new PrismaBetterSqlite3(connection);
  const prisma = new PrismaClient({ adapter });
  console.log("Prisma client instantiated.");
} catch (e) {
  console.error("Failed:", e.stack);
}

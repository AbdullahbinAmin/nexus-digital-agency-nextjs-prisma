import { PrismaClient } from './app/generated/prisma/client/index.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import Database from 'better-sqlite3';
import path from 'path';

async function test() {
  process.env.DATABASE_URL = 'file:./dev.db';
  const dbPath = path.join(process.cwd(), 'dev.db');
  const connection = new Database(dbPath);
  const adapter = new PrismaBetterSqlite3(connection);
  const prisma = new PrismaClient({ adapter });
  const count = await prisma.contactMessage.count();
  console.log('Count:', count);
}

test().catch(console.error);

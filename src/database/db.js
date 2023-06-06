import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import Database from 'better-sqlite3';

import dotenv from 'dotenv';
dotenv.config();

const dbFile = getDatabaseFile();

const db = new Database(dbFile);

const schemaPath = join('src', 'database', 'schema.sql');
const schema = readFileSync(schemaPath, 'utf-8');
db.exec(schema);

function getDatabaseFile() {
  // Check if running in a test environment
  if (process.env.NODE_ENV === 'test') {
    return 'test.db.sqlite'; // Specify the test database file path
  } else {
    return process.env.DB_FILE; // Use the production database file path from .env file
  }
}

export default db;
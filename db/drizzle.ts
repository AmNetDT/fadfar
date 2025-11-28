// db/drizzle.ts
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { createPool } from "@vercel/postgres";

// Load .env.local only in a Node environment (optional)
if (process.env.NEXT_RUNTIME !== "edge") {
  require("dotenv").config({ path: ".env.local" });
}

// Make sure POSTGRES_URL is defined
const connectionString = process.env.POSTGRES_URL;
if (!connectionString) {
  throw new Error("POSTGRES_URL is not defined");
}

// Create the Vercel Postgres pool
const pool = createPool({ connectionString });

// Initialise Drizzle with the pool and your schema
export const db = drizzle(pool, { schema });
export default db;

// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv"; // Import dotenv

// Load the environment variables from .env.local file
dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts", // Adjust this path if your schema file is elsewhere
  out: "./drizzle", // Folder for migrations
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!, // Access the environment variable
  },
  // If you are using Neon, you might need to add this property for role configuration:
  // entities: { roles: { provider: 'neon' } }
} satisfies import("drizzle-kit").Config);

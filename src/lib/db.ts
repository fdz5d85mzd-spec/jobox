import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/lib/db/schema";
const url = process.env.DATABASE_URL;
if (!url && process.env.NODE_ENV === "production") throw new Error("DATABASE_URL is required in production");
const sql = url ? neon(url) : null;
export const db = sql ? drizzle(sql, { schema }) : null;

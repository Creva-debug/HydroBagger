import "server-only";

import { Pool } from "pg";

let pool: Pool | undefined;

function resolvePoolConfig(raw: string): {
  connectionString: string;
  ssl: { rejectUnauthorized: false } | undefined;
} {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    throw new Error("Nieprawidłowy format DATABASE_URL.");
  }
  for (const key of [...u.searchParams.keys()]) {
    const k = key.toLowerCase();
    if (k === "sslmode" || k === "ssl") u.searchParams.delete(key);
  }
  const host = u.hostname.toLowerCase();
  const isLocal =
    host === "localhost" || host === "127.0.0.1" || host === "::1";
  return {
    connectionString: u.toString(),
    ssl: isLocal ? undefined : { rejectUnauthorized: false },
  };
}

export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL?.trim();
}

export function getPool(): Pool {
  const raw = process.env.DATABASE_URL;
  if (!raw?.trim()) {
    throw new Error("Brak DATABASE_URL w zmiennych środowiskowych.");
  }
  if (!pool) {
    const { connectionString, ssl } = resolvePoolConfig(raw.trim());
    pool = new Pool({
      connectionString,
      ssl,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });
  }
  return pool;
}

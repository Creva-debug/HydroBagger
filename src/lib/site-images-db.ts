import "server-only";

import { getPool, isDatabaseConfigured } from "@/lib/db";

export async function fetchSiteImageVersion(slotKey: string): Promise<number | null> {
  if (!isDatabaseConfigured()) return null;
  try {
    const { rows } = await getPool().query<{ uploaded_at: string }>(
      `SELECT uploaded_at::text AS uploaded_at FROM site_images WHERE slot_key = $1`,
      [slotKey],
    );
    const row = rows[0];
    if (!row) return null;
    const ms = Date.parse(row.uploaded_at);
    return Number.isFinite(ms) ? Math.floor(ms / 1000) : null;
  } catch (err) {
    console.error(`[site-images-db] ${slotKey}:`, err);
    return null;
  }
}

export async function fetchSiteImageVersions(
  slotKeys: string[],
): Promise<Record<string, number>> {
  const out: Record<string, number> = {};
  await Promise.all(
    slotKeys.map(async (key) => {
      const v = await fetchSiteImageVersion(key);
      if (v != null) out[key] = v;
    }),
  );
  return out;
}

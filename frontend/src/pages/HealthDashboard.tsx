import React from "react";
import { http } from "../lib/http";
import { HealthCard } from "../components/HealthCard";
import type { HealthResponse } from "../types/health";

/**
 * HealthDashboard
 *
 * Purpose:
 * - Fetch health status from /backend/health and /python/health
 * - Display each in a separate <HealthCard />
 */
export default function HealthDashboard() {
  const [loading, setLoading] = React.useState(true);
  const [backend, setBackend] = React.useState<{
    ok: boolean;
    detail: string;
  } | null>(null);
  const [python, setPython] = React.useState<{
    ok: boolean;
    detail: string;
  } | null>(null);

  React.useEffect(() => {
    async function fetchHealth(
      path: string
    ): Promise<{ ok: boolean; detail: string }> {
      try {
        const { data } = await http.get<HealthResponse>(path);
        const ok =
          (data.status || "").toLowerCase().includes("ok") ||
          (data.status || "").toLowerCase().includes("healthy");
        return { ok, detail: JSON.stringify(data, null, 2) };
      } catch (err: any) {
        return { ok: false, detail: err.message || "Unknown error" };
      }
    }

    (async () => {
      setLoading(true);
      const [b, p] = await Promise.all([
        fetchHealth("/backend/health"),
        fetchHealth("/python/health"),
      ]);
      setBackend(b);
      setPython(p);
      setLoading(false);
    })();
  }, []);

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1 className="text-2xl font-bold mb-4">System Health</h1>

      <div className="grid gap-4">
        <HealthCard
          title="Backend (/backend/health)"
          loading={loading}
          ok={backend?.ok ?? null}
          detail={backend?.detail}
        />
        <HealthCard
          title="Python (/python/health)"
          loading={loading}
          ok={python?.ok ?? null}
          detail={python?.detail}
        />
      </div>
    </div>
  );
}

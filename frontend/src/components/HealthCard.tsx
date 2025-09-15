import React from "react";

type Props = {
  title: string;
  loading: boolean;
  ok: boolean | null;
  detail?: string;
};

/**
 * HealthCard Component
 *
 * Purpose:
 * - Visually display the health status of a backend or AI service.
 *
 * Props:
 * - title (string): Service name to show
 * - loading (boolean): Whether data is still being fetched
 * - ok (boolean | null): Result status (true=🟢, false=🔴, null=🕒)
 * - detail (string): Optional detail (JSON response or error message)
 *
 * Output:
 * - Card UI with status dot and optional detail text
 */
export function HealthCard({ title, loading, ok, detail }: Props) {
  const getStatusDot = () => {
    if (loading) return "🕒";
    if (ok === true) return "🟢";
    if (ok === false) return "🔴";
    return "❔";
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span>{getStatusDot()}</span>
      </div>
      {detail && (
        <pre className="text-xs text-gray-600 whitespace-pre-wrap break-words">
          {detail}
        </pre>
      )}
    </div>
  );
}

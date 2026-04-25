"use client";

interface Props {
  keywords: string[];
}

export default function WatchlistTagChips({ keywords }: Props) {
  if (!keywords || keywords.length === 0) return null;

  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {keywords.map((kw) => (
        <span
          key={kw}
          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          {kw}
        </span>
      ))}
    </div>
  );
}

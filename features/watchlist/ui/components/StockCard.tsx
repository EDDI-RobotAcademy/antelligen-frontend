"use client";

import type { WatchlistItem } from "@/features/watchlist/domain/model/watchlistItem";

interface Props {
  item: WatchlistItem;
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
}

export default function StockCard({ item, onEdit, onDelete }: Props) {
  return (
    <div className="flex items-start justify-between rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{item.theme}</span>
        <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">{item.name}</span>
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{item.code}</span>
      </div>
      <div className="ml-2 mt-0.5 flex gap-1">
        <button
          onClick={() => onEdit(item.code)}
          aria-label={`${item.name} 수정`}
          className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(item.code)}
          aria-label={`${item.name} 삭제`}
          className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-red-500 dark:hover:bg-zinc-800 dark:hover:text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

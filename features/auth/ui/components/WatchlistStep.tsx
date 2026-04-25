"use client";

import type { StockTheme } from "@/features/auth/domain/model/stockTheme";

interface Props {
  themes: StockTheme[];
  isLoading: boolean;
  selectedCodes: string[];
  onToggle: (code: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
  isSubmitting: boolean;
  error: string | null;
}

export default function WatchlistStep({
  themes,
  isLoading,
  selectedCodes,
  onToggle,
  onSubmit,
  onSkip,
  isSubmitting,
  error,
}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900">
        <h1 className="mb-2 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          관심종목 선택
        </h1>
        <p className="mb-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          관심 있는 종목을 선택하세요 (선택 사항)
        </p>

        {isLoading ? (
          <div className="py-12 text-center text-sm text-zinc-400">불러오는 중...</div>
        ) : (
          <div className="max-h-96 space-y-6 overflow-y-auto pr-1">
            {themes.map((theme) => (
              <div key={theme.theme}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  {theme.theme}
                </p>
                <div className="flex flex-wrap gap-2">
                  {theme.stocks.map((stock) => {
                    const selected = selectedCodes.includes(stock.code);
                    return (
                      <button
                        key={stock.code}
                        onClick={() => onToggle(stock.code)}
                        className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                          selected
                            ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                            : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-500"
                        }`}
                      >
                        {stock.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCodes.length > 0 && (
          <p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
            {selectedCodes.length}개 선택됨
          </p>
        )}

        {error && (
          <p className="mt-3 text-center text-xs text-red-500 dark:text-red-400">{error}</p>
        )}

        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-300 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:disabled:bg-zinc-700 dark:disabled:text-zinc-500"
          >
            {isSubmitting ? "처리 중..." : "완료"}
          </button>
          <button
            onClick={onSkip}
            disabled={isSubmitting}
            className="h-10 w-full rounded-xl text-sm text-zinc-500 transition-colors hover:text-zinc-700 disabled:cursor-not-allowed dark:text-zinc-400 dark:hover:text-zinc-200"
          >
            건너뛰기
          </button>
        </div>
      </div>
    </div>
  );
}

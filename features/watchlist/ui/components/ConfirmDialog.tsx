"use client";

interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ message, onConfirm, onCancel }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-6 text-center text-sm text-zinc-700 dark:text-zinc-300">{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="h-11 flex-1 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="h-11 flex-1 rounded-xl bg-red-500 text-sm font-medium text-white transition-colors hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

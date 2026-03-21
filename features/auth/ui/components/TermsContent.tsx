"use client";

import { useTermsAccess } from "@/features/auth/application/hooks/useTermsAccess";

export default function TermsContent() {
  const { nickname, email, isReady } = useTermsAccess();

  if (!isReady) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900">
        <h1 className="mb-2 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          약관 동의
        </h1>
        <p className="mb-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          서비스 이용을 위해 약관에 동의해 주세요
        </p>
        {(nickname || email) && (
          <div className="mb-6 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800">
            {nickname && (
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{nickname}</p>
            )}
            {email && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{email}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

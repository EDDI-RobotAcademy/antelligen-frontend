"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetAtom } from "jotai";
import { signupUser } from "@/features/auth/infrastructure/api/signupApi";
import { authAtom } from "@/features/auth/application/atoms/authAtom";

export function useSignup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitting = useRef(false);
  const setAuth = useSetAtom(authAtom);

  async function submit(nickname: string, email: string, watchlist: string[] = []) {
    if (submitting.current) return;
    submitting.current = true;
    setIsLoading(true);
    setError(null);

    try {
      await signupUser(nickname, email, watchlist);
      setAuth({ status: "AUTHENTICATED", user: { id: "", email, nickname } });
      router.replace("/");
    } catch {
      setError("회원가입에 실패했습니다. 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
      submitting.current = false;
    }
  }

  return { submit, isLoading, error };
}

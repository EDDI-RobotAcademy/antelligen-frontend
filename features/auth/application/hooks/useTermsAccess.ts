"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useTermsAccess() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  const nickname = searchParams.get("nickname") ?? "";
  const email = searchParams.get("email") ?? "";

  useEffect(() => {
    if (!token) {
      router.replace("/login");
    }
  }, [token, router]);

  return { token, nickname, email, isReady: !!token };
}

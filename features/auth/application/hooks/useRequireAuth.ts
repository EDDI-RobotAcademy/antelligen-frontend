"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { authAtom } from "@/features/auth/application/atoms/authAtom";

export function useRequireAuth() {
  const auth = useAtomValue(authAtom);
  const router = useRouter();

  useEffect(() => {
    if (auth.status === "UNAUTHENTICATED") {
      router.replace("/login");
    }
  }, [auth.status, router]);

  return { isLoading: auth.status === "LOADING", isReady: auth.status === "AUTHENTICATED" };
}

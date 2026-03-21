"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchAuthMe } from "@/features/auth/infrastructure/api/authApi";
import type { AuthState } from "@/features/auth/domain/state/authState";

export function useAuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authState, setAuthState] = useState<AuthState>({ status: "LOADING" });

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setAuthState({ status: "UNAUTHENTICATED" });
      router.replace("/login");
      return;
    }

    fetchAuthMe(token)
      .then((meResponse) => {
        if (meResponse.tokenType === "TEMPORARY") {
          setAuthState({ status: "TEMPORARY_TOKEN", token });
          const params = new URLSearchParams({
            token,
            nickname: meResponse.user.nickname,
            email: meResponse.user.email,
          });
          router.replace(`/terms?${params.toString()}`);
        } else {
          setAuthState({ status: "AUTHENTICATED", user: meResponse.user });
          router.replace("/");
        }
      })
      .catch(() => {
        setAuthState({ status: "UNAUTHENTICATED" });
        router.replace("/login");
      });
  }, [router, searchParams]);

  return { authState };
}

import { env } from "@/infrastructure/config/env";

export async function signupUser(nickname: string, email: string, watchlist: string[]): Promise<void> {
  const response = await fetch(`${env.apiBaseUrl}/api/v1/auth/signup`, {
    method: "POST",
    credentials: "include",
    redirect: "manual",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nickname, email, watchlist }),
  });

  const isSuccess = response.ok || response.type === "opaqueredirect" || response.status === 302;
  if (!isSuccess) {
    throw new Error(`/auth/signup 요청 실패: ${response.status}`);
  }
}

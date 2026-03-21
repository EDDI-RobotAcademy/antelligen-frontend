import type { AuthUser } from "@/features/auth/domain/model/authUser";

export type AuthState =
  | { status: "LOADING" }
  | { status: "UNAUTHENTICATED" }
  | { status: "TEMPORARY_TOKEN"; token: string }
  | { status: "AUTHENTICATED"; user: AuthUser };

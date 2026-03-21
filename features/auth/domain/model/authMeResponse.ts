import type { AuthUser } from "@/features/auth/domain/model/authUser";

export type TokenType = "TEMPORARY" | "PERMANENT";

export interface AuthMeResponse {
  tokenType: TokenType;
  user: AuthUser;
}

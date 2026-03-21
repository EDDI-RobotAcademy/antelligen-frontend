export type OAuthProvider = "kakao" | "google" | "naver" | "meta";

export type AuthIntent =
  | { type: "LOGIN_OAUTH"; provider: OAuthProvider }
  | { type: "LOGOUT" };

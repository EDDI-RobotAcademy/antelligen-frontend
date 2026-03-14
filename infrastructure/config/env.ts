const requiredEnvVars = [
  "NEXT_PUBLIC_API_BASE_URL",
  "NEXT_PUBLIC_GOOGLE_LOGIN_PATH",
  "NEXT_PUBLIC_KAKAO_LOGIN_PATH",
] as const;

type EnvVarName = (typeof requiredEnvVars)[number];

function getEnvVar(name: EnvVarName): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`필수 환경 변수가 누락되었습니다: ${name}`);
  }

  return value;
}

function validateEnv(): void {
  const missing = requiredEnvVars.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    throw new Error(
      `필수 환경 변수가 누락되었습니다:\n${missing.map((name) => `  - ${name}`).join("\n")}`
    );
  }
}

export const env = {
  get apiBaseUrl(): string {
    return getEnvVar("NEXT_PUBLIC_API_BASE_URL");
  },

  get googleLoginPath(): string {
    return getEnvVar("NEXT_PUBLIC_GOOGLE_LOGIN_PATH");
  },

  get kakaoLoginPath(): string {
    return getEnvVar("NEXT_PUBLIC_KAKAO_LOGIN_PATH");
  },

  validate: validateEnv,
};

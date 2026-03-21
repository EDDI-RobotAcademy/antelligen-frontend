import KakaoLoginButton from "@/features/auth/ui/components/kakao/KakaoLoginButton";
import OAuthLoginButton from "@/features/auth/ui/components/OAuthLoginButton";
import { loginStyles } from "@/features/auth/ui/components/loginStyles";
import type { OAuthProvider } from "@/features/auth/domain/intent/authIntent";

const otherProviders: OAuthProvider[] = ["google", "naver", "meta"];

export default function LoginButtonList() {
  return (
    <div className={loginStyles.buttonList}>
      <KakaoLoginButton />
      {otherProviders.map((provider) => (
        <OAuthLoginButton key={provider} provider={provider} />
      ))}
    </div>
  );
}

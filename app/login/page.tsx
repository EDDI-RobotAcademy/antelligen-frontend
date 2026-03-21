import LoginButtonList from "@/features/auth/ui/components/LoginButtonList";
import { loginStyles } from "@/features/auth/ui/components/loginStyles";

export default function LoginPage() {
  return (
    <div className={loginStyles.page}>
      <div className={loginStyles.card}>
        <h1 className={loginStyles.title}>로그인</h1>
        <p className={loginStyles.subtitle}>소셜 계정으로 간편하게 시작하세요</p>
        <LoginButtonList />
      </div>
    </div>
  );
}

export const loginStyles = {
  page: "flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950",
  card: "w-full max-w-sm rounded-2xl bg-white p-8 shadow-md dark:bg-zinc-900",
  title: "mb-2 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50",
  subtitle: "mb-8 text-center text-sm text-zinc-500 dark:text-zinc-400",
  buttonList: "flex flex-col gap-3",
  button: {
    base: "flex h-12 w-full items-center justify-center gap-3 rounded-xl text-sm font-medium transition-colors",
    kakao: "bg-[#FEE500] text-[#1A1A1A] hover:bg-[#e6cf00]",
    google: "border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700",
    naver: "bg-[#03C75A] text-white hover:bg-[#02b351]",
    meta: "bg-[#1877F2] text-white hover:bg-[#1560cc]",
  },
} as const;

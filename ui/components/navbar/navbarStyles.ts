export const navbarStyles = {
  nav: "fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800",
  inner: "mx-auto flex h-full max-w-7xl items-center justify-between px-6",
  logo: "text-xl font-bold text-zinc-900 dark:text-zinc-50",
  menuList: "flex items-center gap-4",
  menuItem: {
    base: "text-sm font-medium transition-colors",
    default: "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50",
    active: "text-zinc-900 underline underline-offset-4 dark:text-zinc-50",
  },
  authButton: {
    login:
      "flex h-9 items-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors",
    logout:
      "flex h-9 items-center rounded-full border border-zinc-300 px-4 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors",
  },
} as const;

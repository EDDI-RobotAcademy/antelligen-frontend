export type NewsIntent =
  | { type: "FETCH_NEWS_PAGE"; keyword: string; page: number; pageSize: number }
  | { type: "SAVE_INTEREST_ARTICLE"; title: string; link: string; source?: string; publishedAt?: string };

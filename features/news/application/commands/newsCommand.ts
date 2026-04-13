import type { NewsIntent } from "@/features/news/domain/intent/newsIntent";
import { searchNews, saveInterestArticle } from "@/features/news/infrastructure/api/newsApi";

export const newsCommand = {
  FETCH_NEWS_PAGE: (intent: Extract<NewsIntent, { type: "FETCH_NEWS_PAGE" }>) =>
    searchNews(intent.keyword, intent.page, intent.pageSize),

  SAVE_INTEREST_ARTICLE: (intent: Extract<NewsIntent, { type: "SAVE_INTEREST_ARTICLE" }>) =>
    saveInterestArticle({
      title: intent.title,
      link: intent.link,
      source: intent.source,
      published_at: intent.publishedAt,
    }),
};

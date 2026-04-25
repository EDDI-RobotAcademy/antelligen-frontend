"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { newsAtom } from "@/features/news/application/atoms/newsAtom";
import { newsCommand } from "@/features/news/application/commands/newsCommand";
import { authAtom } from "@/features/auth/application/atoms/authAtom";
import { getWatchlistNewsFeed } from "@/features/news/infrastructure/api/newsApi";
import type { NewsArticle } from "@/features/news/domain/model/newsArticle";

const PAGE_SIZE = 10;

export function useNewsList() {
  const [newsState, setNewsState] = useAtom(newsAtom);
  const [authState] = useAtom(authAtom);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (authState.status === "LOADING") return;
    if (authState.status !== "AUTHENTICATED") {
      setNewsState({ status: "UNAUTHENTICATED" });
      return;
    }

    setNewsState({ status: "LOADING" });

    getWatchlistNewsFeed()
      .then((feed) => {
        if (feed.has_watchlist && feed.items.length > 0) {
          const articles: NewsArticle[] = feed.items.map((item, index) => ({
            newsId: `watchlist-${index}`,
            title: item.title,
            content: item.description ?? "",
            source: item.stock_name,
            url: item.url,
            publishedAt: item.published_at ?? "",
            stockName: item.stock_name,
          }));
          setNewsState({
            status: "SUCCESS",
            articles,
            page: 1,
            totalPages: 1,
            totalCount: articles.length,
            isWatchlistFeed: true,
          });
        } else {
          return newsCommand
            .FETCH_NEWS_PAGE({ type: "FETCH_NEWS_PAGE", keyword: "주식", page, pageSize: PAGE_SIZE })
            .then(({ articles, page: currentPage, totalPages, totalCount }) => {
              setNewsState({
                status: "SUCCESS",
                articles,
                page: currentPage,
                totalPages,
                totalCount,
                isWatchlistFeed: false,
              });
            });
        }
      })
      .catch(() => {
        newsCommand
          .FETCH_NEWS_PAGE({ type: "FETCH_NEWS_PAGE", keyword: "주식", page, pageSize: PAGE_SIZE })
          .then(({ articles, page: currentPage, totalPages, totalCount }) => {
            setNewsState({
              status: "SUCCESS",
              articles,
              page: currentPage,
              totalPages,
              totalCount,
              isWatchlistFeed: false,
            });
          })
          .catch(() => {
            setNewsState({ status: "ERROR", message: "뉴스를 불러오는데 실패했습니다." });
          });
      });
  }, [page, authState.status, setNewsState]);

  function goToPage(nextPage: number) {
    setPage(nextPage);
  }

  return { newsState, page, goToPage };
}

import type { YoutubeListResponseItem } from "@/features/youtube/domain/model/youtubeListResponse";

export interface YoutubeFeedResponse {
  has_watchlist: boolean;
  watchlist_keywords: string[];
  items: YoutubeListResponseItem[];
  next_page_token: string | null;
  total_results: number;
}

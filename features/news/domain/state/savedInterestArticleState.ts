import type { SavedInterestArticle } from "@/features/news/domain/model/savedInterestArticle";

export type SavedInterestArticleState =
  | { status: "IDLE" }
  | { status: "SAVING" }
  | { status: "SUCCESS"; article: SavedInterestArticle }
  | { status: "DUPLICATE" }
  | { status: "UNAUTHENTICATED" }
  | { status: "ERROR"; message: string };

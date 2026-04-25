export interface StockItem {
  code: string;
  name: string;
}

export interface StockTheme {
  theme: string;
  stocks: StockItem[];
}

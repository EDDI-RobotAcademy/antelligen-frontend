"use client";

import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { tickerAtom } from "@/features/dashboard/application/atoms/tickerAtom";
import { periodAtom } from "@/features/dashboard/application/atoms/periodAtom";
import { anomalyBarsAtom } from "@/features/dashboard/application/atoms/anomalyBarsAtom";
import { fetchAnomalyBars } from "@/features/dashboard/infrastructure/api/anomalyBarsApi";

export function useAnomalyBars() {
  const ticker = useAtomValue(tickerAtom);
  const period = useAtomValue(periodAtom);
  const setState = useSetAtom(anomalyBarsAtom);

  useEffect(() => {
    const effectiveTicker = ticker ?? "IXIC";
    setState({ status: "LOADING" });

    const controller = new AbortController();
    fetchAnomalyBars(effectiveTicker, period, controller.signal)
      .then((data) => {
        setState({
          status: "SUCCESS",
          ticker: data.ticker,
          period: data.chart_interval,
          events: data.events,
        });
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setState({
          status: "ERROR",
          message: "이상치 봉 데이터를 불러오는데 실패했습니다.",
        });
      });

    return () => controller.abort();
  }, [ticker, period, setState]);
}

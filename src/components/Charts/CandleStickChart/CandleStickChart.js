import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import _debounce from "lodash/debounce"; // Import debounce from lodash

const CandlestickChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (!chartContainer.current) return;

    const chart = createChart(chartContainer.current, {
      width: chartContainer.current.offsetWidth,
      height: chartContainer.current.offsetHeight,
      // crosshair: {
      //   vertLine: {
      //     visible: false,
      //   },
      //   horzLine: {
      //     visible: false,
      //   },
      // },
      grid: {
        vertLines: false,
        horzLines: false,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#34D1A6",
      borderUpColor: "#34D1A6",
      wickUpColor: "#34D1A6",

      downColor: "#FF5C5C",
      borderDownColor: "#FF5C5C",
      wickDownColor: "#FF5C5C",
    });

    const handleResize = _debounce(() => {
      if (chart) {
        chart.resize(
          chartContainer.current.offsetWidth,
          chartContainer.current.offsetHeight
        );
        candlestickSeries.applyOptions({
          timeScale: { rightOffset: 12, leftOffset: 12 },
        });
      }
    }, 10);

    const data = [
      { time: "2019-04-11", open: 80, high: 120, low: 50, close: 90 },
      { time: "2019-04-12", open: 90, high: 110, low: 70, close: 100 },
      { time: "2019-04-13", open: 95, high: 105, low: 80, close: 85 },
      { time: "2019-04-14", open: 85, high: 100, low: 75, close: 95 },
      { time: "2019-04-15", open: 92, high: 115, low: 88, close: 105 },
      { time: "2019-04-16", open: 100, high: 125, low: 90, close: 110 },
      { time: "2019-04-17", open: 110, high: 130, low: 95, close: 120 },
      { time: "2019-04-18", open: 105, high: 118, low: 88, close: 112 },
      { time: "2019-04-19", open: 95, high: 112, low: 85, close: 105 },
      { time: "2019-04-20", open: 88, high: 104, low: 80, close: 95 },
      { time: "2019-04-21", open: 92, high: 115, low: 88, close: 105 },
      { time: "2019-04-22", open: 98, high: 120, low: 90, close: 115 },
      { time: "2019-04-23", open: 102, high: 122, low: 92, close: 118 },
      { time: "2019-04-24", open: 110, high: 130, low: 100, close: 125 },
      { time: "2019-04-25", open: 120, high: 135, low: 105, close: 119 },
      { time: "2019-04-26", open: 115, high: 128, low: 98, close: 112 },
      { time: "2019-04-27", open: 110, high: 115, low: 110, close: 100 },
      { time: "2019-04-28", open: 100, high: 105, low: 90, close: 95 },
      { time: "2019-04-29", open: 98, high: 140, low: 90, close: 138 },
      { time: "2019-04-30", open: 135, high: 145, low: 125, close: 142 },
      { time: "2019-05-01", open: 140, high: 150, low: 130, close: 148 },
      { time: "2019-05-02", open: 145, high: 155, low: 135, close: 152 },
      { time: "2019-05-03", open: 150, high: 160, low: 140, close: 158 },
      { time: "2019-05-04", open: 155, high: 165, low: 145, close: 162 },
      { time: "2019-05-05", open: 160, high: 170, low: 150, close: 168 },
      { time: "2019-05-06", open: 165, high: 175, low: 155, close: 172 },
      { time: "2019-05-07", open: 170, high: 180, low: 160, close: 178 },
      { time: "2019-05-08", open: 175, high: 185, low: 165, close: 182 },
      { time: "2019-05-09", open: 180, high: 190, low: 170, close: 188 },
      { time: "2019-05-10", open: 185, high: 195, low: 175, close: 192 },
      { time: "2019-05-11", open: 190, high: 200, low: 180, close: 198 },
      { time: "2019-05-12", open: 195, high: 205, low: 185, close: 202 },
      { time: "2019-05-13", open: 202, high: 205, low: 195, close: 200 },
      { time: "2019-05-14", open: 198, high: 205, low: 190, close: 192 },
      { time: "2019-05-15", open: 192, high: 198, low: 185, close: 190 },
      { time: "2019-05-16", open: 190, high: 195, low: 180, close: 185 },
      { time: "2019-05-17", open: 188, high: 192, low: 175, close: 180 },
      { time: "2019-05-18", open: 182, high: 188, low: 170, close: 178 },
      { time: "2019-05-19", open: 178, high: 185, low: 165, close: 172 },
      { time: "2019-05-20", open: 172, high: 178, low: 160, close: 168 },
      { time: "2019-05-21", open: 168, high: 175, low: 155, close: 165 },
      { time: "2019-05-22", open: 162, high: 170, low: 150, close: 160 },
      { time: "2019-05-23", open: 158, high: 165, low: 145, close: 158 },
      { time: "2019-05-24", open: 152, high: 160, low: 140, close: 155 },
      { time: "2019-05-25", open: 148, high: 155, low: 135, close: 152 },
      { time: "2019-05-26", open: 142, high: 150, low: 130, close: 148 },
      { time: "2019-05-27", open: 138, high: 145, low: 125, close: 145 },
      { time: "2019-05-28", open: 135, high: 142, low: 120, close: 140 },
      { time: "2019-05-29", open: 130, high: 135, low: 115, close: 132 },
      { time: "2019-05-30", open: 125, high: 130, low: 110, close: 128 },
      { time: "2019-05-31", open: 120, high: 125, low: 105, close: 122 },
    ];

    candlestickSeries.setData(data);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(chartContainer.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainer}
      style={{
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default CandlestickChart;

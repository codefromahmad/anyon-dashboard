import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const ColumnGraph = () => {
  const chartContainer = useRef(null);

  const data = [
    { time: "2023-09-03", value: 12 },
    { time: "2023-10-02", value: -15 },
    { time: "2023-10-11", value: 5 },
    { time: "2023-11-01", value: 50 },
    { time: "2023-11-07", value: -12 },
    { time: "2023-11-21", value: -30 },
    { time: "2023-11-22", value: 30 },
  ];

  useEffect(() => {
    if (!chartContainer.current) return;

    const width = window.innerWidth > 480 ? 300 : 240; // Adjust as needed
    const height = 120;

    const chart = createChart(chartContainer.current, {
      width: width,
      height: height,
    });

    const series = chart.addHistogramSeries({
      priceLineVisible: false,
      priceFormat: {
        type: "volume",
      },
    });

    const formattedData = data.slice(-7).map(({ time, value }) => ({
      time,
      value: value, // Make sure value is non-negative
      color: value >= 0 ? "green" : "red", // Specify the color here
    }));

    chart.applyOptions({
      leftPriceScale: {
        visible: true,
      },
      rightPriceScale: {
        visible: false,
      },
      timeScale: {
        // rightOffset: 0,
        position: "top",
        barSpacing: 30, // Decrease this value to increase the width
        // lockVisibleTimeRange: {
        //   left: true,
        //   right: true,
        // },
        // timeVisible: true, // Make sure time labels are visible
        // timeFormat: "DD/MM", // Format for time labels (DD/MM)
      },
      priceScale: {
        mode: 0,
        lockVisiblePriceRange: {
          top: true,
          bottom: true,
        },
        priceAxisVisible: true, // Show the price axis
      },

      grid: {
        vertLines: false, // Hide vertical grid lines
        horzLines: false, // Hide horizontal grid lines
      },
      handleScroll: false, // Disable horizontal and vertical panning
      handleScale: false, // Disable scaling
      crosshair: false, // Disable the crosshair
    });

    series.setData(formattedData);

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainer} />;
};

export default ColumnGraph;

import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const ColumnGraph = ({ data }) => {
  const chartContainer = useRef(null);

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
      timeScale: {
        rightOffset: 0,
        barSpacing: 30, // Decrease this value to increase the width
        lockVisibleTimeRange: {
          left: true,
          right: true,
        },
        timeVisible: true, // Make sure time labels are visible
        timeFormat: "DD/MM", // Format for time labels (DD/MM)
      },
      priceScale: {
        mode: 0,
        lockVisiblePriceRange: {
          top: true,
          bottom: true,
        },
        priceAxisVisible: false, // Show the price axis at the left side
      },
    });

    series.setData(formattedData);

    return () => {
      chart.remove();
    };
  }, [data]);

  return <div style={{ position: "sticky" }} ref={chartContainer} />;
};

export default ColumnGraph;

import React, { useEffect, useRef } from "react";
import { createChart, HistogramData } from "lightweight-charts";

const ColumnGraph = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (!chartContainer.current) return;

    const chart = createChart(chartContainer.current, {
      width: 400,
      height: 200,
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

  return <div style={{position:'sticky'}} ref={chartContainer} />;
};

export default ColumnGraph;

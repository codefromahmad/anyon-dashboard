import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const OrderBookChart = ({ orderBookData }) => {
  const chartContainer = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    if (!chartContainer.current || !orderBookData) return;

    if (!orderBookData) {
      console.error("orderBookData is undefined or null");
      return;
    }

    if (!chart.current) {
      chart.current = createChart(chartContainer.current, {
        width: chartContainer.current.offsetWidth,
        height: chartContainer.current.offsetHeight,
        layout: {
          backgroundColor: "#f5f5f5",
        },
        timeScale: {
          timeVisible: false,
          visible: false,
        },
      });

      // Create bid and ask series
      const bidSeries = chart.current.addAreaSeries({
        topColor: "rgba(0, 128, 0, 0.5)",
        lineColor: "rgba(0, 128, 0, 1)",
        lineWidth: 2,
      });

      const askSeries = chart.current.addAreaSeries({
        topColor: "rgba(255, 0, 0, 0.5)",
        lineColor: "rgba(255, 0, 0, 1)",
        lineWidth: 2,
      });

      // Store series references for later updates
      chart.current.bidSeries = bidSeries;
      chart.current.askSeries = askSeries;
    }

    // Format order book data
    const generateTimestamp = () => {
      const now = new Date();
      return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}T${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    };

    const bids = orderBookData?.bids?.map((bid) => ({
      time: generateTimestamp(),
      price: bid[0],
      quantity: bid[1],
    }));

    const asks = orderBookData?.asks?.map((ask) => ({
      time: generateTimestamp(),
      price: ask[0],
      quantity: ask[1],
    }));

    // Update bid and ask series
    chart.current.bidSeries.setData(bids);
    chart.current.askSeries.setData(asks);

    // Handle real-time updates as needed

    return () => {
      // Cleanup on component unmount
      if (chart.current) {
        chart.current.remove();
        chart.current = null;
      }
    };
  }, [orderBookData]);

  return <div ref={chartContainer} style={{ width: "100%", height: "100%" }} />;
};

export default OrderBookChart;

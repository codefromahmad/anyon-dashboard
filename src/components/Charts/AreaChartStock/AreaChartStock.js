import React, { useEffect, useRef, useState } from "react";
import { createChart, LineStyle } from "lightweight-charts";

const AreaChart = ({ data, trend }) => {
  const chartContainer = useRef(null);
  // const [overallTrend, setOverallTrend] = useState("");

  // useEffect(() => {
  //   let overall = ""; // 'positive', 'negative', or 'neutral'

  //   for (let i = 1; i < data.length; i++) {
  //     if (data[i].value > data[i - 1].value) {
  //       overall = "positive";
  //     } else if (data[i].value < data[i - 1].value) {
  //       overall = "negative";
  //     }
  //   }

  //   setOverallTrend(overall);
  // }, [data]);

  useEffect(() => {
    if (!chartContainer.current) return;

    const chart = createChart(chartContainer.current, {
      width: 105,
      height: 40,
      crosshair: {
        vertLine: {
          visible: false,
        },
        horzLine: {
          visible: false,
        },
      },
    });


    const positiveColor = "#09CB09";
    const negativeColor = "#FF0000";
    const areaColor =
      trend === "up" ? positiveColor : negativeColor;

    const areaSeries = chart.addAreaSeries({
      lineColor: areaColor,
      topColor: areaColor,
      bottomColor: `${areaColor}10`, // Adjust opacity as needed
      lineWidth: 2,
      crosshairMarkerVisible: false,
      priceLineVisible: false,
      lastValueVisible: false,
    });

    const formattedData = data.map(({ time, value }) => ({
      time,
      value,
    }));

    areaSeries.setData(formattedData);

    chart.applyOptions({
      leftPriceScale: {
        visible: false,
      },
      rightPriceScale: {
        visible: false,
      },
      timeScale: {
        rightOffset: 0,
        visible: false,
      },
      grid: {
        vertLines: false,
        horzLines: false,
      },
      handleScroll: false,
      handleScale: false, // Disable scaling
    });

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainer} />;
};

export default AreaChart;

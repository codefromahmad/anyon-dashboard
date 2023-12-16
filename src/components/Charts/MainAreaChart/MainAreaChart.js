import React, { useEffect, useRef, useState } from "react";
import { createChart, LineStyle } from "lightweight-charts";
import { format, parse } from "date-fns";
import "./mainareachart.css";
import _debounce from "lodash/debounce"; // Import debounce from lodash

const MainAreaChart = ({ data, trend }) => {
  const chartContainer = useRef(null);
  const tooltipRef = useRef(null);
  const crosshairMoveSubscription = useRef(null); // Declare crosshairMoveSubscription

  useEffect(() => {
    if (!chartContainer.current || !data || data.length === 0) return;

    console.log("Container width:", chartContainer.current.offsetWidth);
    console.log("Number of data points:", data.length);

    const chart = createChart(chartContainer.current, {
      width: chartContainer.current.offsetWidth,
      height: chartContainer.current.offsetHeight,
      crosshair: {
        vertLine: {
          visible: true,
        },
        horzLine: {
          visible: false,
        },
      },
    });

    const positiveColor = "#09CB09";
    const negativeColor = "#FF0000";
    const areaColor = trend === "up" ? positiveColor : negativeColor;

    const areaSeries = chart.addAreaSeries({
      lineColor: areaColor,
      topColor: areaColor,
      bottomColor: `${areaColor}10`,
      lineWidth: 2,
      crosshairMarkerVisible: true,
      priceLineVisible: false,
      lastValueVisible: false,
    });

    // // Subscribe to crosshair move
    crosshairMoveSubscription.current = chart.subscribeCrosshairMove(
      (param) => {
        console.log("param:", param.seriesData.entries().next().value);

        if (param && param.time) {
          const [key, value] = param.seriesData.entries().next().value;

          // Update tooltip content and position
          if (tooltipRef.current) {
            tooltipRef.current.innerHTML = `
            <div>
              <div class="valueDate">${param.time}</div>
              <div class="closePrice">Close price: ${20}</div>
            </div>
          `;
            tooltipRef.current.style.left = `${param.point.x}px`;
            tooltipRef.current.style.top = `${param.point.y}px`;
          }
        } else {
          console.log("No data");
          // Hide tooltip when crosshair is not over a data point
          if (tooltipRef.current) {
            tooltipRef.current.style.left = "-1000px";
          }
        }
      }
    );

    const formattedData = data.map(({ time, value }) => ({
      time,
      value,
    }));

    const handleResize = _debounce(() => {
      if (chart) {
        chart.resize(
          chartContainer.current.offsetWidth,
          chartContainer.current.offsetHeight
        );
        areaSeries.applyOptions({
          timeScale: { rightOffset: 12, leftOffset: 12 },
        });
      }
    }, 10);

    areaSeries.setData(formattedData);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(chartContainer.current);

    // Setting visible range
    // chart.timeScale().setVisibleRange({
    //   from: data[0].time,
    //   to: data[data.length - 1].time,
    // });

    // Setting visible range
    // chart.timeScale().fitContent();

    chart.applyOptions({
      leftPriceScale: {
        visible: false,
      },
      rightPriceScale: {
        visible: true,
      },
      timeScale: {
        visible: true,
      },
      grid: {
        vertLines: false,
        horzLines: false,
      },
      handleScroll: false,
      handleScale: false,
      localization: {
        dateFormat: "Mon dd",
      },
      // localization: {
      //   timeFormatter: (timestamp) => format(timestamp, "yyyy-MM-dd HH:mm"),
      // },
    });

    // Ensure the chart updates its size when the container is resized
    // const handleResize = () => {
    //   chart.applyOptions({
    //     width: chartContainer.current.offsetWidth,
    //     height: chartContainer.current.offsetHeight,
    //   });
    // };

    // window.addEventListener("resize", handleResize);

    return () => {
      // window.removeEventListener("resize", handleResize);
      // Unsubscribe from crosshair move to avoid memory leaks
      if (crosshairMoveSubscription.current) {
        chart.unsubscribeCrosshairMove(crosshairMoveSubscription.current);
      }
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [data, trend]);

  return (
    <div
      ref={chartContainer}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div ref={tooltipRef} className="custom-tooltip" />
    </div>
  );
};

export default MainAreaChart;

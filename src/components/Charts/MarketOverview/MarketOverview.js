import React, { useRef, useEffect } from 'react';
import { createChart } from 'lightweight-charts';

const MarketOverview = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 900,
      height: 200,
      layout: {
        backgroundColor: '#000',
      },
      series: [
        {
          type: 'line',
          data: [
            { time: '2023-06-23', value: 100 },
            { time: '2023-07-23', value: 210 },
            { time: '2023-08-23', value: 520 },
            { time: '2023-09-23', value: 630 },
            { time: '2023-10-23', value: 840 },
            { time: '2023-11-23', value: 1250 },
          ],
        },
        {
          type: 'line',
          data: [
            { time: '2023-06-23', value: 50 },
            { time: '2023-07-23', value: 120 },
            { time: '2023-08-23', value: 300 },
            { time: '2023-09-23', value: 400 },
            { time: '2023-10-23', value: 600 },
            { time: '2023-11-23', value: 900 },
          ],
        },
      ],
    });

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef}></div>;
};

export default MarketOverview;

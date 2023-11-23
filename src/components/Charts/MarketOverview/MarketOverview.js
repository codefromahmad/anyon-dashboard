import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: true,
  plugins: {},
  scales: {
    y: {
      type: "linear",
      display: false,
      position: "left",
    },
    y1: {
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
  aspectRatio: 3,
};

const labels = [
  "Jan 23",
  "Feb 23",
  "Mar 23",
  "Apr 23",
  "May 23",
  "Jun 23",
  "Jul 23",
  "Aug 23",
  "Sep 23",
  "Oct 23",
  "Nov 23",
  "Dec 23",
];

const dataset1Data = [20, 25, 30, 18, 35, 40, 43, 38, 60, 80, 100, 105];
const dataset2Data = [20, 35, 40, 28, 56, 60, 70, 68, 82, 108, 109, 145];

export const data = {
  labels,
  datasets: [
    {
      label: "Portfolio",
      data: dataset1Data,
      borderColor: "#FFA500",
      backgroundColor: "#FFA500",
      borderWidth: 1,
    },
    {
      label: "Market",
      data: dataset2Data,
      borderColor: "#00BA77",
      backgroundColor: "#00BA77",
      borderWidth: 1,
    },
  ],
};

export default function MarketOverview() {
  return <Line options={options} data={data} />;
}

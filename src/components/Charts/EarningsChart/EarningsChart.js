import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  responsive: true,
  plugins: {},
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false, // Hide vertical grid lines
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value, index, values) {
          return `N ${value}k`;
        },
      },
    },
  },
};

const labels = [
  "Nov 12",
  "Nov 13",
  "Nov 14",
  "Nov 15",
  "Nov 16",
  "Nov 17",
  "Nov 1",
];

const dataset1Data = [100, 105, 130, 120, 60, 135, 150];

export const data = {
  labels,
  datasets: [
    {
      label: "Earning",
      data: dataset1Data,
      backgroundColor: "#00BA77",
      barThickness: window.innerWidth > 425 ? 30 : 20, // Adjust the bar thickness (width of bars)
      categoryPercentage: 0.2, // Adjust the space between bars
    },
  ],
};

export default function EarningsChart() {
  return <Bar options={options} data={data} />;
}

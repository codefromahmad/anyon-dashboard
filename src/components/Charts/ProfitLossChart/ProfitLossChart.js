import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-annotation";

const data = [
  { time: "07/23", value: 12 },
  { time: "08/23", value: -15 },
  { time: "09/23", value: 5 },
  { time: "10/23", value: 50 },
  { time: "11/23", value: -12 },
  { time: "12/23", value: -30 },
  { time: "13/23", value: 30 },
];

const formattedData = {
  labels: data.map((entry) => entry.time),
  datasets: [
    {
      label: "Profit/Loss",
      data: data.map((entry) => entry.value),
      backgroundColor: data.map((entry) =>
        entry.value >= 0 ? "green" : "red"
      ),
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    // datalabels: {
    //   formatter: (value, context) =>
    //     context.dataset.data[value.dataIndex] >= 0 ? "Profit" : "Loss",
    //   align: "end",
    //   anchor: "end",
    //   color: "black",
    //   font: {
    //     weight: "bold",
    //   },
    // },
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "horizontal",
          scaleID: "y",
          value: 0,
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const ProfitLossChart = () => {
  return <Bar data={formattedData} options={options} />;
};

export default ProfitLossChart;

import React from 'react'
import { Chart as ChartJS, LineElement, Filler } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(LineElement, Filler)

export const data = {
  labels: [20.5, 22.5, 25.5, 40.5, 100.01, 120.01, 125.01, 134.01, 140.01],
  datasets: [
    {
      fill: true,
      data: [160, 200, 220, 300, 450, 500, 800, 1000, 1400],
      borderColor: '#00BA77',
      backgroundColor: '#00BA774D',
      borderWidth: 1 // You can add this line to control the line width
    }
  ]
}

const options = {
  scales: {
    x: {
      type: 'linear',
      position: 'bottom'
    },
    y: {
      type: 'linear',
      position: 'left',
      display: false
    }
  },
  plugins: {
    legend: {
      display: false // Hide the legend
    },
    tooltip: {
      enabled: false // Disable tooltips
    }
  },
  elements: {
    point: {
      radius: 0 // Hide data points
    }
  },
  scales: {
    x: {
      display: false // Hide x-axis
    },
    y: {
      display: false // Hide y-axis
    }
  },
  layout: {
    padding: {
      top: 10,
      right: 10,
      bottom: 10
    }
  }
}

const OrderBookBids = () => {
  return <Line options={options} data={data} />
}

export default OrderBookBids

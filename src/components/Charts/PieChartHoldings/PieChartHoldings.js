import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

export const data = {
  labels: ['FHLISH', 'FHLISH', 'FHLISH', 'FHLISH', 'FHLISH', 'FHLISH'],
  datasets: [
    {
      label: ' Votes',
      data: [6, 8, 3, 5, 2],
      backgroundColor: ['#00BA77', '#B9D569', '#E3EC77', '#DEB972', '#DE9077'],
      borderWidth: 1
    }
  ]
}

export default function PieChartHoldings () {
  return <Pie data={data} />
}

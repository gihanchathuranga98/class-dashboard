import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart} from 'chart.js/auto'

const LineChart = ({type, label}) => {

    const data = {
        type: "type",
        labels: [2020, 2021, 2022, 2023, 2020, 2021, 2022, 2023],
        datasets: [
            {
                label: "New Students",
                data: [20, 25, 35, 40, 15, 25, 55, 40],
                responsive: true
            }
        ]
    }

  return (
    <Line data={data}/>
  )
}

export default LineChart
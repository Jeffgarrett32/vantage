import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Phishing over Previous Five Years - FBI',
      },
    },
  };



  export const data = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        Labels: ['2017','2018', '2019', '2020', '2021'],
        data: [25344, 26739, 114702, 241342, 323972],
        backgroundColor: [
            'rgba(255, 170, 90, 0.8)',
            'rgba(243, 202, 64, 0.8)',
            'rgba(114, 112, 255, 0.8)',
            'rgba(255, 120, 90, 0.8)',
            'rgba(247, 237, 226, 0.8)',

        ],
        borderColor: [
            'rgba(25, 25, 25, 0.8)',
            'rgba(25, 25, 25, 0.8)',
            'rgba(25, 25, 25, 0.8)',
            'rgba(25, 25, 25, 0.8)',
            'rgba(25, 25, 25, 0.8)',
          ],
          borderWidth: 2,
      },

    ],
  };

function BarChart() {
  return (
    <div><Bar options={options} data={data} /> </div>
  )
}

export default BarChart
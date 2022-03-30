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
    
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    
    responsive: true,
    plugins: {
      legend: {
        display: true,
        
      },
      title: {
        display: true,
        text: 'Internet Crimes Report - FBI',
      },
      
    },
  };



  export const data = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        axis: 'y',
        label: 'Reported Personal Data Breaches',
        Labels: ['2017','2018', '2019', '2020', '2021'],
        data: [30904, 50642, 38218, 45330, 51829],
        backgroundColor: [
            '#3836A3',


        ],
        borderColor: [
            '#7270FF',
          ],
          borderWidth: 2,
      },
      {
        axis: 'y',
        label: 'Reported Phishing Incidents',
        Labels: ['2017','2018', '2019', '2020', '2021'],
        data: [25344, 26739, 114702, 241342, 323972],
        backgroundColor: [
            '#7270FF',

        ],
        borderColor: [
            '#3836A3',
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
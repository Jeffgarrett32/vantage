import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register( Tooltip, Legend);


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Incident Repsonse Grade by Size of Security Staff',
    },
  },
  
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      ticks: {
        format: {
          style: 'percent'
        }
      },
      x: {
        type: 'Number of Employees',
        labels: ['Less than 3', '3-7', '7-11', '11-20', '20-33', '33-50', '50-96', '96-150', '150-320', 'More than 320',]
    }
    },
    
  },
};

const labels = ['Less than 3', '3-7', '7-11', '11-20', '20-33', '33-50', '50-96', '96-150', '150-320', 'More than 320',];

export const data = {
  labels,
  datasets: [
    {
      label: 'Cisco Security Outcomes Score',
      data: [.558, .648, .66, .638, .703, .711, .704, .729, .738, .783],
      borderColor: '#7270FF',
      fill: 1,
      yAxisID: 'y',
      lineTension: 0.3,
      backgroundColor: '#3836A3'
    },
    
  ],
};
  function LineChart() {
    return (
      <>
      {/* <h1 className='w-full justify-self-center justify-items-center pt-4 font-bold font-sans text-center'> Ransomware Victims by Company Revenue (%), Q4 2021</h1> */}
      <div><Line data={data} options={options}/></div>
      </>
    )
  }
  
  export default LineChart
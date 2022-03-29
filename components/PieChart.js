import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['$1 Billion', '$500M - $1B', '$250M - $500M', '$100M - $250M', '$50M - $100M', '$10M - $50M', '< $10M'],
    datasets: [
      {
        label: 'Ransomware Victim Company Revenue (%), Q4 2021',
        data: [8, 4, 6, 9, 12, 30, 31],
        backgroundColor: [
          'rgba(255, 170, 90, 0.8)',
          'rgba(103, 204, 113, 0.8)',
          'rgba(243, 202, 64, 0.8)',
          'rgba(114, 112, 255, 0.8)',
          'rgba(248, 125, 235, 0.8)',
          'rgba(255, 120, 90, 0.8)',
          'rgba(247, 237, 226, 0.8)',
        ],
        borderColor: [
          'rgba(25, 25, 25, 0.8)',
          'rgba(25, 25, 25, 0.8)',
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

  function PieChart() {
    return (
      <>
      <h1 className='w-full justify-self-center justify-items-center pt-4 font-bold font-sans text-center'>Ransomware Victims by Company Revenue (%), Q4 2021</h1>
      <div><Pie data={data} /></div>
      </>
    )
  }
  
  export default PieChart
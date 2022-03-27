import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ArcOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Phishing', 'Vulnerability Exploitation', 'Stolen Credentials', 'Brute Force', 'Other'],
  datasets: [
    {
      label: 'Top Infection Vectors, 2021',
      data: [41, 34, 9, 6, 9],
      backgroundColor: [
        'rgba(255, 170, 90, 0.8)',
        'rgba(243, 202, 64, 0.8)',
        'rgba(114, 112, 255, 0.8)',
        'rgba(255, 120, 90, 0.8)',
        'rgba(247, 237, 226, 0.8)',
        'rgba(255, 159, 64, 0.8)',
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




function DonutChart() {
  return (
    <>
    <h1 className='w-full justify-self-center justify-items-center pt-4 font-bold font-sans text-center'>Top Infection Vectors, 2021:</h1>
    <div className='pt-4 row-span-1 justify-center items-center'>
    
    <Doughnut 
      data={data}/>
    </div>
    
    </>
  )
}

export default DonutChart
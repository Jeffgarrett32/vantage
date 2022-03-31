import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ArcOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'start',
    },
    layout: {
      
    },

    title: {
      display: true,
      text: 'Ransomware Victims by Company Revenue (%), Q4 2021',
      padding: 15,
      align: 'center'
      
    },
    
    
  },
};

export const data = {
  labels: ['$1 Billion', '$500M - $1B', '$250M - $500M', '$100M - $250M', '$50M - $100M', '$10M - $50M', '< $10M'],
    datasets: [
      {
        label: 'Ransomware Victim Company Revenue (%), Q4 2021',
        data: [8, 4, 6, 9, 12, 30, 31],
        backgroundColor: [
          '#050443',
          '#232179',
          '#4F4DAE',
          '#8785E1',
          '#C7C6FF',
          '#DDDCFF',
          '#F8F8FF',
        ],
        borderColor: [
          '#000000',
          

        ],
        borderWidth: 1,
      },
    ],
  };




function DonutChart() {
  return (
    <>
    {/* <h1 className='w-full justify-self-center justify-items-center pt-4 font-bold font-sans text-center'>Top Infection Vectors, 2021:</h1> */}
    <div className='pt-4 row-span-1 justify-center items-center'>
    
    <Doughnut 
      data={data} options={options}/>
    </div>
    
    </>
  )
}

export default DonutChart
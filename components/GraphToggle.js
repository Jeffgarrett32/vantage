import { React, useState } from 'react'
import { Chart } from 'react-chartjs-2';
import BarChart from '../components/BarChart'
import DonutChart from '../components/DonutChart'
import LineChart from './LineChart'

function GraphToggle() {
  
    const [showBar, setBar] = useState(false);
    const [showPie, setPie] = useState(false);
    const [showDonut, setDonut] = useState(false);

    function handleBar() {
        setBar (!showBar)
        setPie (false)
        setDonut(false)
    }
    
    function handlePie() {
        setPie (!showPie)
        setBar(false)
        setDonut(false)
    }

    function handleDonut() {
        setDonut (!showDonut)
        setBar(false)
        setPie(false)
    }

    return (
        <div className='h-screen'>
        <div className='grid grid-cols-3 justify-items-center gap-10 px-14'>
            
            <button onClick={() => handleBar()}className="col-span-1 grid grid-rows-1 grid-cols-3  text-base font-medium font-jetbrains rounded-md bg-blue-32 border border-black py-4 px-4 w-full hover:animate-wiggle hover:drop-shadow-md focus:animate-wiggle focus:drop-shadow-md">
                  <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                    {" "}
                    <p>
                      FBI 2021 Internet Crime Report
                    </p>
                    <br></br>
                    <p>
                      Check out the rise of phishing over the past 5 years. Read the full thing <a className='underline font-bold hover:text-blue-32' href='https://www.ic3.gov/Media/PDF/AnnualReport/2021_IC3Report.pdf'>here</a>
                    </p>
                    </div>
                  </button>
                
    
                <button onClick={() => handlePie()} className="col-span-1 grid grid-rows-1 grid-cols-3  text-base font-medium font-jetbrains rounded-md bg-blue-32 border border-black py-4 px-4 w-full focus:animate-wiggle focus:drop-shadow-md hover:animate-wiggle hover:drop-shadow-md">
                  <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                    {" "}
                    <p>
                      Cisco&apos;s 2021 Security Outcomes Study
                    </p>
                    <br></br>
                    <p>
                      See how a small difference in security staff can go a long way, saving your organization from cyber liabilities down the road.
                    </p>
                  </div>
                </button>
    
                <button onClick={() => handleDonut()} className="col-span-1 grid grid-rows-1 grid-cols-3 text-base font-medium font-jetbrains rounded-md bg-blue-32 border border-black py-4 px-4 w-full hover:animate-wiggle hover:drop-shadow-md focus:animate-wiggle focus:drop-shadow-md">
                  <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                    {" "}
                    <p>
                      2021 Anti-Phishing Working Group Report
                    </p>
                    <br></br>
                    <p className=''>
                      Take a look at the distribution of ransomware victims by the size of affected organizations. 
                    </p>
                  </div>
                </button>
            
        </div>
        <div>
        <div className='flex w-full h-90 justify-center items-start bg-neutral-200' >
         
        <div className={`${showBar ?  'w-7/12 p-5' : 'hidden'} `}>
           <BarChart/>
           </div>
        </div>
        <div className='flex w-full h-auto justify-center items-start bg-neutral-200' >
         
        <div className={`${showPie ?  'w-7/12 p-5' : 'hidden'} `}>
           <LineChart/>
           </div>
        </div>

        <div className='flex w-full h-auto justify-center items-start bg-neutral-200' >
         
         <div className={`${showDonut ?  'w-4/12 px-5' : 'hidden'} `}>
            <DonutChart />
            </div>
         </div>

        </div>
        </div>
                // <BarChart></BarChart>
                // <DonutChart></DonutChart>
                //
  )
}

export default GraphToggle
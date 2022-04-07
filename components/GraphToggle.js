import { React, useState } from 'react'
import { Chart } from 'react-chartjs-2';
import BarChart from '../components/BarChart'
import DonutChart from '../components/DonutChart'
import LineChart from './LineChart'
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";

function GraphToggle() {
  
    const [showBar, setBar] = useState(false);
    const [showPie, setPie] = useState(false);
    const [showDonut, setDonut] = useState(false);
    const [isIn, setIn] = useState(false);

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

    const firstBlock = useSpring({
      from: {x: 1800},
      to: {x: 0},
      delay: 400,
      config: { mass: 1.5 }
  });

  const secondBlock = useSpring({
    from: {x: 1800},
    to: {x: 0},
    delay: 1200,
    config: { mass: 1.3 }
  });

  const thirdBlock = useSpring({
    from: {x: 1800},
    to: {x: 0},
    delay: 1400,
    config: { mass: 1.5 }
  });

    return (
        <div className='pt-7 pb-10'>
        <div className='grid grid-cols-3 justify-items-center gap-10 px-14'>
            <animated.div style={ firstBlock }
             className="col-span-1 grid grid-rows-1 grid-cols-3 font-mono rounded-md bg-blue-32 border border-black py-4 px-4 w-full hover:animate-wiggle hover:drop-shadow-md focus:animate-wiggle focus:drop-shadow-md">
                  <div onClick={() => handleBar()} className="hover:cursor-pointer col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black text-xl">
                    {" "}
                    <p>
                      FBI 2021 Internet Crime Report
                    </p>
                    <br></br>
                    <p>
                      Check out the rise of phishing over the past 5 years. Read the full thing <a className='underline font-bold hover:text-blue-32' href='https://www.ic3.gov/Media/PDF/AnnualReport/2021_IC3Report.pdf'>here</a>
                    </p>
                    </div>
                  </animated.div>
                
    
                <animated.div style={secondBlock}  className="col-span-1 grid grid-rows-1 grid-cols-3  text-base font-medium font-mono rounded-md bg-blue-32 border border-black py-4 px-4 w-full focus:animate-wiggle focus:drop-shadow-md hover:animate-wiggle hover:drop-shadow-md">
                  <div onClick={() => handlePie()} className="hover:cursor-pointer col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black text-xl">
                    {" "}
                    <p>
                      Cisco&apos;s 2021 Security Outcomes Study
                    </p>
                    <br></br>
                    <p>
                      See how a small difference in security staff can go a long way, saving your organization from cyber liabilities down the road.
                    </p>
                  </div>
                </animated.div>
    
                <animated.div style={thirdBlock} className="col-span-1 grid grid-rows-1 grid-cols-3 text-base font-medium font-mono rounded-md bg-blue-32 border border-black py-4 px-4 w-full hover:animate-wiggle hover:drop-shadow-md focus:animate-wiggle focus:drop-shadow-md">
                  <div onClick={() => handleDonut()} className="hover:cursor-pointer col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black text-xl">
                    {" "}
                    <p>
                      2021 Anti-Phishing Working Group Report
                    </p>
                    <br></br>
                    <p className=''>
                      Take a look at the distribution of ransomware victims by the size of affected organizations. 
                    </p>
                  </div>
                </animated.div>
            
        </div>
        <div className='text-justify'>
        <div className='flex w-full h-90 justify-center items-start' >
         
        <div className={`${showBar ?  'w-8/12 p-3 pb-12 justify-center' : 'hidden pb-12'} `}>
           <animated.div style={secondBlock} className='flex flex-col mx-14 justify-self-center h-32 p-5 w-6/8 font-mono text-xl text-justify'> <p>As organizations continue to work remotely, dependance on email for work has never been higher. Additionally, as cybercrime has matured and scaled, phishing has become a considerable threat to information security at a personal and organizational level.</p>
           </animated.div>
           <BarChart/>
           </div>
        </div>
        <div className='flex w-full h-90 justify-center items-start' >
         
        <div className={`${showPie ?  'w-8/12 p-3 pb-12' : 'hidden pb-12'} `}>
        <animated.div style={secondBlock} className='flex flex-col mx-14 justify-self-center h-32 p-5 w-6/8 font-mono text-xl text-justify'> <p>Cisco&apos;s survey found that smaller and underequipped organizations struggle to respond to security incidents. This lesson, along with others, will help heighten security awareness and improve decision-making when you need it most.</p>
           </animated.div>
           <LineChart/>
           </div>
        </div>

        <div className='flex w-full h-90 justify-center items-start' >
         
         <div className={`${showDonut ?  'w-8/12 p-3 pb-12' : 'hidden pb-12'} `}>
         <animated.div style={secondBlock} className='flex flex-col mx-14 justify-self-center min-h-32 p-5 pt-6 w-6/8 font-mono text-xl text-justify'> <p>Ransomware, a common objective of phishing campaigns, can be incredibly costly. 31% of 2021&apos;s ransomware victims were organizations earning less than $10 million in revenue.</p>
           </animated.div>
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


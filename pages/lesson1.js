import React from 'react'
import Image from 'next/Image';
import CountUpAnimation from '../components/CountUpAnimation';
import DonutChart from '../components/DonutChart';
import Carousel from '../components/Carousel';
import Flipcard from '../components/Flipcard';
import Navlesson from '../components/Navlesson';
import GraphToggle from '../components/GraphToggle';

function lesson1() {
  return (
    <div>
    <Navlesson/>
    <section className="">
      <div className="flex bg-neutral-300 justify-center w-screen h-full">
        <div className="flex justify-center w-screen bg-repeat bg-[url(https://i.postimg.cc/mDZ8z7zy/Vector-3.png)]">
          
          <div className="grid grid-cols-2 grid-flow-row items-center bg-neutral-200 border-x border-black gap-6 w-5/6 justify-center">
          <div className='flex w-full col-span-2 justify-center items-end justify-self-center'><div className='pt-10'><Image className="pt-10" src="/hackerCat.png" alt="arthere" width="300" height="300"/></div>
            </div>

            <div className='flex w-5/6 items-center justify-self-center col-span-2 border-stone-32 border border-t-[0.5px] mb-6'></div>
            <div className="row-span-1 col-span-2 text-3xl font-bold justify-self-center pb-3 pl-8">
              {" "}
              What is Social Engineering?{" "}
            </div>
            
            <div className="col-span-2 grid grid-rows-1 grid-cols-3 justify-self-center text-base font-medium font-jetbrains rounded-md bg-blue-32 border border-black py-4 px-4 w-4/6">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                <p>
                  Social engineering is the act of tricking individuals into
                  divulging their sensitive information for malicious purposes.
                </p>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="row-span-1 col-span-2 bg-neutral-200 rounded-lg justify-self-center text-3xl font-bold pt-10 pb-5">
              Phishing by the numbers
            </div>
            <div className="row-span-1 col-span-1 grid grid-rows-1 grid-cols-3 bg-yellow-32 border border-black rounded-sm w-4/6 justify-self-end p-4 h-full min-h-64">
              <div className='col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black font-jetbrains'>
              <p><span className="font-bold"><CountUpAnimation duration={1200}>96</CountUpAnimation>%</span> of phishing attacks emerged
              from email.</p>
              <br></br>
              <p> <span className="font-bold"><CountUpAnimation duration={1000}>61</CountUpAnimation>% </span>of companies deal with phishing attacks via their
              social media channels.</p>
              <br></br>
              <p>In <span className="font-bold"><CountUpAnimation duration={800}>23</CountUpAnimation>% </span>of organizations hit by phishing, the victim is fired or leaves voluntarily.</p>
              </div>
            </div>
              
            <div className="row-span-2 col-span-1 grid grid-rows-1 grid-cols-3 bg-amber-32 border border-black rounded-sm w-4/6 justify-self-start p-4 h-full min-h-64">
              
              <div className='col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black font-jetbrains'>
                  <p> 
                    Installing ransomware is a popular goal of phishing campaigns.</p>
                    <br></br> 
                    <p> The average ransom payment is around <span className='font-bold'>$<CountUpAnimation duration={1200}>200</CountUpAnimation>,000</span> The largest paid was <span className='font-bold'>$<CountUpAnimation duration={800}>40</CountUpAnimation>m.</span></p>
                    <br></br>
                    <p className='pb-2'>Companies hit experience approximately <span className='font-bold'><CountUpAnimation duration={800}>21</CountUpAnimation></span> days of downtime.

                    </p>
                    <DonutChart/>
              </div>
            </div>


            <div className="row-span-1 col-span-1 grid grid-rows-1 grid-cols-3 bg-blue-32 border border-black rounded-sm w-4/6 justify-self-end p-4 h-full">
              <div className='col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black font-jetbrains'>
              <p> The average user has more than
              <span className='font-bold'> <CountUpAnimation duration={800}> 90</CountUpAnimation></span> online accounts.</p>
                    <br></br> 
                    <p> <span className='font-bold'><CountUpAnimation duration={800}>41</CountUpAnimation>%</span> of data breaches started with compromised user credentials.</p>
                    <br></br>
                    <p> <span className='font-bold'><CountUpAnimation duration={1200}>82</CountUpAnimation>% </span>  of users admit they reuse passwords across various accounts.

                    </p>
              </div>
            </div>


            <div className="row-span-1 col-span-2 grid grid-rows-1 grid-cols-3 bg-rose-32 border border-black rounded-sm w-4/6 justify-self-center p-4 h-full">
              <div className='col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black font-jetbrains'>
              <p> 
              It takes approximately <span className='font-bold'><CountUpAnimation duration={1200}>250</CountUpAnimation> days</span> to detect breaches resulting from compromised user credentials.</p>
                    <br></br> 
                    <p>According to the FBI, phishing attempts nearly <span className='font-bold'>doubled</span> in 2020 compared to 2019.</p>
                    
                   
              </div>
            </div>


            <div className="row-span-1 col-span-2 bg-neutral-200 rounded-lg justify-self-center text-3xl pt-10 pb-2 font-bold">
              Phishing techniques
            </div>

            <div className=" col-span-2 grid grid-rows-1 grid-cols-3 justify-self-center text-base font-medium font-jetbrains rounded-md bg-amber-32 border border-black p-4 w-4/6 h-64">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                As attackers grow more sophisticated, it can be difficult to spot the difference between a hoax and the real thing. Here are some of the most common social engineering schemes in use today.


              </div>
            </div>
            <div className='col-span-2 flex justify-center pb-10'>
            <div className='px-5'><Image className="" src="/hackerCat.png" alt="arthere" width="300" height="300"/></div>
              <Carousel className=''/>
            </div>
            <div className='col-span-2'>
            
            <div>
                <GraphToggle/>
            </div>
            

            </div>
          </div>
        </div>
      </div>

    </section>
    </div>
  )
}

export default lesson1
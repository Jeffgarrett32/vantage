import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navlesson from '../components/Navlesson'
import GraphToggle from '../components/GraphToggle'
import Carousel from '../components/Carousel'
import FlipCard from '../components/Flipcard'
import DemoIntro from '../components/DemoIntro'
import Button from '../components/Button';

function Demo() {
  const caseRef = useRef(null)
  return (
    <div>
      <Parallax pages={5} ref={caseRef} className="bg-neutral-100">
        
        <ParallaxLayer offset={0} factor={1} speed={.5} className=" bg-neutral-100">
        <Navlesson />
        <DemoIntro />
        <div className='flex w-full  justify-center py-10 '>
        <button onClick={() => caseRef.current.scrollTo(1)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700 hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Get Started
    </button>
    </div>
        </ParallaxLayer>
        
        
        <ParallaxLayer ref={caseRef} offset={1} factor={1.1} speed={.5} className="justify-center bg-blue-16"
        >
          <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Real World Case Studies
          </h1>
          <GraphToggle />
          <div className='flex absolute inset-x-0 bottom-[85px] w-full justify-center space-x-5 '>
          <button onClick={() => caseRef.current.scrollTo(0)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Previous
    </button>
    <button onClick={() => caseRef.current.scrollTo(2)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Next
    </button>
    </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={.5} className="bg-yellow-16 ">
          <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Phishing Techniques
          </h1>
          <div className='flex justify-center pt-10'>
            <div className="grid grid-rows-1 grid-cols-3 justify-self-center text-lg font-medium font-jetbrains rounded-md bg-yellow-32 border border-black p-4 w-4/6 h-48">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                As attackers grow more sophisticated, it can be difficult to
                spot the difference between a hoax and the real thing. Here are
                some of the most common social engineering schemes in use today.
              </div>
            </div>
          </div>
          <div className='flex justify-center py-10'>
          <Carousel/>
          </div>
          <div className='flex w-full justify-center space-x-5 py-10'>
          <button onClick={() => caseRef.current.scrollTo(1)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Previous
    </button>
    <button onClick={() => caseRef.current.scrollTo(3)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Next
    </button>
    </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={1.5} speed={.5} className="bg-amber-16">
          
          <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Pop Quiz!
          </h1>
          <div className='flex pt-10'>
            <FlipCard/>
          </div>
          <div className='flex pt-10'>
            <FlipCard/>
          </div>
          <div className='flex w-full justify-center space-x-5 py-10'>
        <button onClick={() => caseRef.current.scrollTo(2)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Previous
    </button>
    <button onClick={() => caseRef.current.scrollTo(4)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Next
    </button>
    </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={1} speed={.5} className="bg-rose-16">
        <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Wrap Up
          </h1>
          <div className='flex w-full justify-center space-x-5 py-10'>
        <button onClick={() => caseRef.current.scrollTo(0)} className= 'font-bold bg-neutral-100 p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700  hover:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Back to top
    </button>
    </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Demo
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navlesson from '../components/Navlesson'
import GraphToggle from '../components/GraphToggle'
import Carousel from '../components/Carousel'
import FlipCard from '../components/Flipcard'

function demo() {
  return (
    <div>
      <Parallax pages={5} className="flex flex-col bg-neutral-100">
        <Navlesson />
        <ParallaxLayer
          offset={0.105}
          className="flex bg-neutral-100"
        ></ParallaxLayer>

        <ParallaxLayer
          offset={1.105}
          factor={2}
          className="justify-center bg-blue-16"
        >
          <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Real World Case Studies
          </h1>
          <GraphToggle />
        </ParallaxLayer>
        <ParallaxLayer offset={2.105} className="bg-yellow-16 ">
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
          <div className='flex justify-center pt-10'>
          <Carousel/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.105} className="bg-amber-16">
          
          <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Pop Quiz!
          </h1>
          <div className='flex pt-10'>
            <FlipCard/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={4.105} className="bg-amber-16">

        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default demo
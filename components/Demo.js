import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navlesson from '../components/Navlesson'
import GraphToggle from '../components/GraphToggle'
import FlipCard from '../components/Flipcard'
import DemoIntro from '../components/DemoIntro'
import Button from '../components/Button';
import SpringCarousel from './SpringCarousel'
import ComicStrip from './ComicStrip'
import Lottie from 'lottie-react';
import arrowUp from '../lotties/arrowUpCircle.json'
import arrowDown from '../lotties/arrowDownCircle.json'
import Explainer from './Explainer'

function Demo() {
  const caseRef = useRef(null) 
  const style1 = {
    height: 70
}
const loop = {
    Type: 'Boolean',
    Default: true
}
const autoplay = {
    Type: 'Boolean',
    Default: false
}


  return (
    <div className="max-w-6xl">
      <Parallax pages={6} ref={caseRef} className="h-full gradient">
        <ParallaxLayer offset={0} factor={1} speed={0.5} className="">
          <Navlesson />
          <DemoIntro />
          <div className="flex w-full justify-center py-10 ">
            <button
              onClick={() => caseRef.current.scrollTo(1)}
              className="font-bold bg-yellow-32 font-mono text-lg animate-bounce p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700 hover:text-yellow-32 focus:shadow-lg hover:shadow-md text-center scale-105"
              type="submit"
            >
              {" "}
              Get Started
            </button>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className=" ">
        <div className="flex justify-center py-10 text-5xl font-bold text-neutral-711">
            <button onClick={() => caseRef.current.scrollTo(0)} className="">
              <Lottie
                className="arrow hover:-translate-y-[1px]"
                animationData={arrowUp}
                style={style1}
                autoplay={false}
              />
            </button>
            <h1 className='flex items-center px-5'>Social Engineering Explained</h1>
            <button onClick={() => caseRef.current.scrollTo(2)} className="">
              <Lottie
                className="arrow"
                animationData={arrowDown}
                style={style1}
                autoplay={false}
              />
              </button>
              
              
          </div>
          <Explainer />
        </ParallaxLayer>
        <ParallaxLayer
          ref={caseRef}
          offset={2}
          factor={1.2}
          speed={0.5}
          className="justify-center "
        >
          <div className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            <button onClick={() => caseRef.current.scrollTo(1)} className="">
              <Lottie
                className="arrow hover:-translate-y-[1px]"
                animationData={arrowUp}
                style={style1}
                autoplay={false}
              />
            </button>
            <h1 className='flex items-center px-5'>Social Engineering Techniques</h1>
            <button onClick={() => caseRef.current.scrollTo(3)} className="">
              <Lottie
                className="arrow hover:translate-y-[1px]"
                animationData={arrowDown}
                style={style1}
                autoplay={false}
              />
              </button>
          </div>
          <div className="flex justify-center h-auto cursor-grab active:cursor-grabbing">
            <ComicStrip />
            
          </div>

        </ParallaxLayer>
        
        <ParallaxLayer offset={3} speed={0.5} className=" ">
        <div className="flex justify-center pt-10 text-5xl font-bold text-neutral-711">
            <button onClick={() => caseRef.current.scrollTo(2)} className="">
              <Lottie
                className="arrow hover:-translate-y-[1px]"
                animationData={arrowUp}
                style={style1}
                autoplay={false}
              />
            </button>
            <h1 className='flex items-center px-5'>Real World Case Studies</h1>
            <button onClick={() => caseRef.current.scrollTo(4)} className="">
              <Lottie
                className="arrow hover:translate-y-[1px]"
                animationData={arrowDown}
                style={style1}
                autoplay={false}
              />
              </button>
          </div>
<GraphToggle />
         
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={1.5} speed={0.5} className="">
        <div className="flex justify-center pt-10 text-5xl font-bold text-neutral-711">
            <button onClick={() => caseRef.current.scrollTo(3)} className="">
              <Lottie
                className="arrow hover:-translate-y-[1px]"
                animationData={arrowUp}
                style={style1}
                autoplay={false}
              />
            </button>
            <h1 className='flex items-center px-5'>Pop Quiz!</h1>
            <button onClick={() => caseRef.current.scrollTo(5)} className="">
              <Lottie
                className="arrow hover:translate-y-[1px]"
                animationData={arrowDown}
                style={style1}
                autoplay={false}
              />
              </button>
          </div>
          <div className="flex justify-center h-auto">
            </div>
            <div className='cursor-grab active:cursor-grabbing'>
          <SpringCarousel/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5} factor={1} speed={0.5} className="">
          <h1 className="flex justify-center pt-10 pb-2 text-5xl font-bold text-neutral-711">
            Wrap Up
          </h1>
          <div className="flex w-full justify-center space-x-5 py-10">
            <button
              onClick={() => caseRef.current.scrollTo(0)}
              className="font-bold bg-yellow-32 font-mono animate-bounce p-3 w-1/6 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700 hover:text-yellow-32 focus:shadow-lg hover:shadow-md text-center scale-105"
              type="submit"
            >
              {" "}
              Back to top
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Demo
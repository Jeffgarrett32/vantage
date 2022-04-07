import React, { useState } from 'react'
import BarChart from '../components/BarChart'
import DonutChart from '../components/DonutChart'
import GraphToggle from '../components/GraphToggle'
import LineChart from '../components/LineChart'
import { useSpring, animated } from '@react-spring/web'
import SpringTest from '../components/SpringTest'
import DemoIntro from '../components/DemoIntro'
import SpringCarousel from '../components/SpringCarousel'
import Lottie from "lottie-react";
import dataAnimation from '../lotties/drag.json'
import Slide from '../components/Slide'
import hack from '../lotties/hack.json'

function testpage({header, content}) {

  const style = {
    height: 50
}
const style1 = {
    height: 350
}
const style2 = {
    height: 500
}

const loop = {
  loops: 3
}

const autoplay = {
    Type: 'Boolean',
    Default: false
}

const onComplete ={
  
}

    return (
      <div>
        <div className="grid grid-cols-3 grid-rows-2 items-center justify-items-center border h-screen w-screen border-black">
          <div className="col-span-1 row-span-1 border w-full h-full place-items-center justify-self-center">
            {" "}
            ok{" "}
          </div>
          <div className="col-start-2 row-span-2 border w-full h-full items-center place-self-center justify-self-center">
          <Lottie className='pt-10 -pb-5' animationData={hack} style={style2}/>
          </div>
          <div className="col-start-3 row-span-1 border w-full h-full items-center justify-self-center">
            ok
          </div>
          <div className="col-span-1 row-span-1 border w-full h-full items-center justify-self-center">
            {" "}
            ok{" "}
          </div>

          <div className="col-start-3 row-span-1 border w-full h-full items-center justify-self-center">
            {" "}
            ok{" "}
          </div>
        </div>
      </div>
    );
}

export default testpage
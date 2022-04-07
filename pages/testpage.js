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
import Explainer from '../components/Explainer'

function testpage({}) {

  const style = {
    backgroundColor: '#7270FF'
  }

  const slideContent1 = (<div>
    <p>As attackers grow more sophisticated, it can be difficult to
    spot the difference between a hoax and the real thing. Here are
    some of the most common social engineering schemes in use today.</p> <br></br>
    <div className='flex w-full justify-center px-4'>
        Social Engineering Psychology
    </div>
    <div className='flex w-full justify-center space-x-14 px-4'>
        <div>
            Intimidation
        </div>
        <div className=''>
            Urgency
        </div>
        <div>
            Authority
        </div>
    </div>
    </div>)

    return (
      <div>
            <Explainer />
      </div>
    );
}

export default testpage
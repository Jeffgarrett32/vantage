import React, { useState } from 'react'
import BarChart from '../components/BarChart'
import DonutChart from '../components/DonutChart'
import GraphToggle from '../components/GraphToggle'
import LineChart from '../components/LineChart'
import { useSpring, animated } from '@react-spring/web'
import SpringTest from '../components/SpringTest'
import DemoIntro from '../components/DemoIntro'
import SpringCarousel from '../components/SpringCarousel'

function testpage() {
    return (
     <div className='flex items-center justify-center w-screen h-screen overflow-hidden'>
        <SpringCarousel/>
     </div>
     
  )
}

export default testpage
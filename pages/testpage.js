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
import ComicStrip from '../components/ComicStrip'

const slidePage = {
  header: "there is only room for one of us.",
  content: "not a suprise, seeing you here."
}

function testpage({header, content}) {
    return (
     <div>
       <ComicStrip/>
     </div>
     
  )
}

export default testpage
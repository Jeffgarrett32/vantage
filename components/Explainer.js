import React from 'react'
import Lottie from "lottie-react";
import hack from '../lotties/hack.json'
import Slide from '../components/Slide.js';
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";

function Explainer() {
    

    const textBlock = useSpring({
        from: {x: -1800, y:1800},
        to: {x: 0, y:0},
        delay: 400,
        config: { mass: 2, friction: 50  }
    });


    const firstBlock = useSpring({
        from: {x: -1800, y:1800},
        to: {x: 0, y:0},
        delay: 800,
        config: { mass: 1.5, friction: 50  }
    });
  
    const secondBlock = useSpring({
      from: {x: 1800, y:800},
      to: {x: 0, y:0},
      delay: 1300,
      config: { mass:1.5, friction:50 }
    });
  
    const thirdBlock = useSpring({
      from: {x: 1800, y:400},
      to: {x: 0, y: 0},
      delay: 1500,
      config: { mass: 1.5, friction: 50  }
    });

    const content = (
        <div> <h1 className='font-bold pb-2'>Urgency</h1>
        <p className='flex w-full text-center text-md'> If a request is made for you to take action immediately, take a second to consider asking for a second opinion. Even if it appears to be a message from someone you trust. </p>
              </div>
    )

    const content2 = (
        <div>
            <h1 className='font-bold pb-2'>Intimidation</h1>
        <p className='flex w-full text-center text-md'> Often times, social engineering messages will use a threatening tone to make you act without thinking twice. If a strange message is threatening a lawsuit or financial penalty, something may be up.</p>
        </div>
    )

    const content3 = (
        <div>
            <h1 className='font-bold pb-2'>Authority</h1>
        <p className='flex w-full text-center text-md'> Criminals frequently impersonate legitimate institutions to gain social proof. Attackers may pose as a government agency, a large corporation, or even your boss. </p>
        </div>
    )
    const blue = { 
        backgroundColor: '#7270FF',
        width: '80%',
        height: '100%',
        marginBottom: '15px'
    }
    const yellow = { 
        backgroundColor: '#F3CA40',
        width: '80%',
        height: '100%',
        marginBottom: '15px'
    }
    const red = { 
        backgroundColor: '#FF785A',
        width: '80%',
        height: '100%',
        marginBottom: '15px'
    }
    const style = {
        height: 50
    }
    const style1 = {
        height: 350
    }
    const style2 = {
        height: 350,
        width: 700
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
          <div className="overflow-hidden">
            <div className="grid grid-cols-6 grid-rows-2 items-center justify-items-center h-auto w-screen border-black">
              <div className="col-start-1 col-span-3 row-span 1 w-full h-auto flex items-center ">
                <animated.div
                  style={textBlock}
                  className="flex w-full ml-[150px]"
                >
                  <div className="flex flex-col w-full justify-items-end text-xl font-mono">
                    <p className="flex w-full justify-self-center justify-end">
                      Being aware of social engineering methods is crucial
                      to preventing a security breach. Criminals can spend months
                      collecting information used to build trust and credibility
                      with their targets.
                    </p>
                    <p className="flex w-full justify-self-center justify-end pt-10">
                      Social Engineering is the most common technique attackers use to gain initial access to networks.
                      From there, they can deploy all sorts of nasty stuff, or simply collect information while remaining undetected for months or even years.
                    </p>
                  </div>
                </animated.div>
              </div>
              <div className="col-start-4 col-span-3 row-span-1 w-auto pb-14 h-80 flex items-center justify-start">
                <Lottie
                  className="mr-14 mt-10"
                  animationData={hack}
                  style={style2}
                />
              </div>
              <div className="ml-14 col-start-1 col-span-2 row-start-2 w-full h-full flex items-center justify-center pt-10 ">
                <animated.div style={firstBlock}>
                  <Slide className="" style={blue} content={content} />
                </animated.div>
              </div>
              <div className="col-start-3 col-span-2 row-start-2 w-full h-full flex items-center justify-center pb-10">
                <animated.div style={secondBlock}>
                  <Slide className="" style={yellow} content={content2} />
                </animated.div>
              </div>
              <div className="mr-14 col-start-5 col-span-2 row-start-2 w-full h-full flex items-center justify-center pt-10">
                <animated.div style={thirdBlock}>
                  <Slide className="" style={red} content={content3} />
                </animated.div>
              </div>
            </div>
          </div>
        );
}

export default Explainer
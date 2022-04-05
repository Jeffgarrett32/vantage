import React, {useState} from 'react'
import Image from 'next/image';
import CountUpAnimation from './CountUpAnimation';
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";

function DemoIntro() {
  
  const [isIn, setIn] = useState(false);
  const toggle = () => setIn((state) => !state);

  const spring1Ref = useSpringRef();
  const spring2Ref = useSpringRef();

  const { xyz } = useSpring({
      ref: spring1Ref,
      xyz: isIn? [0, 0, 0] : [600, 0, 0],
      config: { mass: 1.4}
  });

  const { background } = useSpring({
      ref: spring2Ref,
      background: isIn? "white" : "grey"
  });

  useChain(isIn ? [spring1Ref, spring2Ref] : [spring2Ref, spring1Ref]);

  return (
    <>
    <div className='flex justify-center'>
    <h1 className="flex justify-center w-2/5 pt-10 pb-8 text-5xl font-bold text-neutral-711 border-black border-b">
        Social Engineering 101
      </h1>
      </div>
      <div className='flex justify-center'>
      <div className='grid grid-flow-row grid-cols-2 gap-8 justify-self-center w-full pt-8 '>
          
      <div className="row-span-1 col-span-1 grid grid-rows-1 grid-cols-3 bg-yellow-32 border border-black rounded-md w-5/6 justify-self-end p-4 h-full min-h-64">
          <div className='col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black font-jetbrains'>
        <p><span className='font-bold text-lg'>Social Engineering</span> is the act of tricking individuals into divulging their sensitive information for malicious purposes.</p>
          <br></br>
          <p> Social Engineering is the most popular tactic attackers use to gain access to sensitive networks.</p>
          <br></br>
          <p>In this lesson, you will learn specific social engineering techniques, and how to spot them in the wild.</p>
          </div>
        </div>
          
        <div className="row-span-2 col-span-1 grid grid-rows-2 grid-cols-2 bg-amber-32 border border-black rounded-md w-5/6 justify-self-start p-4 h-full min-h-64">
          
          <div id="tl" className='col-span-1 row-start-1 row-end-1 bg-neutral-100 border border-t-black border-l-black rounded-tl-md p-5 text-black font-jetbrains'>
              <div className='flex items-center justify-center font-bold text-lg pb-5'>
                Level 8
              </div>
              <div className='flex justify-center items-end h-3/5 '>
                <Image src='/battery.svg' width={150} height={150} alt='battery'/>
                
              </div>
              <div className='flex justify-center text-md items-end h-1/4 pb-4'>
              <CountUpAnimation duration={800}>340</CountUpAnimation> / 1000 EXP
              </div>
                
          </div>
          <div id="tr" className='col-span-1 row-start-1 row-end-1 bg-neutral-100 border border-r-black border-t-black rounded-tr-md p-5 text-black font-jetbrains'>
          <div className='flex items-center justify-center font-bold text-lg pb-5'>
                Lesson Rewards
              </div>
              <div className='flex justify-center items-end h-3/5 '>
                <Image src='/cards.png' width={150} height={150} alt='battery'/>
                
              </div>
              <div className='flex justify-center text-md items-end h-1/4 pb-4'>
               5 Cards, 1 super rare
              </div>
          </div>
          <div id="bl" className='col-span-1 row-start-2 row-end-2 bg-neutral-100 border border-l-black border-b-black rounded-bl-md p-5 text-black font-jetbrains'>
          <div className='flex items-center justify-center font-bold text-lg pb-4'>
                Earn a 100% score
              </div>
              <div className='flex justify-center items-end h-3/5 '>
                <Image src='/slots.svg' width={150} height={150} alt='battery'/>
                
              </div>
              <div className='flex justify-center text-md items-end h-1/4 pb-4'>
               to take a spin!
              </div>
          </div>
          <div id="br" className='col-span-1 row-start-2 row-end-2 bg-neutral-100 border border-r-black border-b-black rounded-br-md p-5 text-black font-jetbrains'>
          <div className='flex items-center justify-center font-bold text-lg pb-4'>
                Earn volt tokens
              </div>
              <div className='flex justify-center items-center pb-2 h-3/5'>
                <Image src='/btokens.svg' width={125} height={125} alt='battery'/>
                
              </div>
              <div className='flex justify-center text-md items-end h-1/4 pb-4 pt-4'>
               based on score and speed!
              </div>
          
          </div>
        </div>


        <div className="row-span-1 col-span-1 grid grid-rows-1 grid-cols-3 bg-blue-32 border border-black rounded-md w-5/6 justify-self-end p-4 h-full">
          <div className='col-span-3 bg-neutral-100 border border-black rounded-md px-5 p-2 text-black font-jetbrains'>
          <p className='font-bold pb-4 p-2 text-lg'> The high score holder for this lesson: </p>
          <div className='flex justify-start items-center border bg-blue-16 border-black rounded-lg px-6 p-2'><Image className="" src="/highscore.svg" height={100} width={100} alt={'yep'}/> 
          <p className='pl-4 text-lg font-bold'>Julia S.</p><br></br> <div className='flex font-bold text-lg ml-14 p-2 w-1/3 justify-center border border-black bg-neutral-100 rounded-lg'>Score: <CountUpAnimation duration={800}>1255</CountUpAnimation></div></div>
          <button className='flex justify-center items-center border bg-blue-16 border-black rounded-lg px-6 py-2 w-5/12 mt-4'>View leaderboards</button>
          </div>
        </div>
        </div>
        </div>
        </>
  )
}

export default DemoIntro
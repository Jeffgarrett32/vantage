import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import FlipCard from './Flipcard'
import Lottie from "lottie-react";
import dataAnimation from '../lotties/drag.json'
import rightArrow from '../lotties/rightArrow.json'
import leftArrow from '../lotties/leftArrow.json'
import checkmark from '../lotties/checkmark.json'

function SpringCarousel() {
  const style = {
      height: 50
  }
  const style1 = {
      height: 250
  }
  const loop = {
      Type: 'Boolean',
      Default: true
  }
  const autoplay = {
      Type: 'Boolean',
      Default: false
  }
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: [
        {
          id: "item-1",
          renderItem: (
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col items-center justify-center w-5/12 h-80 bg-amber-32 rounded-md px-4 border border-black">
                <div className="relative inset-0 w-full bg-neutral-100 py-8 rounded-md border border-black ">
                  <div className="flex flex-col text-2xl">
                    <p className="flex justify-center font-mono">
                      Earn a score based on speed and accuracy.
                    </p>{" "}
                    <br></br>
                    <p className="flex py-2 pb-5 justify-center font-mono">
                      {" "}
                      Swipe to begin!
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-32 w-32">
                      <Lottie animationData={dataAnimation} loop={loop} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <div>
              <FlipCard />
            </div>
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <div>
              <FlipCard />
            </div>
          ),
        },
        {
          id: "item-4",
          renderItem: <FlipCard />,
        },
        {
            id: "item-5",
            renderItem: <div className='font-bold text-2xl flex items-center justify-center w-full'>
                 <Lottie animationData={checkmark} loop={loop} style={style1} />
            </div>,
          }
      ],
    });
 
 
    return (
      <div className="py-10 ml-5 items-center justify-center">
        {carouselFragment}
        <div className="flex justify-center">
          <div className="flex w-1/5 p-4 justify-center bg-yellow-32 border border-black rounded-md">
          <div className="flex w-full border border-black rounded-md bg-neutral-100">
              <div className="flex w-1/2 justify-start pl-2">
                <button onClick={slideToPrevItem}>
                  <Lottie
                    className="hover:drop-shadow hover:translate-y-[1px]"
                    animationData={leftArrow}
                    style={style}
                    autoplay={false}
                  />
                </button>
                </div>
                <div className='flex w-1/2 justify-end pr-2'>
                <button onClick={slideToNextItem}>
                  <Lottie
                    className="hover:drop-shadow hover:translate-y-[1px]"
                    animationData={rightArrow}
                    style={style}
                    autoplay={false}
                  />
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SpringCarousel
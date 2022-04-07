import React from 'react'
import Image from 'next/image'
import { useSpringCarousel } from 'react-spring-carousel'
import Lottie from "lottie-react";
import rightArrow from '../lotties/rightArrow.json'
import leftArrow from '../lotties/leftArrow.json'
import bearLaptop from '../lotties/bearLaptop.json'
import docs from '../lotties/document.json'
import screens from '../lotties/screens.json'
import shield from '../lotties/shield.json'
import Slide from './Slide';
import FlipCard from './Flipcard';
import { stringify } from 'postcss';

function ComicStrip() {

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

const diffContent = (<p>
      Attackers frequently make use of email, SMS, and collaboration platforms
      to deliver malicious content. Messages delivered over various mediums
      contain <span className='font-bold'>deceptive attachments</span> masquerading as:<br></br>
              <div className='pl-6 pt-3'>
              <li>PDF files</li>
              <li>Microsoft Office files</li> 
              <li>Free Software ZIP files</li>
              </div> 
              <br></br>These attachments 
              contain malware used to gain a foothold into the target network
              for further exploitation. </p>);
const slideContent3 = (<div>
<p className='px-2'>
  <span className='font-bold'>In a Business Email Compromise,</span> criminals send an email message that appears to come
  from a known source making a legitimate request.
</p>
<p className="font-bold py-2">Examples:</p>
<div className="pl-6">
  <li>
    A vendor your company regularly deals with sends an invoice
    with an updated mailing address.
  </li>
  <li>
    A company CEO asks their assistant to purchase dozens of gift
    cards to send out as employee rewards.
  </li>
  <li>
    A homebuyer receives a message from his title company with
    instructions on wiring a down payment.
  </li>
</div>
</div>)

const slideContent4 = (
  <div>
    <p>
      <span className='font-bold'>Typosquatting</span> is a technique where attackers register fraudulent domain
      names used to pose as a trustworthy website.
      A common strategy is to convince victims that they need to update their
      password on seemingly legitimate websites, thereby gaining the victims
      credentials.
    </p>
    <br></br>
    <p className="font-bold pb-2">Examples:</p>
    <div className="pl-6">
      <li>linkdin.com</li>
      <li>bankofamerica.cm</li>
      <li>ebayreturns.com</li>
    </div>
  </div>
);


    const style = {
        height: 50
    }
    const style1 = {
        height: 350
    }
    const style2 = {
        height: 300
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
            id: 'item-1',
            renderItem:(
                <div className=''>
                    <Lottie className='flex items-end pt-10 -pb-5' animationData={bearLaptop} loop={loop} style={style1}/>
                    <Slide content={slideContent1}/>
                </div>
            ),
        },
        {
            id: 'item-2',
            renderItem:(
                <div className=''><Slide content={diffContent}/>
                <Lottie className='' animationData={docs} loop={loop} style={style1}/>
                </div>
            ),
        },
        {
            id: 'item-3',
            renderItem:(
                <div className='w-full'>
                    <Lottie className='flex w-full' animationData={screens} loop={loop} style={style1}/>
                    <Slide content={slideContent3}/>
                </div>
            ),
        },
        {
            id: 'item-4',
            renderItem:(
                <div className='w-full'><Slide content={slideContent4}/>
                <Lottie className='pt-10' animationData={shield} loop={loop} style={style1}/>
                </div>
            ),
        },
      ]
    });

  return (
      <div>
      <div className='flex justify-center items-center w-full h-auto pb-5'>
          {carouselFragment}
      </div>
      <div className='flex w-full justify-center items-center '>
    
    <div className="flex w-1/5 p-4 h-auto justify-center bg-yellow-32 border border-black rounded-md">
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
                    className="hover:drop-shadow hover:translate-y-[1px] "
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
          
  )
}

export default ComicStrip
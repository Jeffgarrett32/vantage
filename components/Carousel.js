import {React, useState} from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousel() {
  
  const [nav1, nav2] = useState();

    return (
    <div className='w-2/5'>
        <Slider className='pb-2 flex hover:cursor-pointer'
        asNavFor={nav1}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        accessibility={true}
        dots={true}
        adaptiveHeight={true}
        rows={1}
        autoplay={false}
        
        >
            <div id="card1">
            <div className="grid grid-rows-1 grid-cols-3 justify-self-center text-base font-medium font-jetbrains rounded-md bg-blue-32 border border-black py-4 px-4 h-auto">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                <p>
                In a BEC, criminals send an email message that appears to come from a known source making a legitimate request.
                </p>
                <br></br>
                <p>
                    Click the arrow, drag the card, or use the arrow keys to see some examples.
                </p>
                <div className='flex justify-center items-center'>
                
                </div>
              </div>
            </div>
            </div>
            <div id="card2">
            <div className="grid grid-rows-1 grid-cols-3 justify-self-center text-base font-medium font-jetbrains rounded-md bg-yellow-32 border border-black py-4 px-4 h-auto">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                <p>
                A vendor your company regularly deals with sends an invoice with an updated mailing address.
                </p>
                <br></br>
                <p>

                </p>
              </div>
            </div>
            </div>
            <div id="card3">
            <div className="grid grid-rows-1 grid-cols-3 justify-self-center text-base font-medium font-jetbrains rounded-md bg-rose-32 border border-black py-4 px-4 h-auto">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                <p>
                A homebuyer receives a message from his title company with instructions on wiring a down payment.
                </p>
                <br></br>
                <p>

                </p>
              </div>
            </div>
            </div>
            <div id="card2">
            <div className="grid grid-rows-1 grid-cols-3 justify-self-center text-base font-medium font-jetbrains rounded-md bg-amber-32 border border-black py-4 px-4 h-auto">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                <p>
                A company CEO asks their assistant to purchase dozens of gift cards to send out as employee rewards.
                </p>
                <br></br>
                <p>

                </p>
              </div>
            </div>
            </div>
        </Slider>
    </div>
  )
}

export default Carousel
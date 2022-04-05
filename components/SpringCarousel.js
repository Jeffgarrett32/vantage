import React from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import FlipCard from './Flipcard'

function SpringCarousel() {
 
  const { carouselFragment,  slideToPrevItem, slideToNextItem } = useSpringCarousel({
      items: [
        {
            id: 'item-1',
            renderItem: (
                <div>
                <FlipCard/>
                </div>
            )
        },
        {
            id: 'item-2',
            renderItem: (
                <div>
                <FlipCard/>
                </div>
            )
        },
        {
            id: 'item-3',
            renderItem: (
                <FlipCard/>
            )
        }
      ]
  })
 
 
    return (
    <div className='py-10 ml-5 items-center justify-center border-y border-black'>
    {carouselFragment}
    <div className='flex justify-evenly'>
    <button onClick={slideToPrevItem}>Prev Item</button>
    <button onClick={slideToNextItem}>Next Item</button>
    </div>
    </div>
  )
}

export default SpringCarousel
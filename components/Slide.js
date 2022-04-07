import React from 'react'

function Slide({content, style}) {
 
   

    return (
<div className='flex justify-center pt-10'>
            <div className='slide red' style = {style}>
              <div className='col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black '>
                {" "}
                {content}
              </div>
            </div>
          </div>
  )
}

export default Slide
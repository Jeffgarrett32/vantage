import React from 'react'

function Slide({header, content, renderItem}) {
    return (
<div className='flex justify-center pt-10'>
            <div className="grid grid-rows-1 grid-cols-3 justify-self-center text-xl font-mono rounded-md bg-yellow-32 border border-black p-4 w-4/6 h-80">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                {content}
              </div>
            </div>
          </div>
  )
}

export default Slide
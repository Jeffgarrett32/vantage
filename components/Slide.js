import React from 'react'

function Slide({header, content, color}) {
    return (
<div className='flex justify-center pt-10'>
            <div style={{color}}className="grid grid-rows-1 grid-cols-3 justify-self-center text-xl bg-rose-32 font-mono rounded-md border border-black p-4 w-4/6 min-h-80">
              <div className="col-span-3 bg-neutral-100 border border-black rounded-md p-5 text-black">
                {" "}
                {content}
              </div>
            </div>
          </div>
  )
}

export default Slide
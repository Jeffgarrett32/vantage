import React from 'react'
import Image from 'next/Image'

function Navlesson() {
  return (
    <nav className="bg-stone-32 border border-b-neutral-800">
      <div className="max-w-full mx-auto">
        <div className="flex items-center justify-between py-3 px-5 w-full">
          <div className="flex items-center space-x-5">
            <img
              className="hover:cursor-pointer"
              src="https://i.postimg.cc/jSD99rcb/Group-28-1.png"
              alt="innkeep"
              height={120}
              width={120}
            ></img>

            <div className="pt-1">
              <a href=""> Social Engineering 101 </a>
              
            </div>
          </div>

          <div className="flex justify-end items-center px-3"> Streak Count: 0
          <div className='pl-2 mt-1'><Image src="/token.svg" width={40} height={40} alt="token"/>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navlesson
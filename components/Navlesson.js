import React from 'react'
import Image from 'next/image'

function Navlesson() {
  return (
    <nav className="bg-neutral-100 border border-b-neutral-800">
      <div className="flex justify-center w-full mx-auto">
        <div className="flex items-center justify-evenly py-4 px-5 w-full ">
          <div className="flex items-center space-x-10">
            <img
              className="hover:cursor-pointer"
              src="https://i.postimg.cc/jSD99rcb/Group-28-1.png"
              alt="innkeep"
              height={120}
              width={120}
            ></img>
            
            <div className="font-mono space-x-8 font-bold">
            <a className='py-2 pl-2 relative before:absolute before:bg-yellow-32 before:rounded-lg before:opacity-80 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500'href=""><span className="relative justify-center">My Dashboard</span> </a>
              <a className='py-2 pl-2 relative before:absolute before:bg-blue-32 before:rounded-lg before:opacity-80 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500'href=""><span className="relative justify-center">Explore</span> </a>
              <a className='py-2 pl-2 relative before:absolute before:bg-amber-32 before:rounded-lg before:opacity-80 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500'href=""><span className="relative">My Lessons</span> </a>
              <a className='py-2 pl-2 relative before:absolute before:bg-rose-32 before:rounded-lg before:opacity-80 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500'href=""><span className="relative">Community</span> </a>
            </div>
            <div className="flex justify-start items-center pt-1 font-mono">
          <div className='pr-2 mt-1'><Image src="/btokens.svg" width={30} height={30} alt="token"/>
          
          </div>
          :0
          </div>
          </div>


        </div>
      </div>
    </nav>
  );
}

export default Navlesson
import React from 'react'

function Button() {
  return (
    <button onClick={() => ref.current.scrollTo({dest})} className= 'bg-neutral-100 py-2 w-1/4 rounded-md border border-black transition-colors duration-500 transform inline hover:bg-neutral-700 focus:bg-yellow-32 hover:text-white focus:text-white focus:shadow-lg hover:shadow-md text-center scale-105' type="submit"> Submit
    </button>
  )
}

export default Button
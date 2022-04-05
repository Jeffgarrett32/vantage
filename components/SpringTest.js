import React, { useState }  from 'react'
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";


function SpringTest() {
  const [isIn, setIn] = useState(false);
  const toggle = () => setIn((state) => !state);

  const spring1Ref = useSpringRef();
  const spring2Ref = useSpringRef();

  const { xyz } = useSpring({
      ref: spring1Ref,
      xyz: isIn? [0, 0, 0] : [600, 0, 0],
      config: { mass: 1.4}
  });

  const { background } = useSpring({
      ref: spring2Ref,
      background: isIn? "white" : "grey"
  });

  useChain(isIn ? [spring1Ref, spring2Ref] : [spring2Ref, spring1Ref]);

  return (
      <div className='w-16 overflow-hidden'>
    <div>
        <animated.div
        style={{
          transform: xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
          background
        }}
       
      >My div</animated.div>
      <button onClick={toggle}>Toggle</button>
    </div>
    </div>
  )
}

export default SpringTest
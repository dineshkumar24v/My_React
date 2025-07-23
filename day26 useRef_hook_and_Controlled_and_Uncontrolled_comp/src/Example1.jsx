import React from 'react'
import { useRef } from 'react';

const Example1 = () => {
    //  we mostly use useRef at input tags

  const countRef = useRef(0);

  // console.log(countRef);  // it returns an object as {current: 0}
  // console.log(countRef.current)  // by this way we can access the value in key current

  // 1. by useRef we can directly update the DOM properties : means on clicking a button we can change the color of a h1 tag text
  const handleColor = ()=>{
    countRef.current.style.color = "red"
  }

  return (
    <div className='div'>

       {/* we use ref(which is an attribute/prop)---> it acts as a bridge to connect useRef to an element */}
      <h1 ref={countRef}>count: {countRef.current}</h1> 

      {/* if i click on this button the color of the h1 tag changes to red as it is connected to myRef using the ref attribute */}
      <button onClick={handleColor}>click</button> 


    </div>
  )
}

export default Example1

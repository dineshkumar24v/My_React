import React from 'react'
import { useRef } from 'react';


const Example2 = () => {

  const inputRef = useRef("");

  // console.log(inputRef)
  
  const handleInputFocus = ()=>{
    inputRef.current.focus();
    console.log(inputRef.current.value) // the entered value will be displyed after click in console
  }

  return (
    <div className='div'>

        {/* if i click on this button the cursor will focus the input tag */}
        <button onClick={handleInputFocus}>click to select input tag</button>
        <input type='text' ref={inputRef}/>

    </div>
  )
}

export default Example2

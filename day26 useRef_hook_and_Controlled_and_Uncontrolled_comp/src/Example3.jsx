import React, { useEffect, useRef, useState } from 'react'

const Example3 = () => {

  // by using useRef we cannot make counter increment and decrement --> bec 

  const [data, setData] = useState(0);
  const myRef = useRef(0);

  console.log(data)

  // generally in useEffect the component reRenders and the values become 0 on every render ---> but as we are using useRef that wont happen --> useRef it stores the previous values and update the value to the previous but doesnot cause a re-render.
  useEffect(()=>{
    myRef.current = myRef.current + 1;
  })

  return (
    <div className='div'>

      <input type='text' onChange={(e)=> setData(e.target.value)}/>

      <h1>render count: {myRef.current}</h1>
      
    </div>
  )
}

export default Example3

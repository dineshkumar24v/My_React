import React from 'react'
import { useRef } from 'react';

const CounterApp = () => {

  // const [data, setData] = useState(0);
    const myRef = useRef(0);
 
    const handleInc = ()=>{
      console.log("increment")
      myRef.current += 1;
      console.log(myRef.current)
    }
    const handleDec = ()=>{
      console.log("decrement")
      myRef.current -= 1;
      console.log(myRef.current)
    }
  
  return (
    <div className='div'> 

      <p>As this this counter app is done using <b>useRef</b> the count wont update in DOM but you can see it in console --> in useRef the component doesnot cause a Re-render. the changes will never be detected by DOM</p>
      <h1>count: {myRef.current}</h1>

      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  )
}

export default CounterApp

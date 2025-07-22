import React, { useMemo, useState } from 'react'

//  example use case scenario of useMemo:
  //  so we can use this in dark/light theme function in realtime ---> bec the dark/light theme should get updated only when cliking that button ---> so this theme should not change when updating the remaining elements of that website...


  //  case 2:  sorting from A to Z or Z to A  should not change when i change or update the price in an e-commerece website  --> so here also we can use....
const UseMemoExmp = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [count, setCount] = useState(0);

  //  this addition function gets rendering even when clicking the count increment button
  // so in order to avoid this we write this addition function inside the useMemo hook ---> this useMemo hook is syntax is similar to useEffect --> so as we can pass the dependencies here the addtion function will trigger/ render only when one of the dependency values are updated

  const addition = ()=>{
    console.log("addition rendering");
    return num1+num2;
  }

  //  we are using the useMemo hook to avoid the re-rendering of the addition function when clicking the count increment button
  // so useMemo hook will run only when one of its dependencies get updated --> that means it prevents un-necessary re-renders by comparing the props --------> that means if the props are not changed react skips re-rendering that component.

  const add = useMemo(()=>{
    return addition();
  },[num1, num2])

  // console.log(addition())
  console.log(add);

  const handleInc = ()=>{
    console.log("count increased")
    setCount(count+1)
  }
  return (
    <div>
      
      <input 
        type='number'
        onChange={(e)=>setNum1(Number(e.target.value))}
      />
      <input 
        type='number'
        onChange={(e)=>setNum2(Number(e.target.value))}
      />

      <h1>number1: {num1}</h1>
      <h1>number2: {num2}</h1>
      <h1>sum: {add}</h1>

      <h2>{count}</h2>
      <button onClick={handleInc}>+</button>

    </div>
  )
}

export default UseMemoExmp

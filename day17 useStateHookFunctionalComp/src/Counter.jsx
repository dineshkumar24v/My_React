import { useState } from "react"
const Counter =()=>{
  const [count, setCount] = useState(0)
  const handleCount=(xyz)=>{
    if(xyz===0){
      setCount(0);
    }else{
      setCount(count+xyz)
    }
  }
  return(
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={()=>handleCount(10)}>+</button>
      <button onClick={()=>handleCount(-10)}>-</button>
      <button onClick={()=>handleCount(0)}>Reset</button>
    </div>
  )
}
export default Counter
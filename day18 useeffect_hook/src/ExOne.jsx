import { useState, useEffect} from "react";


export const ExOne = ()=>{
  const [count, setCount] = useState(0);
  const handleCount=()=>{
    setCount(prev=>prev + 10)
  }
  useEffect(()=>{
    alert('hello this is mounting phase')
  })
  useEffect(()=>{
    alert('hello this is mounting phase 2')
  })
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>console.log(res)) 
  })
  return(
    <div>
      {count}
      <button onClick={handleCount}>+</button>
    </div>
  )
}
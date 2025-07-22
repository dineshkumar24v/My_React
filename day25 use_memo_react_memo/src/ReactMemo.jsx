import React, { useState } from 'react'
import Child1 from './Components/Child1';
import Child2 from "./Components/Child2";

const ReactMemo = () => {
  const [child1, setChild1] =useState("hai");
  const [child2, setChild2] =useState("hello");
  const [count, setCount] = useState(0);
  console.log("parent")
  return (
    <div>
      <h1>Without using ReactMemo</h1>
      <Child1 data={child1}/>
      <Child2 data={child2}/>
      <button onClick={()=>setCount(count+1)}>click</button>
      <p>{count}</p>
    </div>
  )
}

export default ReactMemo

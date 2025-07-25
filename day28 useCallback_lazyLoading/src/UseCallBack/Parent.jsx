import React, { useCallback } from 'react'
import { useState } from 'react'
import Child from './Child';

const Parent = () => {
  const [ input, setInput] = useState("");
  const [theme, setTheme] = useState(false);

  const handleInput = (event)=>{
    setInput(event.target.value)
  }
  const handleTheme = ()=>{
    setTheme(!theme)
    console.log("theme changed")
  }

  //  this function is being unnecessasasrily created even when clicking the theme change button so in order to avoid un-necessary creation of this function call this function in useCallback
  const convertArray = ()=>{
    return input.split("")
  }   

  // useCallback hook  // its syntax is identical to useEffect / useMemo
  // as useCallback returns a memoized function we need to store it in a variable...
  const array = useCallback(()=>{
    return convertArray()
  },[input]) 



  // console.log(convertArray())

  // console.log(input, "input");
  // console.log(theme, "theme");
  return (
    <div style={{backgroundColor: theme ? "black" : "white", color: theme ? "white" : "black"}}>
      <h1>Use call back code</h1>
      <input type='text' onChange={handleInput} />

      <br/>
      <br/>
      <button onClick={handleTheme}>change theme</button>

      {/* <Child array={convertArray}/> */}
      <Child array={array}/>
    </div>
  )
}

export default Parent

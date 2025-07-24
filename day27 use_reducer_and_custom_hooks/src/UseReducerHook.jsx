// import React, { useState } from 'react'
import React, { useReducer } from 'react'

const UseReducerHook = () => {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState("")
  // const [input, setInput] = useState("")

  const initialState = {count : 0} 

  const myreducer = (state, action)=>{

    console.log(state , "myreducer state")
    console.log(action,  "this is action")
    
    switch(action.type){
      case "increment" :
        return {...state, count: state.count+1};
      case "decrement" :
        return {...state, count: state.count-1};
      case "input_text" :
        return { ...state, input: action.payload}
        default :
        return state
    }

  }
  
  // we can take inititial state directly as zero but as we use usereducer to handle complex states let us take an object

  const [value, dispatch] = useReducer(myreducer, initialState);

  console.log(useReducer(myreducer, initialState));
  console.log(value, "this is dispatch state")
  console.log(dispatch, "this is dispatch")

  const handleInc = ()=>{
    // setCount(count + 1)
    dispatch({type:"increment"})
  }
  const handleDec = ()=>{
    // setCount(count - 1)
    dispatch({type:"decrement"})
  }


  return (
    <div>

      <h1>count: {value.count}</h1>
      <button onClick={handleInc}> + </button>
      <button onClick={handleDec}> - </button> 
      <br/><br/>

      {/* <input type='text' onChange={(e)=>{setValue(e.target.value)}}/> */}
      <input 
        type='text' 
        onChange={(event)=>{
          dispatch({type: "input_text", payload: event.target.value});
        }}/>

      {/* <h2>{value}</h2> */}
      <h2>{value.input}</h2>
      
    </div>
  )
}

export default UseReducerHook 

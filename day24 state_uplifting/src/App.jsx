import BtnsComp from "./BtnsComp"
import DisplayComp from "./DisplayComp"
import { useState } from "react"

  const App = ()=>{
  const [count,setCount] = useState(0)
  const [color,setColor] = useState("")
  const [bgColor,setBgColor] = useState("#a7defb")
    
    return( 
      <div>
      <h1 style={{textAlign:"center"}}>State uplifting in React</h1>
        <div style={{display:"flex"}}>
          <BtnsComp updateState={setCount} updateColor={setColor} updateBgColor={setBgColor}/>
          <DisplayComp currentState={count} currentColor={color} currentBgColor={bgColor}/>
        </div>
      </div>
    )
  }
  export default App 
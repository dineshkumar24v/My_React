import { useState } from "react"

const ColorChanger =()=>{
  const [color, setColor] = useState('');

  const handleColor=(newColor)=>{
    setColor(newColor)
  }
  return(
    <div style={{backgroundColor:color || 'white',height:'30vh'}}>
      <button onClick={()=>handleColor('red')}>red</button>
      <button onClick={()=>handleColor('green')}>green</button>
      <button onClick={()=>handleColor('yellow')}>yellow</button>
    </div>
  )
}
export default ColorChanger 
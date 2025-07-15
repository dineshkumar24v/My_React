import { useState } from "react"
const RandomColorChanger = () =>{
  const [color, setColor] = useState('') 
  const handleRandomColor = ()=>{
    const alphNum = 'abcdef0123456789';
    let hexaColor = '#'
    for(let i=0; i<6; i++){
      hexaColor += alphNum[Math.floor(Math.random()*alphNum.length)]
    }
    setColor(hexaColor)
  }
  return(
    <div style={{backgroundColor:color || "white", height: '40vh'}}>
      <button onClick={handleRandomColor}>Random Color</button>
    </div>
  )
}
export default RandomColorChanger 
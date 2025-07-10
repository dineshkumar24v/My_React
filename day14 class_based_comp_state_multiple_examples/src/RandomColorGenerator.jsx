// Single button and on every click of that button generate random color
import React from "react"
class RandomColorGenerator extends React.Component{
  constructor(){
    super()
    this.state={
      bgColor:'#ffffff'
    }
  }
  handleRandomClr=()=>{
    const chars = "0123456789abcdef" // hexa color code has these characters
    let hexaCode ="#"
    for(let i=0; i<6; i++){
      const randonNumber = Math.floor(Math.random()*chars.length)
      console.log(randonNumber, 'randomNumber')
      hexaCode += chars[randonNumber]
    }
    console.log(hexaCode, 'color code')
    this.setState({bgColor:hexaCode})
  }
  render(){
    console.log(this.state.bgColor, "state color")
    return(
      <div style={{backgroundColor:this.state.bgColor}} className="container">
        <h1>Random Color Generator</h1>
        <button onClick={this.handleRandomClr}>random color</button>
      </div>
    )
  }
}
export default RandomColorGenerator

import React from "react"
class ColorChanger extends React.Component{
  constructor(){
    super()
    this.state={
      bgcolor:'white',
      fcolor:'black'
    }
  } 
handleColor=(clr1,clr2)=>{
  this.setState({bgcolor: clr1, fcolor:clr2}) 
} 
  render(){
    console.log(this.state.bgcolor, 'bgcolor')
    console.log(this.state.fcolor, 'fcolor')
    return(
      <div className="container" style={{backgroundColor: this.state.bgcolor}}>
        <div style={{height:'100%',width:'100%',borderRadius:'5px',color:this.state.fcolor}}>
          <h1>Background Color Changer</h1>
          <h2>{`you have selected ${this.state.bgcolor}`}</h2>
          <button onClick={()=>this.handleColor("#6FE6FC","#211C84")}>#6FE6FC</button>  
          {/* when you are passing an argument so we need to use callback function */} 
          <button onClick={()=>this.handleColor("#A0C878","white")}>#A0C878</button>
          <button onClick={()=>this.handleColor("#F3C623",'green')}>#F3C623</button>
          <button onClick={()=>this.handleColor("#FFEEA9","white")}>#FFEEA9</button>
        </div>
      </div>
    )
  }
}
export default ColorChanger

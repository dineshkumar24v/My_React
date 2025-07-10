import React from "react"
class Counter extends React.Component{
  constructor(){
    super()
    this.state={
      count:0,
      color:'black'
    }
  }
  handleClick1=()=>{
    this.setState({count:this.state.count+1,color:'green'})
  }
  handleClick2=()=>{
    this.setState({count:this.state.count-1,color:'red'})
  }
  render(){
    return(
      <div className="container">
        <div>
          <h1>Counter App</h1>
          <h1 style={{color:this.state.color,fontSize:'40px'}}>{this.state.count}</h1>
          <button onClick={this.handleClick1}>Inc + 1</button>
          <button onClick={this.handleClick2} disabled={this.state.count == 0}>Inc - 1</button>
          <button onClick={()=>this.setState({count:this.state.count=0})}>Reset</button>
          {/* <button onClick={()=>this.setState({count:0})}>Reset</button> */}
        </div>
      </div>
    )
  }
}
export default Counter 
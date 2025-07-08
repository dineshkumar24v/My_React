import React, { Component } from 'react'
import Counter from './counter'
import ColorChanger from './ColorChanger'

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter/>

        <ColorChanger/>
      </div>
    )
  }
}





// import React from "react"

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   handleClick=()=>{
//     this.setState({count:this.state.count+10})
//   }
//   render(){
//     return(
//       <>
//         <h1>App</h1>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Inc+10</button>
//       </>
//     )
//   }
// }
// export default App 



// import React from "react"
// class App extends React.Component{

//   constructor(){
//     super()
//     this.state={
//       color:'white'
//     }
//   } 
// handleColor=(clr)=>{
//   this.setState({color: this.state.color=clr}) 
// } 
//   render(){
//     console.log(this.state.color, 'color')
//     return(
//       <div style={{backgroundColor: this.state.color}}>
//         <h1>App</h1>
//         <h2>{`you have selected ${this.state.color}`}</h2>
//         <button onClick={()=>this.handleColor("red")}>Red</button>  
//         {/* when you are passing an argument so we need to use callback function */} 
//         <button onClick={()=>this.handleColor("green")}>Green</button>
//         <button onClick={()=>this.handleColor("yellow")}>Yellow</button>
//       </div>
//     )
//   }
// }
// export default App


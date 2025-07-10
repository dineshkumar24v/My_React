//  Theme toggler dark / light mode
import React from 'react'
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

class ToggleLightDarkTheme extends React.Component{
  constructor(){
    super()
    this.state ={
      theme: false
    }
  }
handleThemeToggle = ()=>{
  this.setState({theme:!this.state.theme})
}
  render(){
    return(
      <div className='container' style={{backgroundColor:this.state.theme ? "black" : "white"}}>
      <h1> Toggle Dark / Light Mode</h1>
        <button onClick={this.handleThemeToggle}>{this.state.theme ? <CiSun/> : <FaMoon/>}</button>
      </div>
    )
  }
}
export default ToggleLightDarkTheme



import React from "react"
import Signup from "./Signup";
import Login from "./Login";
class Navbar extends React.Component{
  constructor(){
    super();
    this.state = {
      isSignup: false,
      isLogin: false
    }
  }
  handleSignup = ()=>{
    this.setState({isSignup:!this.state.isSignup,isLogin:false}) // This ensures only one form shows at a time.
  }
  handleLogin = ()=>{
    this.setState({isLogin: !this.state.isLogin,isSignup:false})
  }
  render(){
    return(
    <div>
        <div style={{display:'flex', justifyContent:"space-around",alignItems:'center' ,backgroundColor:"#F6C90E"}}>
          <h1>Dinesh </h1>
          <div>
            <button onClick={this.handleSignup}>Signup</button>
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>
          {this.state.isSignup && <Signup/>} 
          {this.state.isLogin && <Login/>} 
      </div>
    )
  }
}
export default Navbar

// The && is a logical AND operator used for conditional rendering.
// Meaning:
// "If isSignup is true, then render the <Signup /> component. Otherwise, render nothing."

// This is a concise way to conditionally show or hide parts of the UI based on component state.
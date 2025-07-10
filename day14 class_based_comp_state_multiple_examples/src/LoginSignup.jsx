import React from "react"
import Signup from "./Signup"
import Login from "./Login"
class LoginSignup extends React.Component{
  constructor(){
    super();
    this.state = {
      isSignup: true,
      isLogin: false
    }
  }
  handleSwitchToLogin = ()=>{
    this.setState({isLogin:true,isSignup:false}) // This ensures only one form shows at a time.
  }
  handleSwitchToSignup = ()=>{
    this.setState({isLogin:false,isSignup:true}) // This ensures only one form shows at a time.
  }
  render(){
    return(
      <div id="switchContainer">
        <h1 style={{marginTop:'2rem'}}>Switch to Login/Signup</h1>
          {this.state.isLogin && <Login/>} 
          {this.state.isSignup && <Signup/>} 
        <div>
          {this.state.isSignup && <button onClick={this.handleSwitchToLogin}>Switch to Login</button>}
          {this.state.isLogin && <button onClick={this.handleSwitchToSignup}>Switch to Signup</button>}
        </div>
      </div>
    )
  }
}
export default LoginSignup
//  6. Signup form show/off based on btn click
import React from "react"
class Login extends React.Component{
  render(){
    return(
      <div className="container">
        <h1>Login</h1>
        <input type="text" placeholder="Email" className="input"/>
        <input type="password" placeholder="Password" className="input"/>
        <button>Login</button>
      </div>
    )
  }
}
export default Login
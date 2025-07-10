//  6. Signup form show/off based on btn click
import React from "react"
class Signup extends React.Component{
  
  render(){
    return(
      <div className="container">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" className="input"/>
        <input type="text" placeholder="Email" className="input"/>
        <input type="password" placeholder="Password" className="input"/>
        <button>Signup</button>
      </div>
    )
  }
}
export default Signup
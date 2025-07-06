import React from "react"
import './Navbar.css'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
  render(){
    return(
      <>
      <div className="navCont">
        <div className="navLogo">
          <h1>Logo</h1>
        </div>
          <div className="navSpan">
            <Link to='/home'><span>Home</span></Link>
            <Link to='/about'><span>About</span></Link>
            <Link to='/contact'><span>Contact</span></Link>
            <Link to='/products'><span>Product</span></Link>
        </div>
      </div>
      </>
    )
  }
}
export default Navbar
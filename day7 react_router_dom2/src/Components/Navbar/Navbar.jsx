
import './Navbar.css'
import {Link} from "react-router-dom"

export const Navbar = ()=>{
  return(
    <div id="navCont">
      <div className="nav_left"><h1>Dinesh</h1></div>
      <div className="nav_right">
        <Link id='link' to='/home'><span>Home</span></Link>
        <Link id='link' to='/about'><span>About</span></Link>
        <Link id='link' to='/contact'><span>Contact</span></Link>
        <Link id='link' to='/products'><span>Products</span></Link>
        <Link id='link' to='/recepies'><span>Recepies</span></Link>
      </div>
    </div>
  )
}
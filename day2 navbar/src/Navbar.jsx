import './Navbar.css'

function Navbar(){
  return(
      <div id='navbarContainer'>
      
        {/* <img src="/bg1.png" alt="logo" className='imgLogo'/> */}
        <h1>🎧Music World🎧</h1>
        
        <div className='div1'>
          <p>♫ Free Music</p>
          <p>Premium</p>
          <p>Blog</p>
          <input placeholder='Search...for music' className='inputTag'></input>
        </div>
        <div className='div1'>
          <p>Log In</p>
          <p>Sign Up</p>
        </div>
      </div>
      
  )
}

export default Navbar
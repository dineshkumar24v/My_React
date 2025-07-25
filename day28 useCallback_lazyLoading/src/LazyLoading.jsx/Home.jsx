import React, { useState, lazy } from 'react'


// here iam using the lazy loading concept so that the User component will not be preloaded on page launch but it will be loaded/renderd only on the button click
const Profile = lazy(()=> import("./User"))

const Home = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle)
  return (
    <div>
      <h1>this is home page</h1>
      {/* setting a toggle button */}
      <button onClick={()=>setToggle(!toggle)}>{toggle ? "hide user" : "show user"}</button>

{/* now let us write that the user component should diplay only when clicked on toggle button or else it should be hidden */}
      {toggle ? <Profile/> : null} 
    </div>
  )
}

export default Home

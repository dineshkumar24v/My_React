import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = ()=>{
  const navigate = useNavigate()
  const [loginDetails, setLoginDetails] = useState({email:"", password:""})
  const handleInput = (e)=>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    console.log(loginDetails) 
    const loginDetailsFromLS = JSON.parse(localStorage.getItem('signUpAccounts'))
// find method to match the login details
    const matchedLoggedInSeller = loginDetailsFromLS.find(seller=>seller.email===loginDetails.email && seller.password===loginDetails.password)
    console.log(matchedLoggedInSeller)

    if(matchedLoggedInSeller){
      navigate(`/${matchedLoggedInSeller.role}Dashboard`)  //sellerDashboard
      localStorage.setItem('loggedSeller',JSON.stringify(matchedLoggedInSeller))
    }
    
  }
  return(
    <div>
      <form action='' onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="email here" value={loginDetails.email} required onChange={handleInput}/>
        <input type="password" name="password" placeholder="pass here" value={loginDetails.password} required onChange={handleInput}/>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login
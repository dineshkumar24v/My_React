
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = ()=>{
  const navigate =  useNavigate() // is a f
  const [signUpDetails, setSignUpDetails] = useState({name:"", email:"",password:"",role:""}) 
  const handleInput = (e)=>{
    setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})
  }
  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(signUpDetails, "signup details") 
    const allAccounts = JSON.parse(localStorage.getItem('signUpAccounts')) || []
    allAccounts.push(signUpDetails)
    localStorage.setItem('signUpAccounts',JSON.stringify(allAccounts))
    navigate("/login")   // navigates to the login page on successfull sign up
    alert("successfully signed up!!!!")
    setSignUpDetails({ name: "", email: "", password: "", role: "" }); // to reset form
  }
  return(
    <div>
      <form action='' onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="name here" value={signUpDetails.name} required onChange={handleInput}/>
        <input type="email" name="email" placeholder="email here" value={signUpDetails.email} required onChange={handleInput}/>
        <input type="password" name="password" placeholder="pass here" value={signUpDetails.password} required onChange={handleInput}/>
        <select name="role"  onChange={handleInput}>
        {/* Currently, if the user doesn't select a role and submits the form, role will be "--Choose your role--". You should disable the placeholder option and prevent form submission if it's selected. */}
          <option disabled>--Choose your role--</option> 
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default SignUp
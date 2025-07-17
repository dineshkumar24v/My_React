import { useState } from "react" 
const SignUp = ()=>{ 
  // so this way we should write a seperate update function for every input filed ----------------------------
  // const [state, inputState] = useState('')
  // const handleInput = (e)=>{
  //   let output = e.target.value
  //   console.log(e)
  //   inputState(output)
  // }  

  // so only one input function for all the input fields ----------------------------
  // const [signUpDetails, setSignUpDetails] = useState({name:"",email:"",password:"",role:""});
  //   console.log(signUpDetails)


  
//my way 
    const [signUpDetails, setSignUpDetails] = useState({name:"",email:"",password:"",role:""});
    const handleChange = (e)=>{
      setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})
    }
    console.log(signUpDetails)
        return(

    <div>
    {/* <input type="text" placeholder="name" name="name" onChange={(e)=>setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})}/>
     <input type="email" placeholder="email" name="email" onChange={(e)=>setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})}/>
     <input type="password" placeholder="name" name="password" onChange={(e)=>setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})}/>
     <select name='role' onChange={(e)=>setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})}>
       <option>--choose your role--</option>
       <option value='recruiter'>Recruiter</option>
       <option value='jobseeker'>Jobseeker</option>
     </select> */}

     {/* my way ----------------------------------- */}
      <input type="text" placeholder="name" name="name" onChange={handleChange}/>
      <input type="email" placeholder="email" name="email" onChange={handleChange}/>
      <input type="password" placeholder="name" name="password" onChange={handleChange}/>
      <select name='role' onChange={handleChange}>
        <option>--choose your role--</option>
        <option value='recruiter'>Recruiter</option>
        <option value='jobseeker'>Jobseeker</option>
      </select>

      {/* <input type="text" placeholder="name" onChange={(e)=>setSignUpDetails({...signUpDetails,name:e.target.value})}/> */}
      {/* <input type="email" placeholder="email"  onChange={(e)=>setSignUpDetails({...signUpDetails,email:e.target.value})}/>
      <input type="password" placeholder="password"  onChange={(e)=>setSignUpDetails({...signUpDetails,password:e.target.value})}/> */}
      {/* <select onChange={(e)=>setSignUpDetails({...signUpDetails,role:e.target.value})}>
        <option>--choose your role--</option>
        <option value='recruiter'>Recruiter</option>
        <option value='jobseeker'>Jobseeker</option>
      </select> */}
      <button>Signup</button>

      <p><b>Name: </b> {signUpDetails.name}</p>
      <p><b>Email: </b> {signUpDetails.email}</p>   
      <p><b>pass: </b> {signUpDetails.password}</p>
      <p><b>role: </b> {signUpDetails.role}</p>
      {/* <p><b>name:</b> {signUpDetails}</p> */}
    </div>
  )
}
export default SignUp 
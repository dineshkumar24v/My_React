import { useNavigate } from "react-router-dom"

const BuyerDashboard = ()=>{
  const navigate = useNavigate()
  const loginData = JSON.parse(localStorage.getItem('loggedBuyer'))
  console.log(loginData)

  const handleLogout = ()=>{
    const confirmation = confirm("are you sure to logout");

    if(confirmation){
      localStorage.removeItem('loggedBuyer') 
    
      if(localStorage.getItem('loggedBuyer')){
      navigate(`/${loginData.role}Dashboard`) 
      }else{
        alert("logged out successfully")
        navigate("/login")
      }
    }else{
      alert("you choosed to stay in dashboard")
    }
  }
  return(
    <div>
      <h1>welcome to dashboard</h1>
      <h1><i>{loginData.name}</i></h1>
      <p>Role: {loginData.role}</p>
      <p>email: {loginData.email}</p>

      <button onClick={handleLogout}>logout</button>
    </div>
  )
}
export default BuyerDashboard
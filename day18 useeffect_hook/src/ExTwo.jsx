import { useEffect, useState } from "react"


const ExTwo = ()=>{
  const[apiData,setApiData] = useState([]) 
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(res=>{console.log(res)
    setApiData(res)  // updating state here --- comp re-renders
    });
  },[]);
  //mounting always runs only once after initial render of component
  return(
    <div>
      helo fake
    </div>
  )
}
export default ExTwo
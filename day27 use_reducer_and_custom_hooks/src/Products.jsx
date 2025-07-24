// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useFetch from './CustomHooks/useFetch';

const Products = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products")
  //   .then((res)=>setData(res.data))
  //   .catch((res)=>console.log(res));
  // },[])
  // console.log(data)
  const data = useFetch("https://fakestoreapi.com/products")

  return (
    <div>
      {data === null ? (<h1>Loading.....</h1>) :
        (<div style={{display:"flex", flexWrap:"wrap", textAlign:"center"}}>
      {data.map((items)=>(
        <div 
            key={items.id} 
            style={{border:"1px solid black", margin:"20px", width:"30%", cursor:"pointer" }} 
            onClick={()=>{navigate(`/product/${items.id}`)}}>
          <h1>{items.id}. {items.title}</h1>
          <img src={items.image} height={100}/>
        </div>
      ))}
    </div>)
      }
    </div>
  )
}

export default Products

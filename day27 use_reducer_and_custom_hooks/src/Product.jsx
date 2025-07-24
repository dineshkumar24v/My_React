// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './CustomHooks/useFetch';

const Product = () => {
  // const [data, setData] = useState({});
  const {id} = useParams();
  // useEffect(()=>{
  //   axios.get(`https://fakestoreapi.com/products/${id}`)
  //   .then((res)=>setData(res.data))
  //   .catch((err)=>console.log(err))
  // },[id])
  // console.log(data)

  const data = useFetch(`https://fakestoreapi.com/products/${id}`)

  return (
    <div>
      {data === null ? (<h1>Loading........</h1>) : (
        <>
        <h1>{data.id}. {data.title}</h1>
        <img src={data.image} height={100}/>
        </>
      )}
    </div>
  )
}

export default Product

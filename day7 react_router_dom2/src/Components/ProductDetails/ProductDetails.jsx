import React from 'react'
import data from '../Products/pData'
console.log(data,'imported data')
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  console.log(useParams( )) // use params() is a method
  const {id} = useParams()
  console.log(id, "id")

  const matchedProduct = data.products.find(x => x.id === Number(id))
  console.log(matchedProduct, 'matched product')

  if(!matchedProduct){
    return <h1>No product found with that id</h1>
  }
  
  return (
    <div>
    <img src = {matchedProduct.thumbnail}/>
      <h4>{matchedProduct.title}</h4>
      <h4>{matchedProduct.price}</h4>
      <p>{matchedProduct.description}</p>
    </div>
  )
}

export default ProductDetails

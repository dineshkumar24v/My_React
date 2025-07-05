import React from 'react'
import { useParams } from 'react-router-dom'
import recepies from '../Recepies/rData'

const RecepieDetails = () => {
  console.log(useParams(),'these are recipies details')
  const routeId=useParams()
  console.log(routeId,'id')

  const matchedProduct= recepies.recipes.find(x=>x.id === Number(routeId.id))
  console.log(matchedProduct, 'matched product')

  if(!matchedProduct){
    return <h1>no product found with that id</h1>
  }
  return (
    <div>
      <img src={matchedProduct.image}/>
      <h1>{matchedProduct.name}</h1>
      <p>{matchedProduct.ingredients}</p>
      <p>{matchedProduct.instructions}</p>
    </div>
  )
}

export default RecepieDetails

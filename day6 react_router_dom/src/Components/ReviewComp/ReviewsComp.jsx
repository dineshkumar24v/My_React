import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Products/Data'

const ReviewsComp = () => {
  console.log(useParams())
  const {id}= useParams()
  const matchedProduct = data.products.find((p)=> p.id ===parseInt(id))
  return (
    <div>
      ReviewComp
      <h1>{id}</h1>
      {matchedProduct.reviews.map((r)=>{
        return(
          <div style={{border: '1px solid black', padding:'10px', margin:'10px'} }>
            <h1>{r.reviewerName}</h1>
            <p>{r.rating}</p>
            <span>{r.comment}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ReviewsComp

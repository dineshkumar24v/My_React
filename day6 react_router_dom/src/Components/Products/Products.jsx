import React from 'react'
import data from './Data'
import './Products.css'
import { Link } from 'react-router-dom'

const Products = () => {
  console.log(data)
  return (
    <div className='productsCont'>
      {data.products.map((items,index)=>{
        return(
          <div key={index} className='products'>
            <img src={items.thumbnail} height={150}/>
            <h4>{items.title}</h4>
            <p>{items.price}</p>
            <Link to={`/products/reviews/${items.id}`} ><button>Reviews</button></Link>
          </div>
        )
      })}
    </div>
  )
}

export default Products

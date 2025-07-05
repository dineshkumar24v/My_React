import React from 'react'
import './Products.css'
import Product from '../Product/Product'

const Products = (prop) => {
  console.log(prop.productsData,'products')
  const d=prop.productsData
  return (
    <div className='productsCon'>
      {/* {d.map((p)=>{
        return(
          <div style={{border:'1px solid black', margin:'10px', textAlign:'center', width:'25%'} }>
          <img src={p.thumbnail}/>
            <h4>{p.id}. {p.title}</h4>
            <p>Rs. {p.price}</p>
          </div>
        )
      })} */}


      {d.map((x)=>{
        return(
          <>
            <Product singleProduct={x}/>
          </>
        )
      })}
    </div>
  )
}
export default Products

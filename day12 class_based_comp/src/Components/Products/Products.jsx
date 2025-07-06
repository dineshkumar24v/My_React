import React, { Component } from 'react'
import data from './Pdata'
import Product from '../Product/Product'

export default class Products extends Component {
  render() {
    console.log(data)
    return (
      <div>
       {data.map((products)=>{
        return(
          <>
            <Product singleProduct={products}/>
          </>
        )
       })}
      </div>
    )
  }
}

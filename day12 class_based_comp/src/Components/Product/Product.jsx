import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Product extends Component {
  render() {
    console.log(this.props.singleProduct)
    const items = this.props.singleProduct
    return (
      <div>
      <img src={items.image} style={{height:'100px'}}/>
      <h1>{items.title}</h1>
      <h4>{items.price}</h4>
      <Link to={`/Products/product/${items.singleProduct.id}`}></Link>
      <button>View Details</button>
      </div>
    )
  }
}

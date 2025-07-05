import React from "react";
import { Link } from "react-router-dom";

const Product = (singleP) => {
  console.log(singleP);
  return (
    <div style={{ border: "1px solid black",margin:'5px', borderRadius:'5px',textAlign:'center'}}>
      <img src={singleP.singleProduct.thumbnail} />
      <h4>{singleP.singleProduct.title}</h4>
      <h4>Rs. {singleP.singleProduct.price}</h4>
      <Link to={`/Products/product/${singleP.singleProduct.id}`}><span>view details</span></Link>
    </div>
  );
};

export default Product;

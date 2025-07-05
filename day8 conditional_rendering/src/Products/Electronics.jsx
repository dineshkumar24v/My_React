import React from 'react'

const Electronics = (prop) => {
  console.log(prop,'electronics')
  return (
  
  
  <div className='cardCont'>
      <img src={prop.singleP.image}/>
       <h4>{prop.singleP.title}</h4>
       <h4>Rs: {prop.singleP.price}/-</h4>
    </div>
  )
}

export default Electronics

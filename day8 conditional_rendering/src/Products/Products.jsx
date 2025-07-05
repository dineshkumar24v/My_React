import React from 'react'
import MensComp from './MensComp'
import Jewelery from './Jewelery'
import Electronics from './Electronics'
import WomensComp from './WomensComp'
import p_data  from './Data'

const Products = () => {
let userChoosedCatPrompt = prompt('enter category of product').toLowerCase()

return(
  <div  className='cont'>
    {
    p_data.map((item)=>{
      console.log(item,'products')
      if (userChoosedCatPrompt === item.category){
        return <Jewelery singleP={item}/>
      }else if(userChoosedCatPrompt === "jewelery"){
        return <Electronics singleP={item}/>
      }else if(userChoosedCatPrompt === "men's clothing"){
        return <MensComp singleP={item}/>
      }else if(userChoosedCatPrompt === "women's clothing"){
        return <WomensComp singleP={item}/>
      }else{
        return
      }
    })
    }
  </div>
)
}

export default Products

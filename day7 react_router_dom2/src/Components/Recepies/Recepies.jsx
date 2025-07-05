import React from 'react'
import recepies from './rData'
import Recepie from '../Recepie/Recepie'
console.log(recepies, 'recepies')

const Recepies = () => {
  return (
    <div style={{display:'flex', flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
      {recepies.recipes.map((r)=>{
        return(
          <div>
          <Recepie singleRecepie={r}/>
          </div>
        )
      })}
    </div>
  )
}

export default Recepies

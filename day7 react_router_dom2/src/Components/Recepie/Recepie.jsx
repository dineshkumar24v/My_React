import React from 'react'
import { Link } from 'react-router-dom'

const Recepie = (prop) => {
  console.log(prop,'single recepie')
  const singleR = prop.singleRecepie
  console.log(singleR)
  
  return (
    <div style={{border:'2px solid black ', margin:'10px',textAlign:'center', borderRadius:'5px'}}>
      <img src={singleR.image} style={{height:'200px'}}/>
      <h4>{singleR.name}</h4>
      <Link to={`/recepies/recepie/${singleR.id}`}>view details</Link>
    </div>
  )
}

export default Recepie

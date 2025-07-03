import React from 'react'

const Temp = (abc) => {
  console.log(abc)
  return (
    <div>
      <h1>Day: {abc.tempDetails.day}</h1>
      <h1>temp: {abc.tempDetails.degrees}</h1>
    </div>
  )
}

export default Temp

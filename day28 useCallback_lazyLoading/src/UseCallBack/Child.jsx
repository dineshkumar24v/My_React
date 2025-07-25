import React, { useEffect, useState } from 'react'

const Child = ({array}) => {
  // console.log(array());
  const [list, setList] = useState([]);

  useEffect(()=>{
    console.log("child")
    setList(array())
  },[array])
  // console.log(list) ; // as we are getting an array here we should map it to display it on page

  return (
    <div>
    <h1>child data</h1>
      {list.map((item, index)=>(
        <li key={index}>{item}</li>
      ))}
    </div>
  )
}

export default Child

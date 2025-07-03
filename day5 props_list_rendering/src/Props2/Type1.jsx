

import React from 'react'
import Students from './Props2/Students'
import Temp2 from './Props2/Temp2'
// example for same component data using in the same component
const Type1 = () => {
  // const s1='ajay'
  // const s2={
  //   name:'vijay',
  //   age:20
  // }
  const dayDetails = {
    degrees:'45C',
    day:'MONDAY'
  }
  //  now send this data to Students component
  return (
     <div>
       {/* <Students student1={s1} student2={s2}/> */}
    
      <Temp2 tempDetails={dayDetails}/>
     </div>

    // <div>
    //   <h1>My name is {s1}</h1>
    //   <h1>My name is {s2.name} and my age is {s2.age}</h1>
    //   <h1>Today temp is {dayDetails.degrees} and the day is {dayDetails.day}</h1>
    // </div>
  )
}

export default Type1

import React from 'react'

const Students = (abc) => {
  console.log(abc)
  const data=abc
  return (
    <div>
      <h1>{data.student1}</h1>
      <h1>{data.student2.name}</h1>
    </div>
  )
}

export default Students

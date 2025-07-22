import React, {memo} from 'react'

const Child1 = memo(({data}) => {
  console.log(data,"child2")
  return (
    <div>
      <h1>Child2</h1>
      <h2>{data}</h2>
    </div>
  )
})

export default Child1

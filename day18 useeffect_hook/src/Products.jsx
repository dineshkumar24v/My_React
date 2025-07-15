import { useState, useEffect } from "react"

export const Products= ()=>{
  const [apiData, setApiData] = useState([]) // this state we use to filter data
  const [filteredCatData, setFilteredCatData] = useState([]) // 2nd state
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(res=>{console.log(res)
      setApiData(res)
      setFilteredCatData(res)
    })
    
  },[])
  const handleFilData = (abc)=>{
    const filteredData = apiData.filter(x=>x.category === abc)
    console.log(filteredData)
    setFilteredCatData(filteredData) // the new filtered array is being stored in a new state
  }
  return(
    <div>
      {/* <button onClick={()=>handleData()}>All</button> */}
      <button onClick={()=>handleFilData('electronics')}>Electronics</button>
      <button onClick={()=>handleFilData("men's clothing")}>mens</button>
      <button onClick={()=>handleFilData("women's clothing")}>Women</button>
      <button onClick={()=>handleFilData("jewelery")}>jewelery</button>

      {filteredCatData.map((x)=>{
        return(
          <>
          <img src={x.image} height={200}/>
            <h1>{x.title}</h1>
          </>
        )
      })}
    </div>

    
  )
}
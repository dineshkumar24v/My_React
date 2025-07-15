import { useState } from "react"
import data from "./FakeSdata"
const Products = ()=>{
  const [fakeStoreData, setFakeStoreData] = useState([])
  const handleData = (cat)=>{
    const filterData = data.filter(x=>x.category === cat)
    console.log(filterData)
    setFakeStoreData(filterData)
  }
  return(
    <div>
      <button onClick={()=>handleData("electronics")}>electronics</button>
      <button onClick={()=>handleData("jewelery")}>jewellery</button>

      {fakeStoreData.length > 0 ? <>
        {fakeStoreData.map((x)=>{
          return(
            <>
            <img src={x.image} height={200}/>
              <h1>{x.title}</h1>
            </>
          )
        })}
      </> : "no data found"} 
    </div>
  )
}
export default Products
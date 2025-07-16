import { useEffect, useState } from "react"


export const Products = ()=>{
  const [data, setData] = useState([])
  const [cat, setCat] = useState("all") 

  useEffect(()=>{ // it replaces didMount of class based comp : --> only once after initial comp render on the screen
    let url = "https://fakestoreapi.com/products"

    if(cat !== "all"){
      url = `https://fakestoreapi.com/products/category/${cat}`
    }
    fetch(url).then(res=>res.json()).then(res=>{
      console.log(res)
      setData(res)  
    })
  },[cat]); // // ✅ API call depends on category
  // to stop mounting multiple times after state updation recursively we use an empty dependency array --> []

  return(
    <>
      <h1> Filtered Products by Category </h1>
      <button onClick={()=>setCat('electronics')}>Electronics</button> 
      <button onClick={()=>setCat('jewelery')}>Jewelery</button>
      <button onClick={()=>setCat("men's clothing")}>Mens</button>
      <button onClick={()=>setCat("women's clothing")}>Womens</button>

      {data.map((item)=>{
        return(
          <>
          <li key={item.id} style={{ border: "1px solid gray", margin: "4px" }}>
            <img src={item.image} height={30}/>
            {item.title}
           </li>
          </>
        )
      })}
    </>
  )
}

// comp render tarvata okkasari matarmey mounting jaruguddi
// if inc case, mounting lo state updationg code r updater function undi antey, ah state ni update chetsadi,okavela state update aitey, malli comp re-renders, okavela re-render ayyindi antey, malli mounting jaragali, dini valla infinite times comp re-render avthadi
// so, dini overcome cheyyakntey i need [] , empty dependency array , which is 2 value of useEffect syntx

// and , if in case , useeffect lo first value ayina, function lo unna code malli execute avavli antey, i need enter into useEffect
// but [], empty depend array , nannu enter avvanivvadhu
//so, nenu useEffect lo unna code ni execute chepichali antey i need to pass a value in [], so by that when ever empty dependency array lo pass chesina state anedi upadte avuudo, update ayna pratisari, function lo code execute avvuddi,next comp re-renders avuddi


// comp ni re-render cheyyalanukuntuna, but with 2nd life cycle method of react which is compDidUpdate(),
//so i have achived this with 2nd value of useEffect() function i.e., which is [dependency array] and passing a value to that [] array.

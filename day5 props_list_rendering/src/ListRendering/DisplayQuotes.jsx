

import { DummyQuotesData } from "./DummyQuotesData";

export const DisplayQuotes = ()=>{
  console.log(DummyQuotesData)
  return(
    <div className="mainContainer">
      {DummyQuotesData.quotes.map((quo)=>(
        <div className="cards">
          <p style={{color:'#555'}}><b><i>" {quo.quote} "</i></b></p>
          <h5 style={{color:'grey'}}>Author: {quo.author}</h5>
        </div>
      ))}
    </div>
  )
  
  
}
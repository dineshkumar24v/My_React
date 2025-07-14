import React from "react"
class App extends React.Component{
constructor(){
  super();
  this.state = {
    data:[],
    // loading:true
  }   
}
handleData=()=>{
  let dataFromLS = JSON.parse(localStorage.getItem('fakeData'))
  console.log(dataFromLS)
  fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(res=>{console.log(res)
    this.setState({data:res})
    localStorage.setItem('fakeData', JSON.stringify(res))
    // this.setState({loading:false})
  })
}
render(){
  if(this.state.loading){
    return <h1> fetching data... wait a moment </h1>
  }
  return(
    <div>
      <h1>fake store API products</h1>
      <button onClick={this.handleData}>getData</button>
      {this.state.data.map((p)=>{
        return(
          <>
            <p>{p.title}</p>
          </>
        )
      })}
    </div>
    )
  }
}
export default App
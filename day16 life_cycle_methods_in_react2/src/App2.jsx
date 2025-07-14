import React from "react"
import './App2.css'
class App2 extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      loading:true
    }
  }
  handleData =(btnType)=>{

    if(btnType==='fakeStoreProducts'){
      fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(res=>{console.log(res, 'data1')
        this.setState({data:res, loading:false})
      })
    }else if(btnType==='dummyJsonProducts'){
      fetch('https://dummyjson.com/products').then(res=>res.json()).then(res=>{console.log(res, 'data2')
        this.setState({data:res.products, loading:false})
      })
    }else if(btnType==='dummyJsonRecipies'){
      fetch('https://dummyjson.com/recipes').then(res=>res.json()).then(res=>{console.log(res, 'data3')
        this.setState({data:res.recipes, loading:false})
      })
    }else{
      return ;
    }
  }
  // componentDidMount(){ // in this so data displays directly without button click
  //   fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(res=>{console.log(res, 'data')
  //     this.setState({data:res})
  //   })
  // }
  render(){
    return(
      <div id='App2'>
        <div id='app2Child1'>
          <button onClick={()=>this.handleData("fakeStoreProducts")}>fakeStoreProducts</button>
          <button onClick={()=>this.handleData("dummyJsonProducts")}>dummyJsonProducts</button>
          <button onClick={()=>this.handleData("dummyJsonRecipies")}>dummyJsonRecipies</button>
        </div>
        <div id='app2Child2'>
          {this.state.loading ? "pls click any btn to get the data" : this.state.data.map((p)=>{
            return(
              <>
                <h1>{p.title} || {p.name}</h1>
                {/* <h1>{p.name}</h1> */}
              </>
            )
          })}
        </div>
      </div>
    )
  }
}
export default App2
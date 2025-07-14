import React from "react"
import './App2.css'
class App3 extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      loading:true
    }
  }
  componentDidMount() {
    const dataFromLS = JSON.parse(localStorage.getItem('data'));
    if (dataFromLS && dataFromLS.length > 0) {
      this.setState({ data: dataFromLS, loading: false });
    }
  }

  handleData =(btnType)=>{
    let url;

    if(btnType==='fakeStoreProducts'){
        url= "https://fakestoreapi.com/products"
    }else if(btnType==='dummyJsonProducts'){
        url= "https://dummyjson.com/products"
    }else if(btnType==='dummyJsonRecipies'){
        url= "https://dummyjson.com/recipes"
    }else{
      return ;
    }
    fetch(url).then(res=>res.json()).then(res=>{
      console.log(res,"24 line");
      let finalRes = res.products || res.recipes || res
      console.log(finalRes, 'final response', url);
      // data persistence - by storing in local storage so that to avoid multiple API calls
      localStorage.setItem("data", JSON.stringify(finalRes))
      this.setState({data:finalRes,loading:false})
    })
  }
  render(){
    // NOTE: major issue: you're calling setState() inside the render() method, which is not allowed and will cause an infinite re-render loop or runtime errors. React's render() method should be pure—it must not modify state or have side effects like setting state.

    
    // const dataFromLS = JSON.parse(localStorage.getItem('data'))
    // this.setState({data:dataFromLS, loading:false}) 
    console.log(this.state.data, "data from state") 
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
                <img src={p.image || p.thumbnail} height={200}/>
                <h1>{p.title} || {p.name}</h1>
              </>
            )
          })}
        </div>
      </div>
    )
  }
}
export default App3
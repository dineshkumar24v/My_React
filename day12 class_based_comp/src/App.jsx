import React from "react"
import {Routes,Route} from 'react-router-dom'
// import Home from './Components/Home'
import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/Navbar/Home'
import About from './Components/Navbar/About'
import Contact from './Components/Navbar/Contact'
import Products from "./Components/Products/Products"


class App extends React.Component{
  render(){
    return(
      <>
        {/* <h1>welcome to class based component</h1> */}
        {/* <Home/> */}
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/products' element={<Products/>} />
          </Routes>
      </>
    )
  }
}

export default App

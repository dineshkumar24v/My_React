import { Navbar } from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import {Routes, Route} from 'react-router-dom'
import Products from "./Components/Products/Products"
import ReviewsComp from "./Components/ReviewComp/ReviewsComp"

function App() {

  return (
    
      <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/reviews/:id" element={<ReviewsComp/>}/>
      </Routes>
      </div>
      
  )
}

export default App

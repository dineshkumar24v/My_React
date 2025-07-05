import { Navbar } from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import {Routes, Route} from 'react-router-dom'
import Products from "./Components/Products/Products"
import data from "./Components/Products/pData"
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import Recepies from "./Components/Recepies/Recepies"
import RecepieDetails from "./Components/RecepieDetails/RecepieDetails"

function App() {

  return (
    
      <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products/product/:id" element={<ProductDetails/>}/>
        <Route path="/recepies/recepie/:id" element={<RecepieDetails/>}/>
        <Route path="/products" element={<Products productsData={data.products}/>}/>
        <Route path="/recepies" element={<Recepies />}/>
      </Routes>
      </div>
      
  )
}

export default App

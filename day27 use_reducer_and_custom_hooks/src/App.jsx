import React from 'react'
import Products from './Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Product'
import UseReducerHook from "./UseReducerHook"

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </BrowserRouter> */}

      <UseReducerHook/>
    </div>
  )
}

export default App

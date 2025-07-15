

import React from 'react'
import Counter from './Counter'
import ColorChanger from './ColorChanger'
import RandomColorChanger from './RandomColorChanger'
import ThemeToggler from './ThemeToggler'
import Products from './Products'

const App = () => {
  return (
    <div>
      <Counter/>
      <ColorChanger/>
      <RandomColorChanger/>
      <ThemeToggler/>
      <Products/>
    </div>
  )
}

export default App 

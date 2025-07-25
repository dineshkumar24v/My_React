import React from 'react'
import Parent from './UseCallBack/Parent'
import Home from './LazyLoading.jsx/Home'
import Contact from './LazyLoading.jsx/Contact'

const App = () => {
  return (
    <div>
      {/* <Parent/> */}
      <Home/>
      <Contact/>
    </div>
  )
}

export default App

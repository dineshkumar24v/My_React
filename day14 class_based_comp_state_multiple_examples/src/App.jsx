
import React from "react"
import RandomColorGenerator from './RandomColorGenerator'
import RandomQuoteGenerator from "./RandomQuoteGenerator"
import RandomQuoteColorGenerator from "./RandomQuoteColorGenerator"
import ToggleLightDarkTheme from './ToggleLightDarkTheme'
import Navbar from "./Navbar"
import LoginSignup from './LoginSignup'
import Counter from './Counter'
import ColorChanger from './ColorChanger'
import Footer from './Footer'

class App extends React.Component{
  render(){
    return(
      <>
        <Navbar/>
        <Counter/>
        <ColorChanger/>
        <RandomColorGenerator/> 
        <RandomQuoteGenerator/>       
        <RandomQuoteColorGenerator/>
        <ToggleLightDarkTheme/>
        <LoginSignup/>
        <Footer/>
      </>
    )
  }
}
export default App
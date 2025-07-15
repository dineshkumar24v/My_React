import { useState } from "react"
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const ThemeToggler = ()=>{
  const [theme, setTheme] = useState();
  const handleTheme = ()=>{
    setTheme(previous => !previous)
  }
  return(
    <div style={{backgroundColor:theme ? "black" : "white", height:'40vh'}}>
        <button onClick={handleTheme}>{theme ? <FaMoon/> : <CiSun/>}</button>
    </div>
  )
}
export default ThemeToggler 
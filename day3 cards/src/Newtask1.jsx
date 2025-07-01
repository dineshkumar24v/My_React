
import './Components.css'

function Newtask1(){
  return(
    <div style={{backgroundColor:"#052a80", textAlign:"center",height:"50vh",alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",color:"white"}}>
      <img src="react.svg"/>
      <h1>Start Building Today</h1>
      <div style={{padding:"10px"}}>
      <button  className='task1Button'>Start Building</button>
      <button className='task1Button'>Contact Sales</button>
      </div>
    </div>
  )
}
export default Newtask1
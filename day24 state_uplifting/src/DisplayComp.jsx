

function DisplayComp({currentState,currentColor,currentBgColor}) {
  
  return(
    <div className="Div" style={{color:currentColor,width:"100%",height:"80vh",backgroundColor:currentBgColor,fontSize:"5rem"}}>
      {currentState}
    </div>
  )
}
export default DisplayComp 
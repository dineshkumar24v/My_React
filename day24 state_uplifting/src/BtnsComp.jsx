
const BtnsComp = ({updateState,updateColor,updateBgColor}) => { 
  const handleCount = (a,b,c)=>{
    if(a === 0){
      updateState(0,updateColor(b),updateBgColor(c))
    }else{
      updateState(prev => prev + a)
      updateColor(b)
    }
  }
  return (
    <div className="Div"
        style={{ width: "30%", height: "80vh", backgroundColor: "#EAE4D5" }}>
      <div>
        <div>
          <h1>Counter App</h1>
        </div>
        <div>
          <button onClick={()=>handleCount(10,"green")}>+</button>
          <button onClick={()=>handleCount(-10,"red")}>-</button>
          <button onClick={()=>handleCount(0,"black","#a7defb")}>reset</button>
        </div>
        <button onClick={()=>{updateBgColor("#FED16A")}}>change Bg</button>
      </div>
    </div>
  );
};
export default BtnsComp;

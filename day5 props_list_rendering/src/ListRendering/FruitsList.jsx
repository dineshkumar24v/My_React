

const fruits = ["Apple", "Banana", "Cherry"];

function FruitsList(){
  console.log(fruits)
  return(
    <div>
      {fruits.map((fruit)=>{
        console.log(fruit)
        return <p>{fruit}</p>
      })}
    </div>
  )
}
export default FruitsList
import './App.css'
import Temp from './props/Temp'
import Childprop from './props/Childprop'
import FruitsList from './ListRendering/FruitsList'
import UsersList from './ListRendering/UsersList'
import FakestoreList from './ListRendering/FakestoreList'
import {FakeRecipes} from './ListRendering/FakeRecipes'
import { FakeProducts } from './ListRendering/FakeProducts'
import {DisplayQuotes} from './ListRendering/DisplayQuotes'
import { Child } from './props/Child'
import Type1 from './Props2/Type1'
import Students from './Props2/Students'
import Temp2 from './Props2/Temp2'

function App() {
  // const dayDetails={
  //   degrees: '45°C',
  //   day:'MONDAY'
  // }
  // const age='25'
  return (
      <div>
      {/* <Type1/> */}
      {/* <Students/> */}
      <Temp2 />
        {/* <Temp tempDetails={dayDetails}></Temp>  */}

        {/* <Childprop>{age}</Childprop> */}

        {/* <FruitsList/> */}
        {/* <UsersList/> */}
        
        {/* <FakestoreList/> */}

        {/* <FakeRecipes/> */}

        {/* <FakeProducts/> */}

        {/* <DisplayQuotes/> */}

        {/* <Child></Child> */}
      </div>
  )
}
export default App

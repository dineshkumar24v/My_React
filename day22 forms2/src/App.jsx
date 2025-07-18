
import {Routes, Route} from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import SellerDashboard from './SellerDashboard'
import BuyerDashboard from './BuyerDashboard'
const App = ()=>{
  return(
    <div>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sellerDashboard' element={<SellerDashboard/>}/>
        <Route path='/buyerDashboard' element={<BuyerDashboard/>}/>
      </Routes>
    </div>
  )
}
export default App
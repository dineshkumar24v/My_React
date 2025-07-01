import Backend from './Backend'
import Database from './Database'
import {Frontend} from './Frontend'
import Newtask1 from './Newtask1'
import {Newtask2} from './Newtask2'


function App() {

  return (
      <div>
          <Frontend></Frontend>
          <Backend></Backend>
          <Database></Database>
          <Newtask1></Newtask1>
          <Newtask2></Newtask2>
      </div>
  )
}

export default App


import { HiOutlineCube } from "react-icons/hi2";
import { CiImageOn } from "react-icons/ci";
import { SlSettings } from "react-icons/sl";
import { FaGears } from "react-icons/fa6";
import './Components.css'
export function Newtask2(){
  return(
    <div >
      <h1>Resources</h1>
      <div style={{display:"flex",margin:"4rem"}}>
      <div className="resourceCard">
        <HiOutlineCube size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Objects</h4>
        <p>Learn about the object model and how to create, read, update, and delete Objects.</p>
      </div>
      <div className="resourceCard">
        <CiImageOn size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Media</h4>
        <p>Learn about the Media model and how to create, read, update, and delete Objects.</p>
      </div>
      <div className="resourceCard">
        <FaGears size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Quiries</h4>
        <p>Learn about the query methods to fetch Objects and media from your Bucket.</p>
      </div>
      <div className="resourceCard">
        <SlSettings size={30} style={{border:"1px solid black",padding:"3px",borderRadius:"5px"}}/>
        <h4>Object Types</h4>
        <p>Learn abouut the object type model and how to create, read, update, and delete Object types.</p>
      </div>
      </div>
    </div>
  )
}

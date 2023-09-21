import { useState } from 'react'
import { FaBeer ,FaArrowAltCircleLeft} from 'react-icons/fa';
import Navbar from './Components/Navbar/Navbar';
function App() {
  const [open, setOpen] = useState(true)
  
  return (
    <>
      <div>
        <div>
        <Navbar></Navbar>
        <div className='flex fixed top-14'>
        <div className={`bg-purple-900 h-screen p-5 pt-8  ${open ? "w-72": "w-0"} relative`}>
          <FaArrowAltCircleLeft className={`text-4xl absolute -right-3 top-9 rounded-full bg-white text-blue-950 ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}></FaArrowAltCircleLeft></div>
        <div>
          <p>Hello</p>
        </div>
      </div>
        </div>
        
      </div>
    </>
  )
}

export default App

import { useState } from "react"
import Timer from "./assets/Components/Timer"


function App(){
  const [showComponent,setShowComponent]=useState(true)

  return (
    <>
    <button onClick={()=>{
       setShowComponent(!showComponent)
    }}>Show Count Components </button>
    {
      showComponent?<Timer/>:null
    }
    </>
  )
    
  
}

export default App
import { useEffect, useState } from "react";

function Timer(){
 const [count,setCount]=useState(10);
 const [isRunning,setRunning]=useState(true)

 let id;

 useEffect(function(){
     
     if(isRunning){
        id= setInterval(() => {
            setCount((prevCount)=>prevCount-1)
        }, 1000);
    
    
        function reset(){
            console.log("cleanup")
            clearInterval(id)
        }
        return reset
     }
   
},[isRunning])


 return(
    <div>
        <h1>Counter Application</h1>
        <h1>Current Count : {count}</h1>
        <button onClick={()=>{
            setRunning(false)
        }}>Pause</button>
        <button onClick={()=>{
            setRunning(true)
        }}>Resume</button>
        <button onClick={()=>{
            setCount(10)
        }}>Reset</button>

    </div>
 )

}

export default Timer
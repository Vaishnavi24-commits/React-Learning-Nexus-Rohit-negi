import React,{useState,useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    const [Password,setPassword] = useState("")
    const [length,setLength] = useState(10)
    const [numberChanged,setnumberChanged] = useState(false)
    const [charChanged,setcharChanged] = useState(false)
    const generatePass = useCallback(()=>{
         let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numberChanged)
            str+="0123456789"
        if(charChanged)
            str+="!@#$%^&*()=-~`"

        let pass=""

        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }
        setPassword(pass)
    
    },[length,charChanged,numberChanged])
       
    useEffect(()=>{
         generatePass();

    },[length,numberChanged,charChanged])
       

    
    
    return(
        <>
        <h1>Password is: {Password} </h1> 
        <div className="second">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length({length})</label>


            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
            <label>Character</label>

            
        </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator/>)


//useeffect empty diya hota h toh sirf ek bar initial render hi hota h coz we have not passwd any value bcoz of of 
// its change the change should happen  
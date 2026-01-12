
import React,{useState,useEffect} from "react";

function Color ({name}){
    const [color,setColor] = useState("black")
        console.log("render");
        console.log(name);
        
        
        useEffect(()=>{
             console.log("useEffect executed");
            document.body.style.backgroundColor=color
        },[color])
        
        return(
            <>
            <h1>BackGround Color Changer</h1>
            <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button  style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button  style={{backgroundColor:"aqua"}} onClick={()=>setColor("aqua")} >Aqua</button>
                <button  style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                <button  style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button  style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
            </div>
            </>
        )

}

export default React.memo(Color)
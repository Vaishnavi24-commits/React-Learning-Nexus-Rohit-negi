import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Color from "./components/color";
import { count } from "console";

function Main(){
    const [count,setCount] = useState(0)
    return(
        <>
        <div className="counter">
        <h1>Counter is: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
        
       <Color name={count}></Color>
        </>
    )
    
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>)


//<Color name={count}></Color> yaha par props pass hua and changes hore h tooo react.memo k 
// bad bhi changes honge children m 
// if props pass hue h and koi data chamge nhi hora h unki wajah se too nhi hoga kuch change in the color function
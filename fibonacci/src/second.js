

import React , {useState,useRef,useMemo}from "react";
import ReactDOM from "react-dom/client"

//if money = 4 and count=3 if we click count once then count=4 but money will be 
// 0 again because on each render money is initialized to 0 again

//if we dont want money to be initialized to 0 again and again we can use useRef hook
//useRef will preserve the value between the renders by using reference of the variable


function App(){
    const[count,setCount]=useState(0)
    const money = useRef(0)

  //  console.log(money);
    
    return(
        <>
        <h1>Counter is:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h1>Money is:{money.current}</h1>
        <button onClick={()=>{money.current=money.current+1 
            console.log(money.current)}}>Money Increment</button>
         
        
        </>


    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)


//go to stopwatch project for better understanding of useRef hook
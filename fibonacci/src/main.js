
import React,{useState,useEffect, useMemo, useCallback} from "react";
import ReactDOM from "react-dom/client";


//  function Fibonacci(n){
//         if(n<=1) return n;

//         return Fibonacci(n-1)+Fibonacci(n-2);
//     }


function App(){

    const [count,setCount]=useState(0)
    const[number,setNumber]=useState("")
    // const[result,setResult]=useState(null)  // used for useEffect hook only no need of it in useMemo

    const Fibonacci = useCallback((n)=>{
        if(n<=1) return n;

        return Fibonacci(n-1)+Fibonacci(n-2);
    },[])






    const result = useMemo(()=>Fibonacci(number),[number])
//    useEffect(()=>{
//    setResult(Fibonacci(number))
//    },[number])


    return(
    <>
    <h1>Count is:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>


    <div>
        <h2>Fibonacci Number is:{result}</h2>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    </div>
    </>
    )
}





ReactDOM.createRoot(document.getElementById("root")).render(<App/>)



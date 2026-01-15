
import React,{useState,useRef} from "react";
import ReactDOM from "react-dom/client";


//setInterval:use-setTime(time+1) call it after every 1 second

function Stopwatch(){
    const[time,setTime]=useState(0)
    const[isRunning,setisRunning]=useState(false)
    const intervalRef = useRef(null)
    

    function start(){
        if(!isRunning){
       intervalRef.current = setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },1000)
        setisRunning(true)

    }
}

    function stop(){
        if(!isRunning){
        clearInterval(intervalRef.current)
        intervalRef.current=null
        setisRunning(false)

    }
}

    function reset(){
        clearInterval(intervalRef.current)
        intervalRef.current=null
        setTime(0)

    }



    return(
        <>
        <h1>StopWatch is:{time}</h1>
        <button onClick={start}>Start</button>
        <br></br>
        <br></br>
        <button onClick={stop}>Stop</button>
        <br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Stopwatch/>)
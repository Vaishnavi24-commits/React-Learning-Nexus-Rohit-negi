import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";

function App(){
    const [language,setLanguage] = useState(["TS","JS","C++"])
    function handleClick(){
        setLanguage(["C",...language])

    }
    return(
        <>
        <div>
            {
            language.map((value,index)=> <Add key={index} value={value}></Add>)
             }
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <button onClick={handleClick}>Add language</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
import React,{useState,useContext} from 'react';
import ReactDOM from 'react-dom/client'
import Second from './second';
import globalContext from './global';

function App(){
    const[count,setCount]=useState(10)
    
   
    return(
        <>
        <globalContext.Provider value={{count,setCount}}>
        <h1>Hellp Vaishnavi</h1>
        <Second counts={count} setCounts={setCount}/>
        </globalContext.Provider>
        
        
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

import { useContext } from "react"
import globalContext from "./global"
export default function Third(){

    //const data = useContext(globalContext)
    const {count,setCount}=useContext(globalContext)
    return(
        <>
        <h2>The value is {count}</h2>
        
        </>
    )
}
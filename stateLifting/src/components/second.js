
import Third from "./third"
import { useContext } from "react"
import globalContext from "./global"
export default function Second(){
    const {count,setCount} = useContext(globalContext)
    return(
        <>
        <h2>How are you {count}</h2>
        <Third/>
        </>
    )
}